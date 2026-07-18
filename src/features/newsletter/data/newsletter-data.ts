import newsletterJson from "./newsletter-data.json";

export interface NewsletterYear {
  year: string;
  clippings: { src: string; alt: string }[];
}

export const newsletterData = newsletterJson as NewsletterYear[];
export default newsletterData;
