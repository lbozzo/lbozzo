import { globalCss } from "../../stitches.config";

export const gobalStyles = globalCss({
  "@font-face": {
    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "100 900",
    fontDisplay: "optional",
    src: 'url(/fonts/Karla-VariableFont_wght.ttf) format("truetype")',
  },
  "html, body": {
    padding: 0,
    margin: 0,
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "*": {
    boxSizing: "border-box",
  },
});
