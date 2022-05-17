import axios from 'axios';

import { apiUrl } from '../constants/url';

const api = axios.create({
	baseURL: apiUrl,
});

export default api;
