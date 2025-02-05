// Write your code here
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const teamMatchesApiUrl = id => `https://apis.ccbp.in/ipl/${id}`

const TeamMatches = () => {
  const {id} = useParams()
  const [teamData, setTeamData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTeamMatches = async () => {
      const response = await fetch(teamMatchesApiUrl(id))
      const data = await response.json()
      setTeamData(data)
      setIsLoading(false)
    }
    fetchTeamMatches()
  }, [id])

  if (isLoading) {
    return (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    )
  }

  const {team_banner_url, latest_match_details, recent_matches} = teamData

  return (
    <div className="team-matches-container">
      <img src={team_banner_url} alt="team banner" className="team-banner" />
      <LatestMatch latestMatch={latest_match_details} />
      <div className="recent-matches">
        <ul>
          {recent_matches.map(match => (
            <li key={match.id} role="listitem">
              <MatchCard match={match} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TeamMatches
