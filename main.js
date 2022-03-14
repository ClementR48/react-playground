
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }



  render() {

    return e(
      'h1',
      {},
      'Bonjour React'
    )

    
  }
}

const domContainer = document.querySelector('#root-react');
ReactDOM.render(e(LikeButton), domContainer);