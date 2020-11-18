import React from 'react'

const SubContent = ({ item: {id, title, subtitle, description, isshow=''} }) => (
  <div className={`tab-pane ${isshow}`} id={`tab-${id}`}>
    <div className="row">
      <div className="col-lg-8 details order-2 order-lg-1">
        <h3>{title}</h3>
        <p className="font-italic">{subtitle}</p>
        <p>{description}</p>
      </div>
      <div className="col-lg-4 text-center order-1 order-lg-2">
        <img src={`img/features-${id}.png`} alt="" className="img-fluid"/>
      </div>
    </div>
  </div>
)

const SectionContent = props => {
  return(
    <div className="row">
      <div className="col-lg-3">
        <ul className="nav nav-tabs flex-column">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#tab-1">First Item</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#tab-2">Second Item</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#tab-3">Third Item</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#tab-4">Fourth Item</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#tab-5">5th Item</a>
          </li>
        </ul>
      </div>

      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className='tab-content'>
          <SubContent item={{
            id:1,
            title:'First Title',
            subtitle:'This is the first title',
            description:'Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal',
            isshow: 'active'
          }}>
          </SubContent>
          <SubContent item={{
            id:2,
            title:'Second Title',
            subtitle:'This is second title',
            description:' nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal'}}>
          </SubContent>
          <SubContent item={{
            id:3,
            title:'Third Title',
            subtitle:'This is third title',
            description:'Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal'}}>
          </SubContent>
          <SubContent item={{
            id:4,
            title:'4th Title',
            subtitle:'This is 4th title',
            description:'Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal'}}>
          </SubContent>
          <SubContent item={{
            id:5,
            title:'5th title',
            subtitle:'This is 5th title',
            description:'Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal'}}>
          </SubContent>
        </div>
      </div>
    </div>
  )
}

export default SectionContent;