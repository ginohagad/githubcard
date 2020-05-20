import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Card, CardContent, Avatar, Typography, TextField } from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: '20px',
	},
	card: {
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
	form: {
		textAlign: 'center',
		marginBottom: theme.spacing(3),
	},
	textField: {
		marginRight: theme.spacing(2),
	},
}))



const App = () => {
	const classes = useStyles()

	const [user, setUser] = useState('')
	const [data, setData] = useState([])


	useEffect(() => {
		async function fetchData() {
			const res = await axios.get(`https://api.github.com/users/${user}/`)
			const data = res.data
			setData(data)
		}
		fetchData()
	}, [])


	const handleChange = e => {
		setUser(e.target.value)
	}

	return (
		<div className={classes.container}>
			<form className={classes.form} noValidate>
				<TextField className={classes.textField} onChange={e => handleChange(e)} />
	<Button variant="contained" color="primary" className={classes.button} endIcon={<Icon>send</Icon>}>Send</Button>
			</form>
			<Card className={classes.card}>
				<CardContent className={classes.content}>
					<Avatar alt="{data.name}" src={data.avatar_url} className={classes.large} />
					<Typography gutterBottom variant="h5" component="h3">{data.login}</Typography>
					<Typography variant="body2" color="textSecondary" component="p">{data.location}</Typography>
					<Typography variant="body2" color="textSecondary" component="p">Followers {data.followers}</Typography>
					<Typography variant="body2" color="textSecondary" component="p">Repos {data.public_repos}</Typography>
					<Typography variant="body2" color="textSecondary" component="p">Following {data.following}</Typography>
				</CardContent>
			</Card>
		</div>

	)
}


export default App
