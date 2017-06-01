module.exports = {
  "plugins": [
    "stylelint-declaration-use-variable"
  ],
  "rules": {

		/* Declaration Block */
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",

		/* Block */
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-closing-brace-space-before": "always-single-line",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always-single-line",

		/* Color */
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "color-no-invalid-hex": true,

		/* Font Family */
    "font-family-name-quotes": "always-where-required",
    "font-family-no-duplicate-names": true,
    "font-weight-notation": "numeric",

		/* CSS Function */
    "function-calc-no-unspaced-operator": true,
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never",
    "function-url-quotes": "always",
    "function-url-scheme-whitelist": [
      "https",
      "http",
      "data"
    ],
    "function-blacklist": [
      "blur",
      "brightness",
      "circle",
      "contrast",
      "drop-shadow",
      "ellipse",
      "hsl",
      "hsla",
      "hue-rotate",
      "hwb",
      "inset",
      "invert",
      "opacity",
      "rgb",
      "rgba",
      "perspective",
      "polygon",
      "saturate",
      "sepia"
    ],

		/* Numbers */
    "number-leading-zero": "always",
    "number-max-precision": 2,
    "number-no-trailing-zeros": true,

		/* Strings */
    "string-no-newline": true,
    "string-quotes": "double",

		/* Units */
    "unit-case": "lower",
    "unit-no-unknown": true,
    "unit-blacklist": [
      "cm",
      "ex",
      "in",
      "mm",
      "pc",
      "pt",
      "vmin"
    ],

		/* Values */
    "value-keyword-case": "lower",
    "value-no-vendor-prefix": true,
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-space-after": "always",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,

		/* Properties */
    "custom-property-empty-line-before": ["never", {
      "except": ["first-nested"]
    }],
    "shorthand-property-no-redundant-values": true,
    "property-case": "lower",
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,

    /* Declaration */
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": "never",
    "declaration-no-important": true,
    "declaration-property-unit-whitelist": {
      "font-size": ["rem"],
      "/^animation/": ["ms"],
      "line-height": []
    },

    /* Selectors */
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-max-compound-selectors": 5,
    "selector-max-specificity": "1,2,1",
    "selector-nested-pattern": "(&:(?:hover|focus|not\((.|\#|\:)*\))|svg|div|span)",
    "selector-no-attribute": true,
    "selector-no-id": true,
    "selector-no-qualifying-type": true,
    "selector-no-universal": true,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "single",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": true,
    "selector-max-empty-lines": 0,
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never",

    /* Media */
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",

    /* At Rules */
    "at-rule-empty-line-before": ["always", {
      "except": [
        "after-same-name",
        "first-nested",
      ],
    }],
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always",
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["for", "each"],
    }],
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-newline-after": "always",

    /* Comments */
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",

    /* General */
    "indentation": 2,
    "max-empty-lines": 3,
    "max-line-length": 100,
    "max-nesting-depth": 2,
    "no-descending-specificity": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-unknown-animations": true,
    "length-zero-no-unit": true,
    "rule-empty-line-before": ["always", {
      "except": "after-single-line-comment",
    }],
    "keyframe-declaration-no-important": true,

    /* Use Variables for */
    "sh-waqar/declaration-use-variable": "/color/",

  }
};
