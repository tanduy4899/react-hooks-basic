import React from 'react';
import PropTypes from 'prop-types';
import UseMagicColor from "../../hooks/useMagicColor";
import "./MagicBox.scss"

MagicBox.propTypes = {

};

function MagicBox() {
    const color = UseMagicColor();
    return (
        <div className="magic-box"
    style={{backgroundColor: color}}/>
    );
}

export default MagicBox;
