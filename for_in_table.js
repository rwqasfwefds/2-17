let arr = [1, true, "JavaScript"];

let result = "<table border='1'><tr>";

for(let idx in arr){
    result += "<td>" + arr[idx] + "</td>";
}

result += "</tr></table>";
// result = result + "</tr></table>";

console.log(result);
document.write(result);