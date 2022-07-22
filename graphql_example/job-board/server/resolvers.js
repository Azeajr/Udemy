import { Company, Job } from "./db.js";

export const resolvers = {
  Query: {
    job: (_root, { id }) => Job.findById(id),
    company: (_root, { id }) => Company.findById(id),
    jobs: async () => Job.findAll(),
  },

  Company: {
    jobs: (company) => Job.findAll((job) => job.companyId === company.id),
  },

  Job: {
    company: (job) => Company.findById(job.companyId),
  },
};
