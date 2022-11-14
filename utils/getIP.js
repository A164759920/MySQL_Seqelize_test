const os = require("os");

/**
 * @return {Array} the ipv4 address Array
 */
const getIPAddress = function () {
  var ifaces = os.networkInterfaces();
  var ip = [];
  for (var dev in ifaces) {
    ifaces[dev].forEach((details) => {
      if (
        details.family === "IPv4" &&
        !details.internal &&
        details.netmask === "255.255.255.0"
      ) {
        ip.push(details.address);
      }
    });
  }
  return ip || false;
};

module.exports = {
  getIPAddress,
};
