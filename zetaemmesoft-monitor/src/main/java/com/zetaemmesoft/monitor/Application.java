package com.zetaemmesoft.monitor;

import java.sql.SQLException;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication()
public class Application {

    private static final Logger logger = LoggerFactory.getLogger(Application.class);

    private static org.h2.tools.Server server;

    @Value("${jdbc.port}")
    private String jdbcPort;

    public static void main(String[] args) {
	SpringApplication.run(Application.class, args);
    }

    @PostConstruct
    public void init() {
	logger.debug("init");

	try {
	    server = org.h2.tools.Server.createTcpServer("-tcpPort", jdbcPort);
	    server.start();

	} catch (SQLException e) {
	    logger.error(e.getMessage());
	}
    }

    @PreDestroy
    public void stop() {
	logger.debug("stop");
	server.stop();
    }
}
