import videoJson from "./video-data.json";

export interface VideoItem {
  src: string;
  title: string;
}

export const videoData = videoJson as VideoItem[];
export default videoData;
