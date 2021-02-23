package com.js.autionweb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.js.autionweb.dao.ArticleDAO;
import com.js.autionweb.vo.article;

@Service
public class ArticleService {
	
    @Autowired
    private ArticleDAO articleDao;
    
    public List<article> selectAllArticle() {
        return articleDao.selectAllArticle();
    }

}
