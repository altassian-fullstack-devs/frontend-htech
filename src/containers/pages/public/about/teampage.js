import react from 'react'
import Team, {TeamContent} from '../../../../components/about/team'
import BreadCrumb from '../../../layout/common/breadcrumb'


const TeamPage = ({}) => {
    return (
      <main id="main">
        <BreadCrumb path="Team"/>
        <Team heading={false}/>
      </main>
    )
}
export default TeamPage