import React from "react";
import {Title} from "../layout/Title";
import {NavLink, Table} from "../layout/Table";
import {Panel, PanelHeader} from "../layout/Panel";

const PropertiesPage = ({list, meta, loaded, companyId, companyName, setPropertyIdAction}) => {
    return(
	<>
		<Title>
            {companyName}
		</Title>
        {loaded &&

        <Panel>
            <PanelHeader>
                <span>{list[0] && list[0].type.toUpperCase()}</span>
            </PanelHeader>
            <Table>
                <thead>
                <tr>
                    <th>
                        <span>
                            Name
                        </span>
                    </th>
                    <th>
                        <span>
                            Platform
                        </span>
                    </th>
                    <th>
                        <span>
                            Status
                        </span>
                    </th>
                </tr>
                </thead>
                <tbody>
                {list.map((value, index) => (
                    <tr key={index}>
                        <td>
                            <NavLink to={`/properties/${value.id}/rules`} onClick={() => setPropertyIdAction(value.id)}>{value.attributes.name}</NavLink>
                        </td>
                        <td>
                            {value.attributes.platform}
                        </td>
                        <td>
                            {value.attributes.enabled}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Panel>}
	</>
)};
export default PropertiesPage
