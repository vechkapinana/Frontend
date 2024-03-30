import im from 'D:/NatashaAll/JS1/Frontend/client/src/4.jpeg'

function Main() {
	return (
		<>
			<div className='main-page'>
				{/* <img src={im} /> */}
				<div className='self-info-wrapper'>
					<h2>Это веб-приложение на тему ... разработано</h2>
					<h1>Вечкапиной Натальей</h1>
					<h5>студентка 3 курса направления МОАИС</h5>
				</div>
				<img class="image1"
                    src={im}
                    alt="Котик"
                />
			</div>
		</>
	)
}

export default Main