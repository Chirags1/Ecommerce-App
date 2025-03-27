const jwt = require("jsonwebtoken");
function verifyToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    return res.send({ error: "access denied" });
  }
  try {
    const decode = jwt.verify(token, "secret");
    console.log(decode);
    req.user = decode;
    next();
  } catch (err) {
    return res.send({ error: "Invalid Token" });
  }
}

function isAdmin(req, res, next) {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.send({ error: "Forbidden" });
  }
}

module.exports = { verifyToken, isAdmin };
