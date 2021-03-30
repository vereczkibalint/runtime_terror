import React from 'react';

const ExpenditureItem= ({expenditure}) =>{
    const {name,price} =expenditure;
    return(
        <li>
            Név: {name} || Érték: {price}
        </li>
    );
};
export default ExpenditureItem;