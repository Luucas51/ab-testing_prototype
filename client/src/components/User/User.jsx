import { equals, find, has, path, prop } from "ramda";
import { Link } from 'react-router-dom';

const User = ({ version }) => {
  const versionId = prop('versionId', version)
  const findAccount = find(has('account'));
  const accountData = findAccount(prop('checkout', version));

  return (
    <div>
      <h1>{path(['account', 'title'], accountData)}</h1>
        <label>Nom :</label><br />
        <input type="text" id="nom" name="nom" /><br />

        <label >Email :</label><br />
        <input type="email" id="email" name="email" /><br />
        
        <label >Mot de passe :</label><br />
        <input type="password" id="password" name="password" /><br />

      <Link to={equals('1', versionId) ? "/success" : '/basket'}>Confirmer</Link>
    </div>  )
}

export default User;