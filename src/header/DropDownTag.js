import React, { useState, useEffect } from "react"
import { useNavigate  } from 'react-router-dom';
import { Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

const DropDownTag = () =>{

    const [toggleFlag, setToggleFlag] = useState(false);
    const navigate = useNavigate();

    const controlToggle = (toggleFlag) => {
        toggleFlag === true ? setToggleFlag(false) : setToggleFlag(true);
    }

    const goLogin = () => {
        navigate('/login');
    }

    return(
        <Dropdown toggle={ () => controlToggle(toggleFlag) } isOpen={ toggleFlag }>
            <DropdownToggle caret>
                Menu
            </DropdownToggle>
            <DropdownMenu
            >
            <DropdownItem onClick={goLogin}>
                Login
            </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default DropDownTag;