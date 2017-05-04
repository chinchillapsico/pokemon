function pokemon(nombre, color) {
	/*funcion constructora*/

	this.nombre=nombre;
	this.color=color;
	this.nivelDeAmistad = 0;
	this.vida= 100;
	/*nombre, color, nivelDeAmistad y vida son propiedades*/

	
	this.poderDeAtaque= poderDeAtaque;
	this.mostrarPokemon(){
		return ("hola soy:"+ this.nombre + "y soy de color"+ this.color)
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad+ valor;
    /* este método aumenta el valor nivelDeAmistad (que parte en cero)*/		
	}

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
	}
}

var picachu =
