// Write your code here
import './index.css'

const LatestMatch = ({latestMatch}) => {
  const {
    competing_team,
    date,
    venue,
    result,
    first_innings,
    second_innings,
    man_of_the_match,
    umpires,
  } = latestMatch

  return (
    <div className="latest-match">
      <h1 className="latest-match-title">Latest Match</h1>
      <p className="competing-team">{competing_team}</p>
      <p className="match-date">{date}</p>
      <p className="venue">{venue}</p>
      <p className="result">{result}</p>
      <p>{latestMatch.umpires}</p> // Display umpires in a single paragraph
      element as received
      <h2>Innings</h2>
      <p>First Innings: {first_innings}</p>
      <p>Second Innings: {second_innings}</p>
      <h2>Details</h2>
      <p>Man of the Match: {man_of_the_match}</p>
      <p>Umpires: {umpires}</p>
    </div>
  )
}

export default LatestMatch
