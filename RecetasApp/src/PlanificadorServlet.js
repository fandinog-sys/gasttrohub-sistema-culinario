package recetas;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class PlanificadorServlet extends HttpServlet{

protected void doGet(HttpServletRequest request,
HttpServletResponse response)
throws ServletException,IOException{

response.getWriter().println("Lista de compras generada");

}

}