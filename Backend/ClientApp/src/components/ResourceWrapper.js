import React from 'react';
import {withRouter} from "react-router";


const ResourceWrapper = ({location, listResource, initialize, initialized}) => {
	React.useEffect(() => {
		if (initialized) {
			if (location.pathname !== '/') {
				listResource(location.pathname);
			}
		} else {
			initialize(location.pathname);
		}
	}, [listResource, initialize, initialized, location.pathname]);

	return null;
};

export default withRouter(ResourceWrapper);
