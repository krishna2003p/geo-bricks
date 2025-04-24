import axios from 'axios';
import * as cheerio from 'cheerio';

const isValidImage = (imageUrl) => {
  // Check if image is a valid URL with a real image extension (jpg, png, jpeg)
  return imageUrl && (imageUrl.endsWith('.jpg') || imageUrl.endsWith('.jpeg') || imageUrl.endsWith('.png'));
};

const scrapeNewProjects = async (city) => {
  try {
    // const url = `https://www.magicbricks.com/new-projects-${city}`;
    const targetUrl = `https://www.magicbricks.com/new-projects-${encodeURIComponent(city)}`;
    // ScrapingBee proxy URL
    const url = `https://app.scrapingbee.com/api/v1
    ?api_key=${process.env.SCRAPINGBEE_API_KEY}
    &url=${encodeURIComponent(targetUrl)}`.replace(/\s+/g, '');

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const projects = [];

    // Iterate over each project card
    $('.projdis__prjcard').each((_, el) => {
      const name = $(el).find('.mghome__prjblk__prjname').text().trim();
      const location = $(el).find('.mghome__prjblk__locname').text().trim();
      const price = $(el).find('.mghome__prjblk__price').text().trim();
      const status = $(el).find('.mghome__prjblk__bhk').text().trim();
      const builder = $(el).find('.mghome__videocard__author__name').text().trim();
      // Extract image URL from src attribute
      let image = $(el).find('.mghome__prjblk__imgsec img').attr('src');
      console.log('Image URL:', image);
      // Check if image URL is valid, else set to null
      if (image && !isValidImage(image)) {
        image = $(el).find('.mghome__prjblk__imgsec img').attr('data-src'); // If it's not a valid image, set it to null
      }

      // Extract the project link
      const link = $(el).find('.mghome__prjblk__prjname').attr('href');

      // Additional project details, if any
      const projectDetails = {};

      $(el).find('.abtprojw__swiperwrap__item').each((_, detail) => {
        const key = $(detail).find('.abtprojw__swiperwrap__title').text().trim();
        const value = $(detail).find('.abtprojw__swiperwrap__val').text().trim();
        if (key) projectDetails[key] = value;
      });

      // Push the project to the projects array
      projects.push({
        name,
        location,
        price,
        status,
        image,
        link,
        details: projectDetails,
        builder
      });
    });

    return projects;
  } catch (error) {
    console.error('Error scraping new projects:', error.message);
    return [];
  }
};

export default scrapeNewProjects;
