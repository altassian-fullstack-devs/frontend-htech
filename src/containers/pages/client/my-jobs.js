import React from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, List, Button } from 'antd'

import { FixedWidthLayout } from 'containers/layout'
import SideFilter from 'components/developers/side-filter'
import JobItem from 'components/common/job-item'

const { Content } = Layout

const job_data =[
  {
    id: 1,
    title : "Python or Julia for data science : Which one works best?",
    content : "  Both Python and Julia are incredible tools that are sure to meet the needs and expectations of any data scientist. However, let's dig deeper and learn which one, Julia vs. Python, is better for data science?",
    date : "10 Nov 2020"
  },
  {
    id: 2,
    title : "Automating automation: How technology is changing the business world",
    content : " Technology automation has already disrupted the way we do business, and this process isn’t anywhere close to complete. Let's learn more about the future of automation.",
    date : "10 Nov 2020"
  },
  {
    id: 3,
    title : "Google Cloud Platform accelerates startup business growth (for free!)",
    content : " Let's find out how exactly can cloud solutions accelerate the business growth of early-stage companies.",
    date : "28 Oct 2020"
  },
  {
    id: 4,
    title : "Why build fintech in the cloud now",
    content : " Cloud computing in financial services is driving industry change faster than ever. It opens up the playing field, democratizes powerful solutions, and accelerates innovation in a positive feedback loop.",
    date : "19 Oct 2020"
  },
  {
    id: 5,
    title : "It's official: iTechArt is now a Google Cloud Service partner",
    content : " iTechArt proudly joins Google Cloud Partner Program to expand our cloud offering and empower our clients to reach new heights of business growth",
    date : "16 Oct 2020"
  },
  {
    id: 6,
    title : "Understanding Salesforce Sharing rules",
    content : "Salesforce has revolutionized the way that businesses and organizations keep track of their clients and customers. Here we're explaining how to enable sharing access to users within various roles and territories",
    date : "09 Oct 2020"
  },
]

const MyJobs = () => {
  const history = useHistory()

  const onClickItem = (id) => {
    history.push(`jobs/${id}`)
  }

  return (
    <FixedWidthLayout className="page-client-jobs">
      <Layout className="client-jobs-header">
        <div>My Jobs</div>
        <Button className="button-new-job" href="/">Post a Job</Button>
      </Layout>
      <Content className="client-jobs-content">
        <div className="jobs-content-header">Active contracts ({job_data.length})</div>
        <List
          itemLayout="horizontal"
          dataSource={job_data}
          renderItem={item => <JobItem item={item} onClickItem={onClickItem}/>}
        />
      </Content>
    </FixedWidthLayout>
  )
}

export default MyJobs
