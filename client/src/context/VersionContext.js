import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const VersionContext = createContext();

export const VersionProvider = ({ children }) => {
  const [version, setVersion] = useState(null);

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await axios("/api/version/getVersion");
        const stats = await axios("/api/version/stats");
        console.log(stats.data)
        setVersion(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchVersion();
  }, []);

  return (
    <VersionContext.Provider value={{ version }}>
      {children}
    </VersionContext.Provider>
  );
};
