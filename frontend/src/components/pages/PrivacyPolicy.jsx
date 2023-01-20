import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import Script from "react-load-script";
import "../styles/bootstrap.min.css";
import "../styles/mine.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/bootstrap-icons/bootstrap-icons.css";
import Act from "../components/images/gr.jpg";
import Chea from "../components/images/unsplash_h5xEHzfepNk.png";
import Nur from "../components/images/stats-img.svg";
import Common from "../components/inc/Common";
import ApexPie from "../components/apexcharts/ApexPie";
import Homedata from "../components/pages/inc/apis/hdata_call";
import Introdata from "../components/pages/inc/apis/fetch_intro";
import Eventdata from "../components/pages/inc/apis/fetch_events";
import Labourdata from "../components/pages/inc/apis/fetch_labour";
import ApexCand from "../components/apexcharts/ApexCand";
// import "../../styles/aos.css";

function Home() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
	<>
        <Common />
	</>

	);
}
export default Home;
