// Basic book TEMPLATE - S Rees 2022
// Adapted on simplebasilbook by Golan Levin


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
var jsonString = b.loadString("book_content3.json");
var jsonData;

//--------------------------------------------------------
function setup() {

  // Clear the document at the very start. 
  b.clear (b.doc());

  // Make a title page. 
  b.fill(0,0,0);
  b.textSize(100);
  b.textFont("Helvetica","Light"); 
  b.textAlign(Justification.LEFT_ALIGN); 
  b.text("LOREM IPSUM", 72,72,360,36);


  
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
  var imageW = 72*4.5; 
  var imageH = 72*4.5; 



  ////////////////////////////////////////////////
  // Loop over every element of the book content array
  // (Here assumed to be separate pages)
  ////////////////////////////////////////////////
  for (var i = 0; i < jsonData.length; i++) {

    
    // Create the next page. 
    b.addPage();

    ////////////////////////////////////////////////////////////////////////////////////////////////
    // Load an image from the "images" folder inside the data folder;
    // Display the image in a large frame, resize it as necessary. 
    ////////////////////////////////////////////////////////////////////////////////////////////////
    b.noStroke();  // no border around image, please.
    var anImageFilename = "images/" + jsonData[i].image;
    var anImage = b.image(anImageFilename, b.random(0,50), b.random(0,200), b.random(200,1000), b.random(500,2000));
    //b.rotate(anImage, b.random(20,50));
    anImage.fit(FitOptions.PROPORTIONALLY);


    ////////////////////////////////////////////////
    // Create textframes for the "title" field.
    ////////////////////////////////////////////////
    b.fill(0);
    b.textSize(50);
    b.textFont("Snell Roundhand","Bold"); 
    b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN );
    var title = b.text(jsonData[i].title, b.random(100,200),b.random(200),300,titleH);
    //b.rotate(title, b.random(-10,10));


    ////////////////////////////////////////////////            
    // Create textframes for the "caption" fields
    ////////////////////////////////////////////////
    b.fill(0);
    b.textSize(100);
    b.textFont("Helvetica","Regular"); 
    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN );
    var body = b.text(jsonData[i].caption, b.random(20,50),b.random(50, 100),300,captionH);
    
    b.typo( body, "skew", b.random(-80,80)); 
    
    
    ////////////////////////////////////////////////
    // Draw two textframes ( at a random x coordinate between 0 and width of page,....at a random y coordinate between 0 and height of page....size 200 x 700 )
    // Rotate random amount 
    ////////////////////////////////////////////////
    b.textSize(10);
    var myFrame1 = b.text(b.loadString("THIS.txt"), b.random(b.width), b.random(b.height), 200, 700);
    b.rotate(b.random(0,30)); 
    b.typo( myFrame1, "skew", b.random(-50,50)); 

    var myFrame2 = b.text("", b.random(b.width), b.random(b.height),200, 700);
    b.rotate(b.random(0,30));
    b.typo( myFrame2, "skew", b.random(-50,50)); 

    // Link text frames together for text to run over
    b.linkTextFrames(myFrame1, myFrame2);



   ////////////////////////////////////////////////
   // Uncomment section below to add random rectangles across page a la Simon
   ////////////////////////////////////////////////

  //  for (var j = 0; j < 15; j++) {
      
  //     var x = j*23;       
  //   var y = b.random(0, b.height);
  //   var size = b.random(10, 123);
  //   b.rect(x, y, j, size);
    

  //   b.rotate(b.random(0,360));

  //   }

  };
}

// This makes it all happen:
b.go(); 