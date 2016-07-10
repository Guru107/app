import React, { Component, PropTypes } from 'react'

class Index extends Component{
	render(){
		return (
			<html lang='en'>
				<head>
					<title>Gurudatt Kulkarni - web developer</title>
					<meta charSet='UTF-8'/>

					<meta name='robots' content='index,follow'/>
					<meta name='keywords' content='web developer, engineer, geek, programmer'/>
					<meta name='description' content='Building stuff on the web'/>
					<meta name='author' content='Gurudatt'/>
					<meta name='owner' content='Gurudatt'/>

					<meta name="apple-mobile-web-app-title" content="Gurudatt"/>
					<meta name='apple-mobile-web-app-capable' content='yes'/>
					<meta name='apple-touch-fullscreen' content='yes'/>
					<meta name='apple-mobile-web-app-status-bar-style' content='black'/>

					<link rel='me' type='text/html' href='https://github.com/guru107'/>
					<link rel='canonical' href='/'/>
				</head>
				<body>
					<main className='mount-point' itemScope itemType="http://schema.org/Person">
						<a itemProp="url" href='https://github.com/guru107'><h1 itemProp="name">Gurudatt Kulkarni</h1></a>
						<p itemProp="description">Building stuff for the Web</p>
						<div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
								place of habitation: <span itemProp="addressLocality">Mumbai</span>
						</div>
						<div><meta itemProp="birthDate" content="1990-07-11"/></div>
					</main>
					<footer>
						<p>Built with &#10084; in India</p>
						<p>Copyright &#169; 2016 - Till the end of time</p>
					</footer>
				</body>
			</html>
		)
	}
}
export default Index