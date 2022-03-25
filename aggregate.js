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

const pipeline = [
  { $match: {} },
  {
    $group: {
      _id: '$rating',
      avgSumOfYEARPerRating: { $sum: '$year' },
      bookCountPerRating: { $sum: 1 },
    },
  },
  { $sort: { bookCountPerRating: -1 } },
];
db.books.aggregate(pipeline);


/**
 * from: The target collection. su kokia lentele jungiam
 * localField: The local join field. vietinis laukas kuris yra vienoda su kitos lenteles lauku
 * foreignField: The target join field.
 * as: The name for the results.
 * pipeline: The pipeline to run on the joined collection.
 * let: Optional variables to use in the pipeline field stages.
 */
 {
  from: 'authors',
  localField: 'author',
  foreignField: '_id',
  as: 'authorObj'
}
// authorName: authorObj[0].name

db.books.aggregate([
  {
    '$match': {}
  }, {
    '$lookup': {
      'from': 'authors', 
      'localField': 'author', 
      'foreignField': '_id', 
      'as': 'authorArr'
    }
  }
])