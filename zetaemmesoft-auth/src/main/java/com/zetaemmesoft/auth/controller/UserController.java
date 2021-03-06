package com.zetaemmesoft.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.zetaemmesoft.auth.integration.dto.User;
import com.zetaemmesoft.auth.service.UserService;
import com.zetaemmesoft.auth.utils.Constants;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;

import java.util.List;

@RestController
@RequestMapping("/rest")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = Constants.HTTP_GET_USERS_GET, method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ADMIN_USER')")
    @ApiOperation(value = "Get the user list.", authorizations = { @Authorization(value = "Bearer") })
    public List<User> findAll() {
	return userService.findAll();
    }
}
