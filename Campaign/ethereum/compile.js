const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
console.log('buildpath', buildPath)
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
console.log('CampaignPath', campaignPath)
const source = fs.readFileSync(campaignPath, "utf8");
console.log('source', source)
const output = solc.compile(source, 1).contracts;
console.log('output', output)
fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
	path.resolve(buildPath, contract.replace(":", "") + ".json"),
	output[contract]
  );
}
