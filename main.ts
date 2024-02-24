interface Values {
  daysDD: string;
  times: string;
  info: string;
}

interface Data {
  entries: Values[];
}

let data: Data = {
  entries: [],
};

window.addEventListener('beforeunload', () => {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('week-planner-storage', dataJSON);
});

const previousDataJSON = localStorage.getItem('week-planner-storage');

if (previousDataJSON !== null) data = JSON.parse(previousDataJSON);

const $add = document.querySelector('.add-event') as HTMLButtonElement;
const $dialog = document.querySelector('dialog') as HTMLDialogElement;
const $form = document.querySelector('form') as HTMLFormElement;
const $daysDD = document.querySelector('#days-drop-down') as HTMLSelectElement;
const $times = document.querySelector('#times') as HTMLSelectElement;
const $info = document.querySelector('#info') as HTMLTextAreaElement;

$form?.addEventListener('submit', (event: Event): void => {
  event.preventDefault();

  const daysDD = $daysDD.value;
  const times = $times.value;
  const info = $info.value;

  const values: Values = {
    daysDD,
    times,
    info,
  };

  data.entries.push(values);
  console.log('data.entries:', data.entries);
});

$add?.addEventListener('click', (): void => {
  $dialog.showModal();
});

const $cancel = document.querySelector('.cancel') as HTMLButtonElement;
const $confirm = document.querySelector('.confirm') as HTMLButtonElement;

$cancel?.addEventListener('click', (): void => {
  $dialog.close();
});

$confirm?.addEventListener('click', (): void => {
  $dialog.close();
});

$form?.addEventListener('beforeunload', (event: Event): void => {
  event.preventDefault();
});

// const $days = document.querySelector('#days') as HTMLSelectElement;

// const $dayOptions = $days.options as HTMLOptionsCollection;

// for (let i = 0; i < $dayOptions.length; i++) {
//   let option = $dayOptions[i];
//   console.log('option.value:', option.value);
// }
