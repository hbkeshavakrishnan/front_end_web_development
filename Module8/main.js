const n = document.getElementById("fname");
console.log(n.value)
function save(){
    // alert("hello"+n.value);
    localStorage.setItem("name",n.value);
}
