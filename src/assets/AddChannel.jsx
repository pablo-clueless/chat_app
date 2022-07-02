import React from 'react'

const AddChannel = ({ setCreateType, setIsCreating, setIsEditing, setToggleContainer, type }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle" onClick={() => {
        setCreateType(type);
        setIsCreating((prevState) => !prevState);
        setIsEditing(false);
        if(setToggleContainer) setToggleContainer((prevState) => !prevState) 
      }}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="16">
      </line><line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
)


export default AddChannel