import React from 'react';


export const ResourceWrapper = ({path, pathname, listResource, initialized}) => {

	React.useEffect(() => {
		if (initialized) {
			if (pathname !== '/' && path !== pathname) {
				listResource(pathname);
			}
		}
	}, [initialized, listResource, pathname, path]);



	return null;
};

