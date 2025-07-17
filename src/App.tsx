import "./App.css";
import TowingLoginPage from "./TowingLoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TowingRequestPage from "./Pages/TowingRequestPage";
import AlertContainer from "./Components/Ui/AlertContainer";
function App() {
	return (
		<BrowserRouter>
			<AlertContainer />
			<Routes>
				<Route path="/" element={<TowingLoginPage />} />
				<Route path="/towing-request" element={<TowingRequestPage />} />
				<Route path="*" element={<h1>404 - Not Found</h1>} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
