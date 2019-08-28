import * as React from "react";
import {Switch, Route} from 'react-router-dom';
import PropertiesPage from "../store/Reactor/containers/PropertyPage";
import NewPropertyPage from "../pages/NewResourcePage/NewResourcePage";


const Routes = () => (
    <Switch>
        <Route exact path="/companies/:companyId/properties/:propertyId?/:resource?" component={ PropertiesPage }/>
        <Route exact path="/companies/:companyId/properties/:propertyId/:resource/new" component={ NewPropertyPage }/>
        <Route exact path="/companies/:companyId/properties/:propertyId/:resource/:resourceId" component={ PropertiesPage }/>
    </Switch>
);

export default Routes;
