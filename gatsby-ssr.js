import React from "react";
export function onRenderBody(
  { setHeadComponents }
) {
 setHeadComponents([
     <script
        async
        type="text/javascript"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7992059631164037"
        crossorigin="anonymous"
      />,
  ]);
}
