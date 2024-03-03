import {useState} from 'react';
import './Contents.css';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';

const Contents = () => {
	const [arrayku,setArrayku]=useState(JSON.parse(localStorage.getItem('listItem')));

	const [myid,setMyid] = useState(0);
	const [inputan,setInputan] = useState('');

	const tambahkanNama=()=> {
		let indeks=arrayku!==[]?arrayku.findIndex((data)=>data.id===myid):-1;
		if(indeks===-1) {
			if(arrayku===[]) {
				setArrayku([{
					'id':myid,
					'nama':inputan,
					'checked':true		
				}]);
				localStorage.setItem('listItem',JSON.stringify(arrayku));
			} else {
				const data = [...arrayku,{
					'id':myid,
					'nama':inputan,
					'checked':true
					},];
				setArrayku(data);	
				localStorage.setItem('listItem',JSON.stringify(data));
				//harus pakai data yang bukan di arrayku, karena masih di memory belum update
				//di real DOM
			}
			
			setMyid("");
			setInputan("");		
			
		} else {
			alert("Maaf, inputan atas nama " + inputan + " dengan id=" + myid + " sudah pernah diinput!")
		}
	}

	const submitkan = (e) => {
		e.preventDefault();
		console.log(e);
		let indeks = arrayku.findIndex((data)=>e.target[0].value===data.id);
		console.log(e.target[0].value);
		console.log(e.target[1].value);
		if(indeks===-1) {
			const data = [{
			'id':e.target[0].value,
			'nama':e.target[1].value,
			'checked':true
			},...arrayku];
			setArrayku(data);
			setMyid("");
			setInputan("");	
			localStorage.setItem('listItem',JSON.stringify(arrayku));
		} else {
			alert("Maaf, inputan atas nama " + e.target[1].value + " dengan id=" + e.target[0].value + " sudah pernah diinput!")
		}
	};

	

	const deleteList = (indeks) => {
		let indeksku= arrayku.findIndex((data)=>data.id===indeks);
		console.log(arrayku[indeksku].checked);

		let mylist = arrayku.filter((data)=>data.id!==indeks?true:false).map((data)=>data);
		setArrayku(mylist);
		localStorage.setItem('listItem',JSON.stringify(mylist));
	}

	
	const changeCheckbox = (id) => {
		const listarray = arrayku.map((data)=>data.id===id?{'id':data.id,'nama':data.nama,'checked':!data.checked}:data);
		setArrayku(listarray);
		//update terlebih dahulu untuk arraynya
		let indeks = arrayku.findIndex((data)=>data.id===id);
		arrayku[indeks].checked = !arrayku[indeks].checked;
				
		// localStorage.setItem('listnama',JSON.stringify(listarray));
		localStorage.setItem('listItem',JSON.stringify(arrayku));
		console.log(localStorage.getItem('listItem'));
	}

	return(
		<main >
			<div style={{display:'flex',justifyContent:'center',marginTop:'200px'}}>
				<div style={{padding:'10px',border:'1px solid black',borderRadius:'10px',paddingBottom:'40px',width:'500px'}}>
					<h1>Menambah Data</h1><hr/>
					<AddItem setID={setMyid} ID={myid} setNama={setInputan} Nama={inputan} tambahkan={tambahkanNama} submitkan={submitkan}/>				
				</div>			
			</div>

			<div style={{display:'flex',justifyContent:'center',marginBottom:'100px'}}>
				<div style={{width:'500px',border:'1px solid black',padding:'10px',borderRadius:'10px',marginTop:'30px'}}>
					<h1>Data Tersimpan</h1><hr/>
					{arrayku.length>0?(<ListItem id="ID" key="header" nama="NAMA" />):null}
					{arrayku.length===0?
					(
						<div style={{justifyContent:'center',display:'flex'}}>
							<h3 style={{padding:'10px',border:'1px solid blue',width:'50%',borderRadius:'5px',backgroundColor:'blue',color:'white',fontWeight:'bold'}}>Belum Ada Data</h3>												
						</div>

					):
					(
						arrayku.map((data)=>{
							return(
								<ListItem id={data.id} key={data.id} nama={data.nama} ischecked={data.checked} changeCheckbox={()=>changeCheckbox(data.id)} hapusItem={()=>deleteList(data.id)} hapuskan={"Hapus ID: " + data.id + "???"}/>
							)
						})
					)}	
					
					{arrayku.length>0?(<><hr/><p>Jumlah Data: {arrayku.length}</p></>):null}			
				</div>				
			</div>
		</main>
		)
};

export default Contents;