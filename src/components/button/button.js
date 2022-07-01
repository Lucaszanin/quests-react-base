import './button.css'

const showLabel = (label)=>{
    alert(`O Label deste Botão é ${label}`)
}

const Button = ({label}) => {
    return (
        <div className='groupbtn'>
            <button className='btn' onClick={()=>showLabel(label)}>{label}</button>
        </div>

    )
}

Button.defaultProps = {
    label: 'Baixar CV'
}

export default Button