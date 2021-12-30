import './works.scss'
import { useEffect, useState } from "react";

export default function Works() {
	const [currentSlide, setCurrentSlide] = useState(1)

	const data = [

		{
			id: 1,
			icon: "assets/mob_dev.png",
			title: "Mob Dev",
			desc: "Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.",
			img: "assets/mob_dev.png",
		},

		{
			id: 2,
			icon: "assets/mob_dev.png",
			title: "Web",
			desc: "Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.",
			img: "assets/mob_dev.png",
		},

		{
			id: 3,
			icon: "assets/mob_dev.png",
			title: "Data Scientist",
			desc: "Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.",
			img: "assets/mob_dev.png",
		},

		{
			id: 4,
			icon: "assets/mob_dev.png",
			title: "Design",
			desc: "Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.",
			img: "assets/mob_dev.png",
		},
	];

	const handleClick = (way) => {
		way === "left" 
		? setCurrentSlide(currentSlide  > 0 ? currentSlide - 1 : 2) 
		: setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
	};
	return (
    	<div className="works" id="works">
     	 <div
        	className="slider"
        	style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
     	 >
        	{data.map((d) => (
          	<div className="container">
           		<div className="item">
              		<div className="left">
                		<div className="leftContainer">
                 			<div className="imgContainer">
                    			<img src={d.icon} alt="" />
                  			</div>
                  			<h2>{d.title}</h2>
                  			<p>{d.desc}</p>
                  			<span>Projects</span>
                		</div>
              		</div>
	              	<div className="right">
	                	<img
	                  		src={d.img}
	                  		alt=""
	                	/>
	              	</div>
            	</div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow_left.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow_left.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );	
}