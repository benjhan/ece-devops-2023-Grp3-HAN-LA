// pages/_app.js
import '../styles/global.css' // Adjust the path to your global styles accordingly

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
