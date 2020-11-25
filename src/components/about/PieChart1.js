import react from 'react'
import { PieChart } from 'react-minimal-pie-chart';

const data02 = [
  { title: 'Backend', value: 27, color: '#ff0000', stroke: '#ff0000' },
  { title: 'Frontend', value: 24, color: '#ffffff', stroke: '#ff0000'},
  { title: 'DevOps', value: 8, color: '#999999' , stroke: '#999999'},
  { title: 'QA', value: 16, color: '#DDDDDD' , stroke: '#DDDDDD'},
  { title: 'Cloud', value: 11, color: '#999999' , stroke: '#999999', strokeWidth: '10'},
  { title: 'Mobile', value: 14, color: '#ffffff', stroke: '#ff0000', strokeWidth: '10'},
];

const PLabel = ({x, y, dataIndex, dataEntry, textAnchor, dx, dy}) => (
  <g transform={`translate(${x}, ${y})`} color={data02[dataIndex]} textAnchor={textAnchor} style={{fontSize:`${dataEntry.percentage / 5}px`, strokeWidth:'3'}}>
    <text x={dx * 7 / 4} y={dy * 3 / 2}>{`${Math.round(dataEntry.percentage)}%`}</text>
    <text x={dx * 7 / 4} y={dy * 3 / 2 + 5}>{`${dataEntry.title}`}</text>
  </g>
)

const PieCh = ({}) => (
  <PieChart
    data={data02}
    animate={true}
    label={(labelRenderProps) => (<PLabel {...labelRenderProps}/>)}
    radius = {35}
    startAngle = {-90}
    lineWidth = {40}
    // segmentsStyle={({dataEntry}) => {return {stroke:dataEntry.data.stroke}}}
    segmentsStyle = {(dataIndex) => {return {strokeWidth:data02[dataIndex].value}}}
    segmentsShift={(index) => (data02[index].value / 7)}
  />
)
export default PieCh