const myFunction = (req, res, next) => {
  console.log("this happens first");
  req.query.random = "something random";
  next();
};

const myOtherFunction = (req, res, next) => {
  console.log("this happens second");
  req.query.morestuff = "something else";
  next();
};

module.exports = {
  myFunction,
  myOtherFunction,
};
