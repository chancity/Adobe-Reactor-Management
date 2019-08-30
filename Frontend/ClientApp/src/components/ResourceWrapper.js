import React from 'react';


export const ResourceWrapper = ({pathname, listResource, initialized}) => {

	React.useEffect(() => {
		if (initialized) {
			if (pathname !== '/') {
				listResource(pathname);
			}
		}
	}, [initialized, listResource, pathname]);



	return null;
};

