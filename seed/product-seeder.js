var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping-cart');

var products = [
  new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title:'Gothic Video Game 1',
    description:'Classic video game RPG 1',
    price:1
  }),
  new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title:'Gothic Video Game 2',
    description:'Classic video game RPG 2',
    price:2
  }),
  new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title:'Gothic Video Game 3',
    description:'Classic video game RPG 3',
    price:3
  }),
  new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title:'Gothic Video Game 4',
    description:'Classic video game RPG 4',
    price:4
  }),
  new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title:'Gothic Video Game 5',
    description:'Classic video game RPG 5',
    price:5
  }),
  new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title:'Gothic Video Game 6',
    description:'Classic video game RPG 6',
    price:6
  }),
  new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title:'Gothic Video Game 7',
    description:'Classic video game RPG 7',
    price:7
  })
];

var done = 0;
products.forEach(product => {
  product.save(function(err, result) {
      done += 1;
      if(done === products.length) {
        exit();
      }
  });
});

function exit() {
  mongoose.disconnect();
}
