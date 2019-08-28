import React from "react";
import {Title} from "../layout/Title";
import {Panel, PanelHeader} from "../layout/Panel";
import {Loader, LoaderWrapper} from "../layout/Loader";
import {PropertiesTable} from "../components/Tables/PropertiesTable";

const capitalizeFirstLetter = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1)
};
const formatType = (str) => {
	const splitType = str.toLowerCase().split('_').map(value => capitalizeFirstLetter(value));
	return splitType.join(' ');
};
export const maskStr = (str) => {
	return str.length > 0 ? str.replace(str.substring(2,str.length-2), '*'.repeat(str.length-4)) : str;
};
const PropertiesPage = ({list, meta, loaded, companyId, propertyId, companyName, setPropertyIdAction}) => {
	const type = list[0] && list[0].type;
	return (
		<>
			<Title>
				{maskStr(companyName || "")}
			</Title>
			<Panel>
				{loaded ?
					<>
						<PanelHeader>
							<span>{type && formatType(type)}</span>
						</PanelHeader>
						<PropertiesTable list={list} companyId={companyId} propertyId={propertyId} setPropertyIdAction={setPropertyIdAction}/>
					</>
					: <LoaderWrapper>
						<Loader/>
					</LoaderWrapper>}
			</Panel>
		</>
	)
};

export default PropertiesPage
