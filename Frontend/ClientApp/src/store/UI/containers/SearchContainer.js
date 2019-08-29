import { connect } from 'react-redux'
import {Search} from "../../../layout/Header/Search";
import {setSearchOpen} from "../actions";

const mapStateToProps = (state)=>({
	searchOpen: state.UI.searchOpen,
	isMobile: state.UI.isMobile,
});

export const SearchContainer = connect(mapStateToProps,{setSearchOpen})(Search);

