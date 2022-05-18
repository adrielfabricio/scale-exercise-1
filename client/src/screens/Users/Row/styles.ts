import styled from 'styled-components/native';
import colors from '../../../constants/colors';

export const Container = styled.Pressable({
	flexDirection: 'row',
	alignItems: 'center',
	paddingVertical: 10,
});

export const UserInformationView = styled.View({
	paddingLeft: 10,
});

export const Name = styled.Text({
	fontSize: 16,
	fontWeight: 'bold',
	color: colors.black,
});

export const Email = styled.Text({
	fontSize: 12,
	color: colors.gray,
});
