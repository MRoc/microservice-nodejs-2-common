export const throwIfMissingMongoConfig = () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI not found");
  }
};
