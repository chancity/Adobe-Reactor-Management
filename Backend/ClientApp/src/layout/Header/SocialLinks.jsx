import { SocialLink } from "./Styled/NavLinks";
import React from 'react';
import { ReactComponent as GithubSvg } from '../../static/images/social/github.svg';
import { ReactComponent as MediumSvg } from '../../static/images/social/medium.svg';

export const SocialLinks = () => {
	return (
		<>
			<SocialLink href={"https://github.com/chancity/Adobe-Reactor-Management"} target="_blank">
				<GithubSvg/>
			</SocialLink>
			<SocialLink href={"https://medium.com/some-medium"} target="_blank">
				<MediumSvg/>
			</SocialLink>
		</>
	);
};

