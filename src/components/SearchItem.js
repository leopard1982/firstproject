const SearchItem = (props) => {
	return(
		<>
			<input type="text" value={props.filternya} style={{minWidth:'500px',maxWidth:'500px',marginTop:'10px'}} placeholder="search keyword" 
				onChange={(e)=>	
				{
					let filternya = e.target.value;
					props.setSearch(filternya.replace(/[\*\\\/\(\)\{\}\[\]\?\!\=\+]/g,'').toLowerCase());
				}
			}></input>
		</>
	)
};

export default SearchItem;