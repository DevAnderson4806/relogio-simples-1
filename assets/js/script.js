const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

let datetoday = new Date();
let hr = datetoday.getHours();
let min = datetoday.getMinutes();
let s = datetoday.getSeconds();
let novodia = new Date();
let data1 = novodia.getDate();
let data2 = novodia.getMonth();
let data3 = novodia.getFullYear();

if(data2 >= 10) {
    data2 + 2;
}

let full = data1 + ' ' + data2  + ' ' + data3;

alert(full)

alert('hora atual é ' + hr+ ' : ' + min + ' : ' + s + ' hrs')

if(hr >= 12 && hr < 18) {
    alert('agora está de tarde ')
}

if(hr >= 0 && hr < 12) {
    alert('agora está de manhã')
}

if(hr >=18 && hr < 1) {
    alert('está chegando a noite')
}


const relogio = setInterval(function time(){
    let datetoday = new Date();
    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let s = datetoday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})

console.log(Date())