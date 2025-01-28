import React from 'react'

const StaffCard = ({ name, role, image }) => {
  return (
    <div className="text-center">
    <img
      src={image}
      alt={`${name}'s profile`}
      className="object-contain mx-auto"
      width={200}
      height={200}
    />
    <p className="text-2xl font-medium text-gray-600">{name}</p>
    <p className="text-gray-500 mb-1">{role}</p>
    <div className="bg-blue-900 h-1 w-12 mx-auto"></div>
  </div>
  )
}

export default StaffCard