import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";
import JobDetail from "../components/JobDetail";
import ApplicationForm from "../components/ApplicationForm";

type JobType = {
  _id: string;
  title: string;
  description: string;
  type: string;
};

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState<JobType | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      const res = await API.get(`/jobs/${id}`);
      setJob(res.data);
    };
    fetchJob();
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <JobDetail title={job.title} description={job.description} type={job.type} />
      <ApplicationForm jobId={job._id} />
    </div>
  );
};

export default JobPage;
