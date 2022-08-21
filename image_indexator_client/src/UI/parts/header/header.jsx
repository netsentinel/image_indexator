import React, { useState } from "react";
import LoginBlock from "../../components/LoginBlock/LoginBlock";
import LoginForm from "../../components/LoginModal/LoginForm";
import MyModal from "../../components/modal/MyModal";
import cl from './header.module.css';

const AppHeader = ({ ...props}) => {
    const [isLoginModalVisible, setLoginModalVisible] = useState(false)
    return (
        <header className={cl.appHeader} {...props}>
                <div className={cl.appHeaderPart} id={cl.leftHeaderPart}>
                    <div className={'verticalCenter'}>Memes Indexator</div>
                </div>
                <div className={cl.appHeaderPart} id={cl.rightHeaderPart}>
                   <LoginBlock className={'verticalCenter'}>

                   </LoginBlock>
                </div>
        </header>
    )
}

export default AppHeader;