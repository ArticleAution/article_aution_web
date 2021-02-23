package com.js.autionweb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.js.autionweb.dao.UserDAO;
import com.js.autionweb.vo.user;


 
@Service
public class UserService {
 
    @Autowired
    private UserDAO userDao;
    
    public List<user> selectAllUser() {
        return userDao.selectAllUser();
    }
}
