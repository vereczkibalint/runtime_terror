import React from 'react';

const IncomeItem=({income}) =>{
    const {owner,name,price} =income;
    return(
        <li>
            Tulaj: {owner} || Megnevezés: {name} || Érték: {price}
        </li>
    );
};
export default IncomeItem;