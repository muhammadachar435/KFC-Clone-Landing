/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      iphonese:'375px',
      iphonexr:'414px',
      iphone12:'390px',
      iphone14:'425px',
      pixel:'412px',
      samsung8:'360px',
      samsung20:'412px',
      ipdmini:'768px',
      ipdair:'284.4px',
      resdim:"426px",
      ipadpro:'1024px',
      surface7:'912px',
      surfaceduo:'540px',
      Galaxyz:'314px',
      samsunga5:'412px',
      nesthub:'1024px',
      lgbig:'1440px',
       sm: '640px',
       md: '768px',
       lg: '1024px',
       xl: '1280px',
       xll:'1345px'
     },
    extend: {
      boxShadow: {
        custom: '0px 5px 15px rgba(0, 0, 0, 0.35)',
      },
      gridTemplateColumns: {
        'custom': 'repeat(2, minmax(200px, 1fr))',
      },

     


    },
  },
  plugins: [],
}

