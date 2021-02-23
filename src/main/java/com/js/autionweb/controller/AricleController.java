package com.js.autionweb.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.js.autionweb.service.ArticleService;
import com.js.autionweb.vo.article;


@Controller
public class AricleController {
	
	@Autowired
	ArticleService service;
	
    @RequestMapping("/") //메인화면 : 미술작품 리스트
    public String selectAllUser(Model model) {
        List<article> article = service.selectAllArticle();
        model.addAllAttributes(article);
        return "index";
    }

}
