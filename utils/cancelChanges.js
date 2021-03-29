// criar uma função que quando clicar no botao ele cancela

async function cancelChanges(userId) {

  let name = document.querySelector(`.inp-name_${userId}`);
  let age = document.querySelector(`.inp-age_${userId}`);
  let national = document.querySelector(`.inp-national_${userId}`);
  let email = document.querySelector(`.inp-email_${userId}`);

  const user = await getUserById(userId);

  name.outerHTML = `<td class="td-name_${userId}">${user.name}</td>`
  age.outerHTML = `<td class="td-age_${userId}">${user.age}</td>`
  national.outerHTML = `<td class="td-national_${userId}">${user.nationality}</td>`
  email.outerHTML = `<td class="td-email_${userId}">${user.email}</td>`

  let btns = document.querySelector(`.td-buttons_${userId}`);
  btns.innerHTML = btnsRollback(userId);

}
