package com.qkr9796.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoginController {

    @PostMapping("/login")
    @ResponseBody
    public String index(){
        System.out.println("login call");
        return "LoginRequest";
    }
}
