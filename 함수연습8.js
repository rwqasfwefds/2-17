window.onload = function(){
    function f(){
        let num = Number(prompt("숫자를 입력하세요"));

        for(x = 1; x <= num; x++){
            document.write(x);
        }

    }
    f()
}