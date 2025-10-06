import jobModel from "../model/jobModel";

const cleanOldJobs = async () => {
  try {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);


    await jobModel.deleteMany({ date: { $lt: yesterday } });
  } catch (error) {
    console.error("Error cleaning old jobs:", error);
  }
};

export default cleanOldJobs;
