import React from 'react';

const ExpenditureItem= ({expenditure}) =>{
    const {owner,name,price} =expenditure;
    return(

        <tbody>
        <tr>
          <th scope="row">{owner}</th>
          <td>{name}</td>
          <td>{price}</td>
          <td>....</td>
        </tr>
      </tbody>

        /*<li>
            Név: {name} || Érték: {price}
        </li>*/
    );
};
export default ExpenditureItem;