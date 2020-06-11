import React from "react";
import twitteraccounts from "../components_favorites/TwitterAccts";
import { Dropdown } from "semantic-ui-react";

class Dropdown2 extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div className="drpdwn">
        <Dropdown
          clearable
          placeholder="Select Twitter Account"
          fluid
          search
          selection
          options={this.props.top10}
          onChange={this.props.handleCelebSelection}
          className="searchDown"
        />
      </div>
    );
  }
}

export default Dropdown2;
