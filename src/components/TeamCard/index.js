import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamcardsList} = props
  const {name, id, teamImageUrl} = teamcardsList

  return (
    <Link className="team-card-link" to={`/team-matches/${id}`}>
      <li className="ipl-team-cards">
        <img src={teamImageUrl} alt={name} className="img" />
        <h1 className="name">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
