import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import requests from '../../services/requests';
import Loading from '../../components/Loading';

import Row from './Row';
import { User } from './interfaces';
import { IRowProps } from './Row/interfaces';
import {
	Button,
	ButtonText,
	Container,
	dividerStyle,
	flatList,
	Footer,
} from './styles';

const Users: React.FC = () => {
	const [users, setUsers] = useState<User>();
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(0);

	async function getUsers(page: number) {
		setLoading(true);
		try {
			const response = await requests.getUsers({ page });
			setUsers(response.data);
			setCurrentPage(response.page);
			setTotalPages(response.total_pages);
			setLoading(false);
		} catch (error: any) {
			setLoading(false);
			console.error(error);
		}
	}

	function handleNextPage() {
		setCurrentPage((prevState: any) => prevState + 1);
	}

	function handlePreviousPage() {
		setCurrentPage((prevState: any) => (prevState - 1 < 1 ? 1 : prevState - 1));
	}

	function renderItem({ item }: IRowProps) {
		return <Row key={item.id} item={item} />;
	}

	function renderItemSeparatorComponent() {
		return <View style={dividerStyle} />;
	}

	function renderFooter() {
		return (
			<Footer currentPage={currentPage} totalPages={totalPages}>
				{currentPage && currentPage > 1 && !loading && (
					<Button onPress={handlePreviousPage}>
						<ButtonText>Previous</ButtonText>
					</Button>
				)}
				{totalPages && totalPages > 1 && currentPage !== totalPages && !loading && (
					<Button onPress={handleNextPage}>
						<ButtonText>Next</ButtonText>
					</Button>
				)}
			</Footer>
		);
	}

	useEffect(() => {
		getUsers(currentPage);
	}, [currentPage]);

	return (
		<Container>
			{!loading && users ? (
				<FlatList
					data={users}
					style={flatList.style}
					contentContainerStyle={flatList.containerStyle}
					renderItem={renderItem}
					keyExtractor={(item: any) => item.id}
					ItemSeparatorComponent={renderItemSeparatorComponent}
					ListFooterComponent={renderFooter}
					showsVerticalScrollIndicator={false}
				/>
			) : (
				<Loading />
			)}
		</Container>
	);
};

export default Users;
