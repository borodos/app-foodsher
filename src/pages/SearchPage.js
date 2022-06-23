import React, { useContext, useState } from "react";
import { Map } from "../components/Map";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Container } from "react-bootstrap";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Context } from "..";

export const SearchPage = observer(() => {
	const [announ, setAnnoun] = useState("");

	const { announStore } = useContext(Context); // -- Берем из контекста пользователя

	const handleChange = (e) => {
		setAnnoun(e.target.value);
	};

	return (
		<Container className="d-flex flex-grow-1 justify-content-center align-items-center mt-5">
			<Map value={announ} />
			<Card variant="outlined" style={{ width: "30%", height: "500px" }}>
				<CardContent>
					<Typography variant="h6" gutterBottom>
						Поиск
					</Typography>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Объявление</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={announ}
							label="Объявление"
							onChange={handleChange}
						>
							{announStore?.announs?.map((value) => (
								<MenuItem key={value.id} value={value}>
									{value.title}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<div className="mt-5">
						<p>ФИО владельца: {announ?.person || ""}</p>
						<p>Мобильный телефон: {announ?.phone || ""}</p>
						<p>Адрес: {announ?.title || ""}</p>
					</div>
				</CardContent>
				<CardActions>
					{/* <Button
						type="button"
						id="btn-announ-search"
						variant="outline-success"
						// onClick={addOrderToBasket}
					>
						Забрать
					</Button> */}
				</CardActions>
			</Card>
		</Container>
	);
});
