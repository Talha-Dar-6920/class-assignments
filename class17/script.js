const form = document.getElementById('form');
const table = document.getElementById('table');

document.getElementById('addBtn').addEventListener('click', () => {
  document.getElementById('addUserLabel').innerText = 'Add User';
  document.getElementById('button_action').innerText = 'Add User';
});

//****************************  SECTION  ********************************* */
//? SETTING UP THE REQUEST FUNCTION FOR REQUESTING DATA FROM API

const request = async (url, type, data, heads) =>
  data
    ? await fetch(url, {
        method: type,
        body: data,
        headers: heads,
      })
    : await fetch(url, {
        method: type,
      });

//****************************  SECTION  ********************************* */
//? GET USER HANDLER

const getUsers = async () => {
  //****************************  SECTION  ********************************* */
  //? SETTING UP THE URL ACCORDING TO THE ID IF SPECIFIED
  const url = `https://node-mongo-server-class16.herokuapp.com/users`;

  //? WAITING FOR THE RESPONSE OF THE REQUEST
  const response = await request(url, 'GET'); //? PASSING THE PARAMETERS FOR THE REQUEST FUNCTION

  //? CREATING THE DATA VARIABLE TO STORE THE FETCHED DATA
  let data = await response.json();

  //****************************  SECTION  ********************************* */
  //? SHOWING USER THE ERROR IF USER NOT FOUND
  if (response.status === 404) {
    alert('User Not Found');
  } else {
    //? POPULATING THE HTML VARIABLE WITH HTML
    table.querySelector('tbody').innerHTML = data
      .map(
        (el, ind) =>
          `<tr><th scope="row" class="py-3">${ind}</th><td class="py-3">${el.name}</td><td class="py-3">${el.email}</td><td class="py-3">${el.address}</td><td class="py-3">${el.contact}</td><td><button type="button" class="btn btn-primary rounded-pill px-4 m-2" onclick="editUserHandler('${el._id}')">edit</button><button type="button" class="btn btn-danger rounded-pill px-4" onclick="deleteUserHandler('${el._id}')">delete</button></td></tr>`
      )
      .join();
  }
};

getUsers();

// //****************************  SECTION  ********************************* */
// //? ADD NEW USERS HANDLER

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  //****************************  SECTION  ********************************* */
  //? CREATED AND EMPTY OBJECT TO STORE THE USER DATA
  const inputData = {};

  //? POPULATING THE INPUT DATA VARIABLE WITH DATA ENTERED BY USER IN THE FORM
  form
    .querySelectorAll('input')
    .forEach((el) => (inputData[el.name] = el.value));

  //****************************  SECTION  ********************************* */
  //? WAITING FOR THE RESPONSE OF THE REQUEST
  const response = await request(
    'https://node-mongo-server-class16.herokuapp.com/user',
    'POST',
    JSON.stringify(inputData),
    { 'content-type': 'application/json' }
  ); //? PASSING THE PARAMETERS FOR THE REQUEST FUNCTION

  //****************************  SECTION  ********************************* */
  //? SHOWING RESPONSE TO THE USER
  alert(
    response.status === 200
      ? (getUsers(), 'User Created Successfully.')
      : 'An Error Occurred.'
  );
});

//****************************  SECTION  ********************************* */
//? UPDATE USER HANDLER

const editUserHandler = (id) => {

  console.log(arguments)


  // //****************************  SECTION  ********************************* */
  // //? CREATED AND EMPTY OBJECT TO STORE THE USER DATA
  // const inputData = {};

  // //? POPULATING THE INPUT DATA VARIABLE WITH DATA ENTERED BY USER IN THE FORM
  // form
  //   .querySelectorAll('input')
  //   .forEach((el) => (el.name !== 'id' ? (inputData[el.name] = el.value) : ''));

  // //****************************  SECTION  ********************************* */
  // //? WAITING FOR THE RESPONSE OF THE REQUEST
  // const response = await request(
  //   `https://node-mongo-server-class16.herokuapp.com/user/${id}`,
  //   'PUT',
  //   JSON.stringify(inputData),
  //   {
  //     'content-type': 'application/json',
  //   }
  // ); //? PASSING THE PARAMETERS FOR THE REQUEST FUNCTION

  // //****************************  SECTION  ********************************* */
  // //? SHOWING RESPONSE TO THE USER
  // alert(
  //   response.status === 200
  //     ? 'User Updated Successfully.'
  //     : 'An Error Occurred.'
  // );
};

// updateForm.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   //****************************  SECTION  ********************************* */
//   //? GETTING THE VALUE OF ID
//   const id = updateForm.querySelector('#id').value;

//   //****************************  SECTION  ********************************* */
//   //? CREATED AND EMPTY OBJECT TO STORE THE USER DATA
//   const inputData = {};

//   //? POPULATING THE INPUT DATA VARIABLE WITH DATA ENTERED BY USER IN THE FORM
//   updateForm
//     .querySelectorAll('input')
//     .forEach((el) => (el.name !== 'id' ? (inputData[el.name] = el.value) : ''));

//   //****************************  SECTION  ********************************* */
//   //? WAITING FOR THE RESPONSE OF THE REQUEST
//   const response = await request(
//     `https://node-mongo-server-class16.herokuapp.com/user/${id}`,
//     'PUT',
//     JSON.stringify(inputData),
//     {
//       'content-type': 'application/json',
//     }
//   ); //? PASSING THE PARAMETERS FOR THE REQUEST FUNCTION

//   //****************************  SECTION  ********************************* */
//   //? SHOWING RESPONSE TO THE USER
//   alert(
//     response.status === 200
//       ? 'User Updated Successfully.'
//       : 'An Error Occurred.'
//   );
// });

//****************************  SECTION  ********************************* */
//? DELETE USER HANDLER

const deleteUserHandler = async (id) => {
  //****************************  SECTION  ********************************* */
  //? SETTING UP THE URL ACCORDING TO THE ID IF SPECIFIED
  const url = `https://node-mongo-server-class16.herokuapp.com/user/${id}`;

  //? WAITING FOR THE RESPONSE OF THE REQUEST
  const response = await request(url, 'DELETE'); //? PASSING THE PARAMETERS FOR THE REQUEST FUNCTION

  //****************************  SECTION  ********************************* */
  //? SHOWING RESPONSE TO THE USER
  alert(
    response.status === 200 && id
      ? (getUsers(), 'User Deleted Successfully.')
      : 'An Error occurred.'
  );
};
