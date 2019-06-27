import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweetChars: ''
    };
  }

handleOnChange = (e) => {
  this.setState({
    tweetChars: e.target.value
  })
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
               name="message" 
               id="message" 
               value={this.state.tweetChars} 
               onChange={this.handleOnChange}
                />
        <strong>Remaining Chars Left: {this.props.maxChars - this.state.tweetChars.length} </strong>
      </div>
    );
  }
}

export default TwitterMessage;
