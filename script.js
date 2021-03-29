//////////////
///global////
/////////////


const styleTD = {
  w: 'width: 100px;',
  h: 'height: 50px;',
  t: 'text-align: center;',
  d: 'display: flex;',
  jc: 'justify-content: space-around;'
}

const { w, h, t, d, jc } = styleTD;

let table = document.querySelector('.tb-data');

async function renderUsers() {
  // essa variavel recebera os dados da funcao getUsers
  // que dentro dela ela traz todos os usuario do back end via api
 const users = await getUsers();

  let render = users.map((user) => {
    return `
    <tr>
      <td class="td-name_${user.id}">${user.name}</td>
      <td class="td-age_${user.id}">${user.age}</td>
      <td class="td-national_${user.id}">${user.nationality}</td>
      <td class="td-email_${user.id}">${user.email}</td>
      <td class="td-buttons_${user.id}" style="${w}${h}${t}${d}${jc}">
        <a class="td-btnEdit_${user.id} pointer" value="${user.id}" onclick="enableEdit(${user.id})">
          <i class="fas fa-pen"></i>
        </a>
        <a class="td-btnDelete_${user.id} pointer" type="button" value="${user.id}" onclick="deleteSelected(${user.id})">
          <i class="fas fa-trash"></i>
        </a>
      </td>
    </tr>
    <br>
    `
  });

  table.innerHTML = render.join('');
}

renderUsers();

////////////
///CREATE///
///////////
let btnSave = document.querySelector('.btn-save');

let ageValidate = document.querySelector('.age')
ageValidate.addEventListener('input', function(){
  var num = this.value.match(/^\d+$/);
  if(num > 120){
    this.value = "";
  }
  if (num === null) {
      this.value = "";
  }
}, false)

btnSave.addEventListener('click', async (e) => {
  e.preventDefault()
  let user = {
    name: document.querySelector('.name').value,
    age: document.querySelector('.age').value,
    nationality: document.querySelector('.nationality').value,
    email: document.querySelector('.email').value
  };


  if(!user){
    alert('Favor preencher todos os campos!')
    return
  }

  if(user.name === '' && user.age === '' && user.nationality === '' && user.email === '') {
    alert('Favor preencher todos os campos!')
    return
  } else if(user.name !== '' && user.age === '' && user.nationality === '' && user.email === '') {
    alert('Favor preencher Idade, Nacionalidade e E-mail!')
    return
  } else if(user.name !== '' && user.age !== '' && user.nationality === '' && user.email === '') {
    alert('Favor preencher Nacionalidade e E-mail')
    return
  } else if(user.name !== '' && user.age !== '' && user.nationality !== '' && user.email === '') {
    alert('Favor preencher E-mail')
    return
  } else if(user.name !== '' && user.age === '' && user.nationality !== '' && user.email !== '') {
    alert('Favor preencher Idade!')
    return
  } else if(user.name !== '' && user.age !== '' && user.nationality === '' && user.email !== '') {
    alert('Favor preencher Nacionalidade!')
    return
  } else {

    if(!validateEmail(user.email)){
      alert('E-mail inválido!')
      return
    }



      await postUsers(user); // chamando a API cadastrar novo usuario e passando para dentro dela o parametro user

      // let table = document.querySelector('.tb-data');

      // let render = users.map((user, index) => {
      //   return `
      //   <tr>
      //     <td class="td-name_${index}">${user.name}</td>
      //     <td class="td-age_${index}">${user.age}</td>
      //     <td class="td-national_${index}">${user.nationality}</td>
      //     <td class="td-email_${index}">${user.email}</td>
      //     <td class="td-buttons_${index}" style="${w}${h}${t}${d}${jc}">
      //       <a class="td-btnEdit_${index} pointer" value="${index}" onclick="enableEdit(${index})">
      //         <i class="fas fa-pen"></i>
      //       </a>
      //       <a class="td-btnDelete_${index} pointer" value="${index}" onclick="deleteSelected(${index})">
      //         <i class="fas fa-trash"></i>
      //       </a>
      //     </td>
      //   </tr>
      //   `
      //   // colocado na tag a, value index e o evento onclick para pegar o index na hora de deletar

      // });

      // table.innerHTML = render.join('');

      // clearFields()

  }

  alert('Usuário cadastrado com sucesso!')
});


// const pessoa = (user) => {
//  return console.log(user)
// }
// pessoa('kelvin')
