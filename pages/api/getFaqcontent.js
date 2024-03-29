import { promises as fsPromises } from "fs";
import matter from "gray-matter";
import path from "path";
import { defaultLocale } from "@/i18nConfig";
import authenticate from "@/middleware/auth";

const baseDirectory = process.cwd();
const faqDirectory = path.join(baseDirectory, "mdx", "faq");

export default async function handler(req, res) {
  const { section, locale = defaultLocale } = req.query;
  authenticate(req, res, async () => {
    try {
      const fullPath = path.join(faqDirectory, `${section}.${locale}.md`);
      const fileContents = await fsPromises.readFile(fullPath, "utf8");
      const matterResult = matter(fileContents);

      res.status(200).json({ faqContent: matterResult.content });
    } catch (error) {
      console.error(
        `Error reading FAQ content for section ${section} and locale ${locale}:`,
        error.message
      );
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
}
