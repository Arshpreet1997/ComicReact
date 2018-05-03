import React, { Component } from "react";
import PropTypes from "prop-types";
import headerBack from "../assets/HeaderAssets/images/header_background.png";
import AppBar from "material-ui/AppBar";
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';

const styles= {
    root:{
        position: "fixed",
        backgroundImage: `url(${headerBack})`,
    },
    login:{
        marginLeft: "1350px%",
    },
    signUp:{
        marginLeft: "1050px",
        fontWeight: "bold",
        fontSize: "20px"
    }
}
class Header extends Component {
    handle = () => {

    }

    render() {
        return (
            <div>
                <AppBar style={ styles.root } position="static">
                    <Toolbar>
                        <span style={ styles.signUp }>
                        <Button color="inherit" style={ {  fontWeight: "bold",fontSize: "20px"  }  }>SignUp</Button>
                        </span>
                        <span style={ styles.login }>
                        <Button color="inherit" style={ { fontWeight: "bold",fontSize: "20px"} }>Login</Button>
                        </span>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;