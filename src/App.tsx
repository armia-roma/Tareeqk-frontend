import "./App.css";
import TowingLoginPage from "./TowingLoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TowingRequestPage from "./Pages/TowingRequestPage";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TowingLoginPage />} />
				<Route path="/towing-request" element={<TowingRequestPage />} />
				<Route path="*" element={<h1>404 - Not Found</h1>} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
