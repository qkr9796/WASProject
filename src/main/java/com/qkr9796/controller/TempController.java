package com.qkr9796.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TempController {

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/passed")
    @ResponseBody
    public String index(){
        return "loginSuccess";
    }


}
