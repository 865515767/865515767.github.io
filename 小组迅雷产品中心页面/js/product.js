window.onload = function () {
    var pc = 0;
    var AcrCo = document.getElementById("AcrCo");
    var AcrCo_1 = document.getElementById("AcrCo_1");
    var ul = AcrCo.children[0];
    var li = ul.children;
    for (var i = 0; i < li.length; i++) {
        li[i].onmouseover = function () {
            AcrCo_1.style.display = "block";
            AcrCo_1.style.backgroundColor = "#41A3F1";
            AcrCo_1.style.opacity = 1;
            var rxw = this.offsetLeft;
            animate(AcrCo_1, rxw)
        };
        li[i].onmouseout = function () {
            AcrCo_1.style.opacity = 0.6;
            AcrCo_1.style.backgroundColor = "#fff";
            animate(AcrCo_1, pc);
        };
        li[i].onclick = function () {
            pc = this.offsetLeft;
            animate(AcrCo_1, pc);
        };
    };

    //Í¨À¸½áÊø

    //ÂÖ²¥Í¼

    var btn = document.getElementById("btn");
    var btn_1 = document.getElementById("btn_1");
    var spans = btn_1.children;
    var picture_1 = document.getElementById("picture_1");
    var ul = picture_1.children[0];
    var lis = ul.children;
    var imgs = {};
    var dd = 0;
    for (var i = 0; i < lis.length; i++) {
        imgs[i] = lis[i].children[0];
        imgs[i].style.transition = "all 0.3s ease-in-out";
    }
    function qzd(){
        if(dd>=4){
            dd = 0;
        }
        for (var j = 0; j < spans.length; j++) {
            spans[j].className = "";
            imgs[j].style.opacity = 0;
        }
        imgs[dd].style.opacity = 1;
        spans[dd].className = "current001";
        dd++;
    }
    qzd();
    setInterval(function(){
        qzd(dd);
    },2500);
    for (var i = 0; i < spans.length; i++) {
        spans[i].index = i;
        spans[i].onmouseover = function () {
            for (var j = 0; j < spans.length; j++) {
                spans[j].className = "";
                imgs[j].style.opacity = 0;
            }
            imgs[this.index].style.opacity = 1;
            this.className = "current001";
        }
    }

    //ÂÖ²¥Í¼½áÊø

    //ÄÚÈÝ

    var box000 = document.getElementById("box000");
    var tuB1 = document.getElementById("tuB1");
    var tuB2 = document.getElementById("tuB2");
    box000.onmouseover = function () {
        tuB1.style.background = "url(image/ic_spr.png)no-repeat 0px -36px";
        tuB2.style.color = "#0097FF";
    };
    box000.onmouseout = function () {
        tuB1.style.background = "url(image/ic_spr.png)";
        tuB2.style.color = "#adadad";
    };
    var box001 = document.getElementById("box001");
    var tuB11 = document.getElementById("tuB11");
    var tuB22 = document.getElementById("tuB22");
    box001.onmouseover = function () {
        tuB11.style.background = "url(image/ic_spr.png)no-repeat -145px -38px";
        tuB22.style.color = "#0097FF";
    };
    box001.onmouseout = function () {
        tuB11.style.background = "url(image/ic_spr.png)no-repeat -145px 0px";
        tuB22.style.color = "#adadad";
    };
    var box002 = document.getElementById("box002");
    var tuB33 = document.getElementById("tuB33");
    var tuB44 = document.getElementById("tuB44");
    box002.onmouseover = function () {
        tuB33.style.background = "url(image/ic_spr.png)no-repeat 0px -36px";
        tuB44.style.color = "#0097FF";
    };
    box002.onmouseout = function () {
        tuB33.style.background = "url(image/ic_spr.png)";
        tuB44.style.color = "#adadad";
    };
    var box003 = document.getElementById("box003");
    var tuB55 = document.getElementById("tuB55");
    var tuB66 = document.getElementById("tuB66");
    box003.onmouseover = function () {
        tuB55.style.background = "url(image/ic_spr.png)no-repeat 0px -36px";
        tuB66.style.color = "#0097FF";
    };
    box003.onmouseout = function () {
        tuB55.style.background = "url(image/ic_spr.png)";
        tuB66.style.color = "#adadad";
    };
    var box004 = document.getElementById("box004");
    var tuB77 = document.getElementById("tuB77");
    var tuB88 = document.getElementById("tuB88");
    box004.onmouseover = function () {
        tuB77.style.background = "url(image/ic_spr.png)no-repeat 0px -36px";
        tuB88.style.color = "#0097FF";
    };
    box004.onmouseout = function () {
        tuB77.style.background = "url(image/ic_spr.png)";
        tuB88.style.color = "#adadad";
    };
    var box005 = document.getElementById("box005");
    var tuB99 = document.getElementById("tuB99");
    var tuB00 = document.getElementById("tuB00");
    box005.onmouseover = function () {
        tuB99.style.background = "url(image/ic_spr.png)no-repeat 0px -36px";
        tuB00.style.color = "#0097FF";
    };
    box005.onmouseout = function () {
        tuB99.style.background = "url(image/ic_spr.png)";
        tuB00.style.color = "#adadad";
    };
    var box006 = document.getElementById("box006");
    var tuB006 = document.getElementById("tuB006");
    var tuB226 = document.getElementById("tuB226");
    var tuB1166 = document.getElementById("tuB1166");
    var tuB26 = document.getElementById("tuB26");
    var tuB166 = document.getElementById("tuB166");
    var tuB0066 = document.getElementById("tuB0066");
    box006.onmouseover = function () {
        tuB006.style.background = "url(image/ic_spr.png)no-repeat -36px -36px";
        tuB0066.style.color = "#0097FF";
        tuB226.style.background = "url(image/ic_spr.png)no-repeat -74px -40px";
        tuB1166.style.color = "#0097FF";
        tuB26.style.background = "url(image/ic_spr.png)no-repeat -110px -36px";
        tuB166.style.color = "#0097FF";
    };
    box006.onmouseout = function () {
        tuB006.style.background = "url(image/ic_spr.png)no-repeat -36px -2px";
        tuB0066.style.color = "#adadad";
        tuB226.style.background = "url(image/ic_spr.png)no-repeat -74px 0px";
        tuB1166.style.color = "#adadad";
        tuB26.style.background = "url(image/ic_spr.png)no-repeat -110px 0px";
        tuB166.style.color = "#adadad";
    };
    var box007 = document.getElementById("box007");
    var tuB336 = document.getElementById("tuB336");
    var tuB6363 = document.getElementById("tuB6363");
    var tuB2266 = document.getElementById("tuB2266");
    var tuB6464 = document.getElementById("tuB6464");
    box007.onmouseover = function () {
        tuB336.style.background = "url(image/ic_spr.png)no-repeat -74px -40px";
        tuB6363.style.color = "#0097FF";
        tuB2266.style.background = "url(image/ic_spr.png)no-repeat -110px -36px";
        tuB6464.style.color = "#0097FF";
    };
    box007.onmouseout = function () {
        tuB336.style.background = "url(image/ic_spr.png)no-repeat -74px 0px";
        tuB6363.style.color = "#adadad";
        tuB2266.style.background = "url(image/ic_spr.png)no-repeat -110px 0px";
        tuB6464.style.color = "#adadad";
    };
    var box008 = document.getElementById("box008");
    var tuB3336 = document.getElementById("tuB3336");
    var tuB636363 = document.getElementById("tuB636363");
    var tuB22266 = document.getElementById("tuB22266");
    var tuB646464 = document.getElementById("tuB646464");
    box008.onmouseover = function () {
        tuB3336.style.background = "url(image/ic_spr.png)no-repeat -74px -40px";
        tuB636363.style.color = "#0097FF";
        tuB22266.style.background = "url(image/ic_spr.png)no-repeat -110px -36px";
        tuB646464.style.color = "#0097FF";
    };
    box008.onmouseout = function () {
        tuB3336.style.background = "url(image/ic_spr.png)no-repeat -74px 0px";
        tuB636363.style.color = "#adadad";
        tuB22266.style.background = "url(image/ic_spr.png)no-repeat -110px 0px";
        tuB646464.style.color = "#adadad";
    };
    var box009 = document.getElementById("box009");
    var tuB33366 = document.getElementById("tuB33366");
    var tuB6363630 = document.getElementById("tuB6363630");
    var tuB222666 = document.getElementById("tuB222666");
    var tuB6464640 = document.getElementById("tuB6464640");
    box009.onmouseover = function () {
        tuB33366.style.background = "url(image/ic_spr.png)no-repeat -74px -40px";
        tuB6363630.style.color = "#0097FF";
        tuB222666.style.background = "url(image/ic_spr.png)no-repeat -110px -36px";
        tuB6464640.style.color = "#0097FF";
    };
    box009.onmouseout = function () {
        tuB33366.style.background = "url(image/ic_spr.png)no-repeat -74px 0px";
        tuB6363630.style.color = "#adadad";
        tuB222666.style.background = "url(image/ic_spr.png)no-repeat -110px 0px";
        tuB6464640.style.color = "#adadad";
    };
    var box010 = document.getElementById("box010");
    var tuB33366a = document.getElementById("tuB33366a");
    var tuB6363630a = document.getElementById("tuB6363630a");
    var tuB222666a = document.getElementById("tuB222666a");
    var tuB6464640a = document.getElementById("tuB6464640a");
    box010.onmouseover = function () {
        tuB33366a.style.background = "url(image/ic_spr.png)no-repeat -74px -40px";
        tuB6363630a.style.color = "#0097FF";
        tuB222666a.style.background = "url(image/ic_spr.png)no-repeat -110px -36px";
        tuB6464640a.style.color = "#0097FF";
    };
    box010.onmouseout = function () {
        tuB33366a.style.background = "url(image/ic_spr.png)no-repeat -74px 0px";
        tuB6363630a.style.color = "#adadad";
        tuB222666a.style.background = "url(image/ic_spr.png)no-repeat -110px 0px";
        tuB6464640a.style.color = "#adadad";
    };
    var box011 = document.getElementById("box011");
    var tuB33366b = document.getElementById("tuB33366b");
    var tuB6363630b = document.getElementById("tuB6363630b");
    var tuB222666b = document.getElementById("tuB222666b");
    var tuB6464640b = document.getElementById("tuB6464640b");
    box011.onmouseover = function () {
        tuB33366b.style.background = "url(image/ic_spr.png)no-repeat -74px -40px";
        tuB6363630b.style.color = "#0097FF";
        tuB222666b.style.background = "url(image/ic_spr.png)no-repeat -110px -36px";
        tuB6464640b.style.color = "#0097FF";
    };
    box011.onmouseout = function () {
        tuB33366b.style.background = "url(image/ic_spr.png)no-repeat -74px 0px";
        tuB6363630b.style.color = "#adadad";
        tuB222666b.style.background = "url(image/ic_spr.png)no-repeat -110px 0px";
        tuB6464640b.style.color = "#adadad";
    };

    //ÄÚÈÝ½áÊø

    //WXµ×²¿

    var code_01 = document.getElementById("code_01");
    var code_02 = document.getElementById("code_02");
    code_01.onmouseover = function () {
        code_02.style.display = "block";
    };
    code_01.onmouseout = function () {
        code_02.style.display = "none";
    };

    //WXµ×²¿½áÊø

    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style.left = leader + "px";
            if (leader === target) {
                clearInterval(obj.timer);
            }
        }, 15);
    };
    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }
};