package com.zetaemmesoft.monitor.service;

import java.util.ArrayList;

import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.zetaemmesoft.monitor.bean.SwitchBean;
import com.zetaemmesoft.monitor.integration.dto.Switch;
import com.zetaemmesoft.monitor.integration.mqtt.MqttManager;
import com.zetaemmesoft.monitor.integration.repository.ItemTypeRepository;
import com.zetaemmesoft.monitor.integration.repository.SwitchRepository;
import com.zetaemmesoft.monitor.utils.Constants;

@Service
public class SwitchService {

    private static final Logger logger = LoggerFactory.getLogger(SwitchService.class);

    @Value("${mqtt.enabled}")
    private String mqttEnabled;

    @Autowired
    private SwitchRepository switchRepository;

    @Autowired
    private ItemTypeRepository itemTypeRepository;

    @Autowired
    private MqttManager mqttClient;

    @PostConstruct
    public void init() {
	if ("true".equals(mqttEnabled)) {
	    List<SwitchBean> switches = getSwitches();
	    for (SwitchBean bean : switches) {
		if (bean.getTopic() != null) {
		    mqttClient.subscribe(bean.getTopic(), "switch_" + String.valueOf(bean.getId()));
		    mqttClient.send(bean.getTopic(), "switch_" + String.valueOf(bean.getId()), (bean.getValue() == 1.0) ? "1" : "0", 1, false);
		} else {
		    logger.warn("Unqualified topic!");
		}
	    }
	}
    }

    public SwitchBean getSwitch(Integer switchId) {

	SwitchBean bean = null;

	Switch dto = switchRepository.find(switchId);

	if (dto != null) {

	    bean = new SwitchBean();

	    bean.setId(dto.getId());
	    bean.setValue(dto.getValue());

	    if (dto.getTime() != null) {
		bean.setTime(new Date(dto.getTime().getTime()));
	    }

	    bean.setUnit(dto.getUnit());
	    bean.setType(itemTypeRepository.find(dto.getType()).getName());
	    bean.setName(dto.getName());
	    bean.setNode(dto.getNode());
	}

	return bean;
    }

    public List<SwitchBean> getSwitches() {

	List<SwitchBean> beans = new ArrayList<SwitchBean>();

	List<Switch> dtos = switchRepository.findAll();

	for (Switch dto : dtos) {
	    SwitchBean bean = new SwitchBean();
	    bean.setId(dto.getId());
	    bean.setValue(dto.getValue());

	    if (dto.getTime() != null) {
		bean.setTime(new Date(dto.getTime().getTime()));
	    }

	    bean.setUnit(dto.getUnit());
	    bean.setType(itemTypeRepository.find(dto.getType()).getName());
	    bean.setName(dto.getName());
	    bean.setNode(dto.getNode());
	    bean.setTopic(dto.getTopic());

	    beans.add(bean);
	}

	return beans;
    }

    public SwitchBean setSwitch(SwitchBean bean) {

	logger.debug("switchId: " + bean.getId() + " - value: " + bean.getValue() + " - node: " + bean.getNode());

	if (bean.getNode() != null && bean.getNode().equals("")) {
	    bean.setNode(null);
	}

	Date time = new Date();

	Switch dto = switchRepository.find(bean.getId());

	if (dto != null) {
	    dto.setValue((bean.getValue() > 0) ? 1 : 0);
	    dto.setTime(new java.sql.Timestamp(time.getTime()));
	    switchRepository.update(dto);
	} else {
	    dto = new Switch();
	    dto.setId(bean.getId());
	    dto.setValue((bean.getValue() > 0) ? 1 : 0);
	    dto.setTime(new java.sql.Timestamp(time.getTime()));
	    dto.setUnit(bean.getUnit());

	    if (bean.getType() != null) {
		dto.setType(itemTypeRepository.find(bean.getType()).getId());
	    }

	    dto.setName(bean.getName());
	    dto.setNode(bean.getNode());
	    switchRepository.insert(dto);
	}

	bean.setTime(time);
	bean.setValue(dto.getValue());

	if ("true".equals(mqttEnabled)) {
	    if (dto.getTopic() != null) {
		mqttClient.send(dto.getTopic(), "switch_" + String.valueOf(dto.getId()), String.valueOf(dto.getValue()), 1, false);
	    } else {
		logger.warn("Unqualified topic!");
	    }
	}

	return bean;
    }

}
