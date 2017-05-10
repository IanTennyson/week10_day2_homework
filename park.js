var Park = function(){
  this.enclosure = [];
  this.reproducingReptiles = [];
}

Park.prototype = {
  add: function(newDino){
    this.enclosure.push(newDino);
  },

  addRepo: function(newDino){
    this.reproducingReptiles.push(newDino);
  },


//SPLICE MESSES WITH THE INDEX NUMS OF THE ARRAY SO YOU HAVE TO WORK THROUGH IT BACKWARDS
  remove: function(type){
    for(index = this.enclosure.length - 1; index >= 0; index --){
      console.log(index);
      if(this.enclosure[index].type === type){
        this.enclosure.splice(index, 1);
      }
    }
  },

  dinosWithMoreThanTwoOffspring: function(){
    for (index = this.enclosure.length - 1; index >= 0; index --){
      if(this.enclosure[index].numOfOffspring > 2){
        this.addRepo(index);
      }
    }
    return this.reproducingReptiles;
  },

  totalNumberOfDinos: function(){
    var counter = 0;
    for (index = 0; index < this.enclosure.length; index++){
      counter += this.enclosure[index].numOfOffspring;
      counter += 1;
    }
    return counter;
  }


}

module.exports = Park;