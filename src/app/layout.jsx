import Header from '@/components/Header';
import Providers from './Providers';

export const metadata = {
  title: 'The movie App V2',
  description: 'This the new movie App version',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body >
        <Providers>

          <Header />

        {/**navbar */}
        {/**search */}
        {children}
        </Providers>
        </body>
        
    </html>
  )
}
