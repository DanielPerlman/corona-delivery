import React, { Component } from "react";


class Input extends Component {
render() {

  return (
    <div className={`input ${this.props.class}`} >
      { this.props.label &&
        <span>{this.props.label}</span>
      }
      <input {...this.props} />
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
          width: ${this.props.width || 'auto'};
          margin-right: ${this.props.marginRight || '0'};
          ${this.props.flex ? `flex: 1`: ''}
        }
        
        .newline-input {
          margin-top: 5px;
        }
        
        @media screen and (max-width: 767px ) {
          .input {
            margin-right: ${this.props.marginRightMobile || '0'} !important;
            margin-top: ${this.props.marginTopMobile || '0'} !important;
            width: ${this.props.widthMobile || 'auto'} !important;
              
          }
        }

      `}</style>
    </div>
    );
  }
}

export default Input;
