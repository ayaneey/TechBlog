const Blog = require("../models/Blog");

const seedData = [
  {
    username: "Ayan",
    user_id: 1,
    description: "this is description 1",
    date: "10/22/2022",
    title: "Blog1",
  },
  {
    username: "Alex",
    user_id: 2,
    description: "this is description 2",
    date: "10/22/2022",
    title: "Blog2",
  },
];

const blogData = Blog.bulkCreate(seedData);

module.exports = blogData;