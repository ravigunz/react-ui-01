import React from 'react';
import SkinCard from '../../../../../components/skinList/SkinCard';

const skinData = [
  {
    factoryType: 'Factory New',
    cardChipColor: '#e54142',
    image: 'https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png',
    title: 'Survival Knife (WW)',
    price: '$984.27',
    isSelected: true,
  },
  {
    factoryType: 'Holo',
    cardChipColor: 'purple',
    image: 'https://www.freeiconspng.com/thumbs/knife-png/bloody-knife-png-23.png',
    title: 'SSG 08 (FN)',
    price: '$159.32',
    isSelected: false,
  },
];

export default function SkinsList() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {skinData.map((val, key) => {
        return (
          <div style={{ padding: '10px' }} key={key}>
            <SkinCard
              factoryType={val.factoryType}
              cardChipColor={val.cardChipColor}
              image={val.image}
              title={val.title}
              price={val.price}
              isSelected={val.isSelected}
            />
          </div>
        );
      })}
    </div>
  );
}