import React from 'react';
import {withRouter} from "react-router";


const ResourceWrapper = ({location, listResource}) => {
    React.useEffect(() => {
        listResource(location.pathname)
    }, [listResource, location.pathname]);

    return null;
};

export default withRouter(ResourceWrapper);