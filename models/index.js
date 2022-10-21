const User = require("./User");
const Comment = require("./Comment")
const Blog = require("./Blog");

// Comment.hasMany(Painting, {
//   foreignKey: "gallery_id",
// });

// Painting.belongsTo(Gallery, {
//   foreignKey: "gallery_id",
// });

module.exports = { User, Comment, Blog };
