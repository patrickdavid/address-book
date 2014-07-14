var pigLatin = function (word) {
  var result = word + "ay";
  var vowelArray = ["a","e","i","o","u","y"];
  var n = 0;
  var re = /^y/;
  // if (word.charAt(0) === "y") {
  if (word.search(re) >= 0) {
    vowelArray.pop();
  };
  while (vowelArray.indexOf(word.charAt(n)) < 0) {
    if (word.charAt(n) === "q") {
      result = word.slice(n+2) + word.slice(0,n+2) + "ay";
    } else {
    result = word.slice(n+1) + word.slice(0,n+1) + "ay";
    };
    n+=1;
  };
  return result;
};

var sentencePigLatin = function (sentence) {
  var words = sentence.split(" ");
  var finalWords = [];
  words.forEach(function(word) {
    finalWords.push(pigLatin(word));
  });
  // var finalWords = "";
  // words.forEach(function(word) {
  //   finalWords = finalWords + " " + pigLatin(word) + " ";
  // });
  return finalWords.join(" ");
};
