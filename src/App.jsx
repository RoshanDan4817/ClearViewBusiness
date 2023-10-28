import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AccountingOutsourcing from "./pages/Services/accountingOutsourcing";
import Bookeeping from "./pages/Services/bookeeping";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/accountingOutsourcing",
		element: <AccountingOutsourcing />,
	},
	{
		path: "/bookKeeping",
		element: <Bookeeping />,
	},
	{
		path: "/accountsRecievable",
		element: <Home />,
	},
	{
		path: "/hireVirtualAssistant",
		element: <Home />,
	},
	{
		path: "/accountsPayable",
		element: <Home />,
	},
	{
		path: "/payrollManagement",
		element: <Home />,
	},

]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
