const LoadingIcon = ({mt, mb, ml, mr, m}) => {
  return (
    <svg className="loading-spinner" width="16" height="16" viewBox="0 0 50 50" style={{margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr}}>
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
    </svg>
  )
}

export default LoadingIcon