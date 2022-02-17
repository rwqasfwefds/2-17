window.onload = function(){
    function f(){
        let y = prompt('숫자를 입력하세요.');
    
        if(y % 2 !=0){
            document.write("odd")
        }
        else{
            document.write("even")
        }
    }
    f();
}