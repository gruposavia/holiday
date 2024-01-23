import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import {defaultLocale} from '@/i18nConfig';


const baseDirectory = process.cwd(); // Assuming `@mdx` is configured from the project root
const postsDirectory = path.join(baseDirectory, 'mdx','terms');


export default async function getPrivacy(locale = defaultLocale) {
    const fullPath = path.join(
        postsDirectory,
        `${locale}.md`
      );
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

  return matterResult.content

}

