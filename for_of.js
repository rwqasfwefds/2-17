window.onload = function(){
    let arr = [3, 4, 5,];

for(let i = 0; i < arr.length; i++){ // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
    document.write(arr[i] + "");
}

document.write('<br>')

for(let y of arr){ // 위와 같은 동작을 하는 for/of 문
    document.write(y + "") 
}
}