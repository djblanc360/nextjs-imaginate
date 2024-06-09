'use client'

import { SessionProvider } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { getSession } from 'next-auth/react'

export default function SessionProviderWrapper({ children }) {
  const [session, setSession] = useState(null)

  useEffect(() => {
    async function fetchSession() {
      const session = await getSession()
      setSession(session)
    }
    fetchSession()
  }, [])

  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}