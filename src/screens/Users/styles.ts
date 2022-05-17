import styled from 'styled-components/native';
import colors from '../../constants/colors';
import { IFooterProps } from './interfaces';

export const Container = styled.View({
	flex: 1,
});

export const Footer = styled.View<IFooterProps>(props => ({
	paddingVertical: 10,
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent:
		props.currentPage === props.totalPages ? 'flex-start' : 'flex-end',
}));

export const Button = styled.Pressable({
	padding: 10,
	backgroundColor: colors.secondary,
	borderRadius: 4,
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
});

export const ButtonText = styled.Text({
	color: colors.white,
	fontWeight: 'bold',
});

export const flatList = {
	style: {},
	containerStyle: { marginHorizontal: 20, paddingTop: 10 },
};

export const dividerStyle = {
	backgroundColor: colors.gray,
	height: 1,
	flex: 1,
};
