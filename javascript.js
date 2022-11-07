document.getElementById("teks").innerHTML = "Teks ditambahkan <br> menggunakan javascript";


var hasil = document.querySelector('#tentang');
var newElemen = document.createElement("h2");
var teksElemen = document.createTextNode('Element baru ditambah menggunakan javascript');
newElemen.appendChild(teksElemen);
hasil.appendChild(newElemen);


function mDown(obj) {
    obj.style.backgroundColor = "#eb1b00";
    obj.innerHTML = "Release Me";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#eb1b00";
    obj.innerHTML="Terima Kasih";
  }




