// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { primary, secondary } from '../common/fonts'

// Component
const H4 = (props) => {
  // component receives props and destructures for use in render
  const { children, font, ...others } = props

  return (
    // passes all other props into the h3 tag
    // renders children between H3 tags when component is rendered
    // inline styling determined by font prop
    <h4 {...others}>
      {children}

      {/* language=CSS */}
      <style jsx>{`
        h4 {
          font-family: ${ font === 'primary' ? primary : secondary };
          font-size:  1.75em;
        }
      `}</style>
    </h4>
  )
}

// Component Properties
H4.propTypes = {
  font: PropTypes.string
}
H4.defaultProps = {
  font: 'primary'
}

export default H4