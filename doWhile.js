window.onload = function(){

    let i = 1, j = 1;

    while(i > 3){// 변수 i의 초깃값은 1이기 때문에 이 while 문은 한 번도 실행되지 않음.
        document.write("i : " + (i++) + "<br>");
    }
    
    do{// 변수 j의 초깃값은 1이기 때문에 이 do/while 문은 단 한 번만 실행 됨.
        document.write("j : " + (j++) + "<br>");
    }while(j > 3);
}