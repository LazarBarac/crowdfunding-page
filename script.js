//Event listener za modal izbora
const backDugme = document.getElementById("back");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

backDugme.addEventListener("click", prikaziIzbor);
close.addEventListener("click", zatvori);

function prikaziIzbor(){
    if (modal.style.display == "none" || modal.style.display == ""){
        modal.style.display = "block";
    }
    else if (modal.style.display = "block"){
        modal.style.display = "none";
    } 
}

function zatvori(){
    modal.style.display ="none";
}


//Event listener za modal uspeha
const continueDugme = document.querySelectorAll(".continue");
const modalUspeh = document.getElementById("modalUspeh");
const gotIt = document.getElementById("gotIt");

for(let n=0, ab=continueDugme.length; n<ab; n++){
    continueDugme[n].addEventListener("click", prikaziUspeh);
    function prikaziUspeh(){
        if(modalUspeh.style.display == "none" || modalUspeh.style.display == ""){
            modalUspeh.style.display = "block";
        }
    } 
};

gotIt.addEventListener("click", zatvoriUspeh);
function zatvoriUspeh(){
    modalUspeh.style.display = "none";
};



/*Event listener za bookmark*/
const bookmark = document.getElementById("bookmark");
const bookmarkSlika = document.getElementById("bookmarkSlika");
const bookmarkText = document.getElementById("bookmarkText");

bookmark.addEventListener("click", obelezi);

function obelezi(){                                 //Sa ovom funkcijom menjam css bookmark elementa.
    if(bookmark.classList.contains("obelezeno")){
        bookmarkSlika.src = "file:///C:/Users/Lazar/Desktop/Frontend%20mentor/2.%20Junior/4.%20crowdfunding-product-page-main/images/icon-bookmark.svg";
        bookmarkText.classList.remove("obelezeno");
        bookmark.classList.remove("obelezeno");
    } else {
        bookmarkSlika.src = "file:///C:/Users/Lazar/Desktop/Frontend%20mentor/2.%20Junior/4.%20crowdfunding-product-page-main/images/icon-bookmark2.svg";
        bookmarkText.classList.add("obelezeno");
        bookmark.classList.add("obelezeno");
    }
}


/*Event listener za slajder*/
const prikupljenoDolara = document.getElementById("prikupljenoDolara");
const myRange = document.getElementById("myRange");

window.addEventListener("load", sliderRange);
function sliderRange(){    
    myRange.value = parseFloat(prikupljenoDolara.innerHTML);   //Ovde postavljam da vrednost na slajderu bude kolicina uplacenog novca do sad.
    boja();                                                    //Menjam boju na slajderu u odnosu na gore pronadjenu vrednost.
    proba();
}

function boja (){                                              //Funkcija za menjanje boje na slajderu.
    const x = (myRange.value/100000)*100;
    myRange.style.background = `linear-gradient(90deg, #00ccff ${x}%, #d6d6c2 ${x}%)`;
}


/*Funkcija za blokiranje mogucnosti poruzdbine.*/
const kolicina = document.querySelectorAll(".kolicina");
const izaberi = document.querySelectorAll(".izaberi");
const kontejner2vB = document.querySelectorAll(".kontejner2vB");

function proba(){                                    //Funkcija pomocu koje sam uspeo ovo da uradim. Trazio na stackoverflow, pa iskombinovao.
for(let i = 0, len = kolicina.length; i<len; i++){
    if(parseFloat(kolicina[i].innerHTML) == 0){
        for(let j = 0, lengt = izaberi.length; j<lengt; j++){
            izaberi[i].setAttribute("disabled", true);          //Onemogucavam funkcionisanje klika na dugmetu.
            izaberi[i].innerHTML = "Out of stock";              //Menjam text u dugmetu.
            izaberi[i].style.backgroundColor = "grey";          //Menjam pozadinu dugmetu.
            izaberi[i].style.cursor = "initial";                //postavljam da kad predjem preko dugmeta, ne pokazuje kursor za klik.
        }
        for(let m = 0, duz = kontejner2vB.length; m<duz; m++){
            kontejner2vB[i].style.opacity = "0.5";
        }
    }
}}


/*  //Ovako nisam mogao da uspem, pa sam uradio ovo gore
function proba(){
kolicina.forEach(function proveri(kol, i){
    const x = parseFloat(kol.innerHTML);
    console.log(x);
    if(x == 0){
        izaberi.forEach(function disable(izab){
            izab.setAttribute("disabled", true);
            izab.innerHTML = "ja";
        });
    }
})}*/




//Event listener za prikazivanje unosa novca kod izbora
const radio = document.querySelectorAll(".radio");
const radioBez = document.getElementById("radioBez");
const kontejner3bB = document.querySelectorAll(".kontejner3bB");
const kontejner3b = document.querySelectorAll(".kontejner3b");
const kontejner3bB2bez = document.getElementById("kontejner3bB2bez");
const kontejner3bbez = document.getElementById("kontejner3bbez");
const opisProizvoda = document.querySelectorAll(".opisProizvoda");

radioBez.addEventListener("click", uradiRadioBez);               //Event listener za prikaz prvog kontejnera. Onaj gde se ne daje novac.
function uradiRadioBez (){
    if(kontejner3bB2bez.style.display == "none" || kontejner3bB2bez.style.display == ""){
        kontejner3bB2bez.style.display = "flex";
        kontejner3bbez.style.borderColor = "#147b74";
        for(let t=0, duzinaB = radio.length; t<duzinaB; t++){
            kontejner3bB[t].style.display = "none";
            kontejner3b[t].style.borderColor = "#808080";
        };
    }
}



odradi();

function odradi(){
    for(let i=0, duzinaA = radio.length; i<duzinaA; i++){
        radio[i].addEventListener("click", dajKintu);
    }
}

function dajKintu(){
    for(let i=0, duzinaB = radio.length; i<duzinaB; i++){
        if(radio[i].checked == true){
            kontejner3bB[i].style.display = "flex";
            kontejner3b[i].style.borderColor = "#147b74";
            kontejner3bB2bez.style.display = "none";
            kontejner3bbez.style.borderColor = "#808080";

            for(let j=0, d = radio.length; j<d; j++){    
                if(j!==i){                              //Ovo radi.
                kontejner3bB[j].style.display = "none";
                kontejner3b[j].style.borderColor = "#808080";
                }
            };
        }
    }
}


function cekirajDugme(){
    radioBez.setAttribute.checked = true;
}