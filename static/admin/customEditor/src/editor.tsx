// @ts-ignore
const { MdxControl, MdxPreview } = require("netlify-cms-widget-mdx"); // Does not expose types
import React from "react";
import admonitions from "remark-admonitions";
import DocCardList from "../../../../src/theme/DocCardList/index.js";
import { TagsControl, TagsPreview } from "./custom-widget/CustomTagsWidget";
import SlugControl from "./custom-widget/SlugControl";
import SidebarPosition from "./custom-widget/SidebarPosition";

// import Link from '@docusaurus/Link'
// import DocCard from '../../../../src/theme/DocCard/index'
// @ts-ignore

// @ts-ignore
import CMS from "netlify-cms-app";
// function CardContainer({ href, children }) {
//     return (
//         <Link
//             href={href}
//             className={'card shadow group border p-4 h-full text-gray-500 hover:cursor-pointer duration-200 transition-all hover:no-underline no-underline hover:bg-primary-500'}>
//             {children}
//         </Link>
//     )
// }
const CustomMdxWidget = (props: any) => {
  console.log(props, "from widget");
  return <MdxControl {...props} />;
};

const CustomPreview = (props: any) => {
  const mdxProps = {
    components: {},
    scope: {
      DocCardList: (props: any) => <DocCardList {...props} />,
    },
    mdPlugins: [admonitions],
  };
  return <MdxPreview mdx={mdxProps} {...props} />;
};

CMS.registerPreviewStyle("./tailwind.css");
CMS.registerPreviewStyle("./custom.css");

CMS.registerWidget("mdx", CustomMdxWidget, CustomPreview);
CMS.registerWidget("tags", TagsControl, TagsPreview);
CMS.registerWidget("slug", SlugControl);
CMS.registerWidget("sidebarPosition", SidebarPosition);
CMS.init();
