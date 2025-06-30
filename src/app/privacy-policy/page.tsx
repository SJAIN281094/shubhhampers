import { getMarkdownContent } from "../../lib/markdown";
import MarkdownRenderer from "../../components/MarkdownRenderer";

export default function PrivacyPolicyPage() {
  const content = getMarkdownContent("privacy-policy");

  return <MarkdownRenderer content={content} title='Privacy Policy' />;
}
