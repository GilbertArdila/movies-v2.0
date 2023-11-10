
import Header from '@/components/Header';
import Providers from './Providers';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';


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
          <Navbar />
          <SearchBox />

          {children}
        </Providers>
      </body>

    </html>
  )
}
