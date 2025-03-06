import { MatchResponseData } from '@/types/match-tracker.types'

export default async function getMatches(): Promise<MatchResponseData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/fronttemp`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Network response was not ok')
  }

  return res.json()
}
