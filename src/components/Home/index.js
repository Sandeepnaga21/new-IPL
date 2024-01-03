import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamcardsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardsData()
  }

  getTeamCardsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      name: eachItem.teams.name,
      id: eachItem.teams.id,
      teamImageUrl: eachItem.teams.team_image_url,
    }))
    this.setState({teamcardsList: updatedData, isLoading: false})
  }

  render() {
    const {teamcardsList, isLoading} = this.state

    return (
      <div className="app-container">
        <div className="ipl-dashboard">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt=" ipl logo"
            className="logo"
          />
          <h1 className="title">IPL Dashboard</h1>
        </div>
        <div className="ipl-teams">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            teamcardsList.map(eachItem => (
              <TeamCard teamcardsList={eachItem} key={eachItem.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default Home
