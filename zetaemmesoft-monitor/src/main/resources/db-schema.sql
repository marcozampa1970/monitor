CREATE SCHEMA IF NOT EXISTS MONITOR;

SET SCHEMA MONITOR;

CREATE TABLE IF NOT EXISTS ITEM_TYPE (ID INT NOT NULL PRIMARY KEY, 
                                      NAME VARCHAR(50) NOT NULL UNIQUE);

CREATE TABLE IF NOT EXISTS SENSOR (ID INT NOT NULL PRIMARY KEY, 
                                   NAME VARCHAR(50) NOT NULL, 
                                   ITEM_TYPE INT NOT NULL,                                    
                                   NODE VARCHAR(15) NOT NULL, 
                                   VALUE double, 
                                   UNIT VARCHAR(5), 
                                   TIME TIMESTAMP, 
                                   TOPIC VARCHAR(50));
                                   
ALTER TABLE SENSOR ADD FOREIGN KEY (ITEM_TYPE) REFERENCES ITEM_TYPE (ID);                               

CREATE TABLE IF NOT EXISTS SWITCH (ID INT NOT NULL PRIMARY KEY, 
                                   NAME VARCHAR(50) NOT NULL, 
                                   ITEM_TYPE INT NOT NULL,                                    
                                   NODE VARCHAR(15) NOT NULL, 
                                   VALUE INT, 
                                   UNIT VARCHAR(5), 
                                   TIME TIMESTAMP, 
                                   TOPIC VARCHAR(50));
                                   
ALTER TABLE SWITCH ADD FOREIGN KEY (ITEM_TYPE) REFERENCES ITEM_TYPE (ID);                                        
                                                                     
-- *************************************

/*
CREATE SEQUENCE THING_SEQ;

CREATE SEQUENCE ITEM_SEQ;

CREATE TABLE IF NOT EXISTS THING (ID INT NOT NULL PRIMARY KEY, 
                                  NAME VARCHAR(50) NOT NULL UNIQUE, 
                                  LABEL VARCHAR(50) NOT NULL);

CREATE TABLE IF NOT EXISTS ITEM (ID INT NOT NULL PRIMARY KEY, 
                                 NAME VARCHAR(50) NOT NULL UNIQUE, 
                                 ITEM_TYPE INT NOT NULL, 
                                 STATE_TOPIC VARCHAR(50) NULL, 
                                 COMMAND_TOPIC VARCHAR(50) NULL, 
                                 THING_NAME VARCHAR(50) NOT NULL);

ALTER TABLE ITEM ADD FOREIGN KEY (THING_NAME) REFERENCES THING (NAME);
ALTER TABLE ITEM ADD FOREIGN KEY (ITEM_TYPE) REFERENCES ITEM_TYPE (ID);


CREATE TABLE IF NOT EXISTS MONITOR_HAB (ID INT NOT NULL, 
                                        ITEM_TYPE INT NOT NULL, 
                                        THING_NAME VARCHAR(50), 
                                        ITEM_NAME VARCHAR(50),
                                        PRIMARY KEY(ID, ITEM_TYPE));
                                            
ALTER TABLE MONITOR_HAB ADD FOREIGN KEY (ITEM_TYPE) REFERENCES ITEM_TYPE (ID);    
*/                                        





