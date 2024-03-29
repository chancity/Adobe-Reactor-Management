import React from "react";
import {Panel, PanelHeader} from "../../layout/Panel";
import {Loader} from "../../layout/Loader";
import {PropertiesTable} from "../../components/Tables/PropertiesTable";
import {SButton, SButtonLabel, SEndWrapper, SResourceControls, SStartWrapper} from "../../layout/SResourceControls";
import {formatType, removePlural} from "../utils";
import LaunchLayout from "../../store/Reactor/containers/LaunchLayout";
import {ResourceWrapperContainer} from "../../store/Reactor/containers/ResourceWrapper";

export const PropertiesPage = ({pathname, list, meta, loaded, companyId, propertyId, setPropertyIdAction}) => {
	const [type, setType] = React.useState("");

	React.useEffect(() => {
		const pathSplit = pathname.split('/');
		setType(pathSplit[pathSplit.length-1]);
	}, [pathname]);

	return (
		<LaunchLayout>
			<ResourceWrapperContainer/>
			<Panel style={{minHeight:'666px', justifyContent: (loaded ? undefined : 'center')}}>
				{loaded ?
					<>
						<PanelHeader>
							<span>{formatType(type)}</span>
						</PanelHeader>
						<SResourceControls>
							<SStartWrapper/>
							<SEndWrapper>
								<SButton to={`${pathname}/new`}>
									<SButtonLabel>
										{`Add ${removePlural(formatType(type))}`}
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
		</LaunchLayout>
	)
};
