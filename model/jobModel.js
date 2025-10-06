import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // RemoteOK job ID
  slug: { type: String },
  date: { type: Date },
  company: { type: String, required: true },
  position: { type: String, required: true },
  location: { type: String },
  tags: { type: [String], default: [] },
  description: { type: String },
  salary_min: { type: Number },
  salary_max: { type: Number },
  apply_url: { type: String },
  url: { type: String },
  company_logo: { type: String },
  epoch: { type: Number }, // timestamp
  fetchedAt: { type: Date, default: Date.now } // when you fetched it
});

export default mongoose.model("Job", JobSchema);
