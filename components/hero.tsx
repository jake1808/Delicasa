import {useInView} from 'react-intersection-observer'



type props={
    url:string
}

function Hero({url}:props){
    const {ref, inView}=useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px'
    })
    return(
    <div id='top' ref={ref} className={`hero min-h-full transition-opacity ${inView ? 'opacity-1':'opacity-0'}`} style={{backgroundImage:`url(${url})`}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-white ">
    <div className=" py-[200px]">
        <p>Since 2019-</p>
        <hr className=""/>
        <h1 className="text-[70px] sm:text-[120px] font-bold font-hero">DELICASA</h1>
        <hr className=" mb-5"/>
        <p className="">Deli meats and cheeses / Majoru distributors / Legal game </p>
    </div>
    </div>
    </div>
    );
}

export default Hero;