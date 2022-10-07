/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      'royal-blue': '#17335b',
      'light-blue': '#3fa3da',
      'orange': '#fcb814',
      'red': '#e92b2c',
    },

    extend: {
      height: {
        Header: "80px",
        Main: "592px",
        SponsorSlideshow: "144px",
        GoalContainer: "460px",
        TeamContainer: "350px",
        AwardsContainer: "510px",
        Footer: "310px",
        logo: "55px",
        logoWidth: "55px"
      },
    },
  },
  plugins: [],
};
