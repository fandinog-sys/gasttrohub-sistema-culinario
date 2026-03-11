package recetas;

public class Receta {

private String nombre;
private String ingredientes;
private double costo;
private String dificultad;
private String pasos;
private boolean verificada;

public Receta(String nombre,String ingredientes,double costo,String dificultad,String pasos){

this.nombre=nombre;
this.ingredientes=ingredientes;
this.costo=costo;
this.dificultad=dificultad;
this.pasos=pasos;
this.verificada=false;

}

public void verificar(){

verificada=true;

}

public String getNombre(){
return nombre;
}

public String getIngredientes(){
return ingredientes;
}

public double getCosto(){
return costo;
}

}