import Link from 'next/link'
import Layout from '../components/Layout.js'

export default function Page() {
  return (
    <Layout>
    <div className="max-w-6xl mx-auto py-12 px-6">

      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-green-800 mb-8">Welcome to PepeGYM</h1>
        <p className="text-xl text-gray-800 mb-8">
          Dive into a universe of GYM products and unmatched offers.
        </p>
        <Link href="/articles" passHref>
        <button className="bg-black-00 text-black py-3 px-8 rounded-lg hover:bg-black-600 focus:outline-none focus:bg-black-600">
          Explore Today
        </button>
        </Link>
      </div>


    </div>
    </Layout>
  )
}