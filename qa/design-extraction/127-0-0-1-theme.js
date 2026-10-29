// React Theme — extracted from http://127.0.0.1:4173/
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '17': string;
    '18': string;
    '19': string;
    '20': string;
    '22': string;
    '23': string;
    '24': string;
    '26': string;
    '69.12': string;
    '57.6': string;
    '51.2': string;
    '30.72': string;
 *   };
 *   space: {
    '4': string;
    '8': string;
    '45': string;
    '48': string;
    '54': string;
    '60': string;
    '65': string;
    '75': string;
    '90': string;
    '100': string;
    '110': string;
    '161': string;
    '284': string;
    '419': string;
 *   };
 *   radii: {
    full: string;
 *   };
 *   shadows: {

 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#46d9e8",
    "secondary": "#07111f",
    "accent": "#28394c",
    "background": "#07111f",
    "foreground": "#f5f7fa",
    "neutral50": "#f5f7fa",
    "neutral100": "#9eadbd"
  },
  "fonts": {
    "body": "'Camel', sans-serif"
  },
  "fontSizes": {
    "17": "17px",
    "18": "18px",
    "19": "19px",
    "20": "20px",
    "22": "22px",
    "23": "23px",
    "24": "24px",
    "26": "26px",
    "69.12": "69.12px",
    "57.6": "57.6px",
    "51.2": "51.2px",
    "30.72": "30.72px"
  },
  "space": {
    "4": "4px",
    "8": "8px",
    "45": "45px",
    "48": "48px",
    "54": "54px",
    "60": "60px",
    "65": "65px",
    "75": "75px",
    "90": "90px",
    "100": "100px",
    "110": "110px",
    "161": "161px",
    "284": "284px",
    "419": "419px"
  },
  "radii": {
    "full": "50px"
  },
  "shadows": {},
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#46d9e8",
      "light": "hsl(186, 78%, 74%)",
      "dark": "hsl(186, 78%, 44%)"
    },
    "secondary": {
      "main": "#07111f",
      "light": "hsl(215, 63%, 22%)",
      "dark": "hsl(215, 63%, 10%)"
    },
    "background": {
      "default": "#07111f",
      "paper": "#0b1729"
    },
    "text": {
      "primary": "#f5f7fa",
      "secondary": "#07111f"
    }
  },
  "typography": {
    "fontFamily": "'Camel', sans-serif",
    "h1": {
      "fontSize": "51.2px",
      "fontWeight": "800",
      "lineHeight": "69.12px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "800",
      "lineHeight": "36px"
    }
  },
  "shape": {
    "borderRadius": 50
  },
  "shadows": []
};

export default theme;
