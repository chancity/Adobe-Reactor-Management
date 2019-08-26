import * as React from "react";
import {Switch, Route} from 'react-router-dom';
import {OverviewPage} from "../pages/Overview";


const Routes = () => (
    <Switch>
        <Route exact path="/companies/:companyId?/properties/:propertyId?/:resource?/:resourceId?" component={ OverviewPage }/>
    </Switch>
);

export default Routes;