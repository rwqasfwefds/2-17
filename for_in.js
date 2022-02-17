window.onload = function(){
    let arr = [3, 4, 5];

for(let i = 0; i < arr.length; i++){
    document.write(i + ""); // 배열의 인덱스위치
}

document.write('<br>') // 줄바꿈

for(let i = 0; i < arr.length; i++){
    document.write(arr[i] + ""); // 배열의 값
}

document.write('<br>') // 줄바꿈

for(let i in arr){
    document.write(i + "") // 배열의 인덱스 위치
}

document.write('<br>') // 줄바꿈

for(let i = 0; i < arr.length; i++){
    document.write(arr[i] + ""); // 배열의 값
}
}