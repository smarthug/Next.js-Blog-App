'use client'

import { defaultExtensions } from "@/components/protected/editor/wysiwyg/extensions";
import { generateHTML } from "@tiptap/core";
import { useMemo } from "react";

const Content = ({ json }) => {
    // console.log(json)
    // const json = {
    //   type: "doc",
    //   content: [
    //     {
    //       type: "paragraph",
    //       content: [
    //         {
    //           type: "text",
    //           text: "Example ",
    //         },
    //         {
    //           type: "text",
    //           marks: [
    //             {
    //               type: "bold",
    //             },
    //           ],
    //           text: "Text",
    //         },
    //       ],
    //     },
    //   ],
    // };
  
    // const test = {
    //   type: "doc",
    //   content: [
    //     { type: "paragraph", content: [{ type: "text", text: "hello world" }] },
    //   ],
    // };
  
    const output = useMemo(() => {
      return generateHTML(JSON.parse(json), [
        // Document,
        // Paragraph,
        // Text,
        // Bold,
        // other extensions …
        // Color,
        // Highlight,
        // HorizontalRule,
        // TiptapImage,
        // TiptapLink,
        // Placeholder,
        // TaskItem,
        // TaskList,
        // TextStyle,
        // TiptapUnderline,
  
        ...defaultExtensions,
      ]);
    }, [json]);
  
    return (
      <div
        className="lg:prose-md prose"
        dangerouslySetInnerHTML={{ __html: output || "" }}
      />
    );
  };

  export default Content;