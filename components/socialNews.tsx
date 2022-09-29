import Link from "next/link";
import {BsFacebook, BsInstagram, BsWhatsapp} from 'react-icons/bs'
import { useInView } from "react-intersection-observer";


type props = {
    card1:string,
    card2:string,
   
}

function SocialNews({card1, card2}:props){
    
    return(
        <div className="bg-accent flex flex-col items-center pb-6 w-full">
        <div className="flex flex-col py-10 items-center md:flex-row  md:justify-evenly md:items-stretch" >
            {CardElement(card1, "Check out our international range", '/featured')}
            {CardElement(card2, "The beverage corner", '/beveragecorner')}
      
            </div>
            <h3 className="mb-10 text-secondary text-4xl">Contact us</h3>
            <div className="flex justify-between w-9/12 mb:w-3/12">
                <Link href='https://www.facebook.com/delicasazambia/'>
                <a className="link link-secondary"><BsFacebook size={60}></BsFacebook></a>
                </Link>
                <Link href='https://www.instagram.com/delicasa_zambia/'>
                <a className="link link-secondary"><BsInstagram size={60} ></BsInstagram></a>
                </Link>
                <Link href='https://api.whatsapp.com/send?phone=%2B260966771822&fbclid=IwAR3rprbBS2ihlwp7q5ZYJfVxSvEkHbkAaBJ0l-Vd2F20HKOWNH8LzS7cLps'>
                <a className="link link-secondary"><BsWhatsapp size={60} className="link link-secondary"></BsWhatsapp></a>
                </Link>
                </div>
        </div>
    );
}


export default SocialNews;

function CardElement(cardImage: string, cardText:string, cardLink:string) {
    const {ref, inView} = useInView({
        triggerOnce: false,
        rootMargin: '-100px 0px'
      })
    
    return (
    <div ref={ref} className={`card card-compact w-10/12 shadow-2xl image-full max-h-[40vh] text-center mb-4 md:mb-0 md:mx-6 md:w-4/12 transition ease-in duration-700 ${inView ? 'opacity-1 translate-y-0':'opacity-0 -translate-y-6'}`}>
        <figure className="max-h-[30vh] "><img className="w-full" src={cardImage} alt='food' /></figure>
        <div className="card-body items-center justify-center">
            <h2 className="card-title text-white ">{cardText}</h2>
            <div className="card-actions justify-center">
                <Link href={cardLink}>
                    <a className="link link-secondary">Know more</a>
                </Link>
            </div>
        </div>
    </div>);
}
