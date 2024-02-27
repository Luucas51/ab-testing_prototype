import { equals, find, has, path, prop, propOr } from "ramda";
import { Link } from 'react-router-dom';

const ViewBasket = ({version}) => {
  const versionId = prop('versionId', version)
  const findBasket = find(has('basket'));
  const basketData = findBasket(prop('checkout', version));

  return (
    <div>
      <h1>{path(['basket', 'title'], basketData)}</h1>
      <label for="listBasket">Selectionner un panier</label>
      <br/>
      <select name="listBasket" id="maListe">
        <option value="option1">Small</option>
        <option value="option2">Medium</option>
        <option value="option3">Large</option>
      </select>
      <Link to={equals('1', versionId) ? "/user" : '/success'}>Confirmer</Link>
    </div>
  )
}

export default ViewBasket;