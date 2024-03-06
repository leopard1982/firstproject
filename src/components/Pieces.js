//membuat template untuk pilihan

const Pieces = (props) => {
	return(
		<>
			<div key={props.nama} style={{height:'auto', marginTop:'5px',width:'auto',backgroundColor:'grey',borderRadius:'3px',padding:'3px',marginLeft:'3px',marginRight:'3px',border:'1px solid black'}}>{props.nama}</div>
		</>
	)
}

export default Pieces;