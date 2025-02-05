// Write your code here
import './index.css'

const MatchCard = ({match}) => {
  const {competing_team, competing_team_logo, result, match_status} = match

  const statusClass =
    match_status === 'Won' ? 'match-status-won' : 'match-status-lost'

  return (
    <div className="match-card">
      <img
        src={competing_team_logo}
        alt={`competing team ${competing_team}`}
        className="competing-team-logo"
      />
      <p className="competing-team">{competing_team}</p>
      <p className="result">{result}</p>
      <p className={`match-status ${statusClass}`}>{match_status}</p>
    </div>
  )
}

export default MatchCard
