var data = {
  entries: [],
};
window.addEventListener('beforeunload', function () {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('week-planner-storage', dataJSON);
});
var previousDataJSON = localStorage.getItem('week-planner-storage');
if (previousDataJSON !== null) data = JSON.parse(previousDataJSON);
var $add = document.querySelector('.add-event');
var $dialog = document.querySelector('dialog');
var $form = document.querySelector('form');
var $daysDD = document.querySelector('#days-drop-down');
var $times = document.querySelector('#times');
var $info = document.querySelector('#info');
$form === null || $form === void 0
  ? void 0
  : $form.addEventListener('submit', function (event) {
      event.preventDefault();
      var daysDD = $daysDD.value;
      var times = $times.value;
      var info = $info.value;
      var values = {
        daysDD: daysDD,
        times: times,
        info: info,
      };
      data.entries.push(values);
      console.log('data.entries:', data.entries);
    });
$add === null || $add === void 0
  ? void 0
  : $add.addEventListener('click', function () {
      $dialog.showModal();
    });
var $cancel = document.querySelector('.cancel');
var $confirm = document.querySelector('.confirm');
$cancel === null || $cancel === void 0
  ? void 0
  : $cancel.addEventListener('click', function () {
      $dialog.close();
    });
$confirm === null || $confirm === void 0
  ? void 0
  : $confirm.addEventListener('click', function () {
      $dialog.close();
    });
$form === null || $form === void 0
  ? void 0
  : $form.addEventListener('beforeunload', function (event) {
      event.preventDefault();
    });
// const $days = document.querySelector('#days') as HTMLSelectElement;
// const $dayOptions = $days.options as HTMLOptionsCollection;
// for (let i = 0; i < $dayOptions.length; i++) {
//   let option = $dayOptions[i];
//   console.log('option.value:', option.value);
// }
