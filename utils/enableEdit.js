function enableEdit(userId) { // funcao sem retorno

  let btns = document.querySelector(`.td-buttons_${userId}`);

  let name = document.querySelector(`.td-name_${userId}`);
  let age = document.querySelector(`.td-age_${userId}`);
  let national = document.querySelector(`.td-national_${userId}`);
  let email = document.querySelector(`.td-email_${userId}`);

  btns.innerHTML = btnsManipulate(userId);

  // muda conteudos para inputs (para serem editados)
  name.innerHTML = `<input class="input-edit inp-name_${userId}" type="text" value="${name.innerText}">`
  age.innerHTML = `<input class="input-age-style inp-age_${userId} " type="number" value="${age.innerText}">`
  national.innerHTML = `<input class="input-edit inp-national_${userId}" type="text" value="${national.innerText}">`
  email.innerHTML = `<input class="input-email-style inp-email_${userId}" type="email" value="${email.innerText}">`

  validateAge(age); // aqui vai pegar a função

}
