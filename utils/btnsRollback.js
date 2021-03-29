const btnsRollback = function(userId) { // retorna botoes editar e apagar
  return `
  <a class="td-btnEdit_${userId} pointer" value="${userId}" onclick="enableEdit(${userId})">
    <i class="fas fa-pen"></i>
  </a>
  <a class="td-btnDelete_${userId} pointer" value="${userId}" onclick="deleteSelected(${userId})">
    <i class="fas fa-trash"></i>
  </a>
  `
}
