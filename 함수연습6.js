// window.onload = function(){
//     function f(){
//         let y = prompt('글자를 입력하세요.');

//         if(y == 1){
//             return "hello"
//         }
//         else if(y == 2){
//             return "world"
//         }

//     }
//     let x = f();
//     document.write(x)

// }
window.onload = function(){
    function f(){
        let y = prompt("숫자를 입력하세요");
        let num = "result";
    
        if( y== 1){
            result = "hello"
        }
        else{
            result = "world"
        }
    
        return result;
    }
    document.write(f())
}
