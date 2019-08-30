import { SSocialLink } from "./Styled/SNavLinks";
import React from 'react';
import { ReactComponent as GithubSvg } from '../../static/images/social/github.svg';

export const SocialLinks = ({isServer}) => {
	return (
		<>
			<SSocialLink href={"https://github.com/chancity/Adobe-Reactor-Management"} target="_blank">
				{!isServer &&  <GithubSvg/>}
			</SSocialLink>
			{/*<SocialLink href={"https://medium.com/some-medium"} target="_blank">
				<MediumSvg/>
			</SocialLink>*/}
		</>
	);
};

