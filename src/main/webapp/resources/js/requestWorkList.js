var link = document.location.href;
var param = link.split("?");


function requestList(){
    if(param.length == 1){
        var dumb = [
            {
                "productor": "�� ����",
                "title": "���� ����",
                "introduce": "��Ӵ��� ���� ����� ��Ƽ��� �׸� �׸��Դϴ�.",
                "img": "http://www.safetimes.co.kr/news/photo/201512/1430_436_5628.jpg"
            },
            {
                "productor": "�� ����",
                "title": "��Ŵ� ��",
                "introduce": "��ο� ���� ��Ŵ� ����� �׸� �׸�",
                "img": "https://i.pinimg.com/564x/66/79/19/6679197f96ee70fdb17e43131a84d954.jpg"
            },
            {
                "productor": "�� ����",
                "title": "���帰 ����",
                "introduce": "���� ����� ��ȸ�� �����ϸ� �׸� �׸�",
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_KJhHCtvygpSgTd7X4l74mWPOnt-iHfNqQ&usqp=CAU"
            },
            {
                "productor": "�� ��ȣ",
                "title": "���� ��",
                "introduce": "�ƹ��� ���� ��ο� �㿡 �׸� ���ϴ��� ��",
                "img": "https://www.krpia.co.kr/public-img/content/thum/286003/PLCT00005699.png"
            },
            {
                "productor": "�� ����",
                "title": "������ ����",
                "introduce": "������ ��� ������ ǳ���� ���� �׸� ǳ��ȭ",
                "img": "https://cdn.mygoyang.com/news/photo/201511/38310_29712_510.jpg"
            },
            {
                "productor": "�� ����",
                "title": "���� ����",
                "introduce": "��Ӵ��� ���� ����� ��Ƽ��� �׸� �׸��Դϴ�.",
                "img": "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/gdA/image/nkKa3t7hqZuzo9hmRz9aS0mKE84"
            },
            {
                "productor": "�� ����",
                "title": "���� ����",
                "introduce": "��Ӵ��� ���� ����� ��Ƽ��� �׸� �׸��Դϴ�.",
                "img": "https://images.otwojob.com/product/X/O/B/XOBLxia1ptduwcM.jpg/o2j/resize/852x622%3E"
            },
            {
                "productor": "�� ����",
                "title": "���� ����",
                "introduce": "��Ӵ��� ���� ����� ��Ƽ��� �׸� �׸��Դϴ�.",
                "img": "http://www.safetimes.co.kr/news/photo/201512/1430_436_5628.jpg"
            },
            {
                "productor": "�� ����",
                "title": "��Ŵ� ��",
                "introduce": "��ο� ���� ��Ŵ� ����� �׸� �׸�",
                "img": "https://i.pinimg.com/564x/66/79/19/6679197f96ee70fdb17e43131a84d954.jpg"
            },
            {
                "productor": "�� ����",
                "title": "���帰 ����",
                "introduce": "���� ����� ��ȸ�� �����ϸ� �׸� �׸�",
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_KJhHCtvygpSgTd7X4l74mWPOnt-iHfNqQ&usqp=CAU"
            }
        ]
    }else{
        var value = param[1].split("=");
        if(value[1] == "oriental"){
            var dumb = [
                {
                    "productor": "�� ����",
                    "title": "���� ����",
                    "introduce": "��Ӵ��� ���� ����� ��Ƽ��� �׸� �׸��Դϴ�.",
                    "img": "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/gdA/image/nkKa3t7hqZuzo9hmRz9aS0mKE84"
                },
                {
                    "productor": "�� ����",
                    "title": "���� ����",
                    "introduce": "��Ӵ��� ���� ����� ��Ƽ��� �׸� �׸��Դϴ�.",
                    "img": "https://images.otwojob.com/product/X/O/B/XOBLxia1ptduwcM.jpg/o2j/resize/852x622%3E"
                },
                {
                    "productor": "�� ����",
                    "title": "���� ����",
                    "introduce": "��Ӵ��� ���� ����� ��Ƽ��� �׸� �׸��Դϴ�.",
                    "img": "https://i.pinimg.com/originals/f5/2a/a1/f52aa1ab60afe7390e0c552871b5af1e.jpg"
                },
                {
                    "productor": "�� ����",
                    "title": "���� ����",
                    "introduce": "��Ӵ��� ���� ����� ��Ƽ��� �׸� �׸��Դϴ�.",
                    "img": "https://newsimg.sedaily.com/2019/07/18/1VLQPNBJ0Q_1.jpg"
                },
                {
                    "productor": "�� ����",
                    "title": "���� ����",
                    "introduce": "��Ӵ��� ���� ����� ��Ƽ��� �׸� �׸��Դϴ�.",
                    "img": "https://t1.daumcdn.net/cfile/blog/210432505182F73E11"
                }
            ]
        }else if(value[1] == "western"){
            var dumb = [
                {
                    "productor": "�� ����",
                    "title": "���� ����",
                    "introduce": "��Ӵ��� ���� ����� ��Ƽ��� �׸� �׸��Դϴ�.",
                    "img": "http://www.safetimes.co.kr/news/photo/201512/1430_436_5628.jpg"
                },
                {
                    "productor": "�� ����",
                    "title": "��Ŵ� ��",
                    "introduce": "��ο� ���� ��Ŵ� ����� �׸� �׸�",
                    "img": "https://i.pinimg.com/564x/66/79/19/6679197f96ee70fdb17e43131a84d954.jpg"
                },
                {
                    "productor": "�� ����",
                    "title": "���帰 ����",
                    "introduce": "���� ����� ��ȸ�� �����ϸ� �׸� �׸�",
                    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_KJhHCtvygpSgTd7X4l74mWPOnt-iHfNqQ&usqp=CAU"
                },
                {
                    "productor": "�� ��ȣ",
                    "title": "���� ��",
                    "introduce": "�ƹ��� ���� ��ο� �㿡 �׸� ���ϴ��� ��",
                    "img": "https://www.krpia.co.kr/public-img/content/thum/286003/PLCT00005699.png"
                },
                {
                    "productor": "�� ����",
                    "title": "������ ����",
                    "introduce": "������ ��� ������ ǳ���� ���� �׸� ǳ��ȭ",
                    "img": "https://cdn.mygoyang.com/news/photo/201511/38310_29712_510.jpg"
                }
            ]
        }else if(value[1] == "contemporary"){
            var dumb = [
                {
                    "productor": "�� ����",
                    "title": "���� ����",
                    "introduce": "��Ӵ��� ���� ����� ��Ƽ��� �׸� �׸��Դϴ�.",
                    "img": "https://file.mk.co.kr/meet/neds/2017/09/image_readmed_2017_601694_15047650883020840.jpg"
                },
                {
                    "productor": "�� ����",
                    "title": "��Ŵ� ��",
                    "introduce": "��ο� ���� ��Ŵ� ����� �׸� �׸�",
                    "img": "https://og-data.s3.amazonaws.com/media/exhibitions/image/1619/ei_1619.jpg"
                },
                {
                    "productor": "�� ����",
                    "title": "���帰 ����",
                    "introduce": "���� ����� ��ȸ�� �����ϸ� �׸� �׸�",
                    "img": "https://t2.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/3Vz6/image/3Eoq6FzqQApBuS-2O06lIsrxDC8.jpg"
                },
                {
                    "productor": "�� ��ȣ",
                    "title": "���� ��",
                    "introduce": "�ƹ��� ���� ��ο� �㿡 �׸� ���ϴ��� ��",
                    "img": "https://newsimg.hankookilbo.com/cms/articlerelease/2014/08/31/201408311875278951_1.jpg"
                },
                {
                    "productor": "�� ����",
                    "title": "������ ����",
                    "introduce": "������ ��� ������ ǳ���� ���� �׸� ǳ��ȭ",
                    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDoEpqXMoLOuhPY9uAJ_6WvMMrlAtAfsV2Qw&usqp=CAU"
                },
                {
                    "productor": "�� ����",
                    "title": "���帰 ����",
                    "introduce": "���� ����� ��ȸ�� �����ϸ� �׸� �׸�",
                    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsSmyIlYJmy4h5StMsZMebpO5XxYE-H2t8rg&usqp=CAU"
                }
            ]
        }
        else if(value[1] == "statue"){
            var dumb = [
                {
                    "productor": "�� �ֿ�",
                    "title": "���� ����",
                    "introduce": "�׸��� �ô��� ������ ������ ����������.",
                    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlu_chSewg_XQnPnibYYuvvvGfjqLTwwcJ1Q&usqp=CAU"
                },
                {
                    "productor": "ȫ �ֿ�",
                    "title": "���� ���",
                    "introduce": "������ ���� ����� ǥ���� ���� ������",
                    "img": "http://artgallery1004.co.kr/web/product/big/201806/10947_shop1_15293204918834.jpg"
                },
                {
                    "productor": "�� ����",
                    "title": "���� �ҳ�",
                    "introduce": "����� ���� �ҳ��� ������",
                    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhZAxe4fcjBc-Mf3mVjgWFMsSaBNEzzX8SQ&usqp=CAU"
                },
                {
                    "productor": "�� ����",
                    "title": "���� ����",
                    "introduce": "ó���� ���̴� ������ �̼Ҹ� ���� ���� ������",
                    "img": "https://lh3.googleusercontent.com/proxy/RdVUXYcrmoivaFJ-V9Wc1L7JmXLAFJNGnAhCrUBXvfbLk_WKInjZjnACXjXBvOH7UMgBKFoQ9QmiR1Vn2jfishzy_ims_7WioQpuzcnrTXONIxLH"
                },
                {
                    "productor": "�� ��",
                    "title": "������ ������",
                    "introduce": "������ ������ ������ ������",
                    "img": "https://www.cjob.co.kr/data/file/sell/thumb-2083893079_gKrEOYsN_6bf932902acf391b2abdf86f27be8171d4cc0643_700x933.jpg"
                }
            ]
        }
        
    }
    dumb.forEach(function(n){
        var articleList = document.getElementById("article-list")
        var articleCard = document.createElement('article')
        var articleImg = document.createElement('img')
        var articleContent = document.createElement('div')
        var articleContentProductor = document.createElement('p')
        var articleContentTitle = document.createElement('p')
        var articleContentIntroduce = document.createElement('p')
        var detailButton = document.createElement('button')

        articleCard.className = "article-card"
        articleImg.className = "article-img"
        articleContent.className = "article-contents"
        articleContentProductor.className = "article-productor"
        articleContentTitle.className = "article-title"
        articleContentIntroduce.className = "article-introduce"
        detailButton.className = "article-detail-button"

        articleImg.src = n["img"];
        articleCard.appendChild(articleImg);
        articleContentProductor.textContent = n["productor"];
        articleContentTitle.textContent = n["title"];
        articleContentIntroduce.textContent = n["introduce"];
        detailButton.textContent = "�󼼺���"
        articleContent.appendChild(articleContentProductor);
        articleContent.appendChild(articleContentTitle);
        articleContent.appendChild(articleContentIntroduce);
        articleContent.appendChild(detailButton);
        articleCard.appendChild(articleContent);
        articleList.appendChild(articleCard);
    });
}

