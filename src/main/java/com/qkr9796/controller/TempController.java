package com.qkr9796.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TempController {

    @GetMapping("/passed")
    @ResponseBody
    public String index(){
        return "loginSuccess";
    }


    @GetMapping("/login")
    @ResponseBody
    public String login(@RequestParam(required = false, defaultValue = "false") Boolean fail){
        if(fail)
            return "loginFailure";
        else
            return "needLogin";
    }

}
