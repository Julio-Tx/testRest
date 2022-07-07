import axios from '../services/axios';

class TagsController {
  async index(req, res) {
    try {
      const response = await axios.get(`/tags`);
      res.json(response.data);
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new TagsController();
