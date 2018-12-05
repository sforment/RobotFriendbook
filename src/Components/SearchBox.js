import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
	return (
		<div>
			<input 
				className='bg-lightest-blue pa3 b--light-blue'
				type='search' 
				placeholder='search robots'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;