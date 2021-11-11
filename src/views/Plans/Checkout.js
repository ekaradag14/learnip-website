import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import Table from 'components/Table/Table.js';

import shoppingCartStyle from 'assets/jss/material-kit-pro-react/views/shoppingCartStyle.js';

const useStyles = makeStyles(shoppingCartStyle);

export default function ShoppingCartPage({ data, price, usersCount }) {
	const classes = useStyles();

	return (
		<Table
			tableHead={['', 'PRODUCT', 'REQEST', 'ARTICLE', '', 'PRICE']}
			tableData={[
				[
					<div className={classes.imgContainer} key={1}>
						<img src="/novusMini.png" alt="..." className={classes.img} />
					</div>,
					<span key={1}>
						<a href="#jacket" className={classes.tdNameAnchor}></a>
						<small className={classes.tdNameSmall} style={{ fontWeight: 600 }}>
							{data?.title}
						</small>
					</span>,
					data?.feature[0].title,
					data?.feature[1].title,
					'',
					<span key={1}>
						<small className={classes.tdNumberSmall}>$</small> {data?.price}
					</span>,
					typeof price === 'number' && usersCount ? (
						<span>
							<strong>{price * usersCount}$</strong>
							<br />
							<small>
								<em>*For {usersCount} users</em>
							</small>
						</span>
					) : (
						''
					),
					'',
				],
			]}
			tableShopping
			customHeadCellClasses={[
				classes.textCenter,
				classes.description,
				classes.description,
				classes.description,
				classes.textRight,
				classes.textRight,
				classes.textRight,
			]}
			customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
			customCellClasses={[
				classes.tdName,
				classes.customFont,
				classes.customFont,
				classes.customFont,
				classes.tdNumber + ' ' + classes.tdNumberAndButtonGroup,
				classes.tdNumber + ' ' + classes.textCenter,
				classes.customFont,
			]}
			customClassesForCells={[1, 2, 3, 4, 5, 6]}
		/>
	);
}
