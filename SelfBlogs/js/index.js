// window.onload = function () {
//     //获取li和img
//     var lunbolis = document.getElementById('lunbolis').getElementsByTagName('li');
//     var lunboimgs = document.getElementById('lunboimgs').getElementsByTagName('img');
//
//     //索引
//     var loop = 0;
//
//     setInterval(function () {
//         loop += 1;
//         loop %= 8;
//
//         for(var i=0;i<lunbolis.length;i++) {
//             lunbolis[i].className = '';
//             lunboimgs[i].style.display = 'none';
//         }
//
//         lunbolis[loop].className = 'current';
//         lunboimgs[loop].style.display = 'block';
//     },2000)
// };

window.onload = function () {
    //获取li和img
    var lunbolis = document.getElementById('lunbolis').getElementsByTagName('li');
    var lunboimgs = document.getElementById('lunboimgs').getElementsByTagName('img');
    console.log(lunbolis);
    //索引
    var loop = 0;

    setInterval(function () {
        loop += 1;
        loop %= 8;

        for(var i=0;i<lunbolis.length;i++) {
            lunbolis[i].className = '';
            lunboimgs[i].style.display = 'none';
        }

        lunbolis[loop].className = 'current';
        lunboimgs[loop].style.display = 'block';
    },2000)




    var allLis = document.getElementById('selfblogs-blogstuijian').getElementsByTagName('li');
    var allDoms = document.getElementsByClassName('dom');
    console.log(allLis);
    for(var i=0;i<allLis.length;i++) {
        var li = allLis[i];
        li.index = i;
        li.onmouseover =function () {
            for(var j=0; j<allLis.length; j++) {
                allLis[j].className = '';
                allDoms[j].style.display = 'none';
            }
            this.className = 'lis';
            allDoms[this.index].style.display = 'block';
        }
    }
    //     allLis.onmouseover = function () {
    //         for (var j=0;j<allLis.length;j++){
    //             allLis[j].className = 'lis';
    //         }
    //
    //     };
    //     allLis.onmouseout = function () {
    //         allLis[i].className = 'lis';
    //     }
    // }





};

//
// window.onload = function () {
//     //获取标签
//     var allLis = document.getElementById('tab_header').getElementsByTagName('li');
//     var allDoms = document.getElementById('tab_content').getElementsByClassName('dom');
//     //console.log(allLis, allDoms);
//
//     //遍历监听
//     for(var i=0; i<allLis.length; i++) {
//         var li = allLis[i];
//         li.index = i;
//         li.onmouseover =function () {
//             for(var j=0; j<allLis.length; j++) {
//                 allLis[j].className = '';
//                 allDoms[j].style.display = 'none';
//             }
//             this.className = 'selected';
//             allDoms[this.index].style.display = 'block';
//         }
//     }
// }