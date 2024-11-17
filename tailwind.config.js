/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3F3D56",
        navText: "#1E1E1E",
        innovator: "#615DA5",
        discover: "#ECEAFF",
        transparency: "#FFECE5",
        empowerment: "#FEEAF3",
        valueParagraph: "#0E162D",
        footer: "#323038",
        input: "#9D9D9D",
        subscribeBtn: "#573EF2",
        line: "#848282",
      },

      screens: {
        phone: "350px",
        tablet: "810px",
        laptop: "1024px",
        desktop: "1560px",
      },
      width: {
        header: "1298px",
        logo: "47px",
        banner: "619px",
        button: "385px",
        aboutParagraph: "1078px",
        valueCard: "418px",
        icon: "50px",
      },
      height: {
        header: "503px",
        nav: "97px",
        logo: "42px",
        aboutParagraph: "400px",
        valueCard: "472px",
        footer: "598px",
        contact: "700px",
      },
      borderRadius: {
        header: "20px",
        contact: "10px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        logo: "26px",
        sectionHeader: "40px",
        aboutParagraph: "28px",
      },
      lineHeight: {
        logo: "35.366px",
        banner: "48.968px",
        button: "32.645px",
        sectionHeader: "54.409px",
        contact: "87.055px",
      },
      letterSpacing: {
        logo: "-0.364px",
        banner: "-0.504px",
        button: "-0.336px",
        sectionHeader: "-0.56px",
        contact: "-0.896px",
      },
      padding: {
        valueCardTop: "38px",
        valueCarddown: "28px",
        valueCardTitleLeft: "53px",
        valueCardTitleRight: "51px",
        valueCardTopLeftIcon: "42px",
      },
      margin: {
        banner: "86px",
        about: "70px",
        sectionBottom: "100px",
        footer: "268px",
      },
    },
  },
  plugins: [],
};
