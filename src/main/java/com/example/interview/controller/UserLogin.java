package com.example.interview.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class UserLogin {

    @CrossOrigin
    @PostMapping("login")
    public  String validateDet(@RequestBody Map<String,String> userDetails){
        String userName = userDetails.get("username");
        if(userName.contains("@")){

        }
        System.out.println(userName);
        return userName+"returnedFromServer";
    }
}
