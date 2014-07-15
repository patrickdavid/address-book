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
  $("form#new-contact").submit(function(event) {
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var contact = {firstName: inputtedFirstName, lastName: inputtedLastName, addresses: []};
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
    $("li.contactEntry").last().click(function() {
      $("#show-details").show();
      $("#first-name").text(contact.firstName);
      $("#last-name").text(contact.lastName);
      $("ul#addressEntries").empty();
      contact.addresses.forEach(function(address) {
        $("ul#addressEntries").append("<li>"+address.street + ", " + address.city + ", " + address.state + "</li>");
      });
    });
    event.preventDefault();
  });
});
