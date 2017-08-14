import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-lg-10">
                    <h2>Wizard</h2>
                    <ol className="breadcrumb">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a>Forms</a>
                        </li>
                        <li className="active">
                            <strong>Wizard</strong>
                        </li>
                    </ol>
                </div>
                <div className="col-lg-2">
                </div>
            </div>
        )
    }
}

export default Header