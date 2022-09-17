import Link from "next/link";
import { type } from "os";

type props = {
    card1:string,
    card2:string,
    card3:string
}

function SocialNews({card1, card2, card3}:props){
    return(
        <div className="flex flex-col py-10 items-center md:flex-row  md:justify-evenly md:items-stretch bg-primary ">
            {CardElement(card1, "Check out our international range")}
            {CardElement(card2, "The beverage corner")}
            {CardElement(card3, "Have a question")}
        </div>
    );
}


export default SocialNews;

function CardElement(cardImage: string, cardText:string) {
    return (<div className="card w-96 shadow-xl image-full max-h-[40vh] text-center mb-4 md:mb-0">
        <figure><img src={cardImage} alt='food' /></figure>
        <div className="card-body items-center mt-36">
            <h2 className="card-title text-white ">{cardText}</h2>
            <div className="card-actions justify-center">
                <Link href="">
                    <a className="link link-accent">Know more</a>
                </Link>
            </div>
        </div>
    </div>);
}
