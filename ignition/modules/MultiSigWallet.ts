import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MicjohnModule = buildModule("MicjohnModule", (m) => {

    const multisig = m.contract("MultiSigWallet");

    return { multisig };
});

export default MicjohnModule;