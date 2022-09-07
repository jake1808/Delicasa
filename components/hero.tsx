
type props={
    url:string
}

function Hero({url}:props){
    console.log(url)
    return(
    <div className="hero min-h-full overflow-hidden" style={{backgroundImage:`url(${url})`}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-white ">
    <div className=" py-[80px]">
        <p>Since 2019-</p>
        <hr className="w-12/12"/>
        <h1 className="text-[70px] sm:text-[120px] font-bold ">DELICASA</h1>
        <hr className="w-12/12 mb-5"/>
        <p className="">Deli meats and cheeses / Majoru distributors / Legal game </p>
    </div>
    </div>
    </div>
    )

}

export default Hero;