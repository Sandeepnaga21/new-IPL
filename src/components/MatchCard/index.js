import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const {
    result,
    id,
    competing_team,
    competing_team_logo,
    match_status,
  } = recentMatches

  return (
    <li className="recent-matches" key={id}>
      <img src={competing_team_logo} alt={`competing team ${competing_team}`} />
      <h1 className="heading">{competing_team}</h1>
      <p className="result">{result}</p>
      <p className="status">{match_status}</p>
    </li>
  )
}

export default MatchCard
