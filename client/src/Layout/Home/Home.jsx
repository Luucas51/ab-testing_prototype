import React from "react";
import { Link } from 'react-router-dom';
import { equals, prop } from "ramda";
const Home = ({ version }) => {
  const versionId = prop('versionId', version)
  return (
    <div className="Table-Wrapper">

        <h1>{prop('homePageTitle', version)}</h1>
        {equals('1', versionId) ?
          <Link to="/basket">Voir les panniers</Link>
          :
          <Link to="/user">Voir les panniers</Link>
        }

    </div>
  );
}

export default Home;
