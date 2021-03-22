//egy konkrét milestone - van egy táblázat, és azon belül az itemek (<li></li>)
// ||CÉL: Megnevezés     (dropdown button) ||
import React from 'react';

const MilestoneItem = ({ milestone }) => {
  const { name, goalPrice } = milestone;
  return (
    <li>
      Név: {name} || Goal price: {goalPrice}
    </li>
  );
};

export default MilestoneItem;