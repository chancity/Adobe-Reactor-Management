import React from 'react';
import {withRouter} from "react-router";


const ResourceWrapper = ({location, listResource, initialized}) => {

	React.useEffect(() => {
		if (initialized) {
			if (location.pathname !== '/') {
				listResource(location.pathname);
			}
		}
	}, [initialized, listResource, location.pathname]);



	return null;
};

export default withRouter(ResourceWrapper);
