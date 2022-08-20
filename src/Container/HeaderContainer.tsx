import React, {FC} from "react";
import styles from "./HeaderContainer.module.scss";
import {CartSvg} from "../svgs/cart";
import {BiSearch} from 'react-icons/bi';

const HeaderContainer: FC = () => {
    return (
        <div className={styles.container}>
        <div className={styles.logo}>buy All</div>
            <form className="form-position">
                {/*<div className="mb-3">*/}
                    <input type="search" className="form-control ds-input" id="search-input" placeholder="Пошук"/>
                    <button type="submit" className="input-group-text btn-secondary">
                        <BiSearch size={24}/>
                    </button>
                {/*</div>*/}
            </form>
            <CartSvg/>
        </div>
    )
}

export default HeaderContainer;