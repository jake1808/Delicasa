import Link from "next/link";
import {BsFacebook, BsInstagram, BsWhatsapp} from 'react-icons/bs'
import { type } from "os";

type props = {
    card1:string,
    card2:string,
    card3:string
}

function SocialNews({card1, card2, card3}:props){
    return(
        <div className="bg-accent flex flex-col items-center pb-6">
        <div className="flex flex-col py-10 items-center md:flex-row  md:justify-evenly md:items-stretch delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0"  data-taos-offset="400">
            {CardElement(card1, "Check out our international range")}
            {CardElement(card2, "The beverage corner")}
            {CardElement(card3, "Have a question")}
            </div>
            <h3 className="mb-10 text-secondary text-4xl">Contact us</h3>
            <div className="flex justify-between w-9/12 mb:w-3/12">
                <a className="link link-secondary"><BsFacebook size={60}></BsFacebook></a>
                <a className="link link-secondary"><BsInstagram size={60} ></BsInstagram></a>
                <a className="link link-secondary"><BsWhatsapp size={60} className="link link-secondary"></BsWhatsapp></a>
                </div>
        </div>
    );
}


export default SocialNews;

function CardElement(cardImage: string, cardText:string) {
    return (<div className="card w-96 shadow-xl image-full max-h-[40vh] text-center mb-4 mdmb-0 md:mx-6">
        <figure><img src={cardImage} alt='food' /></figure>
        <div className="card-body items-center mt-36">
            <h2 className="card-title text-white ">{cardText}</h2>
            <div className="card-actions justify-center">
                <Link href="">
                    <a className="link link-secondary">Know more</a>
                </Link>
            </div>
        </div>
    </div>);
}
