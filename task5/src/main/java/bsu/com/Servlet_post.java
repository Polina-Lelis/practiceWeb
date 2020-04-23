package main.java.bsu.com;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

public class Servlet_Post extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        Enumeration<String> ParameterNames = request.getParameterNames();
        out.print("{");
        while (ParameterNames.hasMoreElements()){
            String name = ParameterNames.nextElement();
            String value = request.getParameter(name);
            out.print("\"" + name + "\"" + ":" + "\"" + value + "\""  + ";\n\t");

        }
        out.print("\" success\":true}");
        out.flush();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
