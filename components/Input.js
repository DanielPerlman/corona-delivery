import React, { Component } from "react";


class Input extends Component {
render() {

  return (
    <div className="input" >
      { this.props.label &&
        <span>{this.props.label}</span>
      }
      <input {...this.props} />
      <style jsx>{`

        span {
          display: block;
          margin-bottom: 5px;
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

      `}</style>
    </div>
    );
  }
}

export default Input;
