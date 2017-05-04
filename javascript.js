function pokemon(nombre, color, poderDeAtaque){
	/*funcion constructora*/

	this.nombre=nombre;
	this.color=color;
	this.nivelDeAmistad = 0;
	this.vida= 100;
	/*nombre, color, nivelDeAmistad y vida son propiedades*/

	
	this.poderDeAtaque= poderDeAtaque;
	this.mostrarPokemon= function(){
		return("hola soy:"+ this.nombre + "y soy de color"+ this.color);
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad+ valor
    /* este método aumenta el valor nivelDeAmistad (que parte en cero)*/		
	}

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque
		/* este método le resta a la vida el poder de ataque de su contrincante*/
	}
}

const picachu = new pokemon("picachu", "amarillo", 100);
const charmander = new pokemon("charmander", "rojo", 20);
const nidoran = new pokemon("nidoran", "morado", 200);
const togepi = new pokemon("togepi", "huevito", 10);


picachu.atacar(charmander);
console.log(charmander.vida);

togepi.atacar(nidoran);
console.log(nidoran.vida);

