window.onload = function(){
    function f(){

        let y = prompt("숫자를 입력하세요.");

        let result = "";
    
        if(y % 2 !=0){
            result = "odd";
        }
        else{
            result = "even";
        }
        return result;
    }
    document.write(f());
}
