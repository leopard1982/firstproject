import { BsFillTrashFill } from "react-icons/bs";
import '../main/Contents.css';

const ListItem = (props) => {
	return (
		<>
			<div style={{fontWeight:props.id!=="ID"?'normal':'bold',backgroundColor:props.id!=="ID"?'lightblue':'white',display:'flex',justifyContent:'left',textAlign:'left',padding:'5px',marginBottom:'5px'}} id="testing">
				<span style={{padding:'5px',border:'1px solid bold',borderRadius:'5px',width:'100px'}}><strong>{props.id.length>3?props.id.slice(0,3)+"...":props.id}</strong></span>
				<span style={{padding:'5px',border:'1px solid bold',borderRadius:'5px',width:'calc(100% - 100px)',textDecoration:!props.ischecked&&props.id!=="ID"?'line-through':'none',fontStyle:!props.ischecked&&props.id!=="ID"?'italic':'normal',fontSize:'15px'}}>{props.nama}</span>
				{props.id!=="ID"?(
					<>
						<span style={{padding:'5px',border:'1px solid bold',borderRadius:'5px',width:'20%'}}><input type='checkbox' checked={props.ischecked} onChange={props.changeCheckbox}></input></span>
						<BsFillTrashFill className='mybutton' style={props.ischecked?{border:'1px solid white',borderRadius:'5px',padding:'5px',backgroundColor:'white'}:{border:'0px solid white',padding:'6px'}} thecheck={props.ischecked?'yes':'no'} onClick={props.ischecked?props.hapusItem:null} title={props.hapuskan}></BsFillTrashFill>
					</>
				):null}

			</div>	
		</>		

	)
};

export default ListItem;