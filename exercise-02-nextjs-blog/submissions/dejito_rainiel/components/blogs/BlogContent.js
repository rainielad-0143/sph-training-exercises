import { renderContent } from "@/lib/utils/renderContent";

import styles from "@/styles/BlogContent.module.css";

export default function BlogContent({ content }) {
  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{
        __html: renderContent(content),
      }}
    />
  );
}
