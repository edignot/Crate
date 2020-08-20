// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { white, grey2, black, primary, secondary } from '../common/colors'
import { primary as primaryGradient, secondary as secondaryGradient } from '../common/gradients'
import { level1, level2, level3, level4 } from '../common/shadows'

// Component
const Button = (props) => {
  // component receives props and destructures for use in render
  const { children, type, disabled, theme, ...other } = props

  return (
    // button element receives props for styling
    <button type={type} disabled={disabled} {...other}>
      {children}

      {/* language=CSS */}
      {/* color/box shadow - if theme is set to anything but none, font color will be white and box shadow will be level2,
          otherwise color will be black and no shadow */}
      {/* background color - if theme is set to primary, background color will be primary,
          if theme is set to secondary, background color will be secondary,
          if it is anything else, background color will be transparent */}
      {/* background image - if the theme is set to primary, image will be primary gradient,
      if the theme is set to secondary, image will be secondary,
      if it is anything else, there will be no image */}
      <style jsx>{`
        button {
          padding: 0.7em 1.7em;
          border: none;
          border-radius: 1.4em;
          text-transform: uppercase;
          font-family: 'Roboto', sans-serif;
          cursor: pointer;
          outline: none;
          font-size: 1em;
          color: ${ theme !== 'none' ? white : black };
          box-shadow: ${ theme !== 'none' ? level2 : 'none' };
          background-color: ${ theme === 'primary' ? primary : theme === 'secondary' ? secondary : 'transparent' };
          background-image: ${ theme === 'primary' ? primaryGradient : theme === 'secondary' ? secondaryGradient : 'none' };
        }
        button:hover {
          box-shadow: ${ level3 };
        }
        button:active {
          box-shadow: ${ level4 };
        }
        button:disabled {
          color: ${ white };
          box-shadow: ${ level1 };
          background-color: ${ grey2 };
          background-image: none;
        }
      `}
      </style>
    </button>
  )
}

// Component Properties
Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
}
Button.defaultProps = {
  type: 'button',
  disabled: false,
  theme: 'none'
}

export default Button