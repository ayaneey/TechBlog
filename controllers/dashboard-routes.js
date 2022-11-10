const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");
