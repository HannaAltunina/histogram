'use strict';

(function () {
  var COLUMN_HEIGHT_PERCENT = 100;

  var userInputs = document.querySelectorAll(".data-form__input");
  var columnItems = document.querySelectorAll(".histogram__item");
  var columnContainers = document.querySelectorAll(".histogram__number");
  var dataForm = document.querySelector(".data-form");

  function getAbsolutMaxValue(array) {
    var max = Math.abs(array[0]);
    for (var i = 0; i < array.length; i++) {
      if (max < Math.abs(array[i])) {
        max = Math.abs(array[i]); 
      }
    }
    return max;
  }

  function onRenderButtonClick(evt) {
    var userData = [];
    evt.preventDefault();
    userInputs.forEach(function (input) {
      userData.push(input.value);
    });
    var maxValue = getAbsolutMaxValue(userData);
    userData.forEach(function(item, i) {
      var column = columnItems[i];

      if (item >= 0) {
        column.classList.remove("histogram__item--negative");
        column.classList.add("histogram__item--positive");
      } else {
        column.classList.remove("histogram__item--positive");
        column.classList.add("histogram__item--negative");
      }
    });

    columnContainers.forEach(function(item, i) {
      item.style.height = Math.abs(userData[i]) / maxValue * COLUMN_HEIGHT_PERCENT + "%";
    });
  }

  dataForm.addEventListener("submit", onRenderButtonClick)

})();
