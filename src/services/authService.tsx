/*
	Author:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { fetchPostJson } from "@/services/fetch";
import { clearMe, getMe } from "@/store/MeStore";


/* ----- FUNCTIONS ----- */
export const login = async (email: string, password: string): Promise<boolean> => {
	let responseJson;

	try {
		const response = await fetchPostJson("login_check", { "email": email, "password": password });
		if (!response.ok)
			return false;
		responseJson = await response.json();
	} catch (error) {
		console.error("Error login:", error);
		return false;
	}
	if (responseJson.token) {
		localStorage.setItem('authToken', responseJson.token);
		await getMe();
		return true;
	} else {
		return false;
	}
};

export const register = async (username: string, email: string, password: string): Promise<boolean> => {
	let responseJson;

	try {
		const response = await fetchPostJson("users", { "pseudo": username, "email": email, "password": password });
		if (!response.ok)
			return false;
		responseJson = await response.json();
	} catch (error) {
		console.error("Error register:", error);
		return false;
	}
	if (responseJson.access_token) {
		localStorage.setItem('authToken', responseJson.access_token);
		await getMe();
		return true;
	} else {
		return false;
	}
};

export const isAuthenticated = (): boolean => {
	const token = localStorage.getItem('authToken');
	return !!token;
};

export const logout = (): void => {
	localStorage.removeItem('authToken');
	clearMe();
	window.location.href = "/";
};

export async function defaultLogin() {
	if (isAuthenticated())
		await getMe();
}
