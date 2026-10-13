// PERLY site config. mode "demo" = placeholder data, checks show "Simulated".
// Switch to "live" only after every value below is replaced with real launch data.
export const siteConfig = {
  mode: "demo" as "demo" | "live",

  brand: {
    name: "PERLY",
    ticker: "$PERLY",
    tagline: "The shell never opens.",
  },

  links: {
    x: "https://x.com/perlyshell",            // placeholder handle
    github: "https://github.com/YOUR_ORG/perly-shell", // placeholder repo
    pumpfun: "https://pump.fun/coin/",         // + token.mint
    solscan: "https://solscan.io/token/",      // + token.mint
    dexscreener: "https://dexscreener.com/solana/", // + token.mint
    birdeye: "https://birdeye.so/token/",      // + token.mint + "?chain=solana"
  },

  solana: {
    cluster: "mainnet-beta",
    rpcUrl: "https://api.mainnet-beta.solana.com", // swap for your own RPC before launch
    shellWallet: "CDyMh9khQFom1HMzJVTXatrvburibno6ZoCKQAfZB61f", // DEMO
  },

  token: {
    mint: "Fhfjb38ULErpEY7DvnZNQ1i11qPwj4EE4Myq39rwpump", // DEMO
    launchSignature:
      "3Pr8NtV9KydhWCnDkMq2aKXrqgqctbveETRsMoL5tU9WqTTrJzhiqs5vYW5EkpXGB4fCtBbgBcT8xjp5Ph4gVjTF", // DEMO
    decimals: 6,
    totalSupply: 1_000_000_000,
    feeRule: "[Your rule, e.g. 100% of creator fees bought back and burned every 24h]",
  },

  phala: {
    appId: "977ae29e78de0a4188c2a71f93d1a6e7495f0d0c", // DEMO
    // Real pattern: https://<appId>-<port>.<gateway-domain>; copy the exact URL from your Phala Cloud dashboard.
    enclaveUrl: "https://977ae29e78de0a4188c2a71f93d1a6e7495f0d0c-8080.dstack-demo.phala.network", // DEMO
    attestationPath: "/attestation",
    verifierUrl: "https://cloud-api.phala.com/api/v1/attestations/verify", // real Phala endpoint
    explorerUrl: "https://proof.t16z.com",
  },

  lock: {
    chainName: "Base",
    chainId: 8453,
    rpcUrl: "https://mainnet.base.org",
    appRegistry: "0x977ae29e78de0a4188c2a71f93d1a6e7495f0d0c", // DEMO (app contract = 0x + appId)
    kmsAuth: "0x533a675a61ade5146dbdf3f5df566f634671b3a5",     // DEMO
    adminAddress: "0x36f44d092f2720a5a3985c378296925bf0a53398", // DEMO
    explorer: "https://basescan.org",
  },

  releaseJsonPath: "/release.json",
} as const;
