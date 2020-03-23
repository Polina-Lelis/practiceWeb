import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

public class Servlet extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        String name = request.getParameter("name");
        PrintWriter pw = response.getWriter();
        String path = request.getServletPath();
        pw.println("<html>");
        pw.println("<h1> Name is" + " " + name + "</h1>");
        pw.println("</html>");
    }
}
