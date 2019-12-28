import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(27017, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false
    });
  }
}

export default new Database();
