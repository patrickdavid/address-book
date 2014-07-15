$(document).ready (function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                '<div class="form-group">' +
                                '<label for="new-street">Street</label>' +
                                '<input type="text" class="form-control new-street">' +
                                '</div>' +
                                '<div class="form-group">' +
                                '<label for="new-city">City</label>' +
                                '<input type="text" class="form-control new-city">' +
                                '</div>' +
                                '<div class="form-group">' +
                                '<label for="new-state">State</label>' +
                                '<input type="text" class="form-control new-state">' +
                                '</div>' +
                                '</div>');
  });
  $("#add-email").click(function() {
    $("#new-emails").append('<div class="new-email"><div class="form-group"><label>Email</label><input type="email" class= "form-control new-email-input"></div></div>');
  });
  $("#add-phone").click(function() {
    $("#new-phones").append('<div class="new-phone"><div class="form-group"><label>Phone</label><input type="text" class= "form-control new-phone-input"></div></div>');
  });

  $("form#new-contact").submit(function(event) {
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var contact = {firstName: inputtedFirstName, lastName: inputtedLastName, emails: [], phones: [], addresses: []};
    $(".new-email").each(function() {
      var inputtedEmail = $(this).find("input.new-email-input").val();
      contact.emails.push(inputtedEmail);
    });
    $(".new-phone").each(function() {
      var inputtedPhone = $(this).find("input.new-phone-input").val();
      contact.phones.push(inputtedPhone);
    });
    $(".new-address").each(function () {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedAddress = {street: inputtedStreet, city: inputtedCity, state: inputtedState};
      contact.addresses.push(inputtedAddress);
    });
    $("ul#contactList").append("<li class='contactEntry'>"+contact.firstName+ " "+contact.lastName+"</li>");
    $("#show-contacts").show();
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
    $("input.new-email-input").val("");
    $("input.new-phone-input").val("");
    $("li.contactEntry").last().click(function() {
      $("#show-details").show();
      $("#first-name").text(contact.firstName);
      $("#last-name").text(contact.lastName);
      $("ul#phoneEntries").empty();
      $("ul#emailEntries").empty();
      $("ul#addressEntries").empty();
      contact.phones.forEach(function(phone) {
        $("ul#phoneEntries").append("<li>"+phone+"</li>");
      });
      contact.emails.forEach(function(email) {
        $("ul#emailEntries").append("<li>"+email+"</li>");
      });
      contact.addresses.forEach(function(address) {
        $("ul#addressEntries").append("<li>"+address.street + ", " + address.city + ", " + address.state + "</li>");
      });
    });
    event.preventDefault();
  });
});
