import project_img_1 from "@/assets/images/project/kajiado.png";
import project_img_2 from "@/assets/images/project/kiliwehiri.png";
import project_img_3 from "@/assets/images/project/mandera.png";
import project_img_4 from "@/assets/images/project/mananasi.png";
import project_img_5 from "@/assets/images/project/Patani.png";
import project_img_6 from "@/assets/images/project/gridtied.png";
import { StaticImageData } from "next/image";


interface DataType {
  id: number;
  img: StaticImageData;
  name: string;
  title: string;
  category: string;
}


const project_data:DataType[] = [
	{
		id: 1,
		img: project_img_1,
		name: "Kajiado Law Courts",
		title: "Kajiado Law Courts",
		category: "Justice",
	},
  {
		id: 2,
		img: project_img_2,
		name: "Kiliwehiri Minigrid",
		title: "Kiliwehiri-Mandera County",
		category: "Business",
	},
  {
		id: 3,
		img: project_img_3,
		name: "Mandera",
		title: "Mandera County",
		category: "Community",
	},
  {
		id: 4,
		img: project_img_4,
		name: "Mananasi Fibre",
		title: "Mananasi Fibre - Thika",
		category: "Processing",
	},
  {
		id: 5,
		img: project_img_5,
		name: "Patani Solar",
		title: "Patani School-Taita Taveta",
		category: "Education",
	},
  {
		id: 6,
		img: project_img_6,
		name: "Mananasi Fibre",
		title: "Grid Tied Inverter-Huawei",
		category: "Processing",
	},
  // update
  {
		id: 1,
		img: project_img_4,
		name: "Chain Finance Program",
		title: "ECO, Supply Chain",
		category: "Business",
	},
  {
		id: 2,
		img: project_img_5,
		name: "New Public Attitude Tracker",
		title: "Digital Product",
		category: "Supply Chain",
	},
  {
		id: 3,
		img: project_img_6,
		name: "Smarter Ways to Manage",
		title: "ECO, Supply Chain",
		category: "Finance",
	},
  {
		id: 4,
		img: project_img_1,
		name: "Task Managemen",
		title: "Creative Work",
		category: "Supply Chain",
	},
  {
		id: 5,
		img: project_img_2,
		name: "Addressing Wind Energy",
		title: "ECO, Supply Chain",
		category: "Business",
	},
  {
		id: 6,
		img: project_img_3,
		name: "Historical Book Design",
		title: "Finance, Supply",
		category: "Energy",
	},
  // update
  {
		id: 3,
		img: project_img_6,
		name: "Smarter Ways to Manage",
		title: "ECO, Supply Chain",
		category: "Supply Chain",
	},
  {
		id: 4,
		img: project_img_1,
		name: "Task Managemen",
		title: "Creative Work",
		category: "Energy",
	},
  {
		id: 5,
		img: project_img_2,
		name: "Addressing Wind Energy",
		title: "ECO, Supply Chain",
		category: "Energy",
	},
  {
		id: 6,
		img: project_img_3,
		name: "Historical Book Design",
		title: "Finance, Supply",
		category: "Business",
	},

  {
		id: 2,
		img: project_img_2,
		name: "New Public Attitude Tracker",
		title: "Digital Product",
		category: "Finance",
	},
  {
		id: 3,
		img: project_img_3,
		name: "Smarter Ways to Manage",
		title: "ECO, Supply Chain",
		category: "Supply Chain",
	}, 



];
export default project_data;
