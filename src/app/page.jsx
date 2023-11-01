import Image from "next/image";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";
import Healthcheck from 'public/healthcheck.png'
import Map from '/public/mapview.png'
import LoginImage from '/public/login.png'
import Dash from '/public/dash.png'

export default function Home() {
  return (
    <div>
      <div className="flex items-center gap-20 mx-10 my-10">
        <div className="flex-1 flex flex-col gap-9">
        <h1 className="text-6xl sm:text-7xl bg-gradient-to-b from-blue-900 via-blue-500 to-white text-transparent bg-clip-text font-bold text-center sm:text-left">
  Your health checkup at the palm of your hand
</h1>

          <p className="text-1xl sm-3xl font-light">
            Get your health checked using our Machine Learning model and get to
            know your probable issue
          </p>
          <Button url="/about" text="How do we work" className="mx-100px" />
        </div>
        <div className="flex-1">
          <Image src={Hero} alt="" className=" w-11/12" />
        </div>
      </div>
      <div className=" h-56 flex flex-col justify-center text-align: center;" style={{ marginLeft: "40px" }}>
  <div className="text-4xl sm-7xl font-sans font-semibold font-inter ">
    How चिकित्सालय <br />   works
  </div>
</div>

<div className="flex flex-col-reverse justify-between items-center sm:flex-row">
  <div className="w-full sm:w-2/3 text-center sm:text-left sm:mx-4 text-xl sm:text-2xl mb-4">
    You can access your dashboard, after logging in where you can have various options to access our features
  </div>
  <div className="w-full sm:w-1/3">
    <Image src={Dash} alt="" className="w-full h-96 object-contain" />
  </div>
</div>
<div className="flex flex-col-reverse justify-between items-center sm:flex-row">
  <div className="w-full sm:w-1/2 mx-4 text-center sm:text-left text-2xl">
    They can go to their dashboard and go to health checkup, enter their symptoms and see the probable health issues
  </div>
  <div className="w-full sm:w-1/2">
    <Image src={Healthcheck} alt="" className="w-full h-96 object-contain" />
  </div>
</div>

<div className="flex flex-col-reverse justify-between items-center sm:flex-row">
  <div className="w-full sm:w-1/2 mx-4 text-center sm:text-left text-2xl">
    Based on your location, our platform also shows you nearby health centres on the map
  </div>
  <div className="w-full sm:w-1/2">
    <Image src={Map} alt="" className="w-full h-96 object-contain" />
  </div>
</div>



    </div>
  );
}
