function displayAll(liste) {
  console.log(liste, liste.length);
}

const amazingShoes = ['minelli', 'zara', 'nike', 'gucci', 'adidas'];

amazingShoes.unshift('eram');

amazingShoes.shift();

amazingShoes.push('geox');

displayAll(amazingShoes);

const cutShoesList = amazingShoes.slice(2);

displayAll(cutShoesList);

const secondShoes = ['chanel', 'dior', 'versace', 'reebok', 'maje'];

const newShoes = cutShoesList.concat(secondShoes);
displayAll(newShoes);
