<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="kr">
<head>
    <title>"예대생 과제 작품 옥션"</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./resources/css/index.css">
</head>
<body>
    <header>
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
        <section>
            <img src="https://www.befreetour.com/img/produk/prado-art-museum-ticket/prado-art-museum-ticket_3aa9c919b5f190497df5a02c18c3ee4f0f72e9c2.jpg"/>
            <img src="https://img.khan.co.kr/news/2020/08/05/l_2020080601000542300044021.jpg"/>
            <img src="http://img.newspim.com/news//2020/05/07/2005071809074620.jpg"/>
        </section>
        <a href="#list-base-line" id="pageDown"><img src="./resources/images/down-arrow.png" alt="#"></a>
    </header>
    <p id="list-base-line">작품 보기</p>
    <section id="article-list">
    </section>
    <script type="text/javascript" src="./resources/js/requestWorkList.js"></script>
    <section class="button-area" onclick="requestList()"><button id="more-article">더보기</button></section>
    <footer></footer>
</body>
</html>