

import service_img_1 from "@/assets/images/resource/services1.jpg";
import service_img_2 from "@/assets/images/resource/services2.jpg";
import service_img_3 from "@/assets/images/resource/services3.jpg";
import service_img_4 from "@/assets/images/resource/services4.jpg";
import service_img_5 from "@/assets/images/resource/services5.jpg";
import service_img_6 from "@/assets/images/resource/services6.jpg";

// import service_icon_1 from "@/assets/images/resource/service-icon1.png";
// import service_icon_2 from "@/assets/images/resource/service-icon2.png";
// import service_icon_3 from "@/assets/images/resource/service-icon3.png";
import { StaticImageData } from "next/image";


interface DataType {
  id: number;
  path: string;
  img: StaticImageData;
  // icon: StaticImageData;
  title: string;
  sm_des: string;
}



const service_data: DataType[] = [
  // home 01
  {
    id: 1,
    path: "home_1",
    img: service_img_1,
    // icon: service_icon_1,
    title: "Solar PV Systems",
    sm_des: "We specialize in the Design, Installation, and Maintenance of Solar Photovoltaic (PV) systems.",
  },
  {
    id: 2,
    path: "home_1",
    img: service_img_2,
    // icon: service_icon_2,
    title: "Grid-Tied and Off-Grid Solutions",
    sm_des: "We offer both Grid-tied Systems, Hybrid Systems & Off-grid Systems.",
  },
  {
    id: 3,
    path: "home_1",
    img: service_img_3,
    // icon: service_icon_3,
    title: "Solar Water Heating",
    sm_des: "We offer Solar Water Heating Systems, which are efficient and eco-friendly solutions designed to meet the hot water needs of residential, commercial, and industrial clients",
  },
  
  // service
  {
    id: 4,
    path: "service",
    img: service_img_4,
    // icon: service_icon_1,
    title: "Hybrid Inverter Installation",
    sm_des: "Deye 12kW Hybrid Inverters",
  },
  {
    id: 5,
    path: "service",
    img: service_img_5,
    // icon: service_icon_1,
    title: "Sola Floodlights",
    sm_des: "Deye 12kW Hybrid Inverters",
  },
  {
    id: 6,
    path: "service",
    img: service_img_6,
    // icon: service_icon_1,
    title: "Grid Tied Solutions ",
    sm_des: "Huawei Grid Tied Inverters",
  },
  






]
export default service_data