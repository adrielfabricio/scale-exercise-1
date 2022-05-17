import React from 'react';
import { Props } from './interface';
import { Container } from './styles';

const Avatar: React.FC<Props> = ({ url }) => (
	<Container source={{ uri: url }} />
);

export default Avatar;
