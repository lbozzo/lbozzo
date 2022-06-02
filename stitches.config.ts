import * as Stitches from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme } =
  Stitches.createStitches({
    utils: {
      bg: (value: Stitches.PropertyValue<"backgroundColor">) => ({
        backgroundColor: value,
      }),
      ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
        marginLeft: value,
      }),
      mr: (value: Stitches.PropertyValue<"marginRight">) => ({
        marginRight: value,
      }),
      mx: (value: Stitches.PropertyValue<"margin">) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<"margin">) => ({
        marginTop: value,
        marginBottom: value,
      }),
      mt: (value: Stitches.PropertyValue<"marginTop">) => ({
        marginTop: value,
      }),
      mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
        marginBottom: value,
      }),
      pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
        paddingLeft: value,
      }),
      pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
        paddingRight: value,
      }),
      px: (value: Stitches.PropertyValue<"padding">) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
        paddingTop: value,
      }),
      pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
        paddingBottom: value,
      }),
      py: (value: Stitches.PropertyValue<"padding">) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    },
  });
