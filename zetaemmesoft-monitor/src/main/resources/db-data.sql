SET SCHEMA MONITOR;

INSERT INTO ITEM_TYPE (ID, NAME) VALUES (1, 'Temperature');
INSERT INTO ITEM_TYPE (ID, NAME) VALUES (2, 'Humidity');
INSERT INTO ITEM_TYPE (ID, NAME) VALUES (3, 'Switch');
INSERT INTO ITEM_TYPE (ID, NAME) VALUES (4, 'Voltage');

-- UTF-8 DEGREE CELSIUS' (0x2103)

INSERT INTO SENSOR (ID, NODE, VALUE, UNIT, ITEM_TYPE, TIME, NAME, TOPIC) VALUES(1, 'ESP_18BE43', 0.0, char(0x2103), 1, now(), 'Room 1', 'thing_dht22/temperature_sensor/room1');
INSERT INTO SENSOR (ID, NODE, VALUE, UNIT, ITEM_TYPE, TIME, NAME, TOPIC) VALUES(2, 'ESP_18BE43', 0.0, '%', 2, now(), 'Room 1', 'thing_dht22/humidity_sensor/room1');

INSERT INTO SENSOR (ID, NODE, VALUE, UNIT, ITEM_TYPE, TIME, NAME, TOPIC) VALUES(3, 'ESP_4F19C4', 0.0, char(0x2103), 1, now(), 'Room 2', 'thing_dht22/temperature_sensor/room2');
INSERT INTO SENSOR (ID, NODE, VALUE, UNIT, ITEM_TYPE, TIME, NAME, TOPIC) VALUES(4, 'ESP_4F19C4', 0.0, '%', 2, now(), 'Room 2', 'thing_dht22/humidity_sensor/room2');

INSERT INTO SENSOR (ID, NODE, VALUE, UNIT, ITEM_TYPE, TIME, NAME, TOPIC) VALUES(5, 'ESP_18BE43', 0.0, 'V', 4, now(), 'Room 1', null);

INSERT INTO SWITCH (ID, NODE, VALUE, UNIT, "ITEM_TYPE", "TIME", NAME, TOPIC) VALUES(1, 'ESP8266_1', 0, 'X', 3, now(), 'ROOM 1', 'thing_lamp/light_switch');

-- *************************************

/*
INSERT INTO THING (ID, NAME, LABEL) VALUES (THING_SEQ.NEXTVAL, 'mqtt:topic:thing_dht22', 'DHT22');

INSERT INTO ITEM (ID, NAME, ITEM_TYPE, STATE_TOPIC, COMMAND_TOPIC, THING_NAME) VALUES (ITEM_SEQ.NEXTVAL, 'temperature_sensor', 1, 'thing_dht22/temperature_sensor', null, 'mqtt:topic:thing_dht22');
INSERT INTO ITEM (ID, NAME, ITEM_TYPE, STATE_TOPIC, COMMAND_TOPIC, THING_NAME) VALUES (ITEM_SEQ.NEXTVAL, 'humidity_sensor', 1, 'thing_dht22/humidity_sensor', null, 'mqtt:topic:thing_dht22');

INSERT INTO MONITOR_HAB (ID, ITEM_TYPE, THING_NAME, ITEM_NAME) VALUES (1, 1, 'mqtt:topic:thing_dht22', 'temperature_sensor');
INSERT INTO MONITOR_HAB (ID, ITEM_TYPE, THING_NAME, ITEM_NAME) VALUES (2, 1, 'mqtt:topic:thing_dht22', 'humidity_sensor');
INSERT INTO MONITOR_HAB (ID, ITEM_TYPE, THING_NAME, ITEM_NAME) VALUES (1, 2, NULL, NULL);
*/
