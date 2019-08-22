const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

entrepreneurslngth = entrepreneurs.length 

// Liste les entrepreneurs qui sont nés dans les années 70
entrepreneurs70 = []

for (let i = 0; i < entrepreneurslngth; i++) {
  if (entrepreneurs[i].year >= 1970 && entrepreneurs[i].year <= 1979) {
    entrepreneurs70.push(entrepreneurs[i]) ;
  }
}

// array qui contient le prénom et le nom des entrepreneurs

firstnameAndlastName = []
console.log("***array qui contient le prénom et le nom des entrepreneurs:")
for (let i = 0; i < entrepreneurslngth; i++) {
  let entrepe = {
    name: entrepreneurs[i].first,
    last: entrepreneurs[i].last
  }
  firstnameAndlastName.push(entrepe)
}
console.log(firstnameAndlastName)

// Age des inventeurs

console.log("***Âge de chaque inventeur aujourd'hui:")
for (let i = 0; i < entrepreneurs.length; i++) {
  let entrepe = entrepreneurs[i];

  age = 2019 - entrepreneurs[i].year

  console.log(`${entrepe.first} a ${age} ans`);

  // entrepe.age = age
  // console.log(entrepe);
}

// Triage par ordre alphabétique

for (var i = 0; i < entrepreneurslngth; i++) {
  for (var j = 0; j < entrepreneurslngth - 1; j++) {
    if (entrepreneurs[j].first > entrepreneurs[j+1].first){
      temp = entrepreneurs[j]
      entrepreneurs[j] = entrepreneurs[j+1]
      entrepreneurs[j+1] = temp
    }
  }
}
console.log("***Triage des entrepreneurs par ordre alphabétique du nom de famille:")
console.log(entrepreneurs)