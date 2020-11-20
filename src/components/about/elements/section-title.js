import react from 'react'

const SectionTitle = ({ name, desc }) => { 
  return (
    <div className="section-title">
      <h2>{ name }</h2>
      <p>{ desc }</p>
    </div>
  )
 }

export default SectionTitle