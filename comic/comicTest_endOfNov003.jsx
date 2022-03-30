// MÆNA SCRIPT TEMPLATE - S Rees 2019
// Based on simplebasilbook by Golan Levin


#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

// Load a data file containing your book's content. This is expected
// to be located in the "data" folder adjacent to your .indd and .jsx. 
// In this example (an alphabet book), our data file looks like:
// [
//    {
//      "title": "A",
//      "image": "a.jpg",
//      "caption": "Ant"
//    }
// ]
var jsonString = b.loadString("book_content.json");
var jsonData;

//--------------------------------------------------------
function setup() {

  // Clear the document at the very start. 
  b.clear (b.doc());

  // Make a title page. 
  b.fill(0,0,0);
  b.textSize(24);
  b.textFont("Helvetica","Light"); 
  b.textAlign(Justification.LEFT_ALIGN); 
  b.text("Generative Mæna Sample", 72,72,360,36);


  
  // Parse the JSON file into the jsonData array
  jsonData = b.JSON.decode( jsonString );
  b.println("Number of elements in JSON: " + jsonData.length);


  // Initialize some variables for element placement positions.
  // Remember that the units are "points", 72 points = 1 inch.
  var titleX = 72; 
  var titleY = 72;
  var titleW = 72;
  var titleH = 72;

  var captionX = 72; 
  var captionY = b.height - 108;
  var captionW = b.width-144;
  var captionH = 36;

  var imageX = b.random(20,500); 
  var imageY = b.random(20,500); 
  var imageW = 50*4.5; 
  var imageH = 50*4.5; 


  // Loop over every element of the book content array
  // (Here assumed to be separate pages)
  for (var n = 1; n < 3; n++) {

    // Create the next page. 
    b.addPage();

    var j = b.round(b.random(1, 50));
    var k = b.round(b.random(1, 80));

    // Load an image from the "images" folder inside the data folder;
    // Display the image in a large frame, resize it as necessary. 
    b.noStroke();  // no border around image, please.
    var anImageFilename = "images/" + "00" + j + ".bmp" ; 
    var anImage = b.image(anImageFilename, b.random(20,100), b.random(20,100), b.random(120,180), b.random(120,180));
    //b.rotate(anImage, b.random(20,50));
    anImage.fit(FitOptions.PROPORTIONALLY);
    
    var onImageFilename = "images/" + "00" + k + ".bmp" ; 
    var onImage = b.image(onImageFilename, b.random(100,200), b.random(20,100), b.random(120,180), b.random(120,180));
    //b.rotate(anImage, b.random(20,50));
    onImage.fit(FitOptions.PROPORTIONALLY);

    // Load an image from the "images" folder inside the data folder;
    // Display the image in a large frame, resize it as necessary. 
    b.noStroke();  // no border around image, please.
    var anImageFilename = "images/" + "00" + j + ".bmp" ; 
    var anImage = b.image(anImageFilename, b.random(20,100), b.random(300,400), b.random(120,180), b.random(120,180));
    //b.rotate(anImage, b.random(20,50));
    anImage.fit(FitOptions.PROPORTIONALLY);
    
    var onImageFilename = "images/" + "00" + k + ".bmp" ; 
    var onImage = b.image(onImageFilename, b.random(100,200), b.random(300,400), b.random(120,180), b.random(120,180));
    //b.rotate(anImage, b.random(20,50));
    onImage.fit(FitOptions.PROPORTIONALLY);


    // Load an image from the "images" folder inside the data folder;
    // Display the image in a large frame, resize it as necessary. 
    b.noStroke();  // no border around image, please.
    var anImageFilename = "images/" + "00" + j + ".bmp" ; 
    var anImage = b.image(anImageFilename, b.random(20,100), b.random(600,700), b.random(120,180), b.random(120,180));
    //b.rotate(anImage, b.random(20,50));
    anImage.fit(FitOptions.PROPORTIONALLY);
    
    var onImageFilename = "images/" + "00" + k + ".bmp" ; 
    var onImage = b.image(onImageFilename, b.random(100,200), b.random(600,700), b.random(120,180), b.random(120,180));
    //b.rotate(anImage, b.random(20,50));
    onImage.fit(FitOptions.PROPORTIONALLY);

    // Load an image from the "images" folder inside the data folder;
    // Display the image in a large frame, resize it as necessary. 
    b.noStroke();  // no border around image, please.
    var anImageFilename = "images/" + "00" + j + ".bmp" ; 
    var anImage = b.image(anImageFilename, b.random(250,350), b.random(20,100),b.random(120,180), b.random(120,180));
    //b.rotate(anImage, b.random(20,50));
    anImage.fit(FitOptions.PROPORTIONALLY);
    
    var onImageFilename = "images/" + "00" + k + ".bmp" ; 
    var onImage = b.image(onImageFilename, b.random(350,450), b.random(20,100), b.random(120,180), b.random(120,180));
    //b.rotate(anImage, b.random(20,50));
    onImage.fit(FitOptions.PROPORTIONALLY);
 
    // Load an image from the "images" folder inside the data folder;
    // Display the image in a large frame, resize it as necessary. 
    b.noStroke();  // no border around image, please.
    var anImageFilename = "images/" + "00" + j + ".bmp" ; 
    var anImage = b.image(anImageFilename, b.random(250,350), b.random(300,400),b.random(120,180), b.random(120,180));
    //b.rotate(anImage, b.random(20,50));
    anImage.fit(FitOptions.PROPORTIONALLY);
    
    var onImageFilename = "images/" + "00" + k + ".bmp" ; 
    var onImage = b.image(onImageFilename, b.random(350,450), b.random(300,400), b.random(120,180), b.random(120,180));
    //b.rotate(anImage, b.random(20,50));
    onImage.fit(FitOptions.PROPORTIONALLY);


      // Load an image from the "images" folder inside the data folder;
    // Display the image in a large frame, resize it as necessary. 
    b.noStroke();  // no border around image, please.
    var anImageFilename = "images/" + "00" + j + ".bmp" ; 
    var anImage = b.image(anImageFilename, b.random(250,350), b.random(600,700), b.random(120,180), b.random(120,180));
    //b.rotate(anImage, b.random(20,50));
    anImage.fit(FitOptions.PROPORTIONALLY);
    
    var onImageFilename = "images/" + "00" + k + ".bmp" ; 
    var onImage = b.image(onImageFilename, b.random(350,450), b.random(600,700), b.random(120,180), b.random(120,180));
    //b.rotate(anImage, b.random(20,50));
    onImage.fit(FitOptions.PROPORTIONALLY);

      // HORIZONTAL BLACK COLUMNS
    b.rect(0,0,600,75); // like b.ellipse() but for rectangles    
    b.fill(0); // same as b.color(), but sets the color as fill color 
       b.rect(0,250,600,75); // like b.ellipse() but for rectangles    
    b.fill(0); // same as b.color(), but sets the color as fill color 

       b.rect(0,500,600,75); // like b.ellipse() but for rectangles    
    b.fill(0); // same as b.color(), but sets the color as fill color 
    b.rect(0,750,600,100); // like b.ellipse() but for rectangles    
    b.fill(0); // same as b.color(), but sets the color as fill color 

    // VERTICAL BLACK COLUMNS

    b.rect(0,0,20,800); // like b.ellipse() but for rectangles    
    b.fill(0); // same as b.color(), but sets the color as fill color 
    
    b.rect(287,0,20,800); // like b.ellipse() but for rectangles    
    b.fill(0); // same as b.color(), but sets the color as fill color 
    
    b.rect(575,0,20,800); // like b.ellipse() but for rectangles    
    b.fill(0); // same as b.color(), but sets the color as fill color 
    
          
      // Load
      var romeoString= b.loadString("Romeo.txt");
      b.println(b.isString(romeoString));
      var romeoArray = b.split(romeoString, " ")
      b.println(b.isArray(romeoArray));

  
      for( var i = 0; i < 20; i++){ 
         
            if (romeoArray[i] == "Romeo,") {
                romeoArray[i] = "Filing Cabinet,";
            }
        
            else if (romeoArray[i] == "Romeo?") {
                romeoArray[i] = "Filing Cabinet?";
            }
           
           else if (romeoArray[i] == "ROMEO") {
                romeoArray[i] = "FILING CABINET";
            }
        
           else if (romeoArray[i] == " ROMEO.") {
                romeoArray[i] = "FILING CABINET.";
            }
           else if (romeoArray[i] == "Romeo") {
                romeoArray[i] = "Filing Cabinet";
            }
           else if (romeoArray[i] == "Romeo. ") {
                romeoArray[i] = "Filing Cabinet.";
            }       
            else {
                    romeoArray[i] = b.trimWord(romeoArray[i]);
                }  
            
         }
       
  
    var romeoFinal = b.join(romeoArray, " ");
        
    //LOAD IN THE TEXT
    b.textSize(12);
    var myFrame1 = b.text(romeoFinal, 30, 260, 250, 60);
    b.typo(myFrame1, 'fillColor', b.color(255,255,255));
    
    var myFrame2 = b.text("", 330,260,250, 60);
        b.typo(myFrame2, 'fillColor', b.color(255,255,255));

    b.linkTextFrames(myFrame1, myFrame2);

    var myFrame3 = b.text("", 30,510,250, 60);
        b.typo(myFrame3, 'fillColor', b.color(255,255,255));


        b.linkTextFrames(myFrame2, myFrame3);

    var myFrame4 = b.text("", 330,510,250, 60);
        b.typo(myFrame4, 'fillColor', b.color(255,255,255));


        b.linkTextFrames(myFrame3, myFrame4);

    var myFrame5 = b.text("", 30,760,250, 60);
        b.typo(myFrame5, 'fillColor', b.color(255,255,255));


        b.linkTextFrames(myFrame4, myFrame5);

    var myFrame6 = b.text("", 330,760,250, 60);
    
       b.typo(myFrame6, 'fillColor', b.color(255,255,255));


        b.linkTextFrames(myFrame5, myFrame6);  
        
   
   
}
    b.rect(x, y, j, size);
    

    b.rotate(b.random(0,360));
        }
*/

  };
}

// This makes it all happen:
b.go(); 
