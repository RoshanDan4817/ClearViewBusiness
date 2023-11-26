import React, { useEffect, useRef } from "react";
import TopNav from "../components/TopNav";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import HomeContact from "../components/HomeContact";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import $ from "jquery"
function Home() {
	const servicesRef = useRef();
	const homeRef = useRef();
	const contactRef = useRef();
	const location = useLocation()
	console.log("🚀 ~ file: Home.jsx:15 ~ Home ~ location:", location)
	useEffect(() => {
		if (location?.state?.targetId) {
			const targetId = location?.state?.targetId
			const targetOffset = $(`#${targetId}`).offset().top;
			const scrollSpeed = 500; // Set the scroll speed in milliseconds
			const customY = -130;
			$("html, body").animate({ scrollTop: targetOffset + customY }, scrollSpeed);
		}
		else {
			console.log("🚀 ~ file: Home.jsx:22 ~ useEffect ~ no targetId found")
		}
	}, [location?.state?.targetId])
	return (
		<div>
			<TopNav contactRef={contactRef} />
			<HeroSection homeRef={homeRef} />
			<Services ref={servicesRef} />
			<WhyUs />
			<HomeContact contactRef={contactRef} />
			<Footer />
		</div>
	);
}

export default Home;
