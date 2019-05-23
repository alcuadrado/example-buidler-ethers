import { ethers } from "@nomiclabs/buidler";

const GREETING = "Hi";

async function main() {
  const signers = await ethers.signers();
  console.log("Deploying Greeter from account", await signers[0].getAddress());

  console.log("Deploying Greeter with greeting", GREETING);
  const Greeter = await ethers.getContract("Greeter");
  const greeter = await Greeter.deploy(GREETING);

  console.log("Deployed Greeter to address", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
