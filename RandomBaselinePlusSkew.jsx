﻿#includepath "~/Documents/;%USERPROFILE%Documents";#include "basiljs/bundle/basil.js";function draw() {  var tf = b.selections()[0]; // this makes the selected item now being referred to as var tf. the [0] is because the "selection" always returns an array, and this referes to the first object in an array.      var words = b.words(tf.parentStory); // this is identifying the words from tf's whole story. tf.parentStory is acting like us highlighting the whole text.    b.print("confused");    var str;  for( var i = 0; i < words.length; i++){ //for all the words in the words array, add them to str, and then trim them of . , " etc    str = normalizeString(words[i].contents);    if (str == "") continue; // special case: nothing left after trimWord     //count the number of occurances  }    for( var i = 0; i < words.length; i++ ) { // for all the words in the words array        var word = words[i]; // word = the word currently being looked at    b.print (word);         b.typo( word, "skew", b.random(-30,30)); // change the font size of the word[i] to be the size of frequency    b.typo( word, "baselineShift", b.random(0,5)); // change the font size of the word[i] to be the size of frequency       }}function normalizeString(myString) {            myString= b.trimWord(myString);        myString= myString.toLowerCase();         return myString;     }b.go();