import { GetServerSideProps} from 'next'
import Head from 'next/head'
import About from '../components/about'

import Hero from '../components/hero'
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
  return (
    <div >
      <Head>
        <title>Delicasa</title>
        <meta name="description" content="Delicasa website" />
        <link rel="icon" href="./logo.webp" />
      </Head>
      <main className='w-full'>
      <Nav/>
      <Hero url={heroImage.url}/>
      <About url={aboutImage?.url}/>
      <SocialNews card1={card1?.url} card2={card2?.url} card3={card3?.url}/>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context)=>{
  const heroLink= await fetch(`${process.env.IMAGE_LINK}/api/getImage/hero1.JPG`);
  const heroImage= await heroLink.json();

  const aboutLink= await fetch(`${process.env.IMAGE_LINK}/api/getImage/about_image.webp`);
  const aboutImage= await aboutLink.json();

  const card1Link= await fetch(`${process.env.IMAGE_LINK}/api/getImage/card1.webp`);
  const card1= await card1Link.json();

  const card2Link=await fetch(`${process.env.IMAGE_LINK}/api/getImage/card2.webp`);
  const card2= await card2Link.json();

  const card3Link=await fetch(`${process.env.IMAGE_LINK}/api/getImage/card3.webp`);
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

