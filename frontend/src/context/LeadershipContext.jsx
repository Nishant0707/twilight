import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const LeadershipContext = createContext();

export const LeadershipProvider = ({ children }) => {
  const [leaders, setLeaders] = useState([]);

  // Fetch leaders on mount
  useEffect(() => {
    axios.get("/api/leaders") // Adjust base URL
      .then((res) => setLeaders(res.data))
      .catch((err) => console.error("Error loading leaders", err));
  }, []);

  const addLeader = async (leader) => {
    const res = await axios.post("/api/leaders", leader);
    setLeaders((prev) => [...prev, res.data]);
  };

  const deleteLeader = async (id) => {
    await axios.delete(`/api/leaders/${id}`);
    setLeaders((prev) => prev.filter((l) => l._id !== id));
  };

  return (
    <LeadershipContext.Provider value={{ leaders, addLeader, deleteLeader }}>
      {children}
    </LeadershipContext.Provider>
  );
};

export const useLeadership = () => useContext(LeadershipContext);