
// Funções para mudar cor de fundo dos links do header
var headlinks = window.document.getElementsByClassName('links')

for (var i = 0; i < headlinks.length; i++) {
    headlinks[i].addEventListener('mouseenter', enter);
    headlinks[i].addEventListener('mouseout', out);
    headlinks[i].addEventListener('onclick', click)
}

function enter() {
    this.style.background = '#f4900c'
}

function out() {
    this.style.background = '#252728'
}

function click() {
    this.style.background = '#f4900c'
}

// Funções que redirecionam para outra página
var linkhome = window.document.getElementById("home")

linkhome.addEventListener("click", function() {
        window.location.href = "index.html";
      })

var linkbio = window.document.getElementById("bio")

linkbio.addEventListener("click", function() {
        window.location.href = "biografia.html";
      })

var linkform = window.document.getElementById("form")

linkform.addEventListener("click", function() {
        window.location.href = "formacao.html";
    })

var linkcont = window.document.getElementById("cont")

linkcont.addEventListener("click", function() {
        window.location.href = "contato.html";
        })