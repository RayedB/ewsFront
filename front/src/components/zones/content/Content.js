import React from 'react'
import {Route} from "react-router-dom"

class Content extends React.Component {
  render () {
    return (
      <div>
        <p>Contenu</p>
        <button type="button" className="btn btn-primary">Primary</button>

      </div>
    );
  }
}

export default Content;
