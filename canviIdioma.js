document.addEventListener("DOMContentLoaded", () => {
  const idiomaElement = document.querySelector(".menu-item.idioma");

  // Funció per establir l'idioma i guardar-lo
  function canviarIdioma(idioma) {
    localStorage.setItem("idioma", idioma); // Guarda l'idioma seleccionat
    aplicarIdioma(idioma); // Aplica l'idioma a la pàgina
  }

  // Funció per aplicar l'idioma seleccionat
  function aplicarIdioma(idioma) {
    // Canvia el contingut dels elements amb texts en diversos idiomes
    const elementsIdioma = document.querySelectorAll("[data-ca][data-en]");
    elementsIdioma.forEach(element => {
      let nouText;
      if (idioma === "ang") {
        nouText = element.getAttribute("data-en"); // Obté el text anglès
      } else {
        nouText = element.getAttribute("data-ca"); // Obté el text català
      }

      // Substitueix els marcadors [br] per salts de línia <br> i actualitza el contingut
      element.innerHTML = nouText.replace(/\[br\]/g, "<br>");
    });

    // Canvia l'atribut data-descripcio per als vídeos
    const elementsVideo = document.querySelectorAll("[data-descripcio-ca][data-descripcio-en]");
    elementsVideo.forEach(video => {
      let descripcio;
      if (idioma === "ang") {
        descripcio = video.getAttribute("data-descripcio-en"); // Obté la descripció en anglès
      } else {
        descripcio = video.getAttribute("data-descripcio-ca"); // Obté la descripció en català
      }

      // Actualitza l'atribut data-descripcio
      video.setAttribute("data-descripcio", descripcio);
    });
  }

  // Carrega l'idioma seleccionat de localStorage o per defecte
  const idiomaSeleccionat = localStorage.getItem("idioma") || "cat";
  aplicarIdioma(idiomaSeleccionat);

  // Escolta el canvi d'idioma
  idiomaElement.addEventListener("click", () => {
    const idiomaActual = localStorage.getItem("idioma") || "cat";
    const nouIdioma = idiomaActual === "cat" ? "ang" : "cat";
    canviarIdioma(nouIdioma);
  });
});

  