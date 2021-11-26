const m1 = document.querySelectorAll('#m1 input');
const m2 = document.querySelectorAll('#m2 input');
const tbody = document.querySelector('#table tbody');
const btns = document.querySelectorAll('#buttons button');

btns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const element = e.target.innerText;
    const matrix1 = [];
    const matrix2 = [];
    let temp1 = [];
    let temp2 = [];

    let html = '';
    tbody.innerHTML = '';

    for (let i = 0; i < m1.length; i++) {
      if (!m1[i].value || !m2[i].value) {
        alert('Matrix Can Not Be Empty');
        throw new Error('Matrix can not be empty');
      }

      if (element === 'ADD' || element === 'SUBTRACT') {
        const result = eval(
          parseInt(m1[i].value) +
            (element === 'ADD' ? '+' : element === 'SUBTRACT' ? '-' : '') +
            parseInt(m2[i].value)
        );
        html += `<td>${result}</td>`;

        if ((i + 1) % 3 === 0) {
          tbody.insertAdjacentHTML('beforeend', `<tr>${html}</tr>`);
          html = '';
        }
      } else {
        temp1.push(m1[i].value);
        temp2.push(m2[i].value);

        if ((i + 1) % 3 === 0) {
          matrix1.push(temp1);
          matrix2.push(temp2);
          temp1 = [];
          temp2 = [];
        }

        if (element === 'MULTIPLY' && i === 8) {
          const convertedMatrix = new Array([], [], []);

          matrix2.forEach((el, index) =>
            el.forEach((e, ind) => (convertedMatrix[ind][index] = e))
          );

          matrix2.splice(0, 3, ...convertedMatrix);

          matrix1.forEach((el) =>
            matrix2.forEach((e, index) => {
              const result = el.reduce(
                (p, c, ind) => p + parseInt(c) * parseInt(e[ind]),
                0
              );

              html += `<td>${result}</td>`;

              if ((index + 1) % 3 === 0) {
                tbody.insertAdjacentHTML('beforeend', `<tr>${html}</tr>`);
                html = '';
              }
            })
          );
        }

        if (element === 'DIVIDE' && i === 8) {
        }
      }
    }
  })
);
