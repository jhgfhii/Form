import React from 'react'
import Aaray2data from './aaray2data'

const AarayData = ({name}) => {

  console.log(name,"data from card")

    
  return (<>
<div  className="flex flex-wrap gap-6 justify-center p-6">
{name.map((item, index) => (
        <div key={index} className="w-64 p-4 rounded-xl shadow-md bg-white border border-gray-200">
          <img
            src={item.image}
            alt={item.variant_name}
            className="w-full h-40 object-contain rounded-lg"
          />
          <h2 className="text-lg font-bold mt-2 text-center">{item.variant_name}</h2>
          <p className="text-center text-gray-600">₹{item.price}</p>
          <p className={`text-center  ${item?.stock_sataus==="In-stock"?"text-green-500":"text-red-500"} `}>{item.stock_sataus}</p>
        </div>
      ))}
</div>
{/* <Aaray2data value={name}/> */}
    </>)
}

export default AarayData