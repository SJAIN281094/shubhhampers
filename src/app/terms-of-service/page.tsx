import { getMarkdownContent } from "../../lib/markdown";
import MarkdownRenderer from "../../components/MarkdownRenderer";

export default function TermsOfServicePage() {
  const content = getMarkdownContent("terms-of-service");

  return <MarkdownRenderer content={content} title='Terms of Service' />;
}
