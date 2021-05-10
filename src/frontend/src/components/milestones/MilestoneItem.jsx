//egy konkrét milestone - van egy táblázat, és azon belül az itemek (<li></li>)
// ||CÉL: Megnevezés     (dropdown button) ||
import React from 'react';

const MilestoneItem = ({ milestone }) => {
  const { name, goalPrice } = milestone;
  return (
    <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{name}</td>
              <td>{goalPrice}</td>
              <td>{deadLine}</td>
              <td>....</td>
            </tr>
          </tbody>
    /*<li>
      Név: {name} || Cél: {goalPrice}
    </li>*/
  );
};

export default MilestoneItem;
