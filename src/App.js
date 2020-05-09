import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Avatar, Typography } from '@material-ui/core'
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		margin: 'auto',
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
	content: {
		margin: 'auto',
	},
	large: {
		width: theme.spacing(11),
		height: theme.spacing(11),
		margin: 'auto',
	},
}))



const App = () => {
	const classes = useStyles()

	const [data, setData] = useState([])


	useEffect(() => {
		async function fetchData() {
			const res = await axios.get(`https://api.github.com/users/ginohagad`)
			const data = res.data
			setData(data)
		}
		fetchData()
	}, [])


	return (

		<Card className={classes.root}>
			<CardContent className={classes.content}>
				<Avatar alt="{data.name}" src={data.avatar_url} className={classes.large} />
				<Typography gutterBottom variant="h5" component="h3">{data.login}</Typography>
				<Typography variant="body2" color="textSecondary" component="p">{data.location}</Typography>
				<Typography variant="body2" color="textSecondary" component="p">Followers {data.followers}</Typography>
				<Typography variant="body2" color="textSecondary" component="p">Repos {data.public_repos}</Typography>
				<Typography variant="body2" color="textSecondary" component="p">Following {data.following}</Typography>

			</CardContent>
		</Card>
	)
}


export default App
