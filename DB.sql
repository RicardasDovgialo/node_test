CREATE TABLE `events` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `xml_eventid` varchar(50) NOT NULL,
  `date` int(11) unsigned NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_imported` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` BIGINT DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `events` (`xml_eventid`,`date`,`title`,`created`,`deleted_at`) VALUES ('77179_23204391',1618054200,'Man City vs Leeds','2021-03-11 09:53:34', null);
INSERT INTO `events` (`xml_eventid`,`date`,`title`,`created`,`deleted_at`) VALUES ('11143437',1618054200,'Manchester City vs Leeds United','2021-03-22 04:51:15', null);
INSERT INTO `events` (`xml_eventid`,`date`,`title`,`created`,`deleted_at`) VALUES ('1289856608',1618054200,'Manchester City vs Leeds United','2021-03-22 04:51:15', null);
INSERT INTO `events` (`xml_eventid`,`date`,`title`,`created`,`deleted_at`) VALUES ('3499294',1618054200,'Manchester City - Leeds United','2021-03-22 10:12:22', null);
INSERT INTO `events` (`xml_eventid`,`date`,`title`,`created`,`deleted_at`) VALUES ('1289856608',1618054200,'Manchester City vs Leeds United','2021-03-22 14:15:26', null);
INSERT INTO `events` (`xml_eventid`,`date`,`title`,`created`,`deleted_at`) VALUES ('232416303',1618054200,'Man City v Leeds','2021-04-04 02:28:45', null);
INSERT INTO `events` (`xml_eventid`,`date`,`title`,`created`,`deleted_at`) VALUES ('3728985',1618050600,'Manchester City - Leeds United','2021-04-05 01:01:15', null);
