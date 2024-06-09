import dynamic from 'next/dynamic'
// import '../styles/globals.css'

const SessionProviderWrapper = dynamic(() => import('../components/SessionProviderWrapper'), { ssr: false })

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SessionProviderWrapper>
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  )
}