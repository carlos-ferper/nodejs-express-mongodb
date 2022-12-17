module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            title: String,
            console: String,
            img: String,
            desc: String,
            genre: String,
            developer: String,
            grade: Number,
            reviews: Array
          },
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Jogo = mongoose.model("jogo", schema);
    return Jogo;
  };