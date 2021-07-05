import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (e) => {
    // console.log("go to store");

    // stop form from submitting
    e.preventDefault();

    // get text from input
    const storeName = this.myInput.current.value;

    // page to selected store
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <>
        <form className='store-selector' onSubmit={this.goToStore}>
          <h2>Enter Store</h2>
          <input
            type='text'
            ref={this.myInput}
            required
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
