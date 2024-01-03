import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamDetailsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      lastMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamDetailsList: updatedData, isLoading: false})
  }

  render() {
    const {teamDetailsList, isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          teamDetailsList.map(eachItem => {
            ;<div className="team-matches-container">
              <img
                src={eachItem.teamBannerUrl}
                alt="team banner"
                className="img"
              />
              <LatestMatch lastMatchDetails={eachItem.lastMatchDetails} />
              <MatchCard recentMatches={eachItem.recentMatches} />
            </div>
          })
        )}
      </>
    )
  }
}

export default TeamMatches
