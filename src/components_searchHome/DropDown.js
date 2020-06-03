import React from "react";
import twitteraccounts from "../components_favorites/TwitterAccts";
import { Dropdown } from "semantic-ui-react";

class Dropdown2 extends React.Component {
  state = {
    selected: [],
    account: "",
    name: ""
  };

  handleSearchTwitter = async (e, data) => {
    // if (e.type === 'click') { 
      e.persist()  
    // }

    const eaccount = data.value[0] === '@'? data.value.slice(1): data.value;
    const ename = e.target.textContent;

    await this.setState({
      name: ename,
      account: eaccount
    });
    this.props.searchTwitter(this.state.account);
    this.props.updateSelectedAcc(this.state.name, this.state.account);
  };

  render() {
    let favoriteOptions = twitteraccounts;
    console.log(favoriteOptions);

    return (
      <div className="drpdwn">
        <Dropdown
          clearable
          placeholder="Select Twitter Account"
          fluid
          search
          selection
          options={favoriteOptions}
          onChange={this.handleSearchTwitter}
          className="searchDown"
        />
      </div>
    );
  }
}

export default Dropdown2;
