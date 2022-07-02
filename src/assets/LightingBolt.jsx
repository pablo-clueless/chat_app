import React from 'react'

const LightningBolt = ({ giphyState, onCommandClick }) => (
  <div onClick={onCommandClick} style={{ display: 'flex' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-zap">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill={giphyState ? 'var(--primary-color)' : 'black'} fillOpacity={giphyState ? '1' : '0.2'}></polygon>
      </svg>
  </div>
)

export default LightningBolt