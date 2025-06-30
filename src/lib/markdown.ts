import fs from "fs";
import path from "path";

export function getMarkdownContent(filename: string): string {
  try {
    const filePath = path.join(process.cwd(), "src", "content", `${filename}.md`);
    const content = fs.readFileSync(filePath, "utf8");
    return content;
  } catch {
    return "# Content Not Found\n\nThe requested content could not be loaded.";
  }
}
