import Jam from "../models/Jam.js";

export const addJam = async (req, res, next) => {
  const newJam = new Jam({ userId: req.userId, ...req.body }); // Pass req.body instead of req
  try {
    const savedJam = await newJam.save(); // Await the completion of the save operation
    res.status(200).json(savedJam);
  } catch (err) {
    next(err); // Return an error response if there's an error
  }
};

export const getJams = async (req, res, next) => {
  try {
    const jams = await Jam.find();
    res.status(200).json(jams);
  } catch (err) {
    next(err);
  }
};

export const getSingleJam = async (req, res, next) => {
  try {
    const jam = await Jam.findById(req.params.id);
    res.status(200).json(jam);
  } catch (err) {
    next(err);
  }
};
