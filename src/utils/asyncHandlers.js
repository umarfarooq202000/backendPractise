import { Promise } from "mongoose";

const asyncHandlers = (requestHandlers) => {
  (req, res, next) => {
    Promise.resolve(requestHandlers(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

export { asyncHandlers };
