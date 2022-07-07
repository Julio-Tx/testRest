import axios from '../services/axios';

//tags=cute&skip=0&limit=20

class MatchController {
  async index(req, res) {
    try {
      const newSearch = req.body;
      const { string } = newSearch;
      const errors = [];
      const response = await axios.get(`/cats?tags=${string}`);
      if (!string) {
        errors.push('Missing String');
        return res.json(errors);
      }
      res.json(response.data);
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new MatchController();
