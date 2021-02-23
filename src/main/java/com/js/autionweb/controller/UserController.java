package com.js.autionweb.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import com.js.autionweb.service.UserService;
import com.js.autionweb.vo.user;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;


/**
 * Handles requests for the application home page.
 */
@Controller
public class UserController {
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
    
    @Autowired
    private UserService service;
    
    @RequestMapping("/selectAllUser.do")
    public String selectAllUser(Model model) {
        List<user> result = service.selectAllUser();
        model.addAllAttributes(result);
        System.out.print(result.get(0).getName());
        return "index";
    }  

//	@RequestMapping(value = "/", method = RequestMethod.GET)
//	public String home(Locale locale, Model model) {
//		logger.info("Welcome home! The client locale is {}.", locale);
//		
//		Date date = new Date();
//		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
//		
//		String formattedDate = dateFormat.format(date);
//		
//		model.addAttribute("serverTime", formattedDate );
//		
//		return "home";
//	}
	
//	@RequestMapping(value = "/", method = RequestMethod.GET)
//	public String test(Locale locale, Model model) {
//		logger.info("회원 리스트");
//		
//		
//		return "index";
//	}
//    

	
	
	
}
