module.exports = {
  url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@easyapi.grnzg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
};
