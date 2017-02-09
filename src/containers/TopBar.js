import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class TopBarComponent extends React.Component {

    render() {
        return (
            <nav className={"topbar " + this.props.layout}>
                <div className="container">
                    <Link to="/" className="logo">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 1278 415">
                            <g id="Capa_x0020_1">
                                <g id="_390618477648">
                                    <path className="fil0" d="M253 32c2,22 0,46 -9,73 -2,7 -5,11 -11,11 1,0 -4,0 -13,-1 -8,-1 -12,-3 -13,-6 0,-2 2,-4 4,-5 3,-6 6,-16 9,-31 3,-16 3,-30 1,-41 -1,-8 -6,-12 -15,-12 -5,0 -11,2 -16,6 -19,13 -37,36 -52,70 -16,34 -33,83 -51,149 -3,10 -8,16 -16,18 43,0 89,2 137,6 8,1 12,1 14,-1 1,0 2,-4 5,-10 2,-3 4,-5 6,-5 2,0 4,1 6,5 8,11 13,19 13,24 1,4 -2,9 -8,14 -7,5 -12,8 -15,8 -3,0 -7,-1 -14,-3 -39,-9 -81,-13 -127,-13 -13,0 -25,0 -37,1 -8,1 -13,1 -14,2 0,0 -2,3 -4,7 -4,6 -9,9 -15,9 -3,0 -6,-1 -7,-4 -6,-12 -9,-19 -10,-23 -1,-10 16,-16 52,-17 19,-84 41,-150 67,-199 22,-41 42,-63 61,-65 5,-1 19,3 42,12 5,0 9,0 12,0 7,0 12,1 14,4 1,2 3,8 4,17zm169 125c1,12 -1,29 -5,49 -7,33 -20,58 -37,76 -10,10 -21,14 -33,14 -5,0 -12,0 -19,-2 -16,-1 -29,-5 -39,-13 -11,-8 -17,-18 -18,-31 -1,-15 3,-36 11,-62 10,-29 21,-50 33,-63 5,-6 10,-9 14,-9 6,0 15,5 29,14 3,-1 10,-4 20,-7 5,-2 9,-3 12,-3 6,0 14,5 23,16 6,6 9,13 9,21zm-27 6c0,-10 0,-16 -1,-18 0,-6 -3,-9 -7,-9 -1,0 -4,0 -6,1l-37 13c-4,2 -6,2 -7,2 -1,0 -3,-1 -4,-4 -9,10 -16,25 -22,44 -5,14 -8,28 -9,39 -1,8 -1,15 -1,22 3,21 11,32 27,31 6,0 12,-2 19,-6 13,-8 24,-24 34,-48 9,-23 13,-45 14,-67zm215 -22c-27,223 -92,275 -172,275 -29,0 -61,-13 -98,-41 -3,-2 -5,-5 -5,-7 -1,-4 1,-6 6,-6 2,0 4,0 7,2 28,19 53,29 74,29 67,0 126,-25 153,-195 -23,41 -44,69 -62,87 -8,7 -14,11 -21,11 -6,0 -13,-3 -22,-9 -17,-6 -25,-17 -26,-32 -1,-19 5,-41 18,-69 12,-26 26,-46 41,-60 8,-7 16,-11 24,-11 6,0 12,2 19,6 1,1 8,6 21,15 3,2 4,4 4,6 1,2 -1,4 -5,4 -3,0 -5,-1 -9,-2 -5,-2 -10,-4 -14,-4 -7,0 -13,3 -18,7 -11,9 -22,23 -33,43 -12,22 -19,43 -20,61 0,5 0,9 0,13 1,10 5,15 11,15 5,0 9,-2 14,-5 18,-15 35,-36 51,-63 15,-25 25,-48 31,-68 2,-8 2,-15 2,-22 -1,-5 0,-8 3,-8 3,0 10,3 19,9 6,4 8,10 7,19zm182 16c1,12 -1,29 -6,49 -7,33 -19,58 -37,76 -9,10 -20,14 -33,14 -5,0 -11,0 -19,-2 -15,-1 -28,-5 -39,-13 -11,-8 -17,-18 -18,-31 -1,-15 3,-36 12,-62 9,-29 20,-50 32,-63 6,-6 11,-9 15,-9 5,0 15,5 28,14 3,-1 10,-4 20,-7 6,-2 10,-3 12,-3 7,0 14,5 23,16 6,6 9,13 10,21zm-28 6c0,-10 0,-16 0,-18 -1,-6 -3,-9 -7,-9 -2,0 -4,0 -7,1l-36 13c-4,2 -7,2 -8,2 -1,0 -2,-1 -4,-4 -8,10 -16,25 -22,44 -5,14 -8,28 -9,39 -1,8 -1,15 0,22 2,21 11,32 26,31 6,0 13,-2 20,-6 12,-8 24,-24 33,-48 9,-23 14,-45 14,-67z"/>
                                    <path className="fil1 hidden-xs-down" d="M886 295l0 -161 -33 0 0 -11 80 0 0 11 -34 0 0 161 -13 0zm115 0l0 -75 -7 0c-7,0 -14,-2 -19,-6 -5,-5 -8,-10 -8,-16l0 -75 14 0 0 75c0,3 1,6 4,8 2,2 5,3 9,3l27 0c3,0 6,-1 9,-3 3,-2 4,-5 4,-8l0 -75 14 0 0 75c0,6 -3,11 -8,16 -6,4 -12,6 -19,6l-7 0 0 75 -13 0zm135 -86c3,0 6,-1 9,-3 3,-2 4,-5 4,-8l0 -53c0,-3 -1,-6 -4,-8 -3,-2 -6,-3 -9,-3l-40 0 0 75 40 0zm-54 86l0 -172 54 0c7,0 13,2 19,6 5,5 7,10 7,16l0 53c0,6 -2,11 -7,16 -6,4 -12,6 -19,6l-40 0 0 75 -14 0zm115 0l0 -172 80 0 0 11 -67 0 0 75 67 0 0 11 -67 0 0 65 67 0 0 10 -80 0z"/>
                                </g>
                            </g>
                        </svg>
                    </Link>
                    <div className="user dropdown">
                        <a className="dropdown-toggle" href="#" title="" data-toggle="dropdown">
                            <span className="hidden-xs-down">Hi, Jhon Doe</span>
                            <div className="image-container">
                                <img src="images/test/1.png" alt=""/>
                            </div>
                        </a>
                        <div className="dropdown-menu">
                            <div className="dropdown-menu-body">
                                <img src="images/test/1.png" alt=""/>
                                <p>Jhon Doe <small>jhondoe@gmail.com</small></p>
                            </div>
                            <div className="dropdown-menu-footer">
                                <button className="btn">LOGOUT</button>
                                <Link to="/settings/skins" className="btn btn-primary">SETTINGS</Link>
                            </div>
                        </div>
                    </div>
                    <a className="btn btn-icon btn-badge" href="" title="" data-toggle="modal" data-target="#modal-notifications">
                        <span className="icon-notification"></span>
                        <span className="hidden-sm-down">NOTIFICATIONS</span>
                        <span className="badge">3</span>
                    </a>
                    <Link to="/" className="btn btn-icon"><span className="icon-home"></span></Link>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    layout: state.skinSettings.layout
})

const TopBar = connect(mapStateToProps)(TopBarComponent)

export default TopBar