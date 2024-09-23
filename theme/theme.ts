export const theme = {
    colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          icon:{
            primary:{
                light: "rgba(230, 96,108,1)",
                dark: "rgba(99, 87, 246, 1)"
            }
          },
         
    },
    fontFamily: {
          secondary: ['var(--font-barlow)', 'sans-serif'],
          primary: ['var(--font-barlow-condensed)', 'sans-serif']
    },
    backgroundImage:{
        card: "linear-gradient(180deg, #4D4F95 0%, #2B2D66 100%)",
        polygon: "linear-gradient(180deg, #4D4F95 0%, #2B2D66 100%)",
        primary: "linear-gradient(270deg, #6357F6 0%, #E6606C 100%)",
        back: "radial-gradient(50% 50% at 50% 50%, #36377C 0%, #181942 100%)",
        'button-primary-light': "rgba(230, 96,108,1)",
        'button-primary-dark': "rgba(99, 87, 246, 1)",
    }
}