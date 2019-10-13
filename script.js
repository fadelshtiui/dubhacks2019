(function() {

     "use strict";

     window.onload = function() {
          $("analyze").onclick = function() {
               let text = $("input").innerText.trim();
               analyzeHTML(text);
               /*
               if ($("css").checked) {
                    analyzeCSS(text);
               }
               */
          };
     };

     // returns an array with the following format:
     // [(true|false), (true|false), (true|false), (true|false), (true|false), (true|false),
     // (true|false), (true|false), (true|false), (1|2|3|4|5)]
     // The indices in the array correspond to:
     // 0 -> true if the given HTML text uses deprecated tags
     // 1 -> true if the given HTML text is missing descriptive headers
     // 2 -> true if the given HTML text doesn't use HTML5 semantic tags
     // 3 -> true if any img tags are missing an alt attribute
     // 4 -> true if html tag is missing a lang attribute
     // 5 -> true if the website has moving text
     // 6 -> true if the given HTML text missing labels
     // 7 -> true if the given HTML text is missing captions
     // 8 -> true if the given HTML is missing a title tag
     function analyzeHTML(text) {

          // str.match(/ain/g) -> returns an array of occurrences of "ain" in str
          // str.includes("text") -> returns true if str includes "text" as substring
          // str.search("text") -> returns the first occurence of "text" in str

          let errorArray = [];
          let errors = 0;

          let usesDeprecatedTags = false;
          if (text.includes("</s>") || text.includes("</s>")) {
               usesDeprecatedTags = true;
               errors++;
          }
          if (text.includes("<u>") || text.includes("</u>")) {
               usesDeprecatedTags = true;
               errors++;
          }
          if (text.includes("<b>") || text.includes("</b>")) {
               usesDeprecatedTags = true;
               errors++;
          }
          if (text.includes("<i>") || text.includes("</i>")) {
               usesDeprecatedTags = true;
               errors++;
          }
          if (text.includes("<tt>") || text.includes("</tt>")) {
               usesDeprecatedTags = true;
               errors++;
          }

          errorsArray.push(usesDeprecatedTags);

          boolean missingHeaders = false;
          if (!text.includes("</h1>") && !text.includes("</h2>") && !text.includes("</h3>")
               && !text.includes("</h4>") && !text.includes("</h5>") && !text.includes("</h6>")) {
               errors++;
               missingHeaders = true;
          }

          errorsArray.push(missingHeaders);

          let missingSemanticTags = false;
          if (!text.includes("<article>") && !text.includes("<aside>") &&
               !text.includes("<details>") && !text.includes("<figcaption>") &&
               !text.includes("<figcaption>") && !text.includes("<figure>") &&
               !text.includes("<footer>") && !text.includes("<header>") &&
               !text.includes("<main>") && !text.includes("<mark>") &&
               !text.includes("<nav>") && !text.includes("<section>") &&
               !text.includes("<summary>") && !text.includes("<time>")) {
               missingSemanticTags = true;
          }

          errorsArray.push(missingSemanticTags);

          let missingAltAttribute = false;
          if (missingAttribute("<img", "alt", text)) {
               missingAltAttribute = true;
               errors++;
          }

          errorsArray.push(missingAltAttribute);

          let missingLangAttribute = false;
          if (missingAttribute("<html", "lang", text)) {
               errors++;
               missingLangAttribute = true;
          }

          errorsArray.push(missingLangAttribute);

          let movingText = false;
          if (text.includes("<marquee>") || text.includes("</marquee>")) {
               movingText = true;
               errors++;
          }

          errorsArray.push(movingText);

          let missingLabels = false;
          if (text.includes("<label>") || text.includes("</label>")) {
               missingLabels = true;
               errors++;
          }

          errorsArray.push(missingLabels);

          let missingCaptions = false;
          if (text.includes("<caption>") || text.includes("</caption>")) {
               missingCaptions = true;
               errors++;
          }

          errorsArray.push(missingCaptions);

          let missingTitle = false;
          if (text.includes("<title>") || text.includes("</title>")) {
               missingTitle = true;
               errors++;
          }

          errorsArray.push(missingTitle);
     }

     function missingAttribute(element, attribute, text) {
          let index = text.search(element);
          if (index > -1) {
               let subtext = text.substring(index);
               let endOfTag = subtext.search(">");
               subtext = text.substring(0, endOfTag);
               if (!endOfTag.includes(attribute)) {
                    return true;
               }
          }
          return false;
     }

     function $(id) {
          return document.getElementById(id);
     }

})();
