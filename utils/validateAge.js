function validateAge (age) {
  age.firstChild.addEventListener('input', function(){
    var num = this.value.match(/^\d+$/);
    if(num > 120){
      this.value = "";
    }
    if (num === null) {
        this.value = "";
    }
  }, false)
}
