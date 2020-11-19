import react from 'react'
import Member from './elements/member'
import SectionTitle from './elements/section-title'

let data = [
  { 
    name: 'Walter White',
    role: 'Chief Executive Officer',
    desc: 'Explicabo voluptatem mollitia et repellat',
    img: 'team-1.jpg'
  },
  { 
    name: 'Sarah Jhonson',
    role: 'Product Manager',
    desc: 'Aut maiores voluptates amet et quis',
    img: 'team-2.jpg'
  },
  { 
    name: 'William Anderson',
    role: 'CTO',
    desc: 'Quisquam facilis cum velit laborum corrupti',
    img: 'team-3.jpg'
  },
  { 
    name: 'Amanda Jepson',
    role: 'Accountant',
    desc: 'Dolorum tempora officiis odit laborum officiis',
    img: 'team-4.jpg'
  }
]

export const TeamContent = () => (
  <div className="row">
    { data.map((item, index) => (<Member key={ index } { ...item }></Member>)) }
  </div>
)
const Team = ({heading = true}) => { 
  return (
    <section id="team" className={`team ${heading && 'section-bg'}`}>
      <div className="container">
      {heading && <SectionTitle name={ 'TEAM' } desc={ 'OUR HARDOWRKING TEAM' }/>}
      <TeamContent/>
      </div>
    </section>
  )
 }

export default Team