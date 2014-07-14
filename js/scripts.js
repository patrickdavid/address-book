$(document).ready (function() {
  $("form#new-contact").submit(function(event) {
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();
    console.log(inputtedAddress);
    var contact = {firstName: inputtedFirstName, lastName: inputtedLastName, address: inputtedAddress};
    $("ul").append("<li>"+contact.firstName+ " "+contact.lastName+"</li>");
    $("#show-contacts").show();
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");
    $("li").last().click(function() {
      $("#show-details").show();
      $("#first-name").text(contact.firstName);
      $("#last-name").text(contact.lastName);
      $("#address").text(contact.address);
    });
    event.preventDefault();
  });
});
