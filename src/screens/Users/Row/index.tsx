import React from 'react';
import { View } from 'react-native';
import Avatar from '../../../components/Avatar';

import { IRowProps } from './interfaces';
import { Container, Email, Name, UserInformationView } from './styles';

const Row: React.FC<IRowProps> = ({ item }) => {
	return (
		<Container>
			<Avatar url={item.avatar} />
			<UserInformationView>
				<Name>{`${item.first_name} ${item.last_name}`}</Name>
				<Email>{item.email}</Email>
			</UserInformationView>
		</Container>
	);
};

export default Row;
