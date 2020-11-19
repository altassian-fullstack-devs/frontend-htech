import react from 'react'
import Progress from './elements/progress'
import SectionTitle from './elements/section-title'

let data1 = [
  { 
    name:'HTML',
    percent:'100',
  },
  { 
    name:'CSS',
    percent:'90'
  },
  { 
    name:'JAVASCRIPT',
    percent:'75'
  }
]

let data2 = [
  { 
    name:'PHP',
    percent:'80'
  },
  { 
    name: 'WORDPRESS/CMS', 
    percent: '90'
  },
  { 
    name:'PHOTOSHOP',
    percent: '55'
  }
]

const Skills = ({ }) => { 
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionTitle name="OUR SKILLS" desc="CHECK OUR OUR SKILLS"/>

        <div className="row skills-content">
          <div className="col-lg-6">
            { data1.map((item, index) => (<Progress key={ index } { ...item } ></Progress>)) }
          </div>

          <div className="col-lg-6">
            { data2.map((item, index) => (<Progress key={ index } { ...item } ></Progress>)) }
          </div>
        </div>
      </div>
    </section>
  )
 }
export default Skills