<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
https://gmlwjd9405.github.io/2019/01/01/spring-utf8.html
<html lang="kr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Artist's piece of work</title>
    <link rel="stylesheet" href="./resources/css/index.css">
</head>
<body>
    <nav id="navbar">
        <ol id="registerManagement">
            <li id="loginButton"><a href="#">로그인</a></li>
            <li id="logoutButton"><a href="#">로그아웃</a></li>
            <li id="signupButton"><a href="#">회원가입</a></li>
        </ol>
        <ol id="menulist">
            <li><a href="http://127.0.0.1:5500/auction_project/auctionPage.html?category=oriental">동양화</a></li>
            <li><a href="http://127.0.0.1:5500/auction_project/auctionPage.html?category=western">서양화</a></li>
            <li><a href="http://127.0.0.1:5500/auction_project/auctionPage.html?category=statue">조각상</a></li>
            <li><a href="http://127.0.0.1:5500/auction_project/auctionPage.html?category=contemporary">현대미술</a></li>
            <li><a href="#">온라인 전시회</a></li>
        </ol>
    </nav>
    <section id="article-list">
    </section>
    <script type="text/javascript" src="./resources/js/requestWorkList.js"></script>
</body>
</html>