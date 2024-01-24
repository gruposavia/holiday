import { promises as fsPromises } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { defaultLocale } from '@/i18nConfig';

const baseDirectory = process.cwd();
const policyDirectory = path.join(baseDirectory, 'mdx', 'policy');
const termsDirectory = path.join(baseDirectory, 'mdx', 'terms');

export default async function handler(req, res) {
  const { locale = defaultLocale } = req.query;

  try {
    const fullPolicyPath = path.join(policyDirectory, `${locale}.md`);
    const policyContents = await fsPromises.readFile(fullPolicyPath, 'utf8');
    const policyMatterResult = matter(policyContents);

    const fullTermsPath = path.join(termsDirectory, `${locale}.md`);
    const termsContents = await fsPromises.readFile(fullTermsPath, 'utf8');
    const termsMatterResult = matter(termsContents);

    res.status(200).json({ policyContent: policyMatterResult.content, termsContent: termsMatterResult.content });
  } catch (error) {
    console.error('Error reading privacy terms:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
