import { Lusitana, Inter, Arima } from "next/font/google";
import { Blinker } from "next/font/google";
import { Titillium_Web } from "next/font/google";
import { Sriracha } from "next/font/google";
import { Edu_SA_Beginner } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const arima = Arima({ subsets: ["latin"] });

export const blinker = Blinker({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
});
export const titillium_web = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "900"],
});

export const sriracha = Sriracha({ subsets: ["latin"], weight: ["400"] });
// export const sriracha = Edu_SA_Beginner({
//   subsets: ["latin"],
//   weight: ["400"],
// });
