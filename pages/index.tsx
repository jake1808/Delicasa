import { GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../components/about'

import Hero from '../components/hero'
import Nav from '../components/nav'
import GetImage from '../lib/data/get_image'

import styles from '../styles/Home.module.css'

type props={
  heroImage:string,
  aboutImage:string
}


const Home = ({heroImage, aboutImage}:props) => {
  return (
    <div >
      <Head>
        <title>Delicasa</title>
        <meta name="description" content="Delicasa website" />
        <link rel="icon" href="./logo.webp" />
      </Head>
      <main className='w-full'>
      <Nav/>
      <Hero url={heroImage}/>
      <About url={aboutImage}/>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context)=>{
 const heroImage= await GetImage({imageName:'hero1.JPG'});
 const aboutImage= await GetImage({imageName:'about_image.webp'});

  return{
    props: {
       heroImage:heroImage,
       aboutImage:aboutImage
    }
  }
}
export default Home

