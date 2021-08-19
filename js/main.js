$(document).ready(function () {
  var currentFloor=2; // переменная где хранится этаж
  var floorPath =$(".home-image path")
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");

  // Функция при наведении курсором на этаж
  floorPath.on("mouseover", function(){        
    floorPath.removeClass("current-floor");     //Удаляем текущий класс этажей
    currentFloor = $(this).attr('data-floor') ; //Получаем значение текущего этажа
    $(".counter").text(currentFloor); // Записываем значение в счеткчик
  
  } );
  counterUp.on("click", function () { //Отслеживаем клик вверх
    if (currentFloor < 18) { //проверка значения этажа
      currentFloor++;
    usCurrentFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits:2,useGrouping:false});//форматируем чтобы было 01, а не просто 1
    $(".counter").text(usCurrentFloor);
    floorPath.removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");//подсвечиваем текущий этаж
  }
    });
    counterDown.on("click", function () {
        if (currentFloor > 2) { //проверка значения этажа
        currentFloor--;
        usCurrentFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits:2,useGrouping:false});
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");//подсвечиваем текущий этаж
      }
        });
    });
