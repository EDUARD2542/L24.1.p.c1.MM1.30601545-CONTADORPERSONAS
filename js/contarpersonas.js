export default class Cl_contarpersonas {
    constructor() {
        this.contar = 0;
        this.contarHombres = 0;
        this.contarMujeres = 0;
    }
procesarPersonas(persona){
    this.contar++;
    if(persona.sexo === "M"){
        this.contarHombres++;
        }
    else if(persona.sexo === "F"){
        this.contarMujeres++;
        }
    }
devolverContador(){
    return this.contar;
    }
devolverContarHombres(){
    return this.contarHombres;
    }
devolverContarMujeres(){
    return this.contarMujeres;
}    

}    