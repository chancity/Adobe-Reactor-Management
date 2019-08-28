import {NavLink, Table} from "../../layout/Table";
import {FormattedDate} from 'react-intl';
import styled from 'styled-components/macro'
import React from "react";
import {ReactComponent as MobileSvg} from '../../static/images/layout/platform-mobile.svg';
import {ReactComponent as WebSvg} from '../../static/images/layout/platform-web.svg';
import {Status} from "../../layout/Status";
import {Checkbox} from "../../layout/Checkbox";
import {maskStr} from "../../pages/utils";

const svgStyle = {
    width: '24px',
    height: '24px',
    marginRight: '8px'
};

const checkboxStyle = {
    width: '32px',
    padding: '0',
    paddingLeft: '10px',
    verticalAlign: 'middle'
};

const SSpanWrapper = styled.span`
    display: flex !important;
    min-width: 0;
    min-height: 0;
`;
const Platform = ({type}) => (
    <SSpanWrapper>
        {type === 'web' ?
            <WebSvg style={svgStyle}/>
            :
            <MobileSvg style={svgStyle}/>}
        <span>
					{type === 'web' ? 'Web' : 'Mobile'}
				</span>
    </SSpanWrapper>
);

const ResourceStatus = ({enabled}) => (
    <SSpanWrapper>
        <Status enabled={enabled}/>
    </SSpanWrapper>
);


const Date = ({date}) => (
    <SSpanWrapper>
        <FormattedDate value={date} format="shortDateTime"/>
    </SSpanWrapper>
);

export const PropertiesTable = ({list, propertyId, companyId, setPropertyIdAction}) => {

    const setPropertyId = (id, name, platform) => {
        setPropertyIdAction(id, name, platform)
    };

    return (
        <Table>
            <thead>
            <tr>
                <th style={checkboxStyle}>
                    <Checkbox/>
                </th>
                <th>
	            <span>
	                Name
	            </span>
                </th>
                <th style={{width: '195px'}}>
	            <span>
	                Last Modified
	            </span>
                </th>
                <th style={{width: '102px'}}>
	            <span>
	                Platform
	            </span>
                </th>
                <th style={{width: '102px'}}>
	            <span>
	                Status
	            </span>
                </th>
            </tr>
            </thead>
            <tbody>
            <>
                {list.map((value) => {
                    const {type, id} = value;
                    const isProperties = value.type === 'properties';
                    const root = `/companies/${companyId}/properties/${isProperties ? id : propertyId}`;
                    const path = isProperties ? `${root}/rules` : `${root}/${type}/${id}`;

                    return (
                        <tr key={value.id}>
                            <td style={checkboxStyle}>
                                <Checkbox/>
                            </td>
                            <td>
                                <NavLink to={path} onClick={isProperties ? () => setPropertyId(value.id, value.attributes.name, value.attributes.platform) : undefined}>{maskStr(value.attributes.name)}</NavLink>
                            </td>
                            <td>
                                <Date date={value.attributes.updated_at}/>
                            </td>
                            <td>
                                <Platform type={value.attributes.platform}/>
                            </td>
                            <td>
                                <ResourceStatus enabled={value.attributes.enabled}/>
                            </td>
                        </tr>
                    )
                })}
            </>
            </tbody>
        </Table>
    )
};
