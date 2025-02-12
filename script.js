const btn = document.getElementById("btn");

const colors = {
  gray: "#808080",
  springGreen: "#00FF7F",
  lightGreen: "#90EE90",
  darkGreen: "#006400",
  green: "#008000",
  limeGreen: "#32CD32",
  greenYellow: "#ADFF2F",
  olive: "#808000",
  goldenrod: "#DAA520",
  chocolate: "#D2691E",
  rosyBrown: "#BC8F8F",
  burlyWood: "#DEB887",
  mediumPurple: "#9370DB",
  indigo: "#4B0082",
  mediumOrchid: "#BA55D3",
  darkMagenta: "#8B008B",
  magenta: "#FF00FF",
  violet: "#EE82EE",
  orchid: "#DA70D6",
  plum: "#DDA0DD",
  deepPink: "#FF1493",
  hotPink: "#FF69B4",
  paleVioletRed: "#DB7093",
  lightPink: "#FFB6C1",
  pink: "#FFC0CB",
  lightCoral: "#F08080",
  indianRed: "#CD5C5C",
  crimson: "#DC143C",
  maroon: "#800000",
  darkRed: "#8B0000",
  fireBrick: "#B22222",
  brown: "#A52A2A",
  salmon: "#FA8072",
  darkSalmon: "#E9967A",
  lightSalmon: "#FFA07A",
  coral: "#FF7F50",
  tomato: "#FF6347",
  red: "#FF0000",
  OrangeRed: "#FF4500",
  DarkOrange: "#FF8C00",
  orange: "#FFA500",
  gold: "#FFD700",
  yellow: "#FFFF00",
  khaki: "#F0E68C",
  black: "#000000",
  midnightBlue: "#191970",
  blue: "#0000FF",
  dodgerBlue: "#1E90FF",
  aqua: "#00FFFF",
  skyBlue: "#87CEEB",
  teal: "#008080",
  cadetBlue: "#5F9EA0",
  beige: "#F5F5DC",
  oldLacee: "#FDF5E6",
  ivorye: "#FFFFF0",
  linene: "#FAF0E6",
  cornsilke: "#FFF8DC",
  antiqueWhite: "#FAEBD7",
  blanchedAlmone: "#FFEBCD",
  bisque: "#FFE4C4",
  lightYellowe: "#FFFFE0",
  lemonChiffone: "#FFFACD",
  lightGoldenrodYellowe: "#FAFAD2",
  papayaWhie: "#FFEFD5",
  peachPuffe: "#FFDAB9",
  moccasine: "#FFE4B5",
  paleGoldenrode: "#EEE8AA",
  mistyRose: "#FFE4E1",
  lavenderBlushe: "#FFF0F5",
  lavendere: "#E6E6FA",
  thistlee: "#D8BFD8",
  azuree: "#F0FFFF",
  lightCyae: "#E0FFFF",
  powderBluee: "#B0E0E6",
  paleTurquoise: "#E0FFFF",
  honeydewe: "#F0FFF0",
  mintCreame: "#F5FFFA",
};

const RandomColor = () => {
  const color = Object.keys(colors); // Obtém as chaves do objeto (nomes das cores)
  const randomKey = color[Math.floor(Math.random() * color.length)]; // Escolhe uma chave aleatória
  return colors[randomKey]; // Retorna a cor correspondente
};

const changeColor = () => {
  const colorChange = document.getElementById("splash-box");
  const splashHexa = document.getElementById("splash-hexa-box");
  const newColor = RandomColor();

  // Mudar a cor do SVG (path)
  const svgPath = colorChange.querySelector("path");
  svgPath.setAttribute("fill", newColor);
  splashHexa.innerHTML = newColor;
};

// Adiciona o evento de clique ao botão
btn.addEventListener("click", changeColor);

// Adiciona o evento de teclado para a tecla "Enter"
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === "ArrowDown") {
    changeColor();
  }
});
