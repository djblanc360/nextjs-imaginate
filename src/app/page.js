use client'

import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation' // Use next/navigation instead of next/router
import dynamic from 'next/dynamic'

const SessionComponent = dynamic(() => import('../components/SessionComponent'), { ssr: false })

export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/account')
    }
  }, [status, router])

  if (status === 'loading') {
    return <p>Loading...</p> // Show a loading state while checking authentication status
  }

  return (
    <div>
      <SessionComponent />
    </div>
  )
}