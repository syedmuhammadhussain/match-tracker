export interface MatchListClientProps {
  fallbackData: MatchResponseData
}

interface TeamPlayer {
  kills: number
  username: string
}
export interface Team {
  name: string
  points: number
  players: TeamPlayer[]
  total_kills: number
  place: number
}

export interface Match {
  awayScore: number
  homeScore: number
  id: string | number
  awayTeam: Team
  homeTeam: Team
  status: string
  title: string
  time: string
}

export interface MatchResponseData {
  data: {
    matches: Match[]
  }
}

// export interface Match {
//   awayScore: number
//   awayTeam: AwayTeam
//   homeScore: number
//   homeTeam: AwayTeam
//   status: string
//   title: string
// }

// interface AwayTeam {
//   name: string
//   place: number
//   players: Array<any>
//   points: number
//   total_kills: number
// }

// Define the expected API response
// interface MatchesResponse {
//   matches: Match[]
// }

// export interface MatchResponseData {
//   data: MatchesResponse
// }
