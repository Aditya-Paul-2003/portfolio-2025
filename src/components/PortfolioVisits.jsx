import React, { useState, useEffect } from "react";

const PortfolioVisits = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        const response = await fetch("/api/visit-count"); // Assuming you create this API endpoint
        const data = await response.json();
        setVisitCount(data.count);
      } catch (error) {
        console.error("Error fetching visit count:", error);
      }
    };

    fetchVisitCount();

    const intervalId = setInterval(fetchVisitCount, 60000); // Refresh every minute

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return <div>Portfolio Visits: {visitCount}</div>;
};

export default PortfolioVisits;
