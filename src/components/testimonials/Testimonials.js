import './testimonials.scss'


export default function Testimonials() {

	const data = [
	    {
	      id: 1,
	      name: "Steve Jobs",
	      title: "CEO of Apple",
	      img:
	        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg",
	      desc:
	        "Solved all my issues. Done a great job for our company.",
	    },
	    {
	      id: 2,
	      name: "Alex Kalinski",
	      title: "Co-Founder of DELKA",
	      img:
	        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
	      icon: "assets/youtube.png",
	      desc:
	        "Renat's impeccable communication, punctuality, and technical skill have positioned them for a long-lasting engagement.",
	      featured: true,
	    },
	    {
	      id: 3,
	      name: "Martin Harold",
	      title: "CEO of ALBI",
	      img:
	        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
	      icon: "assets/linkedin.png",
	      desc:
	        "Renat's hardworking team effectively handled the complications and showed flexibility when asked to rebuild parts of the project.",
	    },
  	];
	return (
		<div className="testimonials" id="testimonials">
			<h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src="" alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
			
			
		</div>
	)	
}