# Example Buidler project with [ethers.js](https://github.com/ethers-io/ethers.js) and TypeScript

This is a sample project using ethers.js and TypeScript.

# Ethers.js support

This project uses [@nomiclabs/buidler-ethers](https://www.npmjs.com/package/@nomiclabs/buidler-ethers). 
This Buidler plugin extends the [Buidler Runtime Environment](https://buidler.dev/documentation/#buidler-runtime-environment-bre) 
with an `ethers` field that has this interface:

```ts
ethers: {
  provider: JsonRpcProvider;
  getContract: (name: string) => Promise<ContractFactory>;
  signers: () => Promise<Signer[]>;
}
```

# TypeScript support

To enable TypeScript support, this projects has `typescript` and `ts-node` as 
dependencies.

A `tsconfig.json` is provided, which has everything needed for TS to work with 
the Buidler Runtime Envinronment's extensions.

## `ts-node` limitations

As of version `8`, `ts-node` doesn't cache compilation artifacts, so this 
project uses a Javascript `buidler.config.js`. This file can be written in
TypeScript, but that triggers compilation in simple commands.

Another limitation in the new `ts-node` version, is that it ignores 
`tsconfig.json`'s `files` entry by default. Running Buidler tests and scripts
with Buidler's CLI (e.g. `npx buidler test`) works around this automatically.
To run them without the CLI, you should define `TS_NODE_FILES` env variable as 
`"true"`, or use `@nomiclabs/buidler/register` (e.g. 
`node -r @nomiclabs/buidler/register scripts/deploy.ts`).