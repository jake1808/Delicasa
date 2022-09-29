import { GetServerSideProps} from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import About from '../components/about'

import Hero from '../components/hero'
import MapSection from '../components/mapsection'
import Nav from '../components/nav'
import SocialNews from '../components/socialNews'

type props={
  heroImage:{
    url:string
  },
  aboutImage:{
    url:string
  },
  card1:{
    url:string
  },
  card2:{
    url:string
  },
  card3:{
    url:string
  }
}


const Home = ({heroImage, aboutImage, card1, card2, card3}:props) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(()=>{
     setLoading(false)
     console.log('hi')
    }, 9000)
  }, [heroImage, aboutImage, card1, card2, card3])
  
  return (
    <>
      <Head>
        <title>Delicasa</title>
        <meta name="description" content="Delicasa website" />
        <link rel="icon" href="./logo.webp" />
      </Head>
      <Nav/>
      {loading?
      (
      <div className='h-screen flex justify-center items-center'>
        <ReactLoading type='spinningBubbles' color='#FF0000' height={267} width={175}/>
        </div>
        )
        :
        (<main > 
        <Hero url={heroImage.url} />
        <About url={aboutImage?.url}/>
        <SocialNews card1={card1?.url} card2={card2?.url} card3={card3?.url}/>
        <MapSection/>
        </main>)}
      <footer className='bg-accent flex justify-end'>
        <div className='p-9 '>
          <h3 className='text-secondary text-xl'>Developed by <a href='https://www.linkedin.com/in/jacob-mutale-a13167209/' className='link link-secondary font-bold'>Jacob Mutale</a></h3>
        </div>
      </footer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context)=>{

  const heroLink= await fetch(`https://delicasa-jake1808.vercel.app/api/getImage/hero.jpeg`);

  const heroImage= await heroLink.json();

  const aboutLink= await fetch(`https://delicasa-jake1808.vercel.app/api/getImage/about_image.webp`);
  const aboutImage= await aboutLink.json();

  const card1Link= await fetch(`https://delicasa-jake1808.vercel.app/api/getImage/card1.jpeg`);
  const card1= await card1Link.json();

  const card2Link=await fetch(`https://delicasa-jake1808.vercel.app/api/getImage/card2.webp`);
  const card2= await card2Link.json();

  const card3Link=await fetch(`https://delicasa-jake1808.vercel.app/api/getImage/card3.webp`);
  const card3= await card3Link.json(); 

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

