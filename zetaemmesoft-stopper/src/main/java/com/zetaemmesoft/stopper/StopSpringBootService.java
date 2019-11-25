package com.zetaemmesoft.stopper;

import javax.management.InstanceNotFoundException;

import javax.management.MBeanServerConnection;
import javax.management.remote.JMXConnector;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class StopSpringBootService {
    private static final Logger logger = LoggerFactory.getLogger(StopSpringBootService.class);

    public static void main(String[] args) throws Exception {

	logger.info("Stopping Spring Boot application...");

	final int jmxPort = Integer.parseInt(args[0]);
	logger.info("jmxPort: " + jmxPort);

	final String jmxName = SpringApplicationAdminClient.DEFAULT_OBJECT_NAME;
	logger.info("jmxName: " + jmxName);

	final JMXConnector connector = SpringApplicationAdminClient.connect(jmxPort);

	try {
	    final MBeanServerConnection connection = connector.getMBeanServerConnection();
	    try {
		new SpringApplicationAdminClient(connection, jmxName).stop();
	    } catch (InstanceNotFoundException ex) {
		throw new IllegalStateException("Spring application lifecycle JMX bean not " + "found, could not stop application gracefully", ex);
	    }
	} finally {
	    try {
		connector.close();
	    } catch (final Exception ex) {
		logger.error("Exception thrown during connector close: " + ex.toString());
	    }
	}
    }
}
