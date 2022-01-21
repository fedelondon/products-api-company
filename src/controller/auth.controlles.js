import User from "../models/User";
import Role from "../models/Role";
import jwt from "jsonwebtoken";
import config from "../config";

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  if (req.body.roles) {
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.roles = [role._id];
  }

  res.json("signUp");
};

export const signIn = async (req, res) => {
  res.json("signIn");
};
