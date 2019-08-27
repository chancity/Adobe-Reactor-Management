import * as React from "react";
import {Switch, Route} from 'react-router-dom';
import PropertiesPage from "../store/Reactor/containers/PropertyPage";


const Routes = () => (
    <Switch>
        <Route exact path="/companies/:companyId/properties" component={ PropertiesPage }/>
        <Route exact path="/properties/:propertyId/:resource" component={ PropertiesPage }/>
        <Route exact path="/:resource/:resourceId" component={ PropertiesPage }/>
    </Switch>
);

export default Routes;
