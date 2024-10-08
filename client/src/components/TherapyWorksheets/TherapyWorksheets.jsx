import SideBar from "../SideBar/SideBar.jsx";
import UploadForm from "../helpers/UploadForm/UploadForm.jsx";
import { useState } from "react";
import FileUploadIcon from '@rsuite/icons/FileUpload';
import "./TherapyWorksheets.css";

export default function TherapyWorksheets() {
	const [popup, setPopup] = useState(false)

	const handleUpload = () => {
		setPopup(true);
	}

	return (
		<section className="page-container">
			<SideBar />
			<main className="main-content">
				<section className="header-container">
					<header className="worksheets-header">
						<h1>Worksheets</h1>
						<h1 onClick={handleUpload}><FileUploadIcon /> Upload File</h1>
						{popup && <UploadForm setPopup={setPopup}></UploadForm>}
					</header>
				</section>
			</main>
		</section>
	);
}
