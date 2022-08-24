import { baseImgUrl } from "../constants/fetchData";

export function getImageSrc(endpoint: string, url: string) {
  const currentImageSrc =
    baseImgUrl + `/${endpoint}/` + url.split("/").at(-2) + ".jpg";
  return currentImageSrc;
}
