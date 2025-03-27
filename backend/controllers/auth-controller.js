const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

// module.exports.register = async (req, res) => {
//   let userData = req.body;
//   if (userData.name && userData.email && userData.password) {
//     await userModel.create({
//       name: userData.name,
//       email: userData.email,
//       password: userData.password,
//     });
//     res.json({ message: "User Registered Successfully" });
//   } else {
//     res.json({ message: "Please Provide All Details" });
//   }
// };
module.exports.register = async (req, res) => {
  try {
    const userData = req.body;
    if (!userData.name || !userData.email || !userData.password) {
      return res.status(400).json({ message: "Please Provide All Details" });
    }

    await userModel.create({
      name: userData.name,
      email: userData.email,
      password: userData.password,
    });

    return res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    console.error("Error in user registration:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.login = async (req, res) => {
  let user = req.body;
  if (user.email && user.password) {
    let userNew = await userModel.findOne({ email: user.email });

    if (userNew.password == user.password) {
      const token = jwt.sign(
        { id: userNew._id, name: userNew.name, isAdmin: userNew.isAdmin },
        "secret",
        { expiresIn: "1h" }
      );

      res.send(token);
    } else {
      res.json({ message: "Incorrect Credentials" });
    }
  } else {
    res.json({ message: "Provide Email and password" });
  }
};
