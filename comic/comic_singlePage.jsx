﻿// MÆNA SCRIPT TEMPLATE - S Rees 2019
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
  for (var i = 1; i < 3; i++) {

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




    //b.words(obj);


    //var pig = b.loadStrings("THIS.txt");

    //b.print(pig);
//    var let = b.split(pig,[" "]);
     //b.print(pig[7]);


  //var tf = pig; // this makes the selected item now being referred to as var tf. the [0] is because the "selection" always returns an array, and this referes to the first object in an array.
  
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
      
  
      for( var i = 0; i < 200; i++){ 
          
           romeoArray[i] = b.trimWord(romeoArray[i]);
           var romeoTemp = b.split(romeoArray[i], "?")
           
            
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
               b.println(romeoArray[i]);
 
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
        

  
       //b.println(romeoHunt);
       /*
       b.println("3=" + romeoHunt(3));        
       b.println("4=" + rromeoHunt(4)); 
       */
       /*for( var i = 0; i <30; i++  )
        {
            if ( romeoHunt(i) == "Romeo" ){
                    b.println(romeoHunt(i));                   
                    //b.typo(b.words(i), 'contents', '"FilingCabinet"') ;
                }
        }
        */



        
              
        
        
        
        /*
    b.typo(myFrame1, 'fillColor', b.color(255));
    
    b.typo(myFrame2, 'fillColor', b.color(255));
    
    b.typo(myFrame3, 'fillColor', b.color(255));
    
    b.typo(myFrame4, 'fillColor', b.color(255));
  
    b.typo(myFrame5, 'fillColor', b.color(255));  
  */
  /* 
  
  var words = b.words(tf.parentStory); // this is identifying the words from tf's whole story. tf.parentStory is acting like us highlighting the whole text.
  var str;
  for( var i = 0; i < words.length; i++){ //for all the words in the words array, add them to str, and then trim them of . , " etc
    str = normalizeString(words[i].contents);

    if (str == "") continue; // special case: nothing left after trimWord
     //count the number of occurances
  }
  

  for( var i = 0; i < words.length; i++ ) { // for all the words in the words array
      
    var word = words[i]; // word = the word currently being looked at
  
     
    b.typo( word, "skew", b.random(-80,80)); // change the font size of the word[i] to be the size of frequency
    
  
  }

    /* Create textframes for the "title" field.
        
             // Draw two textframes ( at a random x coordinate between 0 and width of page,....at a random y coordinate between 0 and height of page....size 200 x 700 )
    // Rotate random amount between 0 and 180
    var myFrame1 = b.text(b.loadString("THIS.txt"), b.random(b.width), b.random(b.height), 200, 700);
    b.rotate(b.random(0,180));

    var myFrame2 = b.text("", b.random(b.width), b.random(b.height),200, 700);
    b.rotate(b.random(0,180));

    // Link text frames together for text to run over
    b.linkTextFrames(myFrame1, myFrame2);
    // Draw an ellipse with a random color behind the title letter.
    b.noStroke(); 
    b.fill(b.random(180,220),b.random(180,220),b.random(180,220)); 
    b.ellipseMode(b.CORNER);
    b.ellipse (titleX,titleY,titleW,titleH);

    b.fill(0);
    b.textSize(35);
    b.textFont("Helvetica","Bold"); 
    b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN );
    var title = b.text(jsonData[i].title, b.random(100,200),b.random(200),300,titleH);

    // Create textframes for the "caption" fields
    b.fill(0);
    b.textSize(20);
    b.textFont("Helvetica","Regular"); 
    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN );
    var body = b.text(jsonData[i].caption, b.random(20,50),b.random(50, 100),300,captionH);
    
    b.typo( body, "skew", b.random(-80,80)); // change the font size of the word[i] to be the size of frequency
    
    
    
    // Draw two textframes ( at a random x coordinate between 0 and width of page,....at a random y coordinate between 0 and height of page....size 200 x 700 )
    // Rotate random amount between 0 and 180
    var myFrame1 = b.text(b.loadString("THIS.txt"), b.random(b.width), b.random(b.height), 200, 700);
    b.rotate(b.random(0,180));

    var myFrame2 = b.text("", b.random(b.width), b.random(b.height),200, 700);
    b.rotate(b.random(0,180));

    // Link text frames together for text to run over
    b.linkTextFrames(myFrame1, myFrame2);




   // Draw random rectangles across page a la Simon
   for (var j = 0; j < 15; j++) {
      
      var x = j*23;       
    var y = b.random(0, b.height);
    var size = b.random(10, 123);
    b.rect(x, y, j, size);
    

    b.rotate(b.random(0,360));
        }
*/

  };
}

// This makes it all happen:
b.go(); 
