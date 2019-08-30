import React from "react";
import {SearchLabel, SearchHeader, SearchModal, SearchOverlay, SearchWrapper,SearchInput, SearchPreShift} from "./Styled/SSearch";
import { ReactComponent as MenuSearchClose } from '../../static/images/layout/menu-search-close.svg';
import { ReactComponent as MenuSearch } from '../../static/images/layout/menu-search.svg';



const searchCloseStyle = {width: "1.55556rem",height: "1.55556rem"};
const searchOpenStyle = {width: "1.44444rem",height: "1.44444rem"};
const searchInputWrapperStyle = {position: "relative", display: "inline-block", direction: "ltr",  width: "100%"};

export const Search = ({searchOpen, isMobile, isServer, setSearchOpen}) =>{
	const svgStyle = searchOpen && isMobile ? searchOpenStyle : searchCloseStyle;
	return(
	<>
		<SearchHeader searchOpen={searchOpen && isMobile}>
			<button onClick={setSearchOpen}>
				{!isServer && 	<MenuSearchClose fill="white" style={svgStyle}/>}
			</button>
		</SearchHeader>
		<SearchOverlay searchOpen={searchOpen}>
			<SearchModal searchOpen={searchOpen }>
				<div>
				<SearchWrapper>
					<SearchLabel>
						{!isServer && 	<MenuSearch style={svgStyle}/>}
					</SearchLabel>
					<span style={searchInputWrapperStyle}>
						<SearchInput placeholder={"Search by rule / data element / ..."} autoFocus={true}/>
						<SearchPreShift/>
					</span>
				</SearchWrapper>
				</div>
			</SearchModal>
		</SearchOverlay>
		</>
	)
};
