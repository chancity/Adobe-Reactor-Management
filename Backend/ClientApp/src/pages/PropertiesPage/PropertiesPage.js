import React from "react";
import {Title} from "../layout/Title";
import {Panel, PanelHeader} from "../layout/Panel";
import {Loader} from "../layout/Loader";
import {PropertiesTable} from "../components/Tables/PropertiesTable";
import {SButton, SButtonLabel, SEndWrapper, SResourceControls, SStartWrapper} from "../layout/SResourceControls";

const capitalizeFirstLetter = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1)
};
const formatType = (str) => {
	const splitType = str.toLowerCase().split('_').map(value => capitalizeFirstLetter(value));
	return splitType.join(' ');
};

const removePlural = (str) => {
	let ret = str;
	if (str.toLowerCase().charAt(str.length - 1) === 's') {
		ret = ret.substr(0, str.length - 1);
	}
	return ret;
};

export const maskStr = (str) => {
	return str;
	return str.length > 0 ? str.replace(str.substring(2,str.length-2), '*'.repeat(str.length-4)) : str;
};
const PropertiesPage = ({list, meta, loaded, companyId, propertyId, companyName, setPropertyIdAction}) => {
	const type = list[0] && list[0].type;
	return (
		<>
			<Title>
				{maskStr(companyName || "")}
			</Title>
			<Panel style={{minHeight:'666px', justifyContent: (loaded ? undefined : 'center')}}>
				{loaded ?
					<>
						<PanelHeader>
							<span>{type && formatType(type)}</span>
						</PanelHeader>
						<SResourceControls>
							<SStartWrapper/>
							<SEndWrapper>
								<SButton>
									<SButtonLabel>
										{type && `Add ${removePlural(formatType(type))}`}
									</SButtonLabel>
								</SButton>
							</SEndWrapper>
						</SResourceControls>
						<PropertiesTable list={list} companyId={companyId} propertyId={propertyId} setPropertyIdAction={setPropertyIdAction}/>
					</>
					:
					<Loader/>
					}
			</Panel>
		</>
	)
};

export default PropertiesPage
