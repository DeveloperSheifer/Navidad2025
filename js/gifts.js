
const FamilyLista = {
          Jamy: "Jamy",
          Darlyn: "Darlyn (Chach)",
          Elizabet: "Elizabet (Cocos)",
          Dayana: "Dayana",
          Shirley: "Shirley",
          Andy: "Andy",
          Enrique:"Enrique",
          Leidy: "Leidy",
          Daniel: "Daniel",
          Israel :"Israel",
          Yaneth: "Yaneth",
          Ines:"Mama Ines",
          Juan: "Papa Juan"
        };

window.onload = async function() {

  FindGift("si");

};


async function FindGift(status){
  const { value: NameFamly } = await Swal.fire({
  title: "Selecciona a quien te toco regalar",
  width: '500px',
  input: "select",
  inputOptions: {
    Familia: FamilyLista,
  },
  inputPlaceholder: "Selecciona un nombre",
  confirmButtonText: "Buscar",
  cancelButtonText: "Cancelar",
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  inputValidator: (value) => {
    return new Promise((resolve) => {
      if (FamilyLista.hasOwnProperty(value)) {        
        resolve();
      } else {
        resolve("Necesitas elegir un Nombre:)");
      }
    });
  }
});


const imgOne = document.getElementById('ContainerOne');
const imgTwo = document.getElementById('ContainerTwo');
const imgThree = document.getElementById('ContainerThree');
const imgFor = document.getElementById('ContainerFor');
const imgFive = document.getElementById('ContainerFive');
const imgSix = document.getElementById('ContainerSix');
const imgSeven = document.getElementById('ContainerSeven');
const imgEight = document.getElementById('ContainerEight');
const imgNine = document.getElementById('ContainerNine');
const imgTen = document.getElementById('ContainerTen');

const remarkOne = document.getElementById('RemarkOne');
const remarkTwo = document.getElementById('RemarkTwo');
const remarkThree = document.getElementById('RemarkThree');
const remarkFor = document.getElementById('RemarkFor');
const remarkFive = document.getElementById('RemarkFive');
const remarkSix = document.getElementById('RemarkSix');
const remarkSeven = document.getElementById('RemarkSeven');
const remarkEight = document.getElementById('RemarkEight');
const remarkNine = document.getElementById('RemarkNine');
const remarkTen = document.getElementById('RemarkTen');

switch(NameFamly) {
case "Jamy":
      imgOne.src = './img/1.jpg';
      imgTwo.src = './img/2.jpg';
      imgThree.src = './img/3.jpg';
      imgFor.src = './img/4.jpg';
      imgFive.src = './img/5.jpg';
      imgSix.src = './img/1.jpg';
      imgSeven.src = './img/2.jpg';
      imgEight.src = './img/3.jpg';
      imgNine.src = './img/4.jpg';
      imgTen.src = './img/5.jpg';

      remarkOne.textContent = "Biblia para niñas";
      remarkTwo.textContent = "Unos tenis cualquiera estilo talla 34-35";
      remarkThree.textContent = "Un reloj cualquiera color";
      remarkFor.textContent = "Un peluche de Stitch";
      remarkFive.textContent = "Unos botines negros o blancos talla 34-35";
      remarkSix.textContent = "Biblia para niñas";
      remarkSeven.textContent = "Unos tenis cualquiera estilo talla 34-35";
      remarkEight.textContent = "Un reloj cualquiera color";
      remarkNine.textContent = "Un peluche de Stitch";
      remarkTen.textContent = "Unos botines negros o blancos talla 34-35";

  break;

  case "Darlyn":
      imgOne.src = './img/6.jpg';
      imgTwo.src = './img/7.jpg';
      imgThree.src = './img/8.jpg';
      imgFor.src = './img/9.jpg';
      imgFive.src = './img/10.jpg';
      imgSix.src = './img/6.jpg';
      imgSeven.src = './img/7.jpg';
      imgEight.src = './img/8.jpg';
      imgNine.src = './img/9.jpg';
      imgTen.src = './img/10.jpg';

      remarkOne.textContent = "Una tablet";
      remarkTwo.textContent = "Una mochila";
      remarkThree.textContent = "Una pijama para una niña de 12 y 13";
      remarkFor.textContent = "Un peluche de my melody";
      remarkFive.textContent = "Unos zapatos talla 33 y 34 color blancos con plataforma";
      remarkSix.textContent = "Una tablet";
      remarkSeven.textContent = "Una mochila";
      remarkEight.textContent = "Una pijama para una niña de 12 y 13";
      remarkNine.textContent = "Un peluche de my melody";
      remarkTen.textContent = "Unos zapatos talla 33 y 34 color blancos con plataforma";

  break;

  case "Elizabet":
      imgOne.src = './img/16.jpg';
      imgTwo.src = './img/17.jpg';
      imgThree.src = './img/18.jpg';
      imgFor.src = './img/19.jpg';
      imgFive.src = './img/20.jpg';
      imgSix.src = './img/16.jpg';
      imgSeven.src = './img/17.jpg';
      imgEight.src = './img/18.jpg';
      imgNine.src = './img/19.jpg';
      imgTen.src = './img/20.jpg';

      remarkOne.textContent = "Un reloj blanco o rosa";
      remarkTwo.textContent = "Un mom Jean  talla 0 del mismo color";
      remarkThree.textContent = "Un suéter de lana no importa el diseño color blanco";
      remarkFor.textContent = "Un par de tenis negros o blancos talla 35";
      remarkFive.textContent = "Una blusa blanca talla xs lo venden en cuidado con el perro";
      remarkSix.textContent = "Un reloj blanco o rosa";
      remarkSeven.textContent = "Un mom Jean  talla 0 del mismo color";
      remarkEight.textContent = "Un suéter de lana no importa el diseño color blanco";
      remarkNine.textContent = "Un par de tenis negros o blancos talla 35";
      remarkTen.textContent = "Una blusa blanca talla xs lo venden en cuidado con el perro";


  break;

  case "Dayana":
      imgOne.src = './img/36.jpg';
      imgTwo.src = './img/37.jpg';
      imgThree.src = './img/38.jpg';
      imgFor.src = './img/39.jpg';
      imgFive.src = './img/40.jpg';
      imgSix.src = './img/36.jpg';
      imgSeven.src = './img/37.jpg';
      imgEight.src = './img/38.jpg';
      imgNine.src = './img/39.jpg';
      imgTen.src = './img/40.jpg';

      remarkOne.textContent = "Talla S color celeste o lila";
      remarkTwo.textContent = "Talla S";
      remarkThree.textContent = "Talla S color gris";
      remarkFor.textContent = "Cualquier color";
      remarkFive.textContent = "Cualquier color";
      remarkSix.textContent = "Talla S color celeste o lila";
      remarkSeven.textContent = "Talla S";
      remarkEight.textContent = "Talla S color gris";
      remarkNine.textContent = "Cualquier color";
      remarkTen.textContent = "Cualquier color";


  break;

  case "Shirley":
      imgOne.src = './img/11.jpg';
      imgTwo.src = './img/12.jpg';
      imgThree.src = './img/13.jpg';
      imgFor.src = './img/14.jpg';
      imgFive.src = './img/15.jpg';
      imgSix.src = './img/11.jpg';
      imgSeven.src = './img/12.jpg';
      imgEight.src = './img/13.jpg';
      imgNine.src = './img/14.jpg';
      imgTen.src = './img/15.jpg';

      remarkOne.textContent = "Un enterizo talla M cualquier color";
      remarkTwo.textContent = "Una sacola talla M como este color";
      remarkThree.textContent = "Un par de tacones color negro talla 35 más o menos como este estilo que el tacón no sea muy grande talvez de 5 o 6 cm";
      remarkFor.textContent = "Talla M o calculé que me quede, cualquier color y cualquier estilo pero que sea conjunto";
      remarkFive.textContent = "Par de botines talla 35 color negro sin  mucho tacón";
      remarkSix.textContent = "Un enterizo talla M cualquier color";
      remarkSeven.textContent = "Una sacola talla M como este color";
      remarkEight.textContent = "Un par de tacones color negro talla 35 más o menos como este estilo que el tacón no sea muy grande talvez de 5 o 6 cm";
      remarkNine.textContent = "Talla M o calculé que me quede, cualquier color y cualquier estilo pero que sea conjunto";
      remarkTen.textContent = "Par de botines talla 35 color negro sin  mucho tacón";


  break;

  case "Andy":
      imgOne.src = './img/61.jpg';
      imgTwo.src = './img/62.jpg';
      imgThree.src = './img/63.jpg';
      imgFor.src = './img/64.jpg';
      imgFive.src = './img/65.jpg';
      imgSix.src = './img/61.jpg';
      imgSeven.src = './img/62.jpg';
      imgEight.src = './img/63.jpg';
      imgNine.src = './img/64.jpg';
      imgTen.src = './img/65.jpg';

      remarkOne.textContent = "Auriculares inalámbricos";
      remarkTwo.textContent = "Guantes para manejar moto creo que es talla M";
      remarkThree.textContent = "Gorra igual colores neutros";
      remarkFor.textContent = "Sudadero talla M cualquier color";
      remarkFive.textContent = "Playera talla M  colores neutros pero sin mucha serigrafía";
      remarkSix.textContent = "Auriculares inalámbricos";
      remarkSeven.textContent = "Guantes para manejar moto creo que es talla M";
      remarkEight.textContent = "Gorra igual colores neutros";
      remarkNine.textContent = "Sudadero talla M cualquier color";
      remarkTen.textContent = "Playera talla M  colores neutros pero sin mucha serigrafía";


  break;

  case "Enrique":
      imgOne.src = './img/21.jpg';
      imgTwo.src = './img/22.jpg';
      imgThree.src = './img/23.jpg';
      imgFor.src = './img/24.jpg';
      imgFive.src = './img/25.jpg';
      imgSix.src = './img/21.jpg';
      imgSeven.src = './img/22.jpg';
      imgEight.src = './img/23.jpg';
      imgNine.src = './img/24.jpg';
      imgTen.src = './img/25.jpg';

      remarkOne.textContent = "Un suéter así , si no consiguen así cualquier color La talla es M";
      remarkTwo.textContent = "Un suéter así , si no consiguen así cualquier color La talla es M";
      remarkThree.textContent = "Un suéter así , si no consiguen así cualquier color La talla es M";
      remarkFor.textContent = "Un suéter así , si no consiguen así cualquier color La talla es M";
      remarkFive.textContent = "Un suéter así , si no consiguen así cualquier color La talla es M";
      remarkSix.textContent = "Un suéter así , si no consiguen así cualquier color La talla es M";
      remarkSeven.textContent = "Un suéter así , si no consiguen así cualquier color La talla es M";
      remarkEight.textContent = "Un suéter así , si no consiguen así cualquier color La talla es M";
      remarkNine.textContent = "Un suéter así , si no consiguen así cualquier color La talla es M";
      remarkTen.textContent = "Un suéter así , si no consiguen así cualquier color La talla es M";


  break;

  case "Leidy":
      imgOne.src = './img/41.jpg';
      imgTwo.src = './img/42.jpg';
      imgThree.src = './img/43.jpg';
      imgFor.src = './img/44.jpg';
      imgFive.src = './img/45.jpg';
      imgSix.src = './img/41.jpg';
      imgSeven.src = './img/42.jpg';
      imgEight.src = './img/43.jpg';
      imgNine.src = './img/44.jpg';
      imgTen.src = './img/45.jpg';

      remarkOne.textContent = "Un teléfono";
      remarkTwo.textContent = "Un loro";
      remarkThree.textContent = "Un suéter tipo tipo deportivo talla M color rojo o negro";
      remarkFor.textContent = "Una blusa tipo deportiva talla M cualquier color";
      remarkFive.textContent = "Palazzo talla M color rojo";
      remarkSix.textContent = "Un teléfono";
      remarkSeven.textContent = "Un loro";
      remarkEight.textContent = "Un suéter tipo tipo deportivo talla M color rojo o negro";
      remarkNine.textContent = "Una blusa tipo deportiva talla M cualquier color";
      remarkTen.textContent = "Palazzo talla M color rojo";


  break;

  case "Daniel":
      imgOne.src = './img/51.jpg';
      imgTwo.src = './img/52.jpg';
      imgThree.src = './img/53.jpg';
      imgFor.src = './img/54.jpg';
      imgFive.src = './img/55.jpg';
      imgSix.src = './img/51.jpg';
      imgSeven.src = './img/52.jpg';
      imgEight.src = './img/53.jpg';
      imgNine.src = './img/54.jpg';
      imgTen.src = './img/55.jpg';

      remarkOne.textContent = "Crema para el rostro Cerave, el tamaño no importa la imagen es solo referencia puede ser una más pequeña";
      remarkTwo.textContent = "Perfume para el cabello, lo venden en Equivalenze";
      remarkThree.textContent = "Perfume Equivalenze, código número #320, en pradera lo venden  a la par de los elevadore";
      remarkFor.textContent = "Camisa Pierre Cardin, color azul pavo talla 14 Slim, con textura";
      remarkFive.textContent = "Aromatizante para vehículos, automático";
      remarkSix.textContent = "Crema para el rostro Cerave, el tamaño no importa la imagen es solo referencia puede ser una más pequeña";
      remarkSeven.textContent = "Perfume para el cabello, lo venden en Equivalenze";
      remarkEight.textContent = "Perfume Equivalenze, código número #320, en pradera lo venden  a la par de los elevadore";
      remarkNine.textContent = "Camisa Pierre Cardin, color azul pavo talla 14 Slim, con textura";
      remarkTen.textContent = "Aromatizante para vehículos, automático";

  break;

    case "Israel":
      imgOne.src = './img/56.jpg';
      imgTwo.src = './img/57.jpg';
      imgThree.src = './img/58.jpg';
      imgFor.src = './img/59.jpg';
      imgFive.src = './img/60.jpg';
      imgSix.src = './img/56.jpg';
      imgSeven.src = './img/57.jpg';
      imgEight.src = './img/58.jpg';
      imgNine.src = './img/59.jpg';
      imgTen.src = './img/60.jpg';

      remarkOne.textContent = "Playeras lisas de Pierre Cardin En color negro y azul 💙 o las mismas de la imagen, talla M";
      remarkTwo.textContent = "Si optan por esta opción, sería este igualito por qué en esa página de facebook ('Anacate') venden otro Pero es de carga lenta.";
      remarkThree.textContent = "Primer opción Prefiero a Loki";
      remarkFor.textContent = "Segunda opción, si dan los 2 mejor";
      remarkFive.textContent = "Los Funkos pop los encuentran en esta página";
      remarkSix.textContent = "Playeras lisas de Pierre Cardin En color negro y azul 💙 o las mismas de la imagen, talla M";
      remarkSeven.textContent = "Si optan por esta opción, sería este igualito por qué en esa página de facebook ('Anacate') venden otro Pero es de carga lenta.";
      remarkEight.textContent = "Primer opción Prefiero a Loki";
      remarkNine.textContent = "Segunda opción, si dan los 2 mejor";
      remarkTen.textContent = "Los Funkos pop los encuentran en esta página";


  break;

    case "Yaneth":
      imgOne.src = './img/31.jpg';
      imgTwo.src = './img/32.jpg';
      imgThree.src = './img/33.jpg';
      imgFor.src = './img/34.jpg';
      imgFive.src = './img/35.jpg';
      imgSix.src = './img/31.jpg';
      imgSeven.src = './img/32.jpg';
      imgEight.src = './img/33.jpg';
      imgNine.src = './img/34.jpg';
      imgTen.src = './img/35.jpg';

      remarkOne.textContent = "Palazzo talla S";
      remarkTwo.textContent = "Blusa talla S puede ser blanco o negro";
      remarkThree.textContent = "Enterizo talla S";
      remarkFor.textContent = "Talla S";
      remarkFive.textContent = "Talla S";
      remarkSix.textContent = "Palazzo talla S";
      remarkSeven.textContent = "Blusa talla S puede ser blanco o negro";
      remarkEight.textContent = "Enterizo talla S";
      remarkNine.textContent = "Talla S";
      remarkTen.textContent = "Talla S";


  break;

    case "Ines":
      imgOne.src = './img/26.jpg';
      imgTwo.src = './img/27.jpg';
      imgThree.src = './img/28.jpg';
      imgFor.src = './img/29.jpg';
      imgFive.src = './img/30.jpg';
      imgSix.src = './img/26.jpg';
      imgSeven.src = './img/27.jpg';
      imgEight.src = './img/28.jpg';
      imgNine.src = './img/29.jpg';
      imgTen.src = './img/30.jpg';

      remarkOne.textContent = "Calzado de este tipo";
      remarkTwo.textContent = "Delantal tipico";
      remarkThree.textContent = "Sueter de lana";
      remarkFor.textContent = "Faja, preguntar a Leidy o Yaneth cual color seria mejor";
      remarkFive.textContent = "Radio, que sea facil para que ella lo maneje, en radio shack esta este y no es muy caro";
      remarkSix.textContent = "Calzado de este tipo";
      remarkSeven.textContent = "Delantal tipico";
      remarkEight.textContent = "Sueter de lana";
      remarkNine.textContent = "Faja, preguntar a Leidy o Yaneth cual color seria mejor";
      remarkTen.textContent = "Radio, que sea facil para que ella lo maneje, en radio shack esta este y no es muy caro";
  break;

      case "Juan":
      imgOne.src = './img/46.jpg';
      imgTwo.src = './img/47.jpg';
      imgThree.src = './img/48.jpg';
      imgFor.src = './img/49.jpg';
      imgFive.src = './img/50.jpg';
      imgSix.src = './img/46.jpg';
      imgSeven.src = './img/47.jpg';
      imgEight.src = './img/48.jpg';
      imgNine.src = './img/49.jpg';
      imgTen.src = './img/50.jpg';

      remarkOne.textContent = "Botas de hule color azul marino, que no sea del mercado Numero 39";
      remarkTwo.textContent = "Un perfume Equivalenze, en pradera de 30ml el aroma sería #320";
      remarkThree.textContent = "Un Chaleco blanco y negro de lana";
      remarkFor.textContent = "Un par de botines color negro Numero 39";
      remarkFive.textContent = "Almohada Ortopedica, imagen solo de referencia";
      remarkSix.textContent = "Botas de hule color azul marino, que no sea del mercado Numero 39";
      remarkSeven.textContent = "Un perfume Equivalenze, en pradera de 30ml el aroma sería #320";
      remarkEight.textContent = "Un Chaleco blanco y negro de lana";
      remarkNine.textContent = "Un par de botines color negro Numero 39";
      remarkTen.textContent = "Almohada Ortopedica, imagen solo de referencia";
  break;

      default:
      imgOne.src = './img/66.jpg';
      imgTwo.src = './img/67.jpg';
      imgThree.src = './img/68.jpg';
      imgFor.src = './img/69.jpg';
      imgFive.src = './img/70.jpg';
      imgSix.src = './img/70.jpg';
      imgSeven.src = './img/69.jpg';
      imgEight.src = './img/68.jpg';
      imgNine.src = './img/67.jpg';
      imgTen.src = './img/66.jpg';

      remarkOne.textContent = "Sin Comentario";
      remarkTwo.textContent = "Sin Comentario";
      remarkThree.textContent = "Sin Comentario";
      remarkFor.textContent = "Sin Comentario";
      remarkFive.textContent = "Sin Comentario";
      remarkSix.textContent = "Sin Comentario";
      remarkSeven.textContent = "Sin Comentario";
      remarkEight.textContent = "Sin Comentario";
      remarkNine.textContent = "Sin Comentario";
      remarkTen.textContent = "Sin Comentario";
      status="no";
  
}



if (status=="si") {
  const enlace = document.getElementById('miEnlace');
  enlace.click();
}

}



