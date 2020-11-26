import react from "react"

const RightBlock = ({}) =>{
  return (
    <div className="right-block">
          <img alt="bevi-03" src={ require('assets/images/portfolio/portfolio-detail/bevi-03.original.format-png.png').default} />
        <span>
          <span className="project-header">Challenge</span>
          <p></p>
          <p>Bevi is a Techstars honor grad focused on meeting the demands of today’s healthy workplace. They introduced eco-friendly water coolers that encourage people to stay hydrated during the workday.</p>
          <p>As Bevi received overwhelmingly positive feedback for providing a highly sustainable product, they were looking for a software development partner that would be able to keep up with their fast pace and rapid growth.</p>
          <p>iTechArt was ready to build a solution that would synchronize with the hardware module to manage Bevi’s product.</p>
          <p></p>
        </span>
    </div>
  )
}

export default RightBlock



