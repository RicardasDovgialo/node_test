const e = require('express');
const query = require('../services/db_connector')


class Event{
    constructor() {
        this.processDate = new Date().toJSON().slice(0,19).replace('T', ' ')
    }

    get_by_id = async (xml_eventid) => {
        const SQL = `SELECT 
                id, 
                xml_eventid, 
                date, title, 
                created, 
                date_imported, 
                deleted_at 
            FROM events 
            WHERE 
                xml_eventid = '${xml_eventid}'
            AND 
                deleted_at IS NULL`;
        const data = await query(SQL)
        return data
    }

    get_all_events = async () => {
        const SQL = `SELECT 
            id, 
            xml_eventid, 
            date, title, 
            created, 
            date_imported, 
            deleted_at 
        FROM events
        WHERE
            deleted_at IS NULL`
        const data = await query(SQL)
        return data
    }

    create_event = async (postBody) => {
        const mandatoryFields = ['xml_eventid', 'date', 'title']
        for (let i = 0; i < mandatoryFields.length; i++) {
            if (!(mandatoryFields[i] in postBody)){
                return {error: `missed field name ${mandatoryFields[i]}`}
            }
        };

        // I can use normal int comparison here, but since these integers represent dates 
        // it makes sense to convert them to dates 
        const currentTime = new Date().getTime();
        const eventDate = new Date(postBody.Date * 1000);
        if (+currentTime >= +eventDate){
            return {error: `can't submit events from the past`}
        }

        const SQL = `INSERT INTO events
        (
            xml_eventid,
            date,
            title,
            created,
            deleted_at
        )
        VALUES(
            '${postBody.xml_eventid}',
            ${postBody.date},
            '${postBody.title}',
            '${this.processDate}', 
            ${null}
        );`
        const data = await query(SQL)
        return data
    }

    update_event = async (putBody) =>{
        // check if event exists
        const dbEvents = await this.get_by_id(putBody.xml_eventid)
        if (!(dbEvents.length > 0)){
            return {error: `xml_eventid ${putBody.xml_eventid} does not exist`}
        }

        const currentTime = new Date().getTime();
        const eventDate = new Date(putBody.Date * 1000);
        if (+currentTime >= +eventDate){
            return {error: `can't update events to be in the past`}
        }

        const updateFields = ['date', 'title']; //only these fields are allowed to be changed
        let setStrings = [];

        for (const key in putBody){
            if (updateFields.includes(key)){
                if (key == 'date'){
                    setStrings.push(`${key} = ${putBody[key]}`)
                }else{
                    setStrings.push(`${key} = '${putBody[key]}'`)
                }
            }
        }

        const SQL = `UPDATE events
        SET 
            ${setStrings.join(',')}
        WHERE
        xml_eventid = '${putBody.xml_eventid}';
        `
        const data = await query(SQL)
        return data
    }

    delete_event = async(xml_eventid) => {
        // check if event exists
        const dbEvents = await this.get_by_id(xml_eventid)
        if (!(dbEvents.length > 0)){
            return {error: `xml_eventid ${xml_eventid} does not exist`}
        }

        const SQL = `UPDATE events
        SET 
            deleted_at = '${new Date().getTime()}'
        WHERE
        xml_eventid = '${xml_eventid}';
        `
        const data = await query(SQL)
        return data
    }
}

module.exports = Event