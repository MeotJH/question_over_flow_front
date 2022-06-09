import {Button} from 'reactstrap'

const ButtonProp = ({selectedColor, btnText, onClick}) => {
    return (
    <Button color={selectedColor} onClick={onClick} >
      {btnText}
    </Button>
    )
}

export default ButtonProp;