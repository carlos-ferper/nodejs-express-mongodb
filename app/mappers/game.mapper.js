class GameMapper {
  static toJson(gameData) {
    const {
      _id,
      title,
      console,
      img, desc,
      genre,
      developer,
      grade,
      reviews } = gameData
    return {
      id: _id,
      title,
      console,
      img,
      desc,
      genre,
      developer,
      grade,
      reviews,
    }
  }
}

module.exports = { GameMapper }