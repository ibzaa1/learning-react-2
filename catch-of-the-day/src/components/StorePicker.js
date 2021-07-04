import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = (e) => {
    // stop form submitting
    e.preventDefault();
    // console.log("going to store");

    // get text input
    console.log(this);
    //change page to store chosen
  };
  componentDidMount() {
    console.log("mounted");
  }
  render() {
    return (
      <>
        <form className='store-selector' onSubmit={this.goToStore}>
          <h2>Enter Store</h2>
          <input
            type='text'
            required
            ref={this.myInput}
            placeholder='Enter Store Name'
            defaultValue={getFunName()}
          />
          <button type='submit'>Visit Store</button>
        </form>
      </>
    );
  }
}

export default StorePicker;