requestList(param);

function addList(){
    var dumb = [
        {
            "productor": "�� ����",
            "title": "���� ����",
            "introduce": "��Ӵ��� ���� ����� ��Ƽ��� �׸� �׸��Դϴ�.",
            "img": "http://www.safetimes.co.kr/news/photo/201512/1430_436_5628.jpg"
        },
        {
            "productor": "�� ����",
            "title": "��Ŵ� ��",
            "introduce": "��ο� ���� ��Ŵ� ����� �׸� �׸�",
            "img": "https://i.pinimg.com/564x/66/79/19/6679197f96ee70fdb17e43131a84d954.jpg"
        },
        {
            "productor": "�� ����",
            "title": "���帰 ����",
            "introduce": "���� ����� ��ȸ�� �����ϸ� �׸� �׸�",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_KJhHCtvygpSgTd7X4l74mWPOnt-iHfNqQ&usqp=CAU"
        },
        {
            "productor": "�� ��ȣ",
            "title": "���� ��",
            "introduce": "�ƹ��� ���� ��ο� �㿡 �׸� ���ϴ��� ��",
            "img": "https://www.krpia.co.kr/public-img/content/thum/286003/PLCT00005699.png"
        },
        {
            "productor": "�� ����",
            "title": "������ ����",
            "introduce": "������ ��� ������ ǳ���� ���� �׸� ǳ��ȭ",
            "img": "https://cdn.mygoyang.com/news/photo/201511/38310_29712_510.jpg"
        },
        {
            "productor": "�� ����",
            "title": "���� ����",
            "introduce": "��Ӵ��� ���� ����� ��Ƽ��� �׸� �׸��Դϴ�.",
            "img": "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/gdA/image/nkKa3t7hqZuzo9hmRz9aS0mKE84"
        },
        {
            "productor": "�� ����",
            "title": "���� ����",
            "introduce": "��Ӵ��� ���� ����� ��Ƽ��� �׸� �׸��Դϴ�.",
            "img": "https://images.otwojob.com/product/X/O/B/XOBLxia1ptduwcM.jpg/o2j/resize/852x622%3E"
        },
        {
            "productor": "�� ����",
            "title": "���� ����",
            "introduce": "��Ӵ��� ���� ����� ��Ƽ��� �׸� �׸��Դϴ�.",
            "img": "http://www.safetimes.co.kr/news/photo/201512/1430_436_5628.jpg"
        },
        {
            "productor": "�� ����",
            "title": "��Ŵ� ��",
            "introduce": "��ο� ���� ��Ŵ� ����� �׸� �׸�",
            "img": "https://i.pinimg.com/564x/66/79/19/6679197f96ee70fdb17e43131a84d954.jpg"
        },
        {
            "productor": "�� ����",
            "title": "���帰 ����",
            "introduce": "���� ����� ��ȸ�� �����ϸ� �׸� �׸�",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_KJhHCtvygpSgTd7X4l74mWPOnt-iHfNqQ&usqp=CAU"
        }
    ]
    dumb.forEach(function(n){
        var articleList = document.getElementById("article-list")
        var articleCard = document.createElement('article')
        var articleImg = document.createElement('img')
        var articleContent = document.createElement('div')
        var articleContentProductor = document.createElement('p')
        var articleContentTitle = document.createElement('p')
        var articleContentIntroduce = document.createElement('p')
        var detailButton = document.createElement('button')

        articleCard.className = "article-card"
        articleImg.className = "article-img"
        articleContent.className = "article-contents"
        articleContentProductor.className = "article-productor"
        articleContentTitle.className = "article-title"
        articleContentIntroduce.className = "article-introduce"
        detailButton.className = "article-detail-button"

        articleImg.src = n["img"];
        articleCard.appendChild(articleImg);
        articleContentProductor.textContent = n["productor"];
        articleContentTitle.textContent = n["title"];
        articleContentIntroduce.textContent = n["introduce"];
        detailButton.textContent = "�󼼺���"
        articleContent.appendChild(articleContentProductor);
        articleContent.appendChild(articleContentTitle);
        articleContent.appendChild(articleContentIntroduce);
        articleContent.appendChild(detailButton);
        articleCard.appendChild(articleContent);
        articleList.appendChild(articleCard);
    });
}
