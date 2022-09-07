import { GetStaticProps } from 'next'
import Head from 'next/head'

import Hero from '../components/hero'
import Nav from '../components/nav'
import GetHeroImage from '../lib/data/get_hero_image'

import styles from '../styles/Home.module.css'

type props={
  url:string
}


const Home = ({url}:props) => {

  return (
    <div >
      <Head>
        <title>Delicasa</title>
        <meta name="description" content="Delicasa website" />
        <link rel="icon" href="./logo.webp" />
      </Head>
      <main>
      <Nav/>
      <Hero url={url}/>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context)=>{
 const url= await GetHeroImage();
  return{
    props: {
       url
    }
  }
}
export default Home

