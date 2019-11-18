package com.zetaemmesoft.monitor.bean;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.zetaemmesoft.monitor.utils.Constants;

import lombok.Data;

@Data
public abstract class ItemBean implements Serializable {

    private static final long serialVersionUID = -9018621124041399589L;

    private Integer id;  
    private String name;
    private String type;
    private String node;       
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm:ss", timezone = Constants.TIME_ZONE)
    private Date time;
    
 

}

