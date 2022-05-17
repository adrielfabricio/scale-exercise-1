import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const Container = styled.View({
	height: 50,
	backgroundColor: colors.primary,
	justifyContent: 'center',
	alignItems: 'center',
});

export const Title = styled.Text({
	fontSize: 18,
	fontWeight: 'bold',
	color: colors.white,
});
