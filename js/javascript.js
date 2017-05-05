function pokemon(nombre, color, poderDeAtaque){
	/*funcion constructora*/

	this.nombre=nombre;
	this.color=color;
	this.nivelDeAmistad = 0;
	this.vida= 100;
	/*nombre, color, nivelDeAmistad y vida son propiedades*/

	
	this.poderDeAtaque= poderDeAtaque;
	
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad+ valor
    /* este método aumenta el valor nivelDeAmistad (que parte en cero)*/		
	}

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque
		/* este método le resta a la vida el poder de ataque de su contrincante*/
	}
}
function fight(){}

const picachu = new pokemon("picachu", "amarillo", 1000);
const charmander = new pokemon("charmander", "rojo", 200);
const nidoran = new pokemon("nidoran", "morado", 200);
const togepi = new pokemon("togepi", "huevito", 10);
const mewtwo = new pokemon("mewtwo","lila", 5000);
const dragonite = new pokemon("dragonite", "naranjo", 4000);
const rattata = new pokemon("rattata", "morado", 100000);
const  ditto = new pokemon("ditto", "lila", 300)


var pokemon1= document.getElementById("poke");
var pokemon2= document.getElementById("poke2");
	 
  if (pokemon1 === pokemon2) { 
    alert("¡no debes luchar contigo mismo!");
  } else {
   /*aqui tengo que hacer que peleen*/
  } 

this.mostrarPokemon= function(){
		return(pokemon1 +"atacó a "+ pokemon2 + "y"+ pokemon2 + "le quedan" + vida + "puntos de vida");
	}

picachu.atacar(charmander);
return(charmander.vida);

togepi.atacar(nidoran);
return(nidoran.vida);


}



