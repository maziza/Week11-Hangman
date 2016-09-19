module.exports = Letter;

//letter constructor

function Letters() {
  
  this.character = letter;
  this.empty = false;
  
  this.getletter = function() {
    if (this.empty == true) {  
      return "_";
    
    } else {
     
      return this.character;
    }
  }
}