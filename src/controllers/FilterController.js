import axios from '../services/axios';

//tags=cute&skip=0&limit=20

class FilterController {
  async index(req, res) {
    try {
      const newSearch = req.body;
      const { tag, omit, total } = newSearch;
      const errors = [];
      const response = await axios.get(`/cats?tags=${tag}&skip=${omit}&limit=${total}`);
      if (!tag) {
        errors.push('Missing Tag');
        return res.json(errors);
      }
      if (!omit) {
        errors.push('Missing Omit');
        return res.json(errors);
      }
      if (!total) {
        errors.push('Missing Total');
        return res.json(errors);
      }

      res.json(response.data);
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new FilterController();
