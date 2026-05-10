package com.example.backend.Controllers;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/home")
    public String getHome(Model model){
        return "index";
    }
//    @GetMapping("/about")
//    public String getAbout() {
//        return "about";
//    }
}
