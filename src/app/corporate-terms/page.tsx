import { getMarkdownContent } from "../../lib/markdown";
import MarkdownRenderer from "../../components/MarkdownRenderer";

export default function CorporateTermsPage() {
  const content = getMarkdownContent("corporate-terms");

  return <MarkdownRenderer content={content} title='Corporate Terms' />;
}
