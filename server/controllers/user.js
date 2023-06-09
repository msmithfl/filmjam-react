import Jam from "../models/Jam.js";
import User from "../models/User.js";

//returns User Info
//gets id from url params and finds the user
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const saveEnteredJam = async (req, res, next) => {
  const userId = req.body.userId;
  const jamId = req.params.jamId;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, {
      $addToSet: { enteredJams: jamId },
    });

    await Jam.findByIdAndUpdate(jamId, {
      $addToSet: { usersJoined: userId },
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

    await Jam.findByIdAndUpdate(jamId, {
      $pull: { usersJoined: userId },
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

export const saveCreatedJam = async (req, res, next) => {
  const userId = req.body.userId;
  const jamId = req.params.jamId;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, {
      $addToSet: { createdJams: jamId },
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

export const getJamsForUser = async (req, res, next) => {
  try {
    const userId = req.params.id; // Assuming you have the userId available
    const user = await User.findById(userId); // Retrieve the user document

    if (!user) {
      return res.status(404).json("User not found");
    }

    const jamIds = user.enteredJams; // Assuming the array of jamIds is stored in enteredJams field of the user document

    const jams = await Jam.find({ _id: { $in: jamIds } }); // Find the jams where the ID is present in the user's jamIds array

    res.status(200).json(jams);
  } catch (err) {
    next(err);
  }
};

export const getCreatedJamsForUser = async (req, res, next) => {
  try {
    const userId = req.params.id; // Assuming you have the userId available
    const user = await User.findById(userId); // Retrieve the user document

    if (!user) {
      return res.status(404).json("User not found");
    }

    const jamIds = user.createdJams; // Assuming the array of jamIds is stored in enteredJams field of the user document

    const jams = await Jam.find({ _id: { $in: jamIds } }); // Find the jams where the ID is present in the user's jamIds array

    res.status(200).json(jams);
  } catch (err) {
    next(err);
  }
};
