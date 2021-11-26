const form = document.getElementById('form');
const table = document.getElementById('table');

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
  //? SETTING UP THE URL
  const url = `https://node-mongo-server-class16.herokuapp.com/users`;

  table.querySelector('tbody').innerHTML =
    '<tr><td colspan="6" class="text-center p-5"><div class="spinner-border" role="status"><span class="sr-only"></span></div><span class="ms-5">Loading users Please Wait.....</span></td></tr>';

  //? WAITING FOR THE RESPONSE OF THE REQUEST
  const response = await request(url, 'GET'); //? PASSING THE PARAMETERS FOR THE REQUEST FUNCTION

  //? CREATING THE DATA VARIABLE TO STORE THE FETCHED DATA
  let data = await response.json();

  //****************************  SECTION  ********************************* */
  //? SHOWING USER THE ERROR IF USER NOT FOUND

  if (data.length === 0) {
    table.querySelector('tbody').innerHTML =
      '<tr><td colspan="6" class="text-center p-5"><h2>No Users Found</h2></td></tr>';
  } else {
    //? POPULATING THE HTML VARIABLE WITH HTML
    table.querySelector('tbody').innerHTML = data
      .map(
        (el, ind) =>
          `<tr id="${el._id}"><th scope="row" class="py-3">${ind}</th><td class="py-3">${el.name}</td><td class="py-3">${el.email}</td><td class="py-3">${el.address}</td><td class="py-3">${el.contact}</td><td><button type="button" class="btn ps-4 m-2 text-primary" type="button" onclick="editUserHandler('${el._id}')" data-bs-toggle="modal" data-bs-target="#addUser"><i class="bi bi-pencil-square"></i></button><button type="button" class="btn px-2 text-danger" onclick="deleteUserHandler('${el._id}')"><i class="bi bi-trash-fill"></i></button></td></tr>`
      )
      .join();
  }
};

getUsers();

// //****************************  SECTION  ********************************* */
// //? ADD NEW USER BTN

document.getElementById('addBtn').addEventListener('click', () => {
  // //****************************  SECTION  ********************************* */
  // //? ADDING THE TITLE AND BUTTON TEXT FOR THE MODAL
  document.getElementById('addUserLabel').innerText = 'Add User';
  document.getElementById('button_action').innerText = 'Add User';

  // //****************************  SECTION  ********************************* */
  // //? EMPTYING ALL THE INPUTS IN THE MODAL FORM
  form.querySelectorAll('input').forEach((el) => (el.value = ''));
});

// //****************************  SECTION  ********************************* */
// //? ADD NEW USER HANDLER

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const type =
    e.target.querySelector('button').innerText === 'Add User' ? 'POST' : 'PUT';
  const id = form.querySelector('.id').value;

  //****************************  SECTION  ********************************* */
  //? CREATED AND EMPTY OBJECT TO STORE THE USER DATA
  const inputData = {};

  //? POPULATING THE INPUT DATA VARIABLE WITH DATA ENTERED BY USER IN THE FORM
  form
    .querySelectorAll('input')
    .forEach((el) => (el.name !== 'id' ? (inputData[el.name] = el.value) : ''));

  document.getElementById('loader_btn').click();
  document.getElementById('Loading_text').innerHTML =
    type === 'POST' ? 'Creating New User' : 'Updating User';

  //****************************  SECTION  ********************************* */
  //? WAITING FOR THE RESPONSE OF THE REQUEST
  const response = await request(
    `https://node-mongo-server-class16.herokuapp.com/user${
      type === 'POST' ? '' : `/${id}`
    }`,
    type,
    JSON.stringify(inputData),
    { 'content-type': 'application/json' }
  ); //? PASSING THE PARAMETERS FOR THE REQUEST FUNCTION

  //****************************  SECTION  ********************************* */
  //? EMPTYING ALL THE FIELDS OF THE FORM

  form.querySelectorAll('input').forEach((el) => (el.value = ''));

  //****************************  SECTION  ********************************* */
  //? SHOWING RESPONSE TO THE USER

  getUsers();

  document.getElementById('loader_btn').click();
  document.getElementById('Loading_text').innerHTML =
    type === 'POST'
      ? 'User Created Successfully.'
      : 'User Updated Successfully.';

  setTimeout(() => {
    document.getElementById('loader_close_btn').click();
  }, 500);
});

//****************************  SECTION  ********************************* */
//? UPDATE USER HANDLER

const editUserHandler = async (id) => {
  // //****************************  SECTION  ********************************* */
  // //? ADDING THE TITLE AND BUTTON TEXT FOR THE MODAL
  document.getElementById('addUserLabel').innerText = 'Update User';
  document.getElementById('button_action').innerText = 'Update User';

  // //****************************  SECTION  ********************************* */
  // //? EMPTYING ALL THE INPUTS IN THE MODAL FORM
  form.querySelectorAll('input').forEach((el) => (el.value = ''));

  //? WAITING FOR THE RESPONSE OF THE REQUEST
  const userData = await request(
    `https://node-mongo-server-class16.herokuapp.com/user/${id}`,
    'GET'
  ); //? PASSING THE PARAMETERS FOR THE REQUEST FUNCTION

  //? CREATING THE DATA VARIABLE TO STORE THE FETCHED DATA
  const parsedData = await userData.json();

  //****************************  SECTION  ********************************* */
  //? POPULATING THE FORM INPUTS VALUES WITH THE CURRENT ELEMENTS VALUES
  form
    .querySelectorAll('input')
    .forEach((el) => (el.value = parsedData[el.name]));

  //? SETTING THE ID OF THE CURRENT ELEMENT TO THE VALUE OF ID INPUT OF FORM
  form.querySelector('.id').value = id;
};

//****************************  SECTION  ********************************* */
//? DELETE USER HANDLER

const deleteUserHandler = async (id) => {
  //****************************  SECTION  ********************************* */
  //? SETTING UP THE URL ACCORDING TO THE ID IF SPECIFIED
  const url = `https://node-mongo-server-class16.herokuapp.com/user/${id}`;

  document.getElementById('loader_btn').click();
  document.getElementById('Loading_text').innerHTML = 'Deleting User';

  //? WAITING FOR THE RESPONSE OF THE REQUEST
  const response = await request(url, 'DELETE'); //? PASSING THE PARAMETERS FOR THE REQUEST FUNCTION

  getUsers();

  //****************************  SECTION  ********************************* */
  //? SHOWING RESPONSE TO THE USER

  document.getElementById('loader_btn').click();
  document.getElementById('Loading_text').innerHTML =
    'User Deleted Successfully.';

  setTimeout(() => {
    document.getElementById('loader_close_btn').click();
  }, 500);
};
