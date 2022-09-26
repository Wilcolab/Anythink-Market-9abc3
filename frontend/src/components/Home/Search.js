import React from "react";
import { connect } from "react-redux";
import { SEARCH_BY_TITLE } from "../../constants/actionTypes";
import agent from "../../agent";

const mapStateToProps = (state) => ({
  ...state.itemList,
});

const mapDispatchToProps = (dispatch) => ({
  filterByTitle: (title, payload) => dispatch({ type: SEARCH_BY_TITLE, title, payload }),
});

const Search = (props) => {
  const handleSearch = (evt) => {
    const val = evt.target.value;

    if (val.length > 3) {
      props.filterByTitle(val, agent.Items.searchByTitle(val));
    } else {
      props.filterItemsByTitle(agent.Items.all());
    }

    return;
  };

  return (
    <div>
      <input type="text" id="search-box" onChange={handleSearch} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
