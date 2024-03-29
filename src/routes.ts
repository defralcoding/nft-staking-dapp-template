import { dAppName } from "config";
import { RouteType } from "types";
import { withPageTitle } from "./components/PageTitle";

import { Dashboard, Home, AdminSettings } from "./pages";

export const routeNames = {
	home: "/",
	dashboard: "/dashboard",
	adminSettings: "/admin-settings",
	unlock: "/unlock",
};

interface RouteWithTitleType extends RouteType {
	title: string;
}

export const routes: RouteWithTitleType[] = [
	{
		path: routeNames.home,
		title: "Home",
		component: Home,
	},
	{
		path: routeNames.dashboard,
		title: "Dashboard",
		component: Dashboard,
		authenticatedRoute: true,
	},
	{
		path: routeNames.adminSettings,
		title: "Admin Settings",
		component: AdminSettings,
		authenticatedRoute: true,
	},
];

export const mappedRoutes = routes.map((route) => {
	const title = route.title
		? `${route.title} • MultiversX ${dAppName}`
		: `MultiversX ${dAppName}`;

	const requiresAuth = Boolean(route.authenticatedRoute);
	const wrappedComponent = withPageTitle(title, route.component);

	return {
		path: route.path,
		component: wrappedComponent,
		authenticatedRoute: requiresAuth,
	};
});
