package com.js.autionweb.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.js.autionweb.vo.user;

@Repository
public class UserDAO {
	
    @Autowired
    private SqlSession session;
    
    public List<user> selectAllUser(){
        return session.selectList("dao.user.selectAllUser");
    }


}
