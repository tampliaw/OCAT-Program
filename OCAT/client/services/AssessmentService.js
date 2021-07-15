import Axios from '../utils/http.config';

export class AssessmentService {

  static submit(formatted_assessment) {
    try {
      return Axios.post(`http://localhost:8000/api/assessment/submit`, { formatted_assessment })
        .then(response => response.data);
    }
    catch (err) {
      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }

  static getList() {
    try {
      return Axios.get(`http://localhost:8000/api/assessment/list`)
        .then(response => response.data);
    }
    catch (err) {
      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }
}
