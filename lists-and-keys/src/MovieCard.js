import React from 'react'

export default function MovieCard(props) {
	return (
		<div>
			<h2>{props.movie.title}</h2>
			<p>{props.movie.director}</p>
			<p>{props.movie.IMDBRating}</p>
		</div>
	)
}
