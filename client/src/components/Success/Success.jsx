import React, { useEffect } from "react";
import axios from 'axios'
import { prop } from "ramda";
const Success = ({ version }) => {
  useEffect(() => {
    const fetchVersion = async () => {
      try {
        await axios.post("/api/version/", {
          versionId: prop('versionId', version),
          success: true
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchVersion();
  }, []);
  return (
    <div>
      <p>Success</p>
    </div>  
  )
}

export default Success;