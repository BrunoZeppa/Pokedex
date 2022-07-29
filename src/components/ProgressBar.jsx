import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Container = Styled.div`
  progress {
    margin-right: 8px;
  }

  progress[value] {
    width: ${props => props.width};

    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 45px;
    border-radius: 5px;
    background-color: #eee;
  }  

  progress[value]::-webkit-progress-value {
    height: 45px;
    border-radius: 5px;
    background-color: ${props => props.color};
  }
`;



const ProgressBar = ({ hp, attack, defense, speed, max, color, width }) => {

    return (
        <>
            <h4 style={{ color: color }}>HP: {hp}/150</h4>
            <Container color={color} width={width} >
                <progress value={hp} max={max} />
            </Container>
            <h4 style={{ color: color }}>Attack: {attack}/150</h4>
            <Container color={color} width={width} >
                <progress value={attack} max={max} />
            </Container>
            <h4 style={{ color: color }}>Defense: {defense}/150</h4>
            <Container color={color} width={width} >
                <progress value={defense} max={max} />
            </Container>
            <h4 style={{ color: color }}>Speed: {speed}/150</h4>
            <Container color={color} width={width} >
                <progress value={speed} max={max} />
            </Container>
        </>
    );
};



ProgressBar.propTypes = {
    hp: PropTypes.number,
    attack: PropTypes.number,
    defense: PropTypes.number,
    speed: PropTypes.number,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,

};

ProgressBar.defaultProps = {
    max: 100,
    color: "lightBlue",
    width: "250px",
    height: "50px"
};

export default ProgressBar;