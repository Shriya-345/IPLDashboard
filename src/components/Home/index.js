// Write your code here
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

const Home = () => {
  const [teams, setTeams] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch(teamsApiUrl)
      const data = await response.json()
      setTeams(data.teams)
      setIsLoading(false)
    }
    fetchTeams()
  }, [])

  return (
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
        alt="ipl logo"
      />
      <h1>IPL Dashboard</h1>

      {isLoading ? (
        <div testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      ) : (
        <div className="teams-list">
          <ul>
            {teams.map(team => (
              <li key={team.id} role="listitem">
                <Link to={`/team-matches/${team.id}`} className="team-link">
                  <TeamCard team={team} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Home
