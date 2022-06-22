import React, { useState } from "react";
import { Map } from "../components/Map";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Container } from "react-bootstrap";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useMapEvents } from "react-leaflet";

export const SearchPage = () => {
	const [position, setPosition] = useState(null);

	return (
		<Container className="d-flex flex-grow-1 justify-content-center align-items-center mt-5">
			<Map />
			<Card variant="outlined" style={{ width: "30%", height: "500px" }}>
				<CardContent>
					<Typography variant="h6" gutterBottom>
						Поиск
					</Typography>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Age</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							// value={age}
							label="Age"
							// onChange={handleChange}
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
					<div className="mt-5">
						<p>ФИО владельца:</p>
						<p>Мобильный телефон:</p>
						<p>Адрес:</p>
					</div>
				</CardContent>
				<CardActions>
					<Button
						type="button"
						id="btn-announ-search"
						variant="outline-success"
						// onClick={addOrderToBasket}
					>
						Забрать
					</Button>
				</CardActions>
			</Card>
		</Container>
	);
};
