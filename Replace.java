import java.util.*;
import java.io.*;


public class Replace {
   public static void main(String[] args) throws FileNotFoundException {
      Scanner console = new Scanner(System.in);
      String text = ""; // Place your website text here
      File fileInput = analyze(console, text);
      print(fileInput, console);
   }
   // checks if file is found in the correct directory
   // takes an html file that is converted to .txt
   public static File analyze(Scanner console, String text) {
      System.out.println("Copy and paste your code in a new file in .txt and in the same directory");
      System.out.print("Input file name: ");
      File fileInput = new File(console.nextLine());
      while (!fileInput.exists()) {
         System.out.print("File not found. Try again: ");
         fileInput = new File(console.nextLine());
      }
      return fileInput;
   }
   
   // scans through the entire txt file 
   // replaces various instances to make the html code more readable
   public static void print(File fileInput, Scanner console)throws FileNotFoundException {
      File fileOutput = new File("output.txt");
      Scanner searchLine = new Scanner(fileInput);
      PrintStream misterFile = new PrintStream(fileOutput);

      while (searchLine.hasNextLine()) {
         String searchToken = searchLine.nextLine(); 
         searchToken = searchToken.replace("<b>", "<strong>");
         searchToken = searchToken.replace("</b>", "</strong>");
         searchToken = searchToken.replace("<i>", "<em>");
         searchToken = searchToken.replace("</i>", "</em>");
         misterFile.println(searchToken);
      }
   }
}
