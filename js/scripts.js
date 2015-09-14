$(document).ready(function(){
  $("#add-landmark").click(function(){
    $("#new-landmarks").append(
      '<div class="new-landmark">' + '<div class="form-group">' + '<label for="landmark">Landmark</label>' + '<input type="text" class="form-control new-mountain">' + '</div>' + '</div>'
    );
  });

  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedTime = $("input#time-of-year").val();
    var inputtedNotes = $("input#notes").val();

    var newPlace = {location: inputtedLocation, timeOfYear: inputtedTime, notes: inputtedNotes, landmarks: []}
    $(".new-landmark").each(function(landmark){
      var inputtedLandmark = $(this).find("input.new-mountain").val();
      newPlace.landmarks.push(inputtedLandmark);
    });


    $("ul#places").append("<li><span class='place'>" + newPlace.location + "</span></li>");
    $(".place").last().click(function(){
      $("#show-place").show();

      $("#show-contact h2").text(newPlace.location + "" + newPlace.timeOfYear + "" + newPlace.notes);
      $(".location").text(newPlace.location);
      $(".time-of-year").text(newPlace.timeOfYear);
      $(".notes").text(newPlace.notes);

      $("ul#landmarks").text("");
      newPlace.landmarks.forEach(function(landmark) {
        $("ul#landmarks").append("<li>" + landmark + "</li>")
      })
    })

    $("input#new-location").val("");
    $("input#time-of-year").val("");
    $("input#notes").val("");
    $("input.new-mountain").val("");
  });
});
