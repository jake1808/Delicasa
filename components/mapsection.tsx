import Link from "next/link"
import {useInView} from 'react-intersection-observer'


 function MapSection (){

  return(
    <div  className={`p-8`} id="maps">
      <h3 className="text-center mb-8 text-4xl">Shop Locations</h3>
  <div className="flex flex-col justify-evenly items-center lg:flex-row">
  <MapCard 
      ImageUrl={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/pin-s+fb0404(28.2861035,-15.410147077044845)/28.2861,-15.4101,15,0/300x200?access_token=${process.env.NEXT_PUBLIC_MAP_API_TOKEN}`}
      title='Kabelenga'
      directions="You can find our main shop on Kabelenga road opposite TopGear"
      mapUrl="https://www.google.com/maps/place/DELICASA+ZAMBIA+LIMITED/@-15.4107082,28.2870423,18z/data=!4m12!1m6!3m5!1s0x0:0xa8cc9a866fe8215f!2sDELICASA+ZAMBIA+LIMITED!8m2!3d-15.4111592!4d28.2861127!3m4!1s0x0:0xa8cc9a866fe8215f!8m2!3d-15.4111592!4d28.2861127"/>
 <MapCard 
      ImageUrl={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/pin-s+ff0000(28.390603438423685,-15.469192090979274)/28.3906,-15.4692,15,0/300x200?access_token=${process.env.NEXT_PUBLIC_MAP_API_TOKEN}`}
      title='The Village'
      directions="You can find our other shop in the village along leopards hill road"
      mapUrl="https://goo.gl/maps/nvu1fjK2vfgieopv8" />
  <MapCard 
      ImageUrl={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/pin-s+ff0000(28.374965719114225,-15.447671534460746)/28.375,-15.4477,15,0/300x200?access_token=${process.env.NEXT_PUBLIC_MAP_API_TOKEN}`}
      title='Bauleni'
      directions="You can find our other shop in Bauleni opposite Shoprite"
      mapUrl="https://goo.gl/maps/bBrKTAcfaG9hMsS38"/>
      </div>
    </div>
  )
}


export default MapSection

type cardProps = {
  ImageUrl:string,
  title:string,
  directions:string,
  mapUrl:string
}


function MapCard({ImageUrl, title, directions, mapUrl}:cardProps) {

  const {ref, inView} = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px'
  })


  return <div ref={ref} className={`card card-compact w-96 mb:w-80 bg-base-100 shadow-2xl mb-6 transition ease-in duration-700 ${inView ? 'opacity-1 translate-x-0':'opacity-0 -translate-x-6'}`}>
    <figure><img src={ImageUrl} alt="MapImage" /></figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{directions}</p>
      <div className="card-actions justify-end">
        <Link
          href={mapUrl}
          target="_blank">
          <a
            className="btn btn-accent"
          >Get location</a>
        </Link>
      </div>
    </div>
  </div>
}

