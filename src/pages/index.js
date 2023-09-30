import Maintenance from "../../components/Maintenance";
import { About } from "../../components/home/About";
import HeroMain from "../../components/home/HeroMain";
import Service from "../../components/home/Service";
import TextFade from "../../components/home/TextFade";



export default function Home() {

  return (
    <>
      {/* <HeroMain />
      <div className="wrap" style={{ marginTop: "100vh" }}>
        <div className="inner">
          <About />
          <Service />
          <TextFade />
        </div>
      </div> */}
      <Maintenance />
    </>
  );
}
