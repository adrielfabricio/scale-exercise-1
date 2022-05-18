import { AxiosResponse } from 'axios';

import api from './api';
import { IGetUsers } from './interfaces';

export default {
	getUsers: async ({ page }: IGetUsers) => {
		console.log(page);
		const response: AxiosResponse = await api.get(`?page=${page}`);
		return response.data;
	},
};
