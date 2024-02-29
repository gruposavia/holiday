import { promises as fsPromises } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { defaultLocale } from '@/i18nConfig';

const baseDirectory = process.cwd();
const entertainmentDirectory = path.join(baseDirectory, 'mdx', 'entertainment');

export default async function handler(req, res) {
  const { locale = defaultLocale } = req.query;

  try {
    const fullPath = path.join(entertainmentDirectory, `${locale}.md`);
    const fileContents = await fsPromises.readFile(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    res.status(200).json({ entertainment: matterResult.content });
  } catch (error) {
    console.error(`Error reading entertainment content`, error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
