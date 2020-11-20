import react from 'react'

const Progress = ({ name, percent }) => { 
  return (
    <div className="progress">
      <span className="skill">{ name } <i className="val">{ percent }%</i></span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow={ percent } aria-valuemin="0" aria-valuemax="100" 
          style={{ width:`${ percent }%` }}/>
        </div>
    </div>
  )
 }

export default Progress