const sequelize = require("../config/connection");
const userData = require("../seeds/userSeeds");
const commentData = require("../seeds/commentSeeds");
const blogData = require("../seeds/blogSeeds");

const seedAllData = async () => {
	await sequelize.sync({ force: true }); //commands sequelize to populate new data and override old data.
	await userData();
	await blogData();
	await commentData();
};

seedAllData();
