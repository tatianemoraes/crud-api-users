async function confirmChanges(userId) {
  let name = document.querySelector(`.inp-name_${userId}`);
  let age = document.querySelector(`.inp-age_${userId}`);
  let national = document.querySelector(`.inp-national_${userId}`);
  let email = document.querySelector(`.inp-email_${userId}`);

  let user = {
    id: userId,
    name: name.value,
    age: age.value,
    nationality: national.value,
    email: email.value,
  }

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

     //você precisa agora transformas os inputs em td e jogar dentro de cada uma o novo value dentro dela

    name.outerHTML = `<td class="td-name_${userId}">${user.name}</td>`
    age.outerHTML = `<td class="td-age_${userId}">${user.age}</td>`
    national.outerHTML = `<td class="td-national_${userId}">${user.nationality}</td>`
    email.outerHTML = `<td class="td-email_${userId}">${user.email}</td>`

    alert('Usuário atualizado com sucesso!')

    await updateUser(userId, user);

    let btns = document.querySelector(`.td-buttons_${userId}`);
    btns.innerHTML = btnsRollback(userId);

  }
}
