import Header from '@/components/Header';

export const metadata = {
  title: 'The movie App V2',
  description: 'This the new movie App version',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body >
        <Header />

        {/**navbar */}
        {/**search */}
        {children}</body>
    </html>
  )
}
