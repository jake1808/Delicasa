
import Link from "next/link";

type props = {
    url:string
}

function About({url}:props) {
    
    return(
      <div className="flex flex-col-reverse justify-center items-center md:flex-row delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0"  data-taos-offset="400">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url}/>
        </div>
        <div className="flex flex-col md:justify-center items-center text-center w-full py-20 px-6">
            <h2 className="font-bold text-5xl mb-4">About us</h2>
            <h3 className="font-semibold text-3xl mb-4">Delight in every flavour</h3>
            <p className="mb-4">We are a local Deli based in two locations in lusaka. We offer products from around the world, including British teas, Italian Hams, American Bakes and Coffees and the best of your local Zambian products!</p>
            <p className="mb-4">We are affiliated with Majoru meats and offer a wide range of their products. We also have our own line of meats and sausage flavours from all over the globe. We offer pop up barbecues/sausage sizzles at private and public events. Additionally we are proud members of &quot;This Is Not A Game&quot;, the nationally recognized state for legal game meat distributors.</p>
            <Link href="#maps">
                <a className="link link-accent">Visit our stores</a>
            </Link>
        </div>
      </div>
    );
}

export default About;