const books = [
  {
    title: 'book1',
    year: 2000,
    rating: 3,
    author: ObjectId('62051961260226268ac25832'),
  },
  {
    title: 'book2',
    year: 2001,
    rating: 2,
    author: ObjectId('62051940248e75b94a7d5ba2'),
  },
  {
    title: 'book3',
    year: 2002,
    rating: 3,
    author: ObjectId('62051961260226268ac25832'),
  },
  {
    title: 'book4',
    year: 2015,
    rating: 2,
    author: ObjectId('620518a64e17a074b386d8a2'),
  },
  {
    title: 'book5',
    year: 2020,
    rating: 3,
    author: ObjectId('620518a64e17a074b386d8a2'),
  },
  {
    title: 'book6',
    year: 2011,
    rating: 1,
    author: ObjectId('620518a64e17a074b386d8a2'),
  },
];

// id naudosim tuos kuriuos gausim is DB sukure autorius

db.books.insertMany([
  {
    title: 'book1',
    year: 2000,
    rating: 3,
    author: ObjectId('62051961260226268ac25832'),
  },
  {
    title: 'book2',
    year: 2001,
    rating: 2,
    author: ObjectId('62051940248e75b94a7d5ba2'),
  },
  {
    title: 'book3',
    year: 2002,
    rating: 3,
    author: ObjectId('62051961260226268ac25832'),
  },
  {
    title: 'book4',
    year: 2015,
    rating: 2,
    author: ObjectId('620518a64e17a074b386d8a2'),
  },
  {
    title: 'book5',
    year: 2020,
    rating: 3,
    author: ObjectId('620518a64e17a074b386d8a2'),
  },
  {
    title: 'book6',
    year: 2011,
    rating: 1,
    author: ObjectId('620518a64e17a074b386d8a2'),
  },
]);
