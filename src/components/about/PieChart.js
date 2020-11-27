import React, { Component , useRef} from 'react';
import { PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer, Sector,
  Label, LabelList } from 'recharts';
// import { scaleOrdinal } from 'd3-scale';
import { Row, Col } from 'antd';

//promises
// handleLeave->opacity:1
//label-line erase
//size customize!

const data02 = [
  { name: 'Backend', value: 27 },
  { name: 'Frontend', value: 24},
  { name: 'DevOps', value: 8 },
  { name: 'QA', value: 16 },
  { name: 'Cloud', value: 11 },
  { name: 'Mobile', value: 14},
];

const stroke = ['#ff0000', '#ff0000', '#999999', '#DDDDDD', '#999999', '#ff0000']
const colors = ['#ff0000', '#ffffff', '#999999', '#DDDDDD', '#999999', '#ffffff']
const lx = [0, -5, 20, 10, 10, 20]
const techs = [
  ['Python', 'Node', 'RoR', 'Go', 'PHP', 'Scala', 'Java', '.Net'],
  ['React', 'Node', 'Angular', 'Vue', 'Bootstrap', 'Knockout', 'Backbone', 'Ionic'],
  ['Terraform', 'Ansible', 'Kubernetes', 'Docker', 'CI/CD'],
  ['Manual', 'Automation'],
  ['AWS', 'GCP', 'Azure', 'Cloud Native'],
  ['Cross-platform', 'iOS', 'Android'],
]

const initialState = { data02};

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, stroke } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        opacity = "1"
        stroke={stroke}
        strokeWidth = {3} 
      />
    </g>
  );
};

export default class Demo extends Component {
  static displayName = 'PieChartDemo';
  
  constructor(props) {
    super(props)
    const ref = React.createRef();
    this.state = {
      ...initialState,
      activeIndex: 0,
      animation: true,
      ref
    };
    this.renderLabelContent = this.renderLabelContent.bind(this)
  }

  renderLabelContent = (props) => {
    let { value, percent, x, y, midAngle, name, color, index } = props;
    const RADIAN = Math.PI / 180;
    //console.log("props:");
    //console.log(props);
    
    //console.log("props1");
    //console.log(this);
  
    let r = 80;
    x -= r * Math.cos(-RADIAN * midAngle);
    y -= r * Math.sin(-RADIAN * midAngle);
    // color
    return (
      <g transform={`translate(${x}, ${y})`} color={color} textAnchor={ (midAngle < -90 || midAngle >= 90) ? 'end' : 'start'} style={{pointerEvents:'none'}}>
        <text x={lx[index]} y={0}>{`${(percent * 100).toFixed(0)}%`}</text>
        <text x={lx[index]} y={20}>{`${name}`}</text>
      </g>
    );
  };
  
  handlePieChartEnter = (a, b, c) => {
    //console.log(a, b, c);
  };

  handleEnter = (e, activeIndex) => {
    var n = 1, m = 1;
    if(~this.state.activeIndex )
      n = techs[this.state.activeIndex].length;
    if(~activeIndex)
      m = techs[activeIndex].length;
    // //console.log(this.state.ref);
    this.state.ref.current.style.height = `${ 200 - m / 2.0 * 21.600 }px`
    // this.state.ref.current.style.height = `${Math.random * 100 % 12}px`
    console.log("handleEnter");
    this.setState({ activeIndex });
    
  }
  handleLeave = () => {
    console.log("handleLeave");
    this.setState({ activeIndex: -1 });
  }

  componentDidUpdate() {
    if(this.state.animation)
      this.setState({animation:false})
  }
  render () {
    const { activeIndex } = this.state;
    return (
      <Row style={{height:'100%'}} className='piechart'>
        <Col sm={16} xs={24}>
            <PieChart width={400} height={400} onMouseEnter={this.handlePieChartEnter}>
              <Pie
                data={data02}
                dataKey="value"
                cx={200}
                cy={200}
                startAngle={90}
                endAngle={-270}
                innerRadius={60}
                outerRadius={160}
                activeIndex={this.state.activeIndex}
                activeShape={renderActiveShape}
                onMouseEnter={this.handleEnter}
                onMouseLeave={this.handleLeave}
                label={this.renderLabelContent} 
                paddingAngle={0}
                isAnimationActive={this.state.animation}
              >
                {/* cell customize!!! */}
                {
                  data02.map((entry, index) => (
                    <Cell 
                    key={`slice-${index}`}
                    fill={colors[index]} 
                    stroke = {stroke[index]} 
                    strokeWidth = {3} 
                    opacity={activeIndex != -1 ? "0.2" : "1"}
                    innerRadius={60}
                    outerRadius={400}
                    />
                  ))
                }
              </Pie>
            </PieChart>
        </Col>
        <Col sm={8} xs={24} style={{display:'flex', justifyContent:'center'}}>
          <div className='' >
                <div className='ul_padding' style={{height: '113.6px'}} ref={this.state.ref}></div>
                <ul>
                  {activeIndex >= 0 && techs[activeIndex].map((item, index) => (<li key={index}>{item}</li>))}                  
                </ul>
          </div>
        </Col>
      </Row>
    );
  }
}