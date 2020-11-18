import React from 'react'
import ServiceItem from '../../../components/services/service-item';
import SectionTitle from '../../../components/services/section-title';
import SectionContent from '../../../components/services/section-content';
import BreadCrumb from 'containers/layout/common/breadcrumb';

const Services = props => {
  return (
    <div>
      <BreadCrumb path="Services"/>
      
      <section id='services' className='services'>
        <div className='container'>
          <div className='row'>
            <ServiceItem title = "IT expert"  ico = 'icofont-computer' description = "This is title1" />
            <ServiceItem title = "High IQ"  ico = 'icofont-chart-bar-graph' description = "This is title2" />
            <ServiceItem title = "Best Service"  ico = 'icofont-image' description = "This is title3" />
            <ServiceItem title = "Always Welcome"  ico = 'icofont-settings' description = "This is title3" />
            <ServiceItem title = "Warm greeting"  ico = 'icofont-earth' description = "This is title3" />
            <ServiceItem title = "Elegant and simple"  ico = 'icofont-tasks-alt' description = "This is title3" />
          </div>
        </div>
      </section>
      <section id='features' className='features row'>
        <div className='container'>
          <SectionTitle className='section-title'/>
          <SectionContent className='row'/>
        </div>
      </section>
    </div>
  )
}

export default Services;
