import { reveal, revealMarkdown, revealHighlight, revealMath, revealSearch, revealNotes, revealZoom } from "/Users/apple/Desktop/GitHub/QuicksandTeam_Website/node_modules/vuepress-plugin-md-enhance/lib/client/reveal";

export const useReveal = () => [reveal(), revealMarkdown(), revealHighlight(), revealMath(), revealSearch(), revealNotes(), revealZoom()
];