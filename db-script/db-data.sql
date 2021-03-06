-- com.zetaemmesoft.auth.utils.PasswordEncoderGenerator
INSERT INTO MONITOR.APP_USER (ID, USERNAME, PASSWORD) VALUES ('1', 'admin', '$2a$10$GHNfGU9mbW0lT4qkOuUdF.0GdT0TKcVy6HU2ct5AFELpfsOOOvPxe'); 
INSERT INTO MONITOR.APP_USER (ID, USERNAME, PASSWORD) VALUES ('2', 'marco', '$2a$10$GHNfGU9mbW0lT4qkOuUdF.0GdT0TKcVy6HU2ct5AFELpfsOOOvPxe');
INSERT INTO MONITOR.APP_USER (ID, USERNAME, PASSWORD) VALUES ('3', 'guest', '$2a$10$ShNoG1wgtVCXK1eoIW50VObdjIdj7wtuC0VbJVPAYmmJ8vMpugNVK');

INSERT INTO MONITOR.APP_ROLE (ID, ROLENAME) VALUES ('1', 'ADMIN_USER');
INSERT INTO MONITOR.APP_ROLE (ID, ROLENAME) VALUES ('2', 'POWER_USER');
INSERT INTO MONITOR.APP_ROLE (ID, ROLENAME) VALUES ('3', 'GUEST_USER');

-- admin
INSERT INTO MONITOR.APP_USER_ROLE(USER_ID, ROLE_ID) VALUES('1', '1');
INSERT INTO MONITOR.APP_USER_ROLE(USER_ID, ROLE_ID) VALUES('1', '2');
INSERT INTO MONITOR.APP_USER_ROLE(USER_ID, ROLE_ID) VALUES('1', '3');

-- marco
INSERT INTO MONITOR.APP_USER_ROLE(USER_ID, ROLE_ID) VALUES('2', '2');

-- guest
INSERT INTO MONITOR.APP_USER_ROLE(USER_ID, ROLE_ID) VALUES('3', '3');

INSERT INTO MONITOR.ITEM_TYPE (ID, NAME) VALUES (1, 'Temperature');
INSERT INTO MONITOR.ITEM_TYPE (ID, NAME) VALUES (2, 'Humidity');
INSERT INTO MONITOR.ITEM_TYPE (ID, NAME) VALUES (3, 'Switch');
INSERT INTO MONITOR.ITEM_TYPE (ID, NAME) VALUES (4, 'Voltage');

-- UTF-8 DEGREE CELSIUS' (0x2103)

-- SENSOR ITEMS

INSERT INTO MONITOR.SENSOR (ID, NODE, VALUE, UNIT, ITEM_TYPE, TIME, NAME, TOPIC) VALUES(1, 'Hallway', 0.0, 'C�', 1, now(), 'T', null);
INSERT INTO MONITOR.SENSOR (ID, NODE, VALUE, UNIT, ITEM_TYPE, TIME, NAME, TOPIC) VALUES(2, 'Hallway', 0.0, '%', 2, now(), 'H', null);
INSERT INTO MONITOR.SENSOR (ID, NODE, VALUE, UNIT, ITEM_TYPE, TIME, NAME, TOPIC) VALUES(5, 'Hallway', 0.0, 'V', 4, now(), 'V', null);

INSERT INTO MONITOR.SENSOR (ID, NODE, VALUE, UNIT, ITEM_TYPE, TIME, NAME, TOPIC) VALUES(10, 'Bedroom', 0.0, 'C�', 1, now(), 'T', null);
INSERT INTO MONITOR.SENSOR (ID, NODE, VALUE, UNIT, ITEM_TYPE, TIME, NAME, TOPIC) VALUES(11, 'Bedroom', 0.0, '%', 2, now(), 'H', null);
INSERT INTO MONITOR.SENSOR (ID, NODE, VALUE, UNIT, ITEM_TYPE, TIME, NAME, TOPIC) VALUES(12, 'Bedroom', 0.0, 'V', 4, now(), 'V', null);

--  SWITCH ITEMS

INSERT INTO MONITOR.SWITCH (ID, NODE, VALUE, UNIT, ITEM_TYPE, TIME, NAME, TOPIC) VALUES(1, 'Room', 0, 'X', 3, now(), 'S', null);
