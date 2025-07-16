import React from "react";
import { Link } from "react-router-dom";

type JobProps = {
  _id: string;
  title: string;
  company: string;
  location: string;
  type: string;
};

const JobCard = ({ _id, title, company, location, type }: JobProps) => {
  return (
    <div style={{
      border: "1px solid #e0e0e0",
      borderRadius: "10px",
      padding: "20px",
      marginBottom: "20px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
      backgroundColor: "#fff"
    }}>
      <h2 style={{ marginBottom: "10px", color: "#2c3e50" }}>{title}</h2>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Type:</strong> {type}</p>
      <Link to={`/jobs/${_id}`} style={{
        marginTop: "10px",
        display: "inline-block",
        padding: "8px 16px",
        backgroundColor: "#3498db",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "5px"
      }}>View Details</Link>
    </div>
  );
};

export default JobCard;
