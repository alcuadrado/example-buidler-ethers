import { ethers } from "@nomiclabs/buidler";
import { assert } from "chai";

describe("Greeter contract", function() {
  it("Should shoud be deployable with different greetings", async function() {
    const Greeter = await ethers.getContract("Greeter");
    const greeter1 = await Greeter.deploy("Hi");
    assert.equal(await greeter1.functions.greeting(), "Hi");

    const greeter2 = await Greeter.deploy("Hola");
    assert.equal(await greeter2.functions.greeting(), "Hola");
  });

  it("Should return the greeting when greet is called", async function () {
    const Greeter = await ethers.getContract("Greeter");
    const greeter1 = await Greeter.deploy("Hi");

    assert.equal(await greeter1.functions.greet(), "Hi");
  })
});
