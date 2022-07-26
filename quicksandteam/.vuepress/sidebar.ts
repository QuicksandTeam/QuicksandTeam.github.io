import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/column/md/": [
        { 
            text: "Markdown 快速入门教程", 
            collapsable: true,
            children: [
                "oneMarkdowntitle.md", 
                "twoMarkdown_paragraph", 
                "threeMarkdown_list", 
                "fourmarkdownblock", 
                "FiveMarkdowncode", 
                "SixMarkdownlink", 
                "SevenMarkdownpictures",
                "EightMarkdownform",
                "nineMarkdownskills",
                "Tensupplement",
                "Markdownmathematicalformulasyntax",
            ]
        }
    ],

});
