import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// import components
import DownloadButton from '../common/components/DownloadButton/DownloadButton';
import IconButton from '../common/components/IconButton/IconButton';
import InputField from '../common/components/InputField/InputField';
import TextAreaField from '../common/components/TextAreaField/TextAreaField';
import SubmitButton from '../common/components/SubmitButton/SubmitButton';
import Loader from '../common/components/Loader/Loader';
//import cv from '../assets/files/cv.pdf';

// import icons
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineEye } from "react-icons/ai";
import { BiLogoGmail, BiLogoCss3, BiLogoJavascript, BiLogoRedux, BiLogoJava } from "react-icons/bi";
import { BsFacebook, BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { SiTypescript, SiRecoil, SiReactquery } from "react-icons/si";
import { SiPython } from "react-icons/si"; 
import { BsBootstrapFill } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";

//import images
import Ataa from '../assets/images/Ataa.png';
//import Elzero from '../assets/images/Elzero.png';
import Kasper from '../assets/images/Kasper.png';
import Leon from '../assets/images/Leon.png';
import SokoNumber from '../assets/images/SokoNumber.png';
//import GlobalShare from '../assets/images/GlobalShare.png';

// import style
import style from './App.module.css';
import clsx from 'clsx';

const skills = [
	{
		name: 'HTML 5',
		icon: <AiFillHtml5 size="25px" color="white" />,
		cssName: "html"
	},
	{
		name: 'CSS 3',
		icon: <BiLogoCss3 size="25px" color="white" />,
		cssName: "css"
	},
	{
		name: 'Java Script',
		icon: <BiLogoJavascript size="25px" color="white" />,
		cssName: "java-script"
	},
	{
		name: "SQL",
		icon: <FaDatabase size="25px" color="white" />,
		cssName: "type-script"
	},
	{
		name: 'React',
		icon: <FaReact size="25px" color="white" />,
		cssName: "react"
	},
	// {
	// 	name: 'Redux ToolKit',
	// 	icon: <BiLogoRedux size="25px" color="white" />,
	// 	cssName: "redux"
	// },
	{
		name: 'Redux Recoil',
		icon: <SiRecoil size="25px" color="white" />,
		cssName: "recoil"
	},
	{
		name: 'React Query',
		icon: <SiReactquery size="25px" color="white" />,
		cssName: "react-query"
	},
	{
		name: 'RTK Query',
		icon: <BiLogoRedux size="25px" color="white" />,
		cssName: "redux"
	},
	{
		name: 'BootStrap',
		icon: <BsBootstrapFill size="25px" color="white" />,
		cssName: "responsive"
	},
	{
		name: 'Git',
		icon: <BsGit size="25px" color="white" />,
		cssName: "git"
	},
	{
		name: 'java',
		icon: <BiLogoJava size="25px" color="white" />,
		cssName: "java"
	},
	{
		name: 'Python',
		icon: <SiPython size="25px" color="white" />,
		cssName: "cpp"
	},
	{
		name: 'Problem Solving',
		icon: <BsPuzzle size="25px" color="white" />,
		cssName: "problem-solving"
	}
];

const projects = [
	// {
	// 	name: 'Global Share',
	// 	link: 'https://ibrahimhiarea.github.io/Global-Share/#/home',
	// 	github: 'https://github.com/IbrahimHiarea/Global-Share',
	// 	description: 'The Global Share ERP System is an innovative web-based application designed to streamline volunteer recruitment, management, and reward systems. It incorporates task management, recruitment, and gamification features to enhance employee engagement, promote effective communication, and drive organizational excellence.',
	// 	image: GlobalShare
	// },
	{
		name: 'Friendly Finder',
		link: 'https://friendlyfinder.streamlit.app',
		github: 'https://github.com/Sai34Charan/Final_Project_FriendlyFinder/tree/main',
		description: 'Introducing FriendlyFinder 👀🔍, an AI-powered solution designed to assist visually impaired individuals in navigating and interacting with their surroundings. The goal of this project was to leverage Generative AI to address key challenges faced by visually impaired individuals, including : Real-time scene understanding , Text-to-speech conversion for reading visual content, Object and obstacle detection for safe navigation, Personalized assistance for daily tasks.',
		image: Ataa
	},
	{
		name: 'AI Code Reviewer',
		link: 'https://ai-code-reviewer-qngeowhf8rwhzm6yjw6xst.streamlit.app/',
		github: 'https://github.com/Sai34Charan/AI-Code-Reviewer',
		description: 'Introducing AI Code Reviewer, an intelligent tool designed to streamline the process of code analysis and error detection. This solution identifies syntactical and logical errors in real-time and provides actionable suggestions for corrections, helping developers write cleaner and more efficient code. This project highlights my ability to integrate AI with software development, demonstrating a commitment to enhancing productivity and simplifying complex workflows for developers.',
		image: SokoNumber
	},
	{
		name: 'AgriGrowth',
		link: 'https://friendly-phone-473316.framer.app/',
		github: 'https://github.com/Sai34Charan/AgriGrowth-website',
		description: 'I created AgriGrowth, a user-friendly website designed to empower farmers with efficient navigation and access to essential resources. The platform provides interactive tools and intuitive interfaces to help farmers locate markets, resources, and agricultural services. This project demonstrates my ability to design solutions that address real-world challenges, combining technical expertise with user-centric design to make a meaningful impact in the agricultural sector.',
		image: Leon
	},
	{
		name: 'Match Master',
		link: 'https://saimohith-27.github.io/Match-Master/',
		github: 'https://github.com/saimohith-27/Match-Master',
		description: 'Introducing Match Master, an engaging and interactive memory game created using HTML, CSS, and JavaScript. The game challenges players to test their memory by matching pairs of cards while incorporating dynamic animations and a responsive design. This project highlights my expertise in front-end development, showcasing my ability to create visually appealing and user-friendly web applications.',
		image: Kasper
	},
	// {
	// 	name: 'Elzero',
	// 	link: 'https://ibrahimhiarea.github.io/Elzero/',
	// 	github: 'https://github.com/IbrahimHiarea/Elzero',
	// 	description: 'Elzero is a stylish and interactive HTML, CSS, and JavaScript design template that offers a modern and engaging user experience. With its clean code structure and well-designed components, Elzero provides a solid foundation for building dynamic and visually appealing web applications.',
	// 	image: Elzero
	// },
]

function App() {
	const form = useRef();

	const [menu, setMenu] = useState(false);
	const [loading, setLoading] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		setTimeout(function () {
			emailjs.sendForm('service_15bcxjk', 'template_ekm6b3o', form.current, 'CvQUOdqmqcLEqamAa')
				.then((result) => {
					e.target.name.value = '';
					e.target.email.value = '';
					e.target.message.value = '';
				});
			setLoading(false);
		}, 2000);

	};

	return (
		<div className={style.app}>
			{/* Navbar */}
			<div className={style.nav}>
				<a className={style.logo}>
					<FaReact color='var(--primary-main)' size='50px' />
					<h5>Gopisetty Sai Charan</h5>
				</a>
				<ul>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Projects</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
				<div className={style["menu-icon"]}>
					<input id='checkbox' className={style["checkbox2"]} type="checkbox" />
					<label className={`${style.toggle} ${style.toggle2}`} for="checkbox" onClick={() => setMenu(!menu)}>
						<div className={`${style.bars} ${style.bar4}`}></div>
						<div className={`${style.bars} ${style.bar5}`}></div>
						<div className={`${style.bars} ${style.bar6}`}></div>
					</label>
				</div>
			</div>
			{
				menu === true &&
				<ul className={style.menu}>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Projects</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
			}

			{/* Home */}
			<div id='Home' className={style.home}>
				<div className={style["home-content"]}>
					<h1>HEY, I'M GOPISETTY SAI CHARAN</h1>
					<p>A Frontend-focused Web Developer passionate about building Websites and Web Applications while integrating data science to enhance the success of the overall product.
</p>
					<a
						href="https://drive.google.com/file/d/1JtcSUnthEUFniW3lo2rM2x026SmiS_jD/view?usp=sharing " target='blank'
						// download="cv-PDF-document"
						// target="_blank"
						// rel="noopener noreferrer"
					>
						<DownloadButton >
							Download CV
						</DownloadButton>
					</a>
				</div>
				{/* <div className={style["scroll-icon"]}>
					<div className={style["scroll-down"]} style={{ color: "skyblue !important" }}>
						<div className={style.chevrons}>
							<div className={style["chevron-down"]}></div>
							<div className={style["chevron-down"]}></div>
						</div>
					</div>
				</div> */}
				<div className={style["contact-nav"]}>
					<a className={style.github} target="_blank" href='https://github.com/Sai34Charan' >
						<AiFillGithub size="30px" color='black' />
					</a>
					<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/gopisetty-sai-charan-gsc12104016/' >
						<AiFillLinkedin size="30px" color='black' />
					</a>
					<a className={style.gmail} target="_blank" href="mailto:saicharangopisetty23@gmail.com?subject=SendMail&body=Description" >
						<BiLogoGmail size="30px" color='black' />
					</a>
					<a className={style.facebook} target="_blank" href='https://www.facebook.com/profile.php?id=100088371281816' >
						<BsFacebook size="30px" color='black' />
					</a>
				</div>
			</div>

			{/* About */}
			<div id='About' className={style.about}>
				<div className={style.container}>
					<h2 className={style.title}>About Me</h2>
					<p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
					<div className={style["about-content"]}>
						<div className={style["about-info"]}>
							<h3>Get to know me!</h3>
							<p>
								I'm a <span>Frontend Web Developer</span> and a <span>Aspiring Data Scientist</span> building the Front-end of Websites and Web Applications using AI that leads to the success of the overall product. Check out some of my work in the <span>Projects</span> section. <br /> <br />
								I also like sharing content related to the stuff that I have learned over the years in <span>Web Development</span> and <span>Data Science </span>so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="https://github.com/Sai34Charan" target="_blank">Github</a> where I post useful content related to Web Development and Data Science. <br /> <br />
								I'm open to <span>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span>contact</span> me.
							</p>
						</div>
						<div className={style["my-skill"]}>
							<h3>My Skills</h3>
							<div className={style.skills}>
								{
									skills.map((skill, index) => {
										return <div key={`skill${index}`} className={`${style.skill} ${style[skill.cssName]}`}>
											<div className={style["skill-name"]}>{skill.name}</div>
											<div className={style["skill-icon"]}>{skill.icon}</div>
										</div>
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Projects */}
			<div id='Projects' className={style.projects}>
				<div className={style.container}>
					<h2 className={style.title}>Projects</h2>
					<p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
					<div className={style["projects-list"]}>
						{
							projects.map((project, index) => {
								return <div key={`project${index}`} className={style.project}>
									<div className={style["project-image"]}>
										<img src={project.image} alt="Project Image" />
									</div>
									<div className={style["project-info"]}>
										<h3>{project.name}</h3>
										<p>{project.description}</p>
										<div className={style["project-buttons"]}>
											<IconButton
												width="170px"
												height="50px"
												backgroundColor="var(--primary-main)"
												color="white"
												link={project.link}
												icon={<AiOutlineEye size="25px" color='white' />}
											>
												Live Demo
											</IconButton>
											<IconButton
												width="100px"
												height="50px"
												backgroundColor="black"
												color="white"
												link={project.github}
												icon={<AiFillGithub size="25px" color='white' />}
											>
												Github
											</IconButton>
										</div>
									</div>
								</div>
							})
						}

					</div>
				</div>
			</div>

			{/* Contact */}
			<div id='Contact' className={style.contact}>
				<div className={style.container}>
					<h2 className={style.title}>Contact</h2>
					<p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
					<form
						ref={form} onSubmit={sendEmail}
						className={
							clsx(
								{ [style['inactive-form']]: loading }
							)}
					>
						<InputField
							width="700px"
							height="40px"
							name="name"
							placeholder="Enter Your Name"
							label="Name"
							type="text"
						/>
						<InputField
							width="700px"
							height="40px"
							name="email"
							placeholder="Enter Your Email"
							label="Email"
							type="email"
						/>
						<TextAreaField
							width="700px"
							height="250px"
							name="message"
							placeholder="Enter Your Message"
							label="Message"
							type="text"
						/>
						<SubmitButton
							icon={<RiSendPlaneFill size="20px" color='white' />}
							width="200px"
							height="60px"
							color="white"
							backgroundColor="var(--primary-main)"
						>
							Submit
						</SubmitButton>
						{
							loading &&
							<div className={style.loader}>
								<Loader />
							</div>
						}
					</form>
				</div>
			</div>

			{/* footer */}
			<div className={style.footer}>
				<div className={style.container}>
					<div className={style["footer-info"]}>
						<div>
							<h3>Gopisetty Sai Charan</h3>
							<p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
						</div>
						<div className={style.social}>
							<h3>Social</h3>
							<div className="">
								<a className={style.git} target="_blank" href='https://github.com/Sai34Charan' >
									<AiFillGithub size="30px" color='white' />
								</a>
								<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/gopisetty-sai-charan-gsc12104016/' >
									<AiFillLinkedin size="30px" color='white' />
								</a>
								<a className={style.gmail} target="_blank" href="mailto:saicharangopisetty23@gmail.com?subject=SendMail&body=Description" >
									<BiLogoGmail size="30px" color='white' />
								</a>
								<a className={style.facebook} target="_blank" href='https://www.facebook.com/profile.php?id=100088371281816' >
									<BsFacebook size="30px" color='white' />
								</a>
							</div>
						</div>
					</div>
					<div className={style["copy-right"]}>
						© Copyright 2025. Made by <span>Gopisetty Sai Charan</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;