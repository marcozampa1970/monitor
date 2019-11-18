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

ALTER TABLE APP_USER_ROLE ADD PRIMARY KEY (USER_ID, ROLE_ID);




