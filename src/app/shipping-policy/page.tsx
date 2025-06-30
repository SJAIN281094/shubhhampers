import { getMarkdownContent } from "../../lib/markdown";
import MarkdownRenderer from "../../components/MarkdownRenderer";

export default function ShippingPolicyPage() {
  const content = getMarkdownContent("shipping-policy");

  return <MarkdownRenderer content={content} title='Shipping Policy' />;
}
