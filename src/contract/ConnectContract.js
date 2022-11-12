import { useContract, useContractWrite, useContractRead, usePrepareContractWrite } from 'wagmi'
import ensRegistryABI from './contract.json';

export function ConnectContract() {
    const contract = useContract({
        address: '0x78B00672D1A95330AfB2d33454F34944b38aFE8d',
        abi: ensRegistryABI,
    })
    return contract
}
export function ConnectContract2() {
    const contract2 = usePrepareContractWrite({
        address: '0x36F72F98D14271d2f53eBcFAD960621e07750ae6',
        abi: ensRegistryABI,
        functionName: 'transferPlayer',
    })
    console.log(contract2);
    return contract2
}

