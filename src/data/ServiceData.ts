

import service_img_1 from "@/assets/images/resource/services1.jpg";
import service_img_2 from "@/assets/images/resource/services2.jpg";
import service_img_3 from "@/assets/images/resource/services3.jpg";
import service_img_4 from "@/assets/images/resource/services4.jpg";
import service_img_5 from "@/assets/images/resource/services4.jpg";

import service_icon_1 from "@/assets/images/resource/service-icon1.png";
import service_icon_2 from "@/assets/images/resource/service-icon2.png";
import service_icon_3 from "@/assets/images/resource/service-icon3.png";
import { StaticImageData } from "next/image";


interface DataType {
  id: number;
  path: string;
  img: StaticImageData;
  icon: StaticImageData;
  title: string;
  sm_des: string;
}



const service_data: DataType[] = [
  // home 01
  {
    id: 1,
    path: "home_1",
    img: service_img_1,
    icon: service_icon_1,
    title: "Residential Solar",
    sm_des: "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  },
  {
    id: 2,
    path: "home_1",
    img: service_img_2,
    icon: service_icon_2,
    title: "Roof Solar Panels",
    sm_des: "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  },
  {
    id: 3,
    path: "home_1",
    img: service_img_3,
    icon: service_icon_3,
    title: "Solar Water Heating",
    sm_des: "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  },
  
  // service
  {
    id: 4,
    path: "service",
    img: service_img_4,
    icon: service_icon_1,
    title: "Hybrid Inverter Installation",
    sm_des: "Deye 12kW Hybrid Inverters",
  },
  {
    id: 5,
    path: "service",
    img: service_img_5,
    icon: service_icon_1,
    title: "Hybrid Inverter Installation",
    sm_des: "Deye 12kW Hybrid Inverters",
  }




]
export default service_data