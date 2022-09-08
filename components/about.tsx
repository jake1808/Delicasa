import { type } from "os";
import Image from 'next/image'

type props = {
    url:string
}

function About({url}:props) {
    
    return(
        <div className="flex items-center max-h-[400px] overflow-hidden md:max-h-[600px] lg:max-h-[800px]">
            {/*  */}
            <div className="flex-1 max-h-[400px] md:max-h-[600px]">
            <img src={url} alt="about image" className="w-full m-0  object-cover max-h-[400px] md:max-h-[600px] lg:max-h-[800px]"/>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center text-center px-6">
                <h2>About us</h2>
                <h3>Deli-ght in every flavour</h3>
                <p>We are a local Deli based in two locations in lusaka. We offer products from around the world, including British teas, Italian Hams, American Bakes and Coffees and the best of your local Zambian products! </p>
                <p>We are affiliated with Majoru meats and offer a wide range of their products. We also have our own line of meats and sausage flavours from all over the globe. We offer pop up barbecues/sausage sizzles at private and public events. Additionally we are proud members of &quot;This Is Not A Game&quot;, the nationally recognized state for legal game meat distributors. </p>
            </div>
        </div>
    );
}

export default About;