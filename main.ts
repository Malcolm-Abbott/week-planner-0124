const $add = document.querySelector('.add-event') as HTMLButtonElement;
const $dialog = document.querySelector('dialog') as HTMLDialogElement;

$add?.addEventListener('click', (): void => {
  $dialog.showModal();
});
