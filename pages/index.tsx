import { data } from 'autoprefixer'

import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { type } from 'os'
import Nav from '../components/nav'
import GetHeroImage from '../lib/data/get_hero_image'

import styles from '../styles/Home.module.css'

type props={
  url:string
}


const Home = ({url}:props) => {

  return (
    <div>
      <Head>
        <title>Delicasa</title>
        <meta name="description" content="Delicasa website" />
        <link rel="icon" href="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <main>
      <Nav/>
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

