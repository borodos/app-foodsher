import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { check, getUserInfo } from "./http/userAPI";
import { AppRouter } from "./navigation/AppRouter";
import "./css/Main.css";

export const App = observer(() => {
	const { userStore } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		check()
			.then((data) => {
				userStore.setUser(data);
				userStore.setIsAuth(true);
			})
			.finally(() => setLoading(false));
		getUserInfo().then((data) => {
			userStore.setUserInfo(data);
		});
	}, [userStore]);

	console.log("http://localhost:8000/");
	if (loading) {
		return (
			<Spinner
				animation="border"
				role="status"
				style={{ position: "fixed", top: "50%", left: "50%" }}
			>
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		);
	}

	return (
		<div className="wrapper">
			<BrowserRouter>
				<NavBar />
				<AppRouter />
				<Footer />
			</BrowserRouter>
		</div>
	);
});
