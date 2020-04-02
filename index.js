const fetch2 = require("./index2.js");
const fetch3 = require("./index3.js");

if (process.argv[2] === "rgb") {
  console.log(
    fetch2.rgbToHex(
      parseInt(process.argv[3]),
      parseInt(process.argv[4]),
      parseInt(process.argv[5])
    )
  );

  console.log(
    fetch2.rgbToHsl(
      parseInt(process.argv[3]),
      parseInt(process.argv[4]),
      parseInt(process.argv[5])
    )
  );
} else if (process.argv[2] === "hex") {
  console.log(fetch3.hexToRgb(process.argv[3]));

  console.log(
    fetch2.rgbToHsl(
      fetch3.hexToRgb(process.argv[3]).r,
      fetch3.hexToRgb(process.argv[3]).g,
      fetch3.hexToRgb(process.argv[3]).b
    )
  );
}
