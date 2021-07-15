const { Assessments } = require(`../Database`);

exports.submit = async (formatted_assessment) => {

  const returnAssessment = await Assessments.forge(formatted_assessment)
    .save()
    .then((a) => {
      console.log(`Assessment Saved`, a.get());
    });

  return returnAssessment;
};

exports.getList = () => {
  // use the bookshelf model Assessments from API/src/microservices/Database to fetch
  // the assessment data from the PostgreSQL database
  const assessmentResponse = Assessments.forge()
    .fetchAll()
    .then((results) => {
      console.log(`Working`, results);
      return results;
    });

  return assessmentResponse;
};
