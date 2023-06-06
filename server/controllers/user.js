import User from "../models/User.js";

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const saveJam = async (req, res, next) => {
  const userId = req.body.userId;
  const jamId = req.params.jamId;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, {
      $addToSet: { enteredJams: jamId },
    });

    if (!updatedUser) {
      // User with the provided userId not found
      return res.status(404).json("User not found");
    }

    res.status(200).json("The jam has been entered!");
  } catch (err) {
    // Handle the error appropriately
    console.log(err);
    next(err);
  }
};

export const leaveJam = async (req, res, next) => {
  const userId = req.body.userId;
  const jamId = req.params.jamId;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, {
      $pull: { enteredJams: jamId },
    });

    if (!updatedUser) {
      // User with the provided userId not found
      return res.status(404).json("User not found");
    }

    res.status(200).json("The jam has been left!");
  } catch (err) {
    // Handle the error appropriately
    console.log(err);
    next(err);
  }
};
