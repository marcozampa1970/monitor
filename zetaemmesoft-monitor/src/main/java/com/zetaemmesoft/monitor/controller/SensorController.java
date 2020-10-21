package com.zetaemmesoft.monitor.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.zetaemmesoft.monitor.bean.SensorBean;
import com.zetaemmesoft.monitor.service.SensorService;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;

@RestController
@RequestMapping("/rest/sensor")
public class SensorController {
    
    private static final Logger logger = LoggerFactory.getLogger(SensorController.class);

    @Autowired
    SensorService sensorService;

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN_USER')")
    @ApiOperation(value = "Get sensor list", authorizations = { @Authorization(value = "Bearer") })
    public ResponseEntity<List<SensorBean>> getSensors() {
	List<SensorBean> beans = sensorService.getSensors();
	return new ResponseEntity<List<SensorBean>>(beans, HttpStatus.OK);
    }

    @RequestMapping(value = "/{sensorId}/get", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN_USER')")
    @ApiOperation(value = "Get sensor", authorizations = { @Authorization(value = "Bearer") })
    public ResponseEntity<SensorBean> getSensor(@PathVariable("sensorId") Integer sensorId) {
	return new ResponseEntity<SensorBean>(sensorService.getSensor(sensorId), HttpStatus.OK);
    }

    @RequestMapping(value = "/set", method = RequestMethod.POST)
    @PreAuthorize("hasAuthority('ADMIN_USER')")
    @ApiOperation(value = "Set sensor", authorizations = { @Authorization(value = "Bearer") })
    public ResponseEntity<SensorBean> setSensor(@RequestBody SensorBean bean) {

	/*
	if ("Voltage".equals(bean.getType())) {
	    if (bean.getValue() < 3.6) {
		SensorBean s = sensorService.getSensor(bean.getId());
		if (s != null) {
		    bean.setValue(s.getValue());
		}
	    }
	}*/

	SensorBean rtn = sensorService.setSensor(bean);
	return new ResponseEntity<SensorBean>(rtn, HttpStatus.OK);
    }
}
