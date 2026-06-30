function tori(num) {
    const toriShow = document.getElementById('calc');
    toriShow.value += num;
}
function toriClear(){
    const variabo = document.getElementById("calc");
    variabo.value = '';

}
function toriResults(){
    const variabo = document.getElementById('calc');
    variabo.value = eval(variabo.value);
}
function squareRoot(){
    const variabo = document.getElementById('calc');
    variabo.value = Math.sqrt(eval(variabo.value));
}