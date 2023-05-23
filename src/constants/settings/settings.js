export default {
  celcius: function (params) {
    return Math.floor(params - 273);
  },
  fahrenheit: function (params) {
    return Math.floor(params * 1.8 - 459.67);
  },
};
