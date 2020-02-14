var mapa // Mapa que vamos a modificar

/* variable posicionCentral con las coordenadas donde se va a centrar el mapa */
var posicionCentral = {lat: -34.6080556, lng: -58.37027779999999};


function inicializarMapa () {
   

  mapa = new google.maps.Map(document.getElementById("map"), {zoom: 16, center: posicionCentral});
    
  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
};
