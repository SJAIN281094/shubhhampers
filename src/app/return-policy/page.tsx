import { getMarkdownContent } from "../../lib/markdown";
import MarkdownRenderer from "../../components/MarkdownRenderer";

export default function ReturnPolicyPage() {
  const content = getMarkdownContent("return-policy");

  return <MarkdownRenderer content={content} title="Return Policy" />;
}
