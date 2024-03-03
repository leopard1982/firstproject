const Footers = (props) => {
	const mystyle = {
		position: 'fixed',
		bottom:'0px',
		backgroundColor:'blue',
		width:'100%',
		textAlign:'center',
		padding:'10px',
		color: 'white'
	}


	return(
		<footer style={mystyle}>
			<div>Copyright &copy;<b>{props.tanggal.getFullYear()}</b></div>
		</footer>
		)
};

export default Footers;