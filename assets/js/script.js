// Compter le nombre de clics sur le bouton
var clickCount = 0;

function showGif() {
  // Incrémenter le compteur de clics
  clickCount++;
  
  // Créer un élément d'image
  var img = document.createElement("img");
  
  // Définir la source de l'image sur le chemin du GIF
  img.src = "./assets/img/egg.gif";
  
  // Désactiver la transparence pour laisser le fond de la page apparaître derrière l'image
  img.style.backgroundColor = "transparent";
  
  // Ajouter l'image à un conteneur dans la page
  var container = document.getElementById("gif-container");
  container.appendChild(img);
  
  // Vérifier si le nombre de clics atteint 6
  if (clickCount === 6) {
    // Faire quelque chose après 6 clics
    window.location.href="./assets/html/bonus.html";
    
    // Réinitialiser le compteur de clics
    clickCount = 0;
  }
}

jQuery(function ($) {
    document.getElementById("Accueil").addEventListener("click", myfunction);
    function myfunction() {
        window.location.href="../../index.html";
    }
});

jQuery(function ($) {
    document.addEventListener('DOMContentLoaded', function () {

        contain_site.style.setProperty("visibility","visible");
    
    });
});

jQuery(function ($) {
    document.getElementById("toolStart_bt").addEventListener("click", myfunction);
    function myfunction() {
        window.location.href="./assets/html/p1.html";
    }
});

jQuery(function ($) {
    document.getElementById("toolAnime_bt").addEventListener("click", myfunction);
    function myfunction() {
        window.location.href="./p1-1.html";
    }
});

jQuery(function ($) {
    document.getElementById("toolIndex_bt").addEventListener("click", myfunction);
    function myfunction() {
        window.location.href="./p1-1-1.html";
    }
});

jQuery(function ($) {
    document.getElementById("toolLegal1_bt").addEventListener("click", myfunction);
    function myfunction() {
        window.location.href="./p1-1-1-1.html";
    }
});

jQuery(function ($) {
    document.getElementById("toolIllegal1_bt").addEventListener("click", myfunction);
    function myfunction() {
        window.location.href="./p1-1-1-2.html";
    }
});

jQuery(function ($) {
    document.getElementById("toolRailgun_bt").addEventListener("click", myfunction);
    function myfunction() {
        window.location.href="./p1-1-2.html";
    }
});

jQuery(function ($) {
    document.getElementById("toolAccel_bt").addEventListener("click", myfunction);
    function myfunction() {
        window.location.href="./p1-1-3.html";
    }
});

jQuery(function ($) {
    document.getElementById("toolChrono_bt").addEventListener("click", myfunction);
    function myfunction() {
        window.location.href="./p1-1-4.html";
    }
});

jQuery(function ($) {
    document.getElementById("toolLivre_bt").addEventListener("click", myfunction);
    function myfunction() {
        window.location.href="./p1-2.html";
    }
});

jQuery(function ($) {
    document.getElementById("toolManga_bt").addEventListener("click", myfunction);
    function myfunction() {
        window.location.href="./p1-2-1.html";
    }
});

jQuery(function ($) {
    document.getElementById("toolMangaL_bt").addEventListener("click", myfunction);
    function myfunction() {
        window.location.href="./p1-2-1-1.html";
    }
});

jQuery(function ($) {
    document.getElementById("toolMangaIll_bt").addEventListener("click", myfunction);
    function myfunction() {
        window.location.href="./p1-2-1-2.html";
    }
});

jQuery(function ($) {
    document.getElementById("toolLN_bt").addEventListener("click", myfunction);
    function myfunction() {
        window.location.href="./p1-2-2.html";
    }
});

jQuery(function ($) {
    document.getElementById("toolLegal2_bt").addEventListener("click", myfunction);
    function myfunction() {
        window.location.href="./p1-2-2-1.html";
    }
});

jQuery(function ($) {
    document.getElementById("toolIllegal2_bt").addEventListener("click", myfunction);
    function myfunction() {
        window.location.href="./p1-2-2-2.html";
    }
});