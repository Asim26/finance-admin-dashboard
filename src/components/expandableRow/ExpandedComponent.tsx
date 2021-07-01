function ExpandedComponent(props: any) {
  return (
    <div>
      <p>Name: {props.data.title}</p>
      <p>Director: {props.data.director}</p>
      <p>Genres: {props.data.genres}</p>
      <p>Year: {props.data.year}</p>
    </div>
  )
}

export default ExpandedComponent
