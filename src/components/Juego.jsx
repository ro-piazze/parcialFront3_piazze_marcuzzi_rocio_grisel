import React, {Component} from "react";
import Historia from "./Historia";
import OpcionBoton from "./OpcionBoton";
import Recordatorio from "./Recordatorio";

class Juego extends Component {
    state = {
     pagina:1,
     opcionActual:"1",
     historiaActual:{
         historia:"",
         opciones:{
             "a":"",
             "b":""
         }
     },
     ultimaOpcion:"",
     historialOpciones:[]
    };


constructor(props){
    super(props)

    this.clickBoton = this.clickBoton.bind(this);
}


buscarHistoria() {
    let historias = [
      {
        id: "1",
        historia:
          "Un día como cualquiera te vas a dormir, lo siguiente que sabes es que te despertas en el medio de un bosque.",
        opciones: {
          a: "Pedir ayuda a los gritos.",
          b: "Mirar a mi alrededor.",
        },
      },
      {
        id: "2a",
        historia:
          "Instantáneamente entras en pánico por lo bizarro de la situación y gritas: -Aiiudaaaa. Nadie responde. Detrás de un árbol enfrente tuyo se asoma lo que parece ser una bola de pelo de 2 metros.",
        opciones: {
          a: "Te levantás y caminás lentamente hacia atrás.",
          b: "Te levantás y salís corriendo.",
        },
      },
      {
        id: "2b",
        historia:
          "Miras a tu alrededor y ves solo árboles, plantas y hongos, Detrás de un árbol enfrente tuyo se asoma lo que parece ser una bola de pelo de 2 metros.",
        opciones: {
          a: "Te levantás y caminás lentamente hacia atrás.",
          b: "Te levantás y salís corriendo.",
        },
      },
      {
        id: "3a",
        historia:
          "Lento y sin sacarle la mirada de encima te vas alejando de la cosa peluda. Ves que de golpe se mueve y empieza a correr hacia vos, no distinguis que es pero salis corriendo. Escuchas de golpe un grito proveniente de la cosa peluda: -Esperaaa!!",
        opciones: {
          a: "Le haces caso y esperas.",
          b: "Mira si voy a esperar, sigo corriendo.",
        },
      },
      {
        id: "3b",
        historia:
          "Al levantarte ves que se mueve y empieza a correr hacia vos, no distinguís que és pero salís corriendo pensando que puede ser un oso. Escuchas de golpe un grito proveniente de la cosa peluda: -Esperaaa!!",
        opciones: {
          a: "Le haces caso y esperas.",
          b: "Mira si voy a esperar, sigo corriendo.",
        },
      },
      {
        id: "4a",
        historia:
          "Paras de correr y al darte vuelta con algo de miedo ves que lo que te perseguía se detiene, te quedas sin palabras al ver que es un oso gigante con la cara de una señora muy maquillada que te dice; -Si querés llorar, llora pero estás en un sueño mi amor.",
        opciones: {
          a: "Me río en la cara del oso-señora.",
          b: "Me pongo a bailar.",
        },
      },
      {
        id: "4b",
        historia:
          "El miedo no deja tu cuerpo y hace bien así que seguís corriendo, sin darte cuenta te tropezas con una piedra y quedas de cara con lo que te perseguía, lo que ves es ridículo, un oso gigante con la cara de una señora muy maquillada que te dice; -Si querés llorar, llora pero estás en un sueño mi amor.",
        opciones: {
          a: "Me río en la cara del oso-señora.",
          b: "Me pongo a bailar.",
        },
      },
      {
        id: "5a",
        historia:
          "Te empezas a reir como nunca, y de una forma bastante molesta la verdad. El oso-señora se cansa de vos y te da una sólida bofetada en la cara con su brazo de 60kg que te tuerce el cuello y te despierta instantáneamente. FIN.",
        opciones: { a: "FIN.", b: "FIN." },
      },
      {
        id: "5b",
        historia:
          "Por alguna razón decidís ponerte a bailar, el oso-señora no entiende porqué, los animales del bosque no entienden porqué, yo que escribo esto no entiendo porqué, nadie entiende porqué. El oso-señora se cansa de tu bailecito y te da una sólida bofetada en la cara con su brazo de 60kg que te tuerce el cuello y te despierta instantáneamente. FIN.",
        opciones: { a: "FIN", b: "FIN" },
      },
    ];

    let historiaElegida = historias.filter((historia) => {
      if (historia.id === this.state.opcionActual) {
        return historia;
      }
    });


    this.setState({
      historiaActual: historiaElegida[0]
    })
  }


  //Funcion para atender el evento del boton
  clickBoton(letra){

    //Primero saber si la la historia termino
    if(this.state.historiaActual.opciones.b == "FIN" || this.state.historiaActual.opciones.a == "FIN."){
      alert("Muchas gracias por jugar :)");

    }else{
      // Cada que se presiona el boton, se aumenta la pagina
      let auxPagina = this.state.pagina + 1;

      // Armar la nueva opcion elegida (opcionActual)
      let auxopcionActual = `${auxPagina}${letra}`
      
      // Guardar la letra actual en el historial
      let auxHistorialOpciones = this.state.historialOpciones;
      // Descarto mi valor por defecto
      if(this.state.ultimaOpcion != ""){
        auxHistorialOpciones.push(this.state.ultimaOpcion);
      }

      this.setState({
        ultimaOpcion: letra,
        historialOpciones: auxHistorialOpciones,
        pagina: auxPagina,
        opcionActual: auxopcionActual
      },this.buscarHistoria)
    }

  }

  // Antes de que se muestre la pagina al usuario, hacer lo que hay dentro
  componentDidMount(){
    this.buscarHistoria()
  }

  render() {
    return (
      <div className='layout'>
        <Historia historia={this.state.historiaActual.historia} />
        <div className="opciones">
          <OpcionBoton letra="a" texoOpcion={this.state.historiaActual.opciones.a} fnClick={this.clickBoton}/>
          <OpcionBoton letra="b" texoOpcion={this.state.historiaActual.opciones.b} fnClick={this.clickBoton}/>
        </div>
        <Recordatorio ultimaOpcion={this.state.ultimaOpcion} historial={this.state.historialOpciones}/>
      </div>
    );
  }

}

export default Juego;