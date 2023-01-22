const User = require("../models/User");

async function createUser(req, res) {
  try {
    const user = await User.create({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });

    await user.save();
    return res.status(201).json({
      message: "Successfully created User",
    });
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = {
  createUser,
};
// const findUser = async (userName) => {
//   try {
//     const user = await User.findOne({
//       userName,
//     }).populate("reviews");
//     console.log(user);
//   } catch (e) {
//     console.log(e);
//   }
// };

// *part of async function createUser()*
// const newReview = await Review.create({
//   comment: "I'm so cool it hurts",
//   user: user._id,
// });
// user.reviews.push(newReview);
