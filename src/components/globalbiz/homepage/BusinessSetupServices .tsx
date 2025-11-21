// components/BusinessSetupServices.tsx
import React from 'react';

interface BusinessSetupServicesProps {
  className?: string;
}

const BusinessSetupServices: React.FC<BusinessSetupServicesProps> = ({ 
  className = '' 
}) => {
  const locations = [
    'Fujairah',
    'Dubai', 
    'Abu Dhabi',
    'Sharjah'
  ];

  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        WE OFFER BUSINESS SETUP SERVICES IN
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {locations.map((location, index) => (
          <div
            key={location}
            className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors duration-300"
          >
            <h3 className="text-lg font-semibold text-blue-800">
              {location}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessSetupServices;