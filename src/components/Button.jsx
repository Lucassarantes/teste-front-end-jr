import "../styles/Button.scss"

const Button = ({ texto, onClick, classes }) => {
  return (
    <button onClick={onClick} className={classes}>
        {texto}
    </button>
  )
}

export default Button