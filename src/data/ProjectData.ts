import project_img_1 from "@/assets/images/project/kajiado.png";
import project_img_2 from "@/assets/images/project/kiliwehiri.png";
import project_img_3 from "@/assets/images/project/mandera.png";
import project_img_4 from "@/assets/images/project/mananasi.png";
import project_img_5 from "@/assets/images/project/Patani.png";
import project_img_6 from "@/assets/images/project/gridtied.png";
import project_img_7 from "@/assets/images/project/Mandeera.png";
import project_img_8 from "@/assets/images/project/ABC.png";
import project_img_9 from "@/assets/images/project/Mbita.png";
import project_img_10 from "@/assets/images/project/Eldowas.png";
import project_img_11 from "@/assets/images/project/Tawa.png";
import project_img_12 from "@/assets/images/project/Ruiru.png";
import project_img_13 from "@/assets/images/project/School1.png";
import project_img_14 from "@/assets/images/project/School2.png";
import project_img_15 from "@/assets/images/project/School3.png";
import project_img_16 from "@/assets/images/project/Eldowas2.png";
import project_img_17 from "@/assets/images/project/Mwingi.png";
import project_img_18 from "@/assets/images/project/Kajiado2.png";
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
		id: 7,
		img: project_img_7,
		name: "Battery",
		title: "Kiliwehiri Battery Backup",
		category: "Community",
	},
  {
		id: 8,
		img: project_img_8,
		name: "ABC Center",
		title: "Hagadera-Dadaab Refugees Camp",
		category: "NGO",
	},
  {
		id: 9,
		img: project_img_9,
		name: "Mbita Law Courts",
		title: "Mbita Law Courts-Homa-Bay County",
		category: "Justice",
	},
  {
		id: 10,
		img: project_img_10,
		name: "ELDOWAS",
		title: "Eldoret Water & Sanitation",
		category: "Water",
	},
  {
		id: 11,
		img: project_img_11,
		name: "Tawa Law Couurts",
		title: "Tawa Law Couurts",
		category: "Justice",
	},
  {
		id: 12,
		img: project_img_12,
		name: "Ruiru Law Courts",
		title: "Ruiru Law Courts",
		category: "Justice",
	},
  // update
  {
		id: 13,
		img: project_img_13,
		name: "School",
		title: "Primary School in Kajiado County",
		category: "Education",
	},
  {
		id: 14,
		img: project_img_14,
		name: "School",
		title: "Primary School Kajiado County",
		category: "Education",
	},
  {
		id: 15,
		img: project_img_15,
		name: "School",
		title: "Primary School in West Pokot",
		category: "Education",
	},
  {
		id: 16,
		img: project_img_16,
		name: "Eldoret Waters",
		title: "ELDOWAS",
		category: "Water",
	},

  {
		id: 17,
		img: project_img_17,
		name: "Mwingi Law Courts",
		title: "Mwingi Law Courts",
		category: "Justice",
	},
  {
		id: 18,
		img: project_img_18,
		name: "Kyuso",
		title: "Kyuso Law Courts",
		category: "Justice",
	}, 



];
export default project_data;
