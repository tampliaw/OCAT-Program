const { AssessmentService } = require(`../../microservices`);
const { ResponseHandler } = require(`../../utils`);

const BASE_URL = `/assessment`;

module.exports = server => {

  server.post(
    `${BASE_URL}/submit`,
    async (req, res, next) => {
      try {
        const { formatted_assessment } = req.params;
        console.log(formatted_assessment);
        AssessmentService.submit(formatted_assessment);

        ResponseHandler(
          res,
          `Submitted assessment`,
          {},
          next,
        );
      } catch (err) {
        next(err);
      }
    },
  );

  server.get(
    `${BASE_URL}/list`,
    async (req, res, next) => {
      try {

        // verify that your data is making it here to the API by using console.log();
        // call the AssessmentService.getList function from the API/src/microservices/Assessment/

        ResponseHandler(
          res,
          `Fetched assessments`,
          { formatted_assessments },
          next,
        );
      } catch (err) {
        next(err);
      }
    },
  );
};
