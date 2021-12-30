import './portfolio.scss'
import PortfolioList from "../portfoliolist/PortfolioList";
import { useEffect, useState } from "react";

import {
	mobilePortfolio , 
	webPortfolio, 
	designPortfolio, 
	dsPortfolio } from "../../data.js" ;

export default function Portfolio() {
	const [selected,setSelected] = useState("mobile");
	const [data,setData] = useState([]);

	const list = [
		{
			id: "mobile",
			title: "Mobile App",
		},

		{
			id: "webapp",
			title: "Web App",
		}, 

		{
			id: "datasc",
			title: "Data Science",
		}, 

		{
			id: "design",
			title: "Design",
		}, 
	];

	useEffect(()=>{
		switch(selected){
			case "mobile":
				setData(mobilePortfolio);
				break;
			case "webapp":
				setData(webPortfolio);
				break;
			case "datasc":
				setData(dsPortfolio);
				break;
			case "design":
				setData(designPortfolio);
				break;			
			
			default:
				setData(mobilePortfolio);

		}

	}, [selected])
	return (
		<div className="portfolio" id="portfolio" >
			<h1>Portfolio</h1>
			<ul>
				{list.map(item => (
					<PortfolioList 
						title ={item.title}
						active = {selected === item.id}
						setSelected = {setSelected}
						id = {item.id}

					/>
				))}
			</ul>

			<div className="container">
				{data.map(d=> (
					<div className="item">
						<img src={d.img} alt=""/>
						<h3>{d.title}</h3>
					</div>

				)) }
				
			</div>
		</div>

	)	
}