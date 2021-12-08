import './button.css'

const Button = ({name, icon}) => {
    
    return (
        <button className="button float">
            {name} 
            {icon}
        </button>
    )
}

Button.defaultProps = {
    name: 'defalt button',
    icon: null,
}

export default Button
