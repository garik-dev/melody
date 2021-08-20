$(document).ready(function() {
    var currentFloor = 2; //текущий этаж
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats")
        //наведение мышкой на этаж
    $('.home-img path').on("mouseover", function() {
        $(".home-img path").removeClass('current-floor'); // удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor'); //gjkexftv значение текущего этажа
        $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
    });

    $(".home-img path").on('click', toggleModal); //вызывает модальное окно по клику
    modalCloseButton.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);

    //закрывает модальное окно

    counterUp.on("click", function() { // отслеживаем клик по кнопке вверх
        if (currentFloor < 18) { //проверяем значение этажа, не юолее 18
            currentFloor++; // прибавляем один этаж
            usCurrentFloor = currentFloor.toLocaleString("en-Us", {
                minimumIntegerDigits: 2,
                useGrouping: false // форматируем переменную с этажем 02
            });
            $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
            $(".home-img path").removeClass('current-floor'); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); //подсвечивем текущее значение
        }
    });


    // отслеживаем клик по кнопке вверх
    counterDown.on('click', function() {
        if (currentFloor > 2)
            currentFloor--;
        usCurrentFloor = currentFloor.toLocaleString("en-Us", {
            minimumIntegerDigits: 2,
            useGrouping: false
        });
        $(".counter").text(usCurrentFloor);
        $(".home-img path").removeClass('current-floor');
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    })

    function toggleModal() {
        modal.toggleClass('is-open');
    }; // функция открыть-закрыть модальное окно

});