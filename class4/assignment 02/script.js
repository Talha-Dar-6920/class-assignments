const form = document.getElementById('form');
const inputs = document.getElementsByTagName('input');
const render = document.getElementById('render__data');
const table = document.getElementById('table');
const tbody = table.querySelector('tbody');
const template = {};
const students = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let obtained = 0,
    percentage = 0;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].name === 'name') {
      template[inputs[i].name] = inputs[i].value;
      inputs[i].value = '';
    } else {
      template[inputs[i].name] = inputs[i].value;
      obtained += parseFloat(inputs[i].value);
      inputs[i].value = '';
    }
  }

  percentage = (obtained / 500) * 100;

  template.total = 500;
  template.obtained = obtained;
  template.percentage = percentage.toFixed(3);
  template.grade = `${
    percentage >= 80 && percentage <= 100
      ? 'A1 '
      : percentage >= 70 && percentage < 80
      ? 'A'
      : percentage >= 60 && percentage < 70
      ? 'B'
      : percentage >= 50 && percentage < 60
      ? 'C'
      : percentage >= 40 && percentage < 50
      ? 'D'
      : 'F'
  } Grade`;

  students.push({ ...template });
});

render.addEventListener('click', () => {
  tbody.innerHTML = '';
  for (let i = 0; i < students.length; i++) {
    tbody.innerHTML += `<tr><td>${i}</td><td>${students[i].name}</td><td>${students[i].science}</td><td>${students[i].computer}</td><td>${students[i].math}</td><td>${students[i].english}</td><td>${students[i].urdu}</td><td>${students[i].total}</td><td>${students[i].obtained}</td><td>${students[i].percentage}</td><td>${students[i].grade}</td></tr>`;
  }
});
