import React from 'react'

const FixedWidthLayout = ({ children, className, ...props }) => {
  return (
    <div className={`layout-fixed-width ${className}`} {...props}>
      {children}
    </div>
  )
}

export default FixedWidthLayout