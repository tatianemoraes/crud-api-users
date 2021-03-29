async function getUsers() { // method GET
  try {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ocorreu um erro!');
    console.log(error);
  }
}

async function getUserById(userId) {
  try {
    const response = await fetch(`http://localhost:3000/users/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ocorreu um erro!');
    console.log(error);
  }
}

async function postUsers(user) {
  try {
    await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers:{
        'Content-type': 'application/json'
      }
    });
  } catch (e) {
    console.error('Ocorreu um erro!')
    console.log(e)
  }
}

async function updateUser(userId, user) {
  try {
    await fetch(`http://localhost:3000/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json'
      }
    })

  } catch (error) {
    console.error('Ocorreu um erro!')
    console.log(error)
  }
}


async function deleteUser(userId) {
  try {
    await fetch(`http://localhost:3000/users/${userId}`, {
      method: 'DELETE'
    })
  } catch (error) {
    console.error('Ocorreu um erro!')
    console.log(error)
  }
}
