const sequelize = require("../config/connection");
const userData = require("../seeds/userSeeds");
const commentData = require("../seeds/commentSeeds");
const blogData = require("../seeds/blogSeeds");

const seedAllData = async ()=>{
    sequelize.sync({
        
    })         
}