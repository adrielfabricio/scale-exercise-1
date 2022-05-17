export type User = {
	id: 1;
	first_name: string;
	last_name: string;
	email: string;
	avatar: string;
};

type Support = {
	text: string;
	url: string;
};

export interface IUsers {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: User;
	support: Support;
}

export interface IFooterProps {
	currentPage: number;
	totalPages: number;
}
