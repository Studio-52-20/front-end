/*
	Authors:
	>> Clément Lacroix - { clacroix2@etu.uqac.cq }
	>> Lucas Aubriet - { laubriet@etu.uqac.cq }
	>> Martin Vidal - { mvidal@etu.uqac.cq }
	>> Nathan TIROLF - { ntirolf@etu.uqac.cq }
	>> Romane Lesueur - { rlesueur@etu.uqac.cq }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import type { IUserRole } from "@/type/User";


/* ----- DATAS ----- */
const AdminRole = { roleName: "Admin" };
const ViewerRole = { roleName: "Viewer" };
const AnonymousRole = { roleName: "Anonymous" };

const UserRoleDatas: IUserRole[] = [
	AdminRole,
	ViewerRole,
	AnonymousRole
];


/* ----- FUNCTIONS ----- */
export const GetUserRoleByName = (roleName: string | string[]): IUserRole[] => {
	let rolesToGet: string[] = (typeof roleName === "string") ? [roleName] : roleName;
	const role = UserRoleDatas.find((role) => rolesToGet.includes(role.roleName));

	if (role) return [role];
	return [AnonymousRole];
};

export const GetAllUserRoles = (): IUserRole[] => {
	return UserRoleDatas;
};
