import * as React from "react";
import {Switch, Route} from 'react-router-dom';
import PropertiesPage from "../store/Reactor/containers/PropertyPage";


const Routes = () => (
    <Switch>
        <Route exact path="/companies/:companyId/properties/:propertyId?/:resource?/:resourceId?/:subResource?/:subResourceId?/:action?" component={ PropertiesPage }/>
    </Switch>
);

export default Routes;
