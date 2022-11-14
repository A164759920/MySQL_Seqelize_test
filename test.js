const  region  = require("./model/regions");
(async function () {
  const test = await region.create({
    region_id: "5",
    region_name: "Africa",
  });
  console.log("结果", test);
})();
