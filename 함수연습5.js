window.onload = function(){
    function f(){
        let y = prompt("숫자 입력");

        if(y % 2 !=0){
            return 'odd'
        }
        else{
            return 'even'
        }

       
        
    }
    let x = f();
    document.write(x);
}