const AddItem = (props) => {
	return (
		<>
			<h3>Silakan Masukkan ID dan Nama</h3>
			<div style={{display:'flex',justifyContent:'center',marginBottom:'30px'}}>
				<div style={{display:'block',maxWidth:'400px',minWidth:'400px'}}>
					<div style={{display:'flex',justifyContent:'space-evenly'}}>
						<label htmlFor="iduser">ID User: </label><input id="iduser" placeholder="ID User" type='text' onChange={(e)=>props.setID(e.target.value)} value={props.ID}></input>
					</div>
					<div style={{display:'flex',justifyContent:'space-evenly'}}>
						<label htmlFor="namauser">Nama: </label><input id="namauser" placeholder="Nama User" type='text' onChange={(e)=>props.setNama(e.target.value)} value={props.Nama}></input>
					</div>
					<div>
						<button onClick={props.tambahkan}>Tambahkan</button>
					</div>
				</div>	
			</div>
		</>
	)
};

export default AddItem;