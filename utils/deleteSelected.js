// criar um botao delete e fazer o delete de dados
async function deleteSelected(userId) {
  // users.splice(userId, 1);
  // table.deleteRow(userId);
  await deleteUser(userId);
}
