module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily : {
        body: ["Inter"],
        play: ["Playfair Display"]
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      "whitesmoke": '#f5f5f5',
     })
  },
  plugins: [
    require('flowbite/plugin')
  ],
}