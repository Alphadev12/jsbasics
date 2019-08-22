const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function rentedAllBooks(books) {
  rent = false
  for (let i = 0; i < books.length; i++) {
    if (books[i].rented > 0){
      rent = true;
    }
    else if (books[i].rented <= 0){
      rent = false;
      break;
    }
  }
  return rent;
}

rentedBooks = rentedAllBooks(books)
if (rentedBooks === true) {
  console.log("Les livres ont été tous emprunté au moins une fois");
}
else{
  console.log("False");
}

// Le livre le plus emprunté

function bookMoreRented(books) {
  moreRented = books[0];

  for (let i = 1; i < books.length; i++) {
    if (moreRented.rented < books[i].rented ){
      moreRented = books[i];
    }
  }
  console.log(`Le livre le plus emprunté ${moreRented.title}`);
}

bookMoreRented(books);


// Le livre le moins emprunté
function bookLessRented(books) {
  lessRented = books[0];

  for (let i = 1; i < books.length; i++) {
    if (lessRented.rented > books[i].rented ){
      lessRented = books[i];
    }
  }
  console.log(`Le livre le moins emprunté: ${lessRented.title}`);
}

bookLessRented(books);

// Rechercher un livre
function searchBook(books) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === 873495 ) {
      book = books[i];
    }
  }
  console.log(`Le livre trouvé: ${book.title}`)
}
searchBook(books);

// Supprimer un livre
function deleteBook(books,id) {
  let newBooks;

  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id ) {
      books.splice(i,1);
    }
  }
  return books
}

newBooks = deleteBook(books,133712);

function triageBook(books) {
  for (var i = 0; i < books.length; i++) {
    for (var j = 0; j < books.length - 1; j++) {
      if (books[j].title > books[j+1].title){
        temp = books[j];
        books[j] = books[j+1];
        books[j+1] = temp;
      }
    }
  }
}

triageBook(newBooks);