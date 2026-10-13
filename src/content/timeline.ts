export const timeline = [
{year:'2026',title:'An oyster launches a token',copy:"PERLY's wallet is created inside an Intel TDX enclave on Phala Cloud, and the enclave launches $PERLY on pump.fun itself.",demo:true},
{year:'2025',title:'The honest card',copy:"Researchers showed physical memory-bus attacks against TDX and AMD SEV-SNP servers. Enclaves raise the cost of theft; they don't make it impossible.",warning:true},
{year:'2025',title:'dstack goes mainstream',copy:"Phala's open-source dstack lets ordinary Docker apps run inside TDX, with keys governed by on-chain contracts."},
{year:'2024',title:'BuilderNet',copy:"Flashbots and partners start building Ethereum blocks inside TEEs, so builders can't peek at or reorder users' transactions."},
{year:'2024',title:'The agent nobody can own',copy:'An experiment gives an AI agent its own accounts inside a TEE, with credentials no human can take back.'},
{year:'2023',title:'Whole machines in a shell',copy:'Intel TDX ships, turning entire virtual machines into enclaves instead of small code islands.'},
{year:'2022',title:'The crack in the shell',copy:"Researchers extract Secret Network's master secret through SGX flaws. The industry learns to plan for broken enclaves.",warning:true},
{year:'2017',title:'Your contacts, unseen',copy:"Signal uses SGX so its servers can match your contacts without learning who they are."},
{year:'2015',title:'The first sealed rooms',copy:"Intel SGX arrives in consumer CPUs: small, encrypted areas of memory the rest of the computer can't read."}
].map(entry=>({...entry,sourceUrl:''}));
