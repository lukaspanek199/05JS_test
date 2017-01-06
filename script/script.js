var nadpis;
var puvodText;
var puvodBarva;
function zmenaNadpisu() {
    nadpis = document.getElementById("nadpis");
    puvodText = nadpis.innerHTML;
    puvodBarva = nadpis.style.color;
    nadpis.innerHTML = "Zmeneny nadpis";
    nadpis.style.color = "red";
}
function zmenaZpet() {
    nadpis.innerHTML = puvodText;
    nadpis.style.color = puvodBarva;
}

function cisloHadej() {
    var cislo = 7;
    var hadane = prompt("Zadej cislo od 1 do 9");
    if (hadane == cislo) {
        alert("Nasel jsi cislo!");
    } else {
        if (cislo < hadane) {
            alert("Tvoje cislo je vetsi");
        }
        else {
            alert("Tvoje cislo je mensi");
        }
    }
}
function obrazekMensi() {
    obrazek = document.getElementById("obrazek");
    var novaVelikost = obrazek.getAttribute("height");
    obrazek.style.height = novaVelikost;
}
function obrazekVetsi() {
    obrazek = document.getElementById("obrazek");
    var novaVelikost = obrazek.getAttribute("height");
    obrazek.style.height = novaVelikost;

}