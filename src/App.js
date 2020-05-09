import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import axios from 'axios'


const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
})



const App = () => {
	const classes = useStyles()

	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)


	useEffect(() => {
		async function getMyAPI() {
			const res = await axios.get(`https://api.github.com/users/ginohagad`)
			const data = res.data
			setData(data)
		}

		getMyAPI()
	}, [])


	return (

		<Card className={classes.root}>
			<CardMedia className={classes.media} image="https://placeimg.com/640/480/any" title="Test Title" />
			<CardContent>
				<Typography gutterBottom variant="h5" component="h3">{data.login}</Typography>
				<Typography variant="body2" color="textSecondary" component="p">This is a test typography.</Typography>
			</CardContent>
		</Card>
	)
}


export default App
