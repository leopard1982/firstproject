const Headers = () => {
	const clickme= () => {
		alert("ouch you click me!")
	}
	return(
		<header style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>
			<h1>Headers</h1>
			<span>Hello</span>
			<p><button onClick={clickme} style={{fontSize:'30px',fontWeight:'bold'}}>hello</button></p>			
		</header>

		)
};

export default Headers;