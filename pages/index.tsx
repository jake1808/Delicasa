import { data } from 'autoprefixer'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { type } from 'os'
import Nav from '../components/nav'

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
  const storage = getStorage();
  const pathReference = ref(storage, `images/hero1.JPG`);
  let heroImage = ""
  
 const url= await getDownloadURL(pathReference).then((url)=>{
    console.log(url)
    return url;
  }).catch((error)=>{
    console.log(error)
  })
  return{
    props: {
       url
    }
  }
}
export default Home
