import React, { Component } from "react";


class Input extends Component {
render() {
  let { marginRight, marginRightMobile, marginTopMobile, widthMobile, width, className, label, flex, ...inputProps } = this.props;
  return (
    <div className={`input ${className}`} >
      { label &&
        <span>{label}</span>
      }
      <input {...inputProps} />
      <style jsx>{`

        span {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
        }

        input {
          border: 1.5px solid black;
          width: 100%;
          height: 40px;
          padding: 5px;
        }

        .input {
          width: ${width || 'auto'};
          margin-right: ${marginRight || '0'};
          ${flex ? `flex: 1`: ''}
        }
        
        @media screen and (max-width: 767px ) {
          .input {
            margin-right: ${marginRightMobile || '0'} !important;
            margin-top: ${marginTopMobile || '0'} !important;
            width: ${widthMobile || 'auto'} !important;      
          }
        }

      `}</style>
    </div>
    );
  }
}

export default Input;
