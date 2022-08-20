import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Link} from "react-router-dom";

const BoardAdmin: React.FC = () => {
    return (
        <div className="container d-flex mp0">
            <div className="sidebar" id="side_nav">
                <div className="header-box">
                    <h1 className="fs-4"><span className="text-white">Адмін панель</span></h1>
                <button className="btn d-md-none d-block close-btn px-1 py-0 text-white"><i className="fal fa-stream"></i></button>
                </div>

                <ul className="list-unstyled px-2">
                    <li><a href="#" className="text-decoration-none"><i className="fas fa-home" aria-hidden="true"></i>Дошка</a></li>
                    <li><a href="#" className="text-decoration-none"><i className="fas fa-list"></i>Категорії</a></li>
                    <li><Link className="text-decoration-none" to="/products"><i className="fa-solid fa-cart-shopping"></i>Продукти</Link></li>
                    <li><a href="#" className="text-decoration-none"><i className="fa-solid fa-user-group"></i>Користувачі</a></li>
                    <li><a href="#" className="text-decoration-none"><i className="fas fa-comment"></i>Відгуки</a></li>
                </ul>

            </div>
            <div className="content"></div>
        </div>
    );
};

export default BoardAdmin;
