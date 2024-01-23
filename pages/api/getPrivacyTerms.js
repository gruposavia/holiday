
import fs from 'fs';
import { promisify } from 'util';
import matter from 'gray-matter';
import path from 'path';
import { defaultLocale } from '@/i18nConfig';

const baseDirectory = process.cwd();
const postsDirectory = path.join(baseDirectory, 'mdx', 'terms');

const readFileAsync = promisify(fs.readFile);

export default async function handler(req, res) {
  const { locale = defaultLocale } = req.query;

  try {
    const fullPath = path.join(postsDirectory, `${locale}.md`);
    const fileContents = await readFileAsync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    res.status(200).json({ content: matterResult.content });
  } catch (error) {
    console.error('Error reading privacy terms:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
