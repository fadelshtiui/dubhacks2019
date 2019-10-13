import java.util.*;
import java.io.*;

public class Validate {
 
   public static void main(String[] arg) throws FileNotFoundException {
      Scanner inFile = new Scanner(new FileReader("test.txt"));
      String text = "";
      while(inFile.hasNextLine()) {
         text += inFile.nextLine();
      }
      Stack<String> tags = new Stack<String>();
      int beginningIndex = 0;
      int endingIndex = 0;
      int[] errors = new int[3]; // {unclosed tags, closing tags without beginning, mismatched tags} 
      
      for(int i = 0; i < text.length(); i++) {
         if (text.charAt(i) == '<') {
            beginningIndex = i;
         } else if (text.charAt(i) == '>') {
            endingIndex = i;
            String currentTag = text.substring(beginningIndex + 1, endingIndex);
            if (currentTag.charAt(0) == '/') {
               if(!tags.isEmpty()) {
                  String lastSeen = tags.pop();       
                  if (!lastSeen.equals(currentTag.substring(1))) {
                     errors[2] = errors[2] + 1;
                     System.out.println("You have mismatched a <" + lastSeen + "> tag with a <"
                                        + currentTag + "> tag.");
                  }
               } else {
                  errors[1] = errors[1] + 1;
               }
            } else {
               tags.push(text.substring(beginningIndex + 1, endingIndex));
            }
         }
      }
      errors[0] = tags.size();
      System.out.println("You have " + errors[0] + " unclosed tags, they are" + 
                         Arrays.toString(tags.toArray()));
      System.out.println("You have " + errors[1] + " ending tags without starting tags");
      System.out.println("You have " + errors[2] + " mismatched tags");
                         
      
   } 
   
}