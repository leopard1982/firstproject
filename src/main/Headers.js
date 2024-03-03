import {useState} from 'react';
import  './Headers.css';

const Headers = () => {
	const headerstyle={textAlign:'center',position:'fixed',top:0,width:'100%',backgroundColor:'blue',padding:'10px',color:'white'};
	const pstyle={fontSize:30,fontWeight:'bold'};
	const [time,setTime] = useState('10:10:10');

	setTimeout(()=>{
		let date = new Date();
		
		setTime(("0"+date.getHours().toString()).slice(-2) + ":" + ("0"+date.getMinutes().toString()).slice(-2) + ":" + ("0"+date.getSeconds().toString()).slice(-2))
	},1000)

	return(
		<header >
			<div style={headerstyle}>
				<p style={pstyle}>Grocery Store</p>
				<p className="merah">{time}</p>
			</div>	
		</header>

		)
};

export default Headers;