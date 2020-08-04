CREATE SCHEMA IF NOT EXISTS MONITOR;

SET search_path TO MONITOR;

CREATE TABLE IF NOT EXISTS ITEM_TYPE (ID INT NOT NULL PRIMARY KEY, 
                                      NAME VARCHAR(50) NOT NULL UNIQUE);

CREATE TABLE IF NOT EXISTS SENSOR (ID INT NOT NULL PRIMARY KEY, 
                                   NODE VARCHAR(15) NOT NULL, 
                                   NAME VARCHAR(50) NOT NULL, 
                                   ITEM_TYPE INT NOT NULL,                                    
                                   VALUE NUMERIC, 
                                   UNIT VARCHAR(5), 
                                   TIME TIMESTAMP, 
                                   TOPIC VARCHAR(50));
                                   
ALTER TABLE IF EXISTS SENSOR ADD FOREIGN KEY (ITEM_TYPE) REFERENCES ITEM_TYPE (ID);                               

CREATE TABLE IF NOT EXISTS SWITCH (ID INT NOT NULL PRIMARY KEY, 
                                   NODE VARCHAR(15) NOT NULL, 
                                   NAME VARCHAR(50) NOT NULL, 
                                   ITEM_TYPE INT NOT NULL,                                    
                                   VALUE INT, 
                                   UNIT VARCHAR(5), 
                                   TIME TIMESTAMP, 
                                   TOPIC VARCHAR(50));
                                   
ALTER TABLE IF EXISTS SWITCH ADD FOREIGN KEY (ITEM_TYPE) REFERENCES ITEM_TYPE (ID);  



CREATE TABLE IF NOT EXISTS APP_USER (
  ID varchar(15) NOT NULL PRIMARY KEY,
  USERNAME varchar(255) NOT NULL,  
  PASSWORD varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS APP_ROLE (
  ID varchar(15) NOT NULL PRIMARY KEY,
  ROLENAME varchar(255) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS APP_USER_ROLE (
  USER_ID varchar(15) NOT NULL,
  ROLE_ID varchar(15) NOT NULL,
  CONSTRAINT FK_USER_ID FOREIGN KEY (USER_ID) REFERENCES APP_USER (ID),
  CONSTRAINT FK_ROLE_ID FOREIGN KEY (ROLE_ID) REFERENCES APP_ROLE (ID)
);

ALTER TABLE IF EXISTS APP_USER_ROLE ADD PRIMARY KEY (USER_ID, ROLE_ID);