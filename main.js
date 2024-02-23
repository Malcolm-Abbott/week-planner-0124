var $add = document.querySelector('.add-event');
var $dialog = document.querySelector('dialog');
$add === null || $add === void 0
  ? void 0
  : $add.addEventListener('click', function () {
      $dialog.showModal();
    });
