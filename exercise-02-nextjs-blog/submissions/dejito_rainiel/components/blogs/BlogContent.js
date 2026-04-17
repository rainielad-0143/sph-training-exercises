import { renderContent } from "@/lib/utils/renderContent";

export default function BlogContent({ content }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: renderContent(content),
      }}
    />
  );
}
