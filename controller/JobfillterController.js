import jobModel from "../model/jobModel.js";
import userModel from "../model/userModel.js";

/**
 * Filters jobs from the database based on user keywords
 * @returns {Object} - Keyed by userId, each value is an array of jobs matching their keyword
 */
export const filterJobsForUsers = async () => {
  try {
    const users = await userModel.find({});
    const jobs = await jobModel.find({}).sort({ date: -1 })

    const result = {};

    for (const user of users) {
      const keyword = user.keyword.toLowerCase();
      const filteredJobs = jobs.filter(job =>
        job.position.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword)
      );

      // Only include if there are matches
      if (filteredJobs.length > 0) {
        result[user._id] = filteredJobs;
      }
    }

    return result; // { userId1: [jobs], userId2: [jobs], ... }

  } catch (error) {
    console.error("Error filtering jobs:", error);
    return {};
  }
};
