package recetas;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class RecetaServlet extends HttpServlet{

protected void doPost(HttpServletRequest request,
HttpServletResponse response)
throws ServletException,IOException{

String nombre=request.getParameter("nombre");
String ingredientes=request.getParameter("ingredientes");
double costo=Double.parseDouble(request.getParameter("costo"));

Receta receta=new Receta(nombre,ingredientes,costo,"Facil","");

response.getWriter().println("Receta registrada: "+receta.getNombre());

}

}