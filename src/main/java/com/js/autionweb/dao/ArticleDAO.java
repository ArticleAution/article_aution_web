package com.js.autionweb.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.js.autionweb.vo.article;

@Repository
public class ArticleDAO {
	
    @Autowired
    private SqlSession session;
    
    public List<article> selectAllArticle(){
        
        return session.selectList("dao.article.selectAllArticle");
    
    }

}
