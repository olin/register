import React from 'react';
import SemesterContainer from '../containers/SemesterContainer'

const SemesterList = () => (
	<div>
		<ul>
			{for (let i = 0; i <= 8; i++) {
				<SemesterContainer
					id={'semester' + i.toString()}
					num={i} // ownProps will grab this
				/>
			}}
		</ul>
	</div>
);

export default SemesterList;
