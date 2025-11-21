// components/OurAssociations.tsx
import React from 'react';

const OurAssociations: React.FC = () => {
  return (
    <div className="bg-white p-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
        OUR ASSOCIATIONS
      </h1>
      
      {/* Checkbox Grid */}
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {/* Checkbox 1 */}
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="calient1"
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label 
            htmlFor="calient1" 
            className="ml-2 text-lg font-medium text-gray-900"
          >
            Calient
          </label>
        </div>
        
        {/* Checkbox 2 */}
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="calient2"
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label 
            htmlFor="calient2" 
            className="ml-2 text-lg font-medium text-gray-900"
          >
            Calient
          </label>
        </div>
        
        {/* Checkbox 3 */}
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="calient3"
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label 
            htmlFor="calient3" 
            className="ml-2 text-lg font-medium text-gray-900"
          >
            Calient
          </label>
        </div>
        
        {/* Checkbox 4 */}
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="calient4"
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label 
            htmlFor="calient4" 
            className="ml-2 text-lg font-medium text-gray-900"
          >
            Calient
          </label>
        </div>
      </div>
    </div>
  );
};

export default OurAssociations;