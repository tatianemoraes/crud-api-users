// criar um botao edit e fazer o edit de dados

const btnsManipulate = function(userId) { // trocando os icones para check e cancel
  return `
  <a class="td-btnEdit_${userId} pointer" value="${userId}" onclick="confirmChanges(${userId})">
    <i class="fas fa-check-square"></i>
  </a>
  <a class="td-btnCancel_${userId} pointer" value="${userId}" onclick="cancelChanges(${userId})">
    <i class="fas fa-window-close"></i>
  </a>
  `
}
