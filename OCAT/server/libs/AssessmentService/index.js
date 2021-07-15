const client = require(`../../utils/client`);
const config = require(`../../utils/config`);
const { InternalServerError } = require(`restify-errors`);

exports.submit = (formatted_assessment) => new Promise((resolve, reject) => {

  client.post(`/assessment/submit`,
    { formatted_assessment }, (err, req, res, body) => {

      if (err) {
        return reject(err);
      }

      if (res.statusCode !== 200) {
        return reject(new InternalServerError(`Request Error`));
      }

      resolve(body.data);
    });
});

exports.getList = () => new Promise((resolve, reject) => {
  // this function sends a request to the API
  // finish the logic to handle the response when returned from the API
  client.get(`/assessment/list`,
    (err, req, res, body) => {

      if (err) {
        return reject(err);
      }

      if (res.statusCode !== 200) {
        return reject(new InternalServerError(`Request Error`));
      }

      resolve(body.data.assessments);
    });
});
