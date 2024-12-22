
const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = class MongoDB {
  constructor(url, options = { useNewUrlParser: true, useUnifiedTopology: true }) {
    this.url = url;
    this.data = this._data = this._schema = this._model = {};
    this.db;
    this.options = options;
  }

  async read() {
    try {
      this.db = await mongoose.connect(this.url, { ...this.options });
      this.connection = mongoose.connection;
      let schema = this._schema = new Schema({
        data: {
          type: Object,
          required: true,
          default: {}
        }
      });
      try {
        this._model = mongoose.model('data', schema);
      } catch {
        this._model = mongoose.model('data');
      }
      this._data = await this._model.findOne({});
      if (!this._data) {
        this.data = {};
        await this.write(this.data);
        this._data = await this._model.findOne({});
      } else {
        this.data = this._data.data;
      }
      return this.data;
    } catch (error) {
      console.error("Error reading data:", error);
      throw error;
    }
  }

  async write(data) {
    try {
      if (!data) return data;
      
      let existingData = await this._model.findById(this._data._id);
      if (!existingData) {
        existingData = await this._model.create({ data });
      } else {
        existingData.data = data;
        await existingData.save();
      }
      return existingData;
    } catch (error) {
      console.error("Error writing data:", error);
      throw error;
    }
  }
};
