import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/logo1.png";

export default function Footer() {
	return (
		<Container maxWidth="xl">
			<Grid container spacing={2} sx={{ mb: 4, mt: 12 }}>
				<Grid item xs={3}>
					<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
						<CardMedia component="img" sx={{ width: 121, borderRadius: 1 }} image={logo} />
						<Typography variant="subtitle2" color="text" fontSize={"18px"}>
							Clearview Biz Solutions.
						</Typography>
						<Typography variant="subtitle2" color="text" fontSize={"14px"}>
							All rights reserved.
						</Typography>
					</Box>
				</Grid>

				<Grid item xs={9}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography component={"p"} fontWeight={600} variant="caption">
								Our Services
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<Typography component={"p"} variant="caption" sx={{ my: 2, textDecoration: "underline", cursor: "pointer" }}>
								Audit and Assurance
							</Typography>
							<Typography component={"p"} variant="caption" sx={{ my: 2, textDecoration: "underline", cursor: "pointer" }}>
								Business Consulting
							</Typography>
							<Typography component={"p"} variant="caption" sx={{ my: 2, textDecoration: "underline", cursor: "pointer" }}>
								Deals advisory and Business recovery services
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<Typography component={"p"} variant="caption" sx={{ my: 2, textDecoration: "underline", cursor: "pointer" }}>
								Forensic Services
							</Typography>
							<Typography component={"p"} variant="caption" sx={{ my: 2, textDecoration: "underline", cursor: "pointer" }}>
								Strategic and Operational Consulting
							</Typography>
							<Typography component={"p"} variant="caption" sx={{ my: 2, textDecoration: "underline", cursor: "pointer" }}>
								Risk assurance
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<Typography component={"p"} variant="caption" sx={{ my: 2, textDecoration: "underline", cursor: "pointer" }}>
								Tax Services
							</Typography>
							<Typography component={"p"} variant="caption" sx={{ my: 2, textDecoration: "underline", cursor: "pointer" }}>
								Legal Services
							</Typography>
							<Typography component={"p"} variant="caption" sx={{ my: 2, textDecoration: "underline", cursor: "pointer" }}>
								Accounting Services and Consulting
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}
