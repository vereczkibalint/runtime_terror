import React from 'react';

const IncomeItem=({income}) =>{
    const {owner,name,price} =income;
    return(
        <tbody>
        <tr>
          <th scope="row">{owner}</th>
          <td>{name}</td>
          <td>{price}</td>
          <td>....</td>
        </tr>
      </tbody>



       /* <li>
            Tulaj: {owner} || Megnevezés: {name} || Érték: {price}
        </li>*/
    );
};
export default IncomeItem;