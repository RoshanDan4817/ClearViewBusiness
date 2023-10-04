import React, { useRef } from "react";
import TopNav from "../components/TopNav";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import HomeContact from "../components/HomeContact";
import Footer from "../components/Footer";

function Home() {
	const servicesRef = useRef();
	const homeRef = useRef();
	const contactRef = useRef();
	return (
		<>
			<TopNav contactRef={contactRef} />
			<HeroSection homeRef={homeRef} />
			<Services ref={servicesRef} />
			<WhyUs />
			<HomeContact contactRef={contactRef} />
			<Footer />
		</>
	);
}

export default Home;
