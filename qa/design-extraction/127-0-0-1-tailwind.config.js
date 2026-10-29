/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(186, 78%, 97%)',
            '100': 'hsl(186, 78%, 94%)',
            '200': 'hsl(186, 78%, 86%)',
            '300': 'hsl(186, 78%, 76%)',
            '400': 'hsl(186, 78%, 64%)',
            '500': 'hsl(186, 78%, 50%)',
            '600': 'hsl(186, 78%, 40%)',
            '700': 'hsl(186, 78%, 32%)',
            '800': 'hsl(186, 78%, 24%)',
            '900': 'hsl(186, 78%, 16%)',
            '950': 'hsl(186, 78%, 10%)',
            DEFAULT: '#46d9e8'
        },
        secondary: {
            '50': 'hsl(215, 63%, 97%)',
            '100': 'hsl(215, 63%, 94%)',
            '200': 'hsl(215, 63%, 86%)',
            '300': 'hsl(215, 63%, 76%)',
            '400': 'hsl(215, 63%, 64%)',
            '500': 'hsl(215, 63%, 50%)',
            '600': 'hsl(215, 63%, 40%)',
            '700': 'hsl(215, 63%, 32%)',
            '800': 'hsl(215, 63%, 24%)',
            '900': 'hsl(215, 63%, 16%)',
            '950': 'hsl(215, 63%, 10%)',
            DEFAULT: '#07111f'
        },
        accent: {
            '50': 'hsl(212, 31%, 97%)',
            '100': 'hsl(212, 31%, 94%)',
            '200': 'hsl(212, 31%, 86%)',
            '300': 'hsl(212, 31%, 76%)',
            '400': 'hsl(212, 31%, 64%)',
            '500': 'hsl(212, 31%, 50%)',
            '600': 'hsl(212, 31%, 40%)',
            '700': 'hsl(212, 31%, 32%)',
            '800': 'hsl(212, 31%, 24%)',
            '900': 'hsl(212, 31%, 16%)',
            '950': 'hsl(212, 31%, 10%)',
            DEFAULT: '#28394c'
        },
        'neutral-50': '#f5f7fa',
        'neutral-100': '#9eadbd',
        background: '#07111f',
        foreground: '#f5f7fa'
    },
    fontFamily: {
        sans: [
            'Camel',
            'sans-serif'
        ],
        heading: [
            'Manrope Variable',
            'sans-serif'
        ]
    },
    fontSize: {
        '14': [
            '14px',
            {
                lineHeight: '21px'
            }
        ],
        '15': [
            '15px',
            {
                lineHeight: '22.5px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: '24px'
            }
        ],
        '17': [
            '17px',
            {
                lineHeight: '25.5px'
            }
        ],
        '18': [
            '18px',
            {
                lineHeight: '27px'
            }
        ],
        '19': [
            '19px',
            {
                lineHeight: '36.1px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '37px'
            }
        ],
        '22': [
            '22px',
            {
                lineHeight: '33px'
            }
        ],
        '23': [
            '23px',
            {
                lineHeight: '34.5px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '36px'
            }
        ],
        '26': [
            '26px',
            {
                lineHeight: '41.6px'
            }
        ],
        '69.12': [
            '69.12px',
            {
                lineHeight: '84.3264px',
                letterSpacing: '-2.4192px'
            }
        ],
        '57.6': [
            '57.6px',
            {
                lineHeight: '77.76px',
                letterSpacing: '-1.44px'
            }
        ],
        '51.2': [
            '51.2px',
            {
                lineHeight: '69.12px',
                letterSpacing: '-1.28px'
            }
        ],
        '30.72': [
            '30.72px',
            {
                lineHeight: '47.616px'
            }
        ]
    },
    spacing: {
        '2': '4px',
        '4': '8px',
        '24': '48px',
        '27': '54px',
        '30': '60px',
        '45': '90px',
        '50': '100px',
        '55': '110px',
        '142': '284px',
        '45px': '45px',
        '65px': '65px',
        '75px': '75px',
        '161px': '161px',
        '419px': '419px'
    },
    borderRadius: {
        full: '50px'
    },
    screens: {
        md: '801px',
        '2xl': '1600px'
    },
    transitionDuration: {
        '200': '0.2s',
        '400': '0.4s',
        '550': '0.55s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.22, 1, 0.36, 1)'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '560px'
    }
},
  },
};
