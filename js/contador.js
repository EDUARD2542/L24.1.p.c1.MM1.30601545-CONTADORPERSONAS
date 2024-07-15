export default class Cl_persona{
    constructor(nombre,sexo){
        this.nombre = nombre;
        this.sexo = sexo;
    }
set nombre(nom){
    this._nombre = nom;
    }
get nombre(){
    return this._nombre;
    }
set sexo(s){
    this._sexo = s;
    }
get sexo(){
    return this._sexo;

    }
}    