// rasti vidutinius metus pagal ratinga

db.books.aggregate([
  { $match: {} },
  {
    $group: {
      _id: '$rating',
      avgYearPerRating: { $avg: '$year' },
    },
  },
]);

// rasti kiekvieno ratingo metu suma
db.books.aggregate([
  { $match: {} },
  {
    $group: {
      _id: '$rating',
      avgYearPerRating: { $sum: '$year' },
      bookCountPerRating: { $sum: 1 },
    },
  },
  { $sort: { bookCountPerRating: -1 } },
]);
