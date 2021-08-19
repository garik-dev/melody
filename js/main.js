$(document).ready(function() {
    var currentFloor = 2;
    var counterUp = $(".counter-up");
    $(".home-img path").on('mouseover', function() {
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
    });

    counterUp.on("click", function() {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString("en-Us", {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
            $(".counter").text(usCurrentFloor);
            $(`[data-floor=${usCurrentFloor}]`).toogleClass(".current-floor");
        }
    });
});