import React from 'react';

interface CountryCardProps {
  name: string;
  flag: string;
  region: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, code, flagUrl }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={flagUrl} alt={`Flag of ${name}`} className="w-16 h-10 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm text-gray-600">Code: {code}</p>
    </div>
  );
};

export default CountryCard;
