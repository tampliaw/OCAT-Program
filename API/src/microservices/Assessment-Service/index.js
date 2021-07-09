const { Assessments } = require(`../Database`);

exports.submit = async (formatted_assessment) => {

  Assessments.forge(formatted_assessment).save().then((a) => {
    console.log(`Assessment Saved`, a.get());
  });
};

exports.getList = () => {
  // use the bookshelf model Assessments from API/src/microservices/Database to fetch
  // the assessment data from the PostgreSQL database
  const assessments = [];

  return assessments;
};
