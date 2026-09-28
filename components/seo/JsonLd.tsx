import React from "react";

export interface JsonLdProps {
  graph: Array<Record<string, unknown>>;
}

/**
 * Server component that outputs a JSON-LD @graph script block.
 * Uses strict typing with zero `any` and prevents XSS by replacing angle brackets.
 */
export function JsonLd({ graph }: JsonLdProps): React.JSX.Element {
  if (!graph || graph.length === 0) {
    return <></>;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  const jsonString = JSON.stringify(structuredData).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}
