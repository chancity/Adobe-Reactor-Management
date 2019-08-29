import { SSocialLink } from "./Styled/SNavLinks";
import React from 'react';
import { ReactComponent as GithubSvg } from '../../static/images/social/github.svg';
//import { ReactComponent as MediumSvg } from '../../static/images/social/medium.svg';

export const SocialLinks = () => {
	return (
		<>
			<SSocialLink href={"https://github.com/chancity/Adobe-Reactor-Management"} target="_blank">
				<GithubSvg/>
			</SSocialLink>
			{/*<SocialLink href={"https://medium.com/some-medium"} target="_blank">
				<MediumSvg/>
			</SocialLink>*/}
		</>
	);
};

