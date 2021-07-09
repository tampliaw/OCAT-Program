import Axios from '../utils/http.config';

export class AssessmentService {
  static submit(formatted_assessment) {
    try {
      // console.log(formatted_assessment);
      return Axios.post(`http://localhost:8000/api/assessment/submit`, { formatted_assessment })
        .then(response => response.data);
    }
    catch (err) {

      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }

  static getList() {
    try {
      // Choose the correct method, url, and data to send
      // in a request to the express OCAT/server/routes/Assessment/index.js
      // NOTE: the http.config file automatically adds /api to the front of your url
      return Axios.get(`OCAT/server/routes/Assessment/index.js`, {
        params: { },
      })
        .then(response => response.data.data.assessment);
    }
    catch (err) {
      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }
}
