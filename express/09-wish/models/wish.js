const mongoose = require('mongoose');

const WishSchema = new mongoose.Schema({
  content:{
  	type:String
  },
  color:{
  	type:String
  }
});


const WishModel = mongoose.model('Wish', WishSchema);

module.exports = WishModel;