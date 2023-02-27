package com.qkr9796.controller;

import com.qkr9796.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@Controller
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/login")
    @ResponseBody
    public String login(@RequestParam(required = false, defaultValue = "false") Boolean fail){
        if(fail)
            return "loginFailure";
        else
            return "needLogin";
    }

    @GetMapping("/after_logout")
    @ResponseBody
    public String logout(){
        return "logout";
    }


    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/createKey")
    @ResponseBody
    public String createKey(@RequestBody Map<String, String> body) {
        String key = body.get("key");
        memberService.createKey(key);
        return key;
    }


    @PostMapping("/register")
    @ResponseBody
    public String register(@RequestBody Map<String, String> body) {
        String key = body.get("key");
        String userid = body.get("userid");
        String password = body.get("password");
        if(memberService.registerMember(key, userid, password, "USER") != null){
            return "succeed";
        }
        return "failed";
    }



}
