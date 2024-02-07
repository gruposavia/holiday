import { promises as fsPromises } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { defaultLocale } from '@/i18nConfig';

const baseDirectory = process.cwd();
const baggageDirectory = path.join(baseDirectory, 'mdx', 'luggage');

export default async function handler(req, res) {
  const { locale = defaultLocale } = req.query;

  try {
    const fullPath = path.join(baggageDirectory, `${locale}.md`);
    const fileContents = await fsPromises.readFile(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    res.status(200).json({ baggage: matterResult.content });
  } catch (error) {
    console.error(`Error reading baggage content`, error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
