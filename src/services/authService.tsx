/*
	Author:
	>> Nathan TIROLF - { nathan.tirolf@epitech.eu }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { fetchPost } from "@/services/fetch";
import { clearMe, getMe } from "@/store/MeStore";


/* ----- AUTH FUNCTIONS ----- */
const login = async (email: string, password: string): Promise<boolean> => {

	try {
		const response = await fetchPost("login_check", { "email": email, "password": password }, "json");
		if (!response.ok)
			return false;

		const responseJson = await response.json();
		if (!responseJson.token)
			return false;

		localStorage.setItem('authToken', responseJson.token);
		await getMe();
		return true;
	} catch (error) {
		console.error("Error login:", error);
		return false;
	}
};

const register = async (username: string, email: string, password: string): Promise<boolean> => {
	try {
		const formData = new FormData();
		formData.append("pseudo", username);
		formData.append("email", email);
		formData.append("password", password);

		const response = await fetchPost("users", formData, "formData");
		return response.ok ? login(email, password) : false;
	} catch (error) {
		console.error("Error register:", error);
		return false;
	}
};

const logout = (): void => {
	localStorage.removeItem('authToken');
	clearMe();
	window.location.href = "/";
};


/* ----- FUNCTIONS ----- */
const isAuthenticated = (): boolean => {
	const token = localStorage.getItem('authToken');
	return !!token;
};


/* ----- EXPORT ----- */
export { login, register, logout, isAuthenticated }
