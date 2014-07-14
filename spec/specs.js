describe("pigLatin", function() {
  it("takes a word that starts with 1 consonant and returns the word with the consonant and 'ay' added to the end", function() {
  pigLatin("domino").should.equal("ominoday");
  });
  it("will add 'ay' to any word beginning with a vowel", function()  {
    pigLatin("apple").should.equal("appleay");
  });
  it("takes a word that starts with 2 consecutive consonants and returns the word with the consonants and 'ay' moved to the end", function() {
    pigLatin("store").should.equal("orestay");
  });
  it("takes a word that starts with 3 consecutive consonants and returns the word with the consonants and 'ay' moved to the end", function()  {
    pigLatin("sprite").should.equal("itespray");
  });
  it("takes a word containing 'qu' and returns the word with the 'qu' and 'ay' added to the end", function()  {
    pigLatin("squeak").should.equal("eaksquay");
  });
  it("takes a word that uses 'y' as a vowel and treat it as such", function() {
    pigLatin("pygmy").should.equal("ygmypay");
  });
  it("takes a word that starts with a 'y' and treats it as a consonant", function() {
    pigLatin("year").should.equal("earyay");
  });
});

describe("sentencePigLatin", function() {
  it("will translate every word in a sentence to Pig Latin", function() {
    sentencePigLatin("hello queen you squeak like a pygmy").should.equal("ellohay eenquay ouyay eaksquay ikelay aay ygmypay");
  });
});
