const express = require('express');
const Event = require('../models/Event');

const event = new Event();

module.exports = (app) => {
    //needed to parse body of the requests
    app.use(express.json());

    //Read
    app.get('/data', async (req, res) => {
        if ('xml_eventid' in req.body){
            data = await event.get_by_id(req.body.xml_eventid)
        }else(
            data = await event.get_all_events()
        )
        res.status(200);
        res.send(data);
    });

    //Create
    app.post('/data', async (req, res) => {
        const data = await event.create_event(req.body);
        if ('error' in data){
            res.status(400);
        }else{
            res.status(201);
        }
        res.send(data);
    });

    //Upadate
    app.put('/data', async (req, res) => {
        const data = await event.update_event(req.body)
        if ('error' in data){
            res.status(400);
        }else{
            res.status(200);
        }
        res.send(data);
    });

    //Delete
    app.delete('/data', async (req, res) => {
        if (!('xml_eventid' in req.body)){
            res.status(400)
            res.send({error: "please provide valid xml_eventid"})
        }
        const data = await event.delete_event(req.body.xml_eventid)
        res.send({message: "event deleted"})
        res.status(204)
    });

}