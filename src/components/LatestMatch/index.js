import './index.css'

const LatestMatch = props => {
  const {lastMatchDetails} = props
  const {
    umpires,
    result,
    man_of_the_match,
    id,
    date,
    venue,
    competing_team,
    competing_team_logo,
    first_innings,
    second_innings,
  } = lastMatchDetails

  return (
    <>
      <h1 className="sub-heading">Latest Matches</h1>
      <div className="Latest-Match" key={id}>
        <div className="first-part">
          <h1 className="team-name">{competing_team}</h1>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <div className="second-part">
          <img
            src={competing_team_logo}
            alt={`latest match ${competing_team}`}
          />
        </div>
        <div className="third-part">
          <p className="firstInnings">First Innings</p>
          <p className="first_team">{first_innings}</p>
          <p className="secondInnings">Second Innings</p>
          <p className="second_team">{second_innings}</p>
          <p className="man-of-the-match">Man of The Match</p>
          <p className="Mom">{man_of_the_match}</p>
          <p className="umpires">Umpires</p>
          <p className="mans">{umpires}</p>
        </div>
      </div>
    </>
  )
}

export default LatestMatch
