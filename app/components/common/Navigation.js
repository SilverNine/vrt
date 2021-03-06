import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';

class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element"> <span>
                                <img alt="image" className="img-circle" src={"http://webapplayers.com/inspinia_admin-v2.7.1/img/profile_small.jpg"}/>
                             </span>
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">Example user</strong>
                             </span> <span className="text-muted text-xs block">Example position<b className="caret"></b></span> </span> </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><a href="#"> Logout</a></li>
                                </ul>
                            </div>
                            <div className="logo-element">
                                IN+
                            </div>
                        </li>
                        <li className={this.activeRoute("/main")}>
                            <Link to="/main"><i className="fa fa-th-large"></i> <span className="nav-label">환영합니다</span></Link>
                        </li>
                        <li className={this.activeRoute("/diagonal")}>
                            <Link to="/diagonal"><i className="fa fa-bullseye"></i> <span className="nav-label">움직이는 공 ( 대각선 )</span></Link>
                        </li>
                        {/*<li className={this.activeRoute("/minor")}>
                            <Link to="/minor"><i className="fa fa-th-large"></i> <span className="nav-label">Minor view</span></Link>
                        </li>*/}
                    </ul>

            </nav>
        )
    }
}

export default Navigation