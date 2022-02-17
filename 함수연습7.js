// window.onload = function(){
//     function f(){

//         let y = prompt('숫자를 입력하세요.');

//         if(y == 0){
//             return "false"
//         }
//         else{
//             return "true"
//         }
//     }
//     let x = f();
//     document.write(x);
// }
window.onload = function(){

    function f(){
        let y = prompt("숫자를 입력하세요");
        let num = "";

        if(y == 0){
            num = "false"
        }
        else{
            num = "true"
        }

        return num
    }
    document.write(f())
}