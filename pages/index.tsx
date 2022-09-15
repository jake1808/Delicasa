import { GetServerSideProps} from 'next'
import Head from 'next/head'
import About from '../components/about'

import Hero from '../components/hero'
import Nav from '../components/nav'
import SocialNews from '../components/socialNews'
import GetImage from '../lib/data/get_image'

import styles from '../styles/Home.module.css'

type props={
  heroImage:string,
  aboutImage:string,
  card1:string,
  card2:string,
  card3:string
}


const Home = ({heroImage, aboutImage, card1, card2, card3}:props) => {
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
      <SocialNews card1={card1} card2={card2} card3={card3}/>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context)=>{
 const heroImage= await GetImage({imageName:'hero1.JPG'});
 const aboutImage= await GetImage({imageName:'about_image.webp'});
 const card1=await GetImage({imageName:'card1.webp'});
 const card2=await GetImage({imageName:'card2.webp'});
 const card3=await GetImage({imageName:'card3.webp'});

  return{
    props: {
       heroImage:heroImage,
       aboutImage:aboutImage,
       card1:card1,
       card2:card2,
       card3:card3
    }
  }
}
export default Home

