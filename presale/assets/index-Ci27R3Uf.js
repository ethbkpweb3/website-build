import {
    a4 as e,
    Q as t,
    D as a,
    R as r,
    V as s,
    a7 as l,
    a as n,
    Z as c,
    i as o,
    I as i,
    X as p,
    a6 as d,
    a9 as m,
    K as u,
    F as b,
    o as h,
    J as k,
    z as x,
    a5 as y
} from "./number-C9q0Hn1e.js";
import {
    eU as f,
    a9 as E,
    eL as C,
    eB as w,
    eJ as v,
    eK as U,
    eA as g,
    f7 as S
} from "./index-CQfCy4Xm.js";
import "./sha256-o0pdH_sn.js";
const A = e({
        id: 787,
        name: "Acala",
        network: "acala",
        nativeCurrency: {
            name: "Acala",
            symbol: "ACA",
            decimals: 18
        },
        rpcUrls: {
            public: {
                http: ["https://eth-rpc-acala.aca-api.network"],
                webSocket: ["wss://eth-rpc-acala.aca-api.network"]
            },
            default: {
                http: ["https://eth-rpc-acala.aca-api.network"],
                webSocket: ["wss://eth-rpc-acala.aca-api.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "Acala Blockscout",
                url: "https://blockscout.acala.network",
                apiUrl: "https://blockscout.acala.network/api"
            }
        },
        testnet: !1
    }),
    T = {
        block: t({
            format(e) {
                var t;
                return {
                    transactions: null == (t = e.transactions) ? void 0 : t.map((e => {
                        if ("string" == typeof e) return e;
                        const t = a(e);
                        return "0x7e" === t.typeHex && (t.isSystemTx = e.isSystemTx, t.mint = e.mint ? f(e.mint) : void 0, t.sourceHash = e.sourceHash, t.type = "deposit"), t
                    })),
                    stateRoot: e.stateRoot
                }
            }
        }),
        transaction: r({
            format(e) {
                const t = {};
                return "0x7e" === e.type && (t.isSystemTx = e.isSystemTx, t.mint = e.mint ? f(e.mint) : void 0, t.sourceHash = e.sourceHash, t.type = "deposit"), t
            }
        }),
        transactionReceipt: s({
            format: e => ({
                l1GasPrice: e.l1GasPrice ? f(e.l1GasPrice) : null,
                l1GasUsed: e.l1GasUsed ? f(e.l1GasUsed) : null,
                l1Fee: e.l1Fee ? f(e.l1Fee) : null,
                l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null
            })
        })
    };
const B = {
        contracts: {
            gasPriceOracle: {
                address: "0x420000000000000000000000000000000000000F"
            },
            l1Block: {
                address: "0x4200000000000000000000000000000000000015"
            },
            l2CrossDomainMessenger: {
                address: "0x4200000000000000000000000000000000000007"
            },
            l2Erc721Bridge: {
                address: "0x4200000000000000000000000000000000000014"
            },
            l2StandardBridge: {
                address: "0x4200000000000000000000000000000000000010"
            },
            l2ToL1MessagePasser: {
                address: "0x4200000000000000000000000000000000000016"
            }
        },
        formatters: T,
        serializers: {
            transaction: function(e, t) {
                return function(e) {
                    return "deposit" === e.type || void 0 !== e.sourceHash
                }(e) ? function(e) {
                    ! function(e) {
                        const {
                            from: t,
                            to: a
                        } = e;
                        if (t && !o(t)) throw new i({
                            address: t
                        });
                        if (a && !o(a)) throw new i({
                            address: a
                        })
                    }(e);
                    const {
                        sourceHash: t,
                        data: a,
                        from: r,
                        gas: s,
                        isSystemTx: l,
                        mint: p,
                        to: d,
                        value: m
                    } = e, u = [t, r, d ? ? "0x", p ? E(p) : "0x", m ? E(m) : "0x", s ? E(s) : "0x", l ? "0x1" : "0x", a ? ? "0x"];
                    return n(["0x7e", c(u)])
                }(e) : l(e, t)
            }
        }
    },
    F = 1,
    M = e({ ...B,
        id: 888888888,
        name: "Ancient8",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.ancient8.gg"]
            }
        },
        blockExplorers: {
            default: {
                name: "Ancient8 explorer",
                url: "https://scan.ancient8.gg",
                apiUrl: "https://scan.ancient8.gg/api"
            }
        },
        contracts: { ...B.contracts,
            l2OutputOracle: {
                [F]: {
                    address: "0xB09DC08428C8b4EFB4ff9C0827386CDF34277996"
                }
            },
            portal: {
                [F]: {
                    address: "0x639F2AECE398Aa76b07e59eF6abe2cFe32bacb68",
                    blockCreated: 19070571
                }
            },
            l1StandardBridge: {
                [F]: {
                    address: "0xd5e3eDf5b68135D559D572E26bF863FBC1950033",
                    blockCreated: 19070571
                }
            }
        },
        sourceId: 1
    }),
    D = 11155111,
    z = e({ ...B,
        id: 28122024,
        name: "Ancient8 Testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpcv2-testnet.ancient8.gg"]
            }
        },
        blockExplorers: {
            default: {
                name: "Ancient8 Celestia Testnet explorer",
                url: "https://scanv2-testnet.ancient8.gg",
                apiUrl: "https://scanv2-testnet.ancient8.gg/api"
            }
        },
        contracts: { ...B.contracts,
            l2OutputOracle: {
                [D]: {
                    address: "0x942fD5017c0F60575930D8574Eaca13BEcD6e1bB"
                }
            },
            portal: {
                [D]: {
                    address: "0xfa1d9E26A6aCD7b22115D27572c1221B9803c960",
                    blockCreated: 4972908
                }
            },
            l1StandardBridge: {
                [D]: {
                    address: "0xF6Bc0146d3c74D48306e79Ae134A260E418C9335",
                    blockCreated: 4972908
                }
            }
        },
        sourceId: D
    }),
    L = e({
        id: 31337,
        name: "Anvil",
        nativeCurrency: {
            decimals: 18,
            name: "Ether",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["http://127.0.0.1:8545"],
                webSocket: ["ws://127.0.0.1:8545"]
            }
        }
    }),
    H = e({
        id: 3993,
        name: "APEX Testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc-testnet.apexlayer.xyz"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://exp-testnet.apexlayer.xyz",
                apiUrl: "https://exp-testnet.apexlayer.xyz/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xf7642be33a6b18D16a995657adb5a68CD0438aE2",
                blockCreated: 283775
            }
        },
        testnet: !0
    }),
    O = e({
        id: 42161,
        name: "Arbitrum One",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://arb1.arbitrum.io/rpc"]
            }
        },
        blockExplorers: {
            default: {
                name: "Arbiscan",
                url: "https://arbiscan.io",
                apiUrl: "https://api.arbiscan.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 7654707
            }
        }
    }),
    I = e({
        id: 421613,
        name: "Arbitrum Goerli",
        nativeCurrency: {
            name: "Arbitrum Goerli Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://goerli-rollup.arbitrum.io/rpc"]
            }
        },
        blockExplorers: {
            default: {
                name: "Arbiscan",
                url: "https://goerli.arbiscan.io"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 88114
            }
        },
        testnet: !0
    }),
    P = e({
        id: 42170,
        name: "Arbitrum Nova",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://nova.arbitrum.io/rpc"]
            }
        },
        blockExplorers: {
            default: {
                name: "Arbiscan",
                url: "https://nova.arbiscan.io",
                apiUrl: "https://api-nova.arbiscan.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 1746963
            }
        }
    }),
    N = e({
        id: 592,
        name: "Astar",
        network: "astar-mainnet",
        nativeCurrency: {
            name: "Astar",
            symbol: "ASTR",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://astar.api.onfinality.io/public"]
            }
        },
        blockExplorers: {
            default: {
                name: "Astar Subscan",
                url: "https://astar.subscan.io"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 761794
            }
        },
        testnet: !1
    }),
    R = e({
        id: 3776,
        name: "Astar zkEVM",
        network: "AstarZkEVM",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.startale.com/astar-zkevm"]
            }
        },
        blockExplorers: {
            default: {
                name: "Astar zkEVM Explorer",
                url: "https://astar-zkevm.explorer.startale.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 93528
            }
        },
        testnet: !1
    }),
    K = e({
        id: 6038361,
        name: "Astar zkEVM Testnet zKyoto",
        network: "zKyoto",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.startale.com/zkyoto"]
            }
        },
        blockExplorers: {
            default: {
                name: "zKyoto Explorer",
                url: "https://zkyoto.explorer.startale.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 196153
            }
        },
        testnet: !0
    }),
    G = e({
        id: 421614,
        name: "Arbitrum Sepolia",
        nativeCurrency: {
            name: "Arbitrum Sepolia Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://sepolia-rollup.arbitrum.io/rpc"]
            }
        },
        blockExplorers: {
            default: {
                name: "Arbiscan",
                url: "https://sepolia.arbiscan.io",
                apiUrl: "https://api-sepolia.arbiscan.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 81930
            }
        },
        testnet: !0
    }),
    V = e({
        id: 463,
        name: "Areon Network",
        nativeCurrency: {
            decimals: 18,
            name: "AREA",
            symbol: "AREA"
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet-rpc.areon.network"],
                webSocket: ["wss://mainnet-ws.areon.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "Areonscan",
                url: "https://areonscan.com"
            }
        },
        testnet: !1
    }),
    X = e({
        id: 462,
        name: "Areon Network Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "TAREA",
            symbol: "TAREA"
        },
        rpcUrls: {
            default: {
                http: ["https://testnet-rpc.areon.network"],
                webSocket: ["wss://testnet-ws.areon.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "Areonscan",
                url: "https://areonscan.com"
            }
        },
        testnet: !0
    }),
    j = e({
        id: 1313161554,
        name: "Aurora",
        nativeCurrency: {
            decimals: 18,
            name: "Ether",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.aurora.dev"]
            }
        },
        blockExplorers: {
            default: {
                name: "Aurorascan",
                url: "https://aurorascan.dev",
                apiUrl: "https://aurorascan.dev/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 62907816
            }
        }
    }),
    q = e({
        id: 1313161555,
        name: "Aurora Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "Ether",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://testnet.aurora.dev"]
            }
        },
        blockExplorers: {
            default: {
                name: "Aurorascan",
                url: "https://testnet.aurorascan.dev",
                apiUrl: "https://testnet.aurorascan.dev/api"
            }
        },
        testnet: !0
    }),
    Z = e({
        id: 205205,
        name: "Auroria Testnet",
        network: "auroria",
        nativeCurrency: {
            name: "Auroria Stratis",
            symbol: "tSTRAX",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://auroria.rpc.stratisevm.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Auroria Testnet Explorer",
                url: "https://auroria.explorer.stratisevm.com"
            }
        },
        testnet: !0
    }),
    W = e({
        id: 43114,
        name: "Avalanche",
        nativeCurrency: {
            decimals: 18,
            name: "Avalanche",
            symbol: "AVAX"
        },
        rpcUrls: {
            default: {
                http: ["https://api.avax.network/ext/bc/C/rpc"]
            }
        },
        blockExplorers: {
            default: {
                name: "SnowScan",
                url: "https://snowscan.xyz",
                apiUrl: "https://api.snowscan.xyz/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 11907934
            }
        }
    }),
    Q = e({
        id: 43113,
        name: "Avalanche Fuji",
        nativeCurrency: {
            decimals: 18,
            name: "Avalanche Fuji",
            symbol: "AVAX"
        },
        rpcUrls: {
            default: {
                http: ["https://api.avax-test.network/ext/bc/C/rpc"]
            }
        },
        blockExplorers: {
            default: {
                name: "SnowScan",
                url: "https://testnet.snowscan.xyz",
                apiUrl: "https://api-testnet.snowscan.xyz"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 7096959
            }
        },
        testnet: !0
    }),
    J = e({
        id: 5165,
        network: "bahamut",
        name: "Bahamut",
        nativeCurrency: {
            name: "Fasttoken",
            symbol: "FTN",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc1.bahamut.io", "https://bahamut-rpc.publicnode.com", "https://rpc2.bahamut.io"],
                webSocket: ["wss://ws1.sahara.bahamutchain.com", "wss://bahamut-rpc.publicnode.com", "wss://ws2.sahara.bahamutchain.com"]
            },
            public: {
                http: ["https://rpc1.bahamut.io", "https://bahamut-rpc.publicnode.com", "https://rpc2.bahamut.io"],
                webSocket: ["wss://ws1.sahara.bahamutchain.com", "wss://bahamut-rpc.publicnode.com", "wss://ws2.sahara.bahamutchain.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Ftnscan",
                url: "https://www.ftnscan.com",
                apiUrl: "https://www.ftnscan.com/api"
            }
        }
    }),
    Y = 1,
    $ = e({ ...B,
        id: 8453,
        name: "Base",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.base.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Basescan",
                url: "https://basescan.org",
                apiUrl: "https://api.basescan.org/api"
            }
        },
        contracts: { ...B.contracts,
            l2OutputOracle: {
                [Y]: {
                    address: "0x56315b90c40730925ec5485cf004d835058518A0"
                }
            },
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 5022
            },
            portal: {
                [Y]: {
                    address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
                    blockCreated: 17482143
                }
            },
            l1StandardBridge: {
                [Y]: {
                    address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
                    blockCreated: 17482143
                }
            }
        },
        sourceId: 1
    }),
    _ = 5,
    ee = e({ ...B,
        id: 84531,
        name: "Base Goerli",
        nativeCurrency: {
            name: "Goerli Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://goerli.base.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Basescan",
                url: "https://goerli.basescan.org",
                apiUrl: "https://goerli.basescan.org/api"
            }
        },
        contracts: { ...B.contracts,
            l2OutputOracle: {
                [_]: {
                    address: "0x2A35891ff30313CcFa6CE88dcf3858bb075A2298"
                }
            },
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 1376988
            },
            portal: {
                [_]: {
                    address: "0xe93c8cD0D409341205A592f8c4Ac1A5fe5585cfA"
                }
            },
            l1StandardBridge: {
                [_]: {
                    address: "0xfA6D8Ee5BE770F84FC001D098C4bD604Fe01284a"
                }
            }
        },
        testnet: !0,
        sourceId: 5
    }),
    te = 11155111,
    ae = e({ ...B,
        id: 84532,
        network: "base-sepolia",
        name: "Base Sepolia",
        nativeCurrency: {
            name: "Sepolia Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://sepolia.base.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Basescan",
                url: "https://sepolia.basescan.org",
                apiUrl: "https://api-sepolia.basescan.org/api"
            }
        },
        contracts: { ...B.contracts,
            l2OutputOracle: {
                [te]: {
                    address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254"
                }
            },
            portal: {
                [te]: {
                    address: "0x49f53e41452c74589e85ca1677426ba426459e85",
                    blockCreated: 4446677
                }
            },
            l1StandardBridge: {
                [te]: {
                    address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120",
                    blockCreated: 4446677
                }
            },
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 1059647
            }
        },
        testnet: !0,
        sourceId: te
    }),
    re = e({
        id: 4337,
        name: "Beam",
        network: "beam",
        nativeCurrency: {
            decimals: 18,
            name: "Beam",
            symbol: "BEAM"
        },
        rpcUrls: {
            public: {
                http: ["https://build.onbeam.com/rpc"],
                webSocket: ["wss://build.onbeam.com/ws"]
            },
            default: {
                http: ["https://build.onbeam.com/rpc"],
                webSocket: ["wss://build.onbeam.com/ws"]
            }
        },
        blockExplorers: {
            default: {
                name: "Beam Explorer",
                url: "https://subnets.avax.network/beam"
            }
        },
        contracts: {
            multicall3: {
                address: "0x4956f15efdc3dc16645e90cc356eafa65ffc65ec",
                blockCreated: 1
            }
        }
    }),
    se = e({
        id: 13337,
        name: "Beam Testnet",
        network: "beam",
        nativeCurrency: {
            decimals: 18,
            name: "Beam",
            symbol: "BEAM"
        },
        rpcUrls: {
            public: {
                http: ["https://build.onbeam.com/rpc/testnet"],
                webSocket: ["wss://build.onbeam.com/ws/testnet"]
            },
            default: {
                http: ["https://build.onbeam.com/rpc/testnet"],
                webSocket: ["wss://build.onbeam.com/ws/testnet"]
            }
        },
        blockExplorers: {
            default: {
                name: "Beam Explorer",
                url: "https://subnets-test.avax.network/beam"
            }
        },
        contracts: {
            multicall3: {
                address: "0x9bf49b704ee2a095b95c1f2d4eb9010510c41c9e",
                blockCreated: 3
            }
        },
        testnet: !0
    }),
    le = e({
        id: 641230,
        name: "Bear Network Chain Mainnet",
        nativeCurrency: {
            decimals: 18,
            name: "BearNetworkChain",
            symbol: "BRNKC"
        },
        rpcUrls: {
            default: {
                http: ["https://brnkc-mainnet.bearnetwork.net"]
            }
        },
        blockExplorers: {
            default: {
                name: "BrnkScan",
                url: "https://brnkscan.bearnetwork.net",
                apiUrl: "https://brnkscan.bearnetwork.net/api"
            }
        }
    }),
    ne = e({
        id: 751230,
        name: "Bear Network Chain Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "tBRNKC",
            symbol: "tBRNKC"
        },
        rpcUrls: {
            default: {
                http: ["https://brnkc-test.bearnetwork.net"]
            }
        },
        blockExplorers: {
            default: {
                name: "BrnkTestScan",
                url: "https://brnktest-scan.bearnetwork.net",
                apiUrl: "https://brnktest-scan.bearnetwork.net/api"
            }
        },
        testnet: !0
    }),
    ce = e({
        id: 80085,
        name: "Berachain Artio",
        nativeCurrency: {
            decimals: 18,
            name: "BERA Token",
            symbol: "BERA"
        },
        rpcUrls: {
            default: {
                http: ["https://artio.rpc.berachain.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Berachain",
                url: "https://artio.beratrail.io"
            }
        },
        testnet: !0
    }),
    oe = e({
        id: 11501,
        name: "BEVM Mainnet",
        nativeCurrency: {
            name: "Bitcoin",
            symbol: "BTC",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc-mainnet-1.bevm.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Bevmscan",
                url: "https://scan-mainnet.bevm.io",
                apiUrl: "https://scan-mainnet-api.bevm.io/api"
            }
        }
    }),
    ie = e({
        id: 199,
        name: "BitTorrent",
        network: "bittorrent-chain-mainnet",
        nativeCurrency: {
            name: "BitTorrent",
            symbol: "BTT",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.bittorrentchain.io"]
            },
            public: {
                http: ["https://rpc.bittorrentchain.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Bttcscan",
                url: "https://bttcscan.com",
                apiUrl: "https://api.bttcscan.com/api"
            }
        }
    }),
    pe = e({
        id: 1028,
        name: "BitTorrent Chain Testnet",
        network: "bittorrent-chain-testnet",
        nativeCurrency: {
            name: "BitTorrent",
            symbol: "BTT",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://testrpc.bittorrentchain.io"]
            },
            public: {
                http: ["https://testrpc.bittorrentchain.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Bttcscan",
                url: "https://testnet.bttcscan.com",
                apiUrl: "https://testnet.bttcscan.com/api"
            }
        },
        testnet: !0
    }),
    de = e({
        id: 81457,
        name: "Blast",
        nativeCurrency: {
            decimals: 18,
            name: "Ether",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.blast.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blastscan",
                url: "https://blastscan.io",
                apiUrl: "https://api.blastscan.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 212929
            }
        },
        sourceId: 1
    }),
    me = e({
        id: 168587773,
        name: "Blast Sepolia",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://sepolia.blast.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blastscan",
                url: "https://sepolia.blastscan.io",
                apiUrl: "https://api-sepolia.blastscan.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 756690
            }
        },
        testnet: !0,
        sourceId: 11155111
    }),
    ue = e({
        id: 60808,
        name: "BOB",
        nativeCurrency: {
            decimals: 18,
            name: "ETH",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.gobob.xyz"],
                webSocket: ["wss://rpc.gobob.xyz"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://explorer.gobob.xyz"
            }
        },
        contracts: {
            multicall3: {
                address: "0x63f8279bccDb75c0F38e0CD6B6A0c72a0a760FF9",
                blockCreated: 457045
            }
        },
        testnet: !1
    }),
    be = e({
        id: 288,
        name: "Boba Network",
        nativeCurrency: {
            decimals: 18,
            name: "Ether",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.boba.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "BOBAScan",
                url: "https://bobascan.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 446859
            }
        }
    }),
    he = e({
        id: 1039,
        name: "Bronos",
        nativeCurrency: {
            decimals: 18,
            name: "BRO",
            symbol: "BRO"
        },
        rpcUrls: {
            default: {
                http: ["https://evm.bronos.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "BronoScan",
                url: "https://broscan.bronos.org"
            }
        }
    }),
    ke = e({
        id: 1038,
        name: "Bronos Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "Bronos Coin",
            symbol: "tBRO"
        },
        rpcUrls: {
            default: {
                http: ["https://evm-testnet.bronos.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "BronoScan",
                url: "https://tbroscan.bronos.org"
            }
        },
        testnet: !0
    }),
    xe = e({
        id: 56,
        name: "BNB Smart Chain",
        nativeCurrency: {
            decimals: 18,
            name: "BNB",
            symbol: "BNB"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.ankr.com/bsc"]
            }
        },
        blockExplorers: {
            default: {
                name: "BscScan",
                url: "https://bscscan.com",
                apiUrl: "https://api.bscscan.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 15921452
            }
        }
    }),
    ye = e({
        id: 97,
        name: "Binance Smart Chain Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "BNB",
            symbol: "tBNB"
        },
        rpcUrls: {
            default: {
                http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]
            }
        },
        blockExplorers: {
            default: {
                name: "BscScan",
                url: "https://testnet.bscscan.com",
                apiUrl: "https://testnet.bscscan.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 17422483
            }
        },
        testnet: !0
    }),
    fe = e({
        id: 1017,
        name: "BNB Greenfield Chain",
        nativeCurrency: {
            decimals: 18,
            name: "BNB",
            symbol: "BNB"
        },
        rpcUrls: {
            default: {
                http: ["https://greenfield-chain.bnbchain.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "BNB Greenfield Mainnet Scan",
                url: "https://greenfieldscan.com"
            }
        },
        testnet: !1
    }),
    Ee = e({
        id: 200901,
        name: "Bitlayer",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.bitlayer.org", "https://rpc.bitlayer-rpc.com", "https://rpc.ankr.com/bitlayer"],
                webSocket: ["wss://ws.bitlayer.org", "wss://ws.bitlayer-rpc.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "btrscan",
                url: "https://www.btrscan.com",
                apiUrl: "https://www.btrscan.com/apis"
            }
        }
    }),
    Ce = e({
        id: 200810,
        name: "Bitlayer Testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://testnet-rpc.bitlayer.org"],
                webSocket: ["wss://testnet-ws.bitlayer.org", "wss://testnet-ws.bitlayer-rpc.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "btrscan",
                url: "https://testnet-scan.bitlayer.org",
                apiUrl: "https://testnet-scan.bitlayer.org/apis"
            }
        }
    }),
    we = e({
        id: 4999,
        name: "BlackFort Exchange Network",
        nativeCurrency: {
            name: "BlackFort Token",
            symbol: "BXN",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.blackfort.network/rpc"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://explorer.blackfort.network",
                apiUrl: "https://explorer.blackfort.network/api"
            }
        }
    }),
    ve = e({
        id: 4777,
        name: "BlackFort Exchange Network Testnet",
        nativeCurrency: {
            name: "BlackFort Testnet Token",
            symbol: "TBXN",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://testnet.blackfort.network/rpc"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://testnet-explorer.blackfort.network",
                apiUrl: "https://testnet-explorer.blackfort.network/api"
            }
        },
        testnet: !0
    }),
    Ue = e({
        id: 7700,
        name: "Canto",
        nativeCurrency: {
            decimals: 18,
            name: "Canto",
            symbol: "CANTO"
        },
        rpcUrls: {
            default: {
                http: ["https://canto.gravitychain.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Tuber.Build (Blockscout)",
                url: "https://tuber.build"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 2905789
            }
        }
    }),
    ge = {
        estimateFeesPerGas: async e => {
            var t;
            if (!(null == (t = e.request) ? void 0 : t.feeCurrency)) return null;
            const [a, r] = await Promise.all([Se(e.client, e.request.feeCurrency), Ae(e.client, e.request.feeCurrency)]);
            return {
                maxFeePerGas: a,
                maxPriorityFeePerGas: r
            }
        }
    };
async function Se(e, t) {
    const a = await e.request({
        method: "eth_gasPrice",
        params: [t]
    });
    return BigInt(a)
}
async function Ae(e, t) {
    const a = await e.request({
        method: "eth_maxPriorityFeePerGas",
        params: [t]
    });
    return BigInt(a)
}

function Te(e) {
    return 0 === e || 0 n === e || null == e || "0" === e || "" === e || "string" == typeof e && ("0x" === C(e).toLowerCase() || "0x00" === C(e).toLowerCase())
}

function Be(e) {
    return !Te(e)
}

function Fe(e) {
    return "cip64" === e.type || function(e) {
        return void 0 !== e.maxFeePerGas && void 0 !== e.maxPriorityFeePerGas
    }(e) && Be(e.feeCurrency)
}
const Me = {
    transaction: function(e, t) {
        return Fe(e) ? function(e, t) {
            ! function(e) {
                const {
                    chainId: t,
                    maxPriorityFeePerGas: a,
                    gasPrice: r,
                    maxFeePerGas: s,
                    to: l,
                    feeCurrency: n
                } = e;
                if (t <= 0) throw new u({
                    chainId: t
                });
                if (l && !o(l)) throw new i({
                    address: l
                });
                if (r) throw new w("`gasPrice` is not a valid CIP-64 Transaction attribute.");
                if (Be(s) && s > De) throw new b({
                    maxFeePerGas: s
                });
                if (Be(a) && Be(s) && a > s) throw new h({
                    maxFeePerGas: s,
                    maxPriorityFeePerGas: a
                });
                if (Be(n) && !o(n)) throw new w("`feeCurrency` MUST be a token address for CIP-64 transactions.");
                if (Te(n)) throw new w("`feeCurrency` must be provided for CIP-64 transactions.")
            }(e);
            const {
                chainId: a,
                gas: r,
                nonce: s,
                to: l,
                value: p,
                maxFeePerGas: k,
                maxPriorityFeePerGas: x,
                accessList: y,
                feeCurrency: f,
                data: C
            } = e, v = [E(a), s ? E(s) : "0x", x ? E(x) : "0x", k ? E(k) : "0x", r ? E(r) : "0x", l ? ? "0x", p ? E(p) : "0x", C ? ? "0x", d(y), f, ...m(e, t)];
            return n(["0x7b", c(v)])
        }(e, t) : l(e, t)
    }
};
const De = 2 n ** 256 n - 1 n;
const ze = {
        formatters: {
            block: t({
                exclude: ["difficulty", "gasLimit", "mixHash", "nonce", "uncles"],
                format(e) {
                    var t;
                    const r = null == (t = e.transactions) ? void 0 : t.map((e => "string" == typeof e ? e : { ...a(e),
                        feeCurrency: e.feeCurrency,
                        ..."0x7b" !== e.type ? {
                            gatewayFee: e.gatewayFee ? f(e.gatewayFee) : null,
                            gatewayFeeRecipient: e.gatewayFeeRecipient || null
                        } : {}
                    }));
                    return {
                        randomness: e.randomness,
                        transactions: r
                    }
                }
            }),
            transaction: r({
                format(e) {
                    const t = {
                        feeCurrency: e.feeCurrency
                    };
                    return "0x7b" === e.type ? t.type = "cip64" : ("0x7c" === e.type && (t.type = "cip42"), t.gatewayFee = e.gatewayFee ? f(e.gatewayFee) : null, t.gatewayFeeRecipient = e.gatewayFeeRecipient), t
                }
            }),
            transactionRequest: p({
                format(e) {
                    const t = {
                        feeCurrency: e.feeCurrency
                    };
                    return Fe(e) && (t.type = "0x7b"), t
                }
            })
        },
        serializers: Me,
        fees: ge
    },
    Le = e({ ...ze,
        id: 42220,
        name: "Celo",
        nativeCurrency: {
            decimals: 18,
            name: "CELO",
            symbol: "CELO"
        },
        rpcUrls: {
            default: {
                http: ["https://forno.celo.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Celo Explorer",
                url: "https://celoscan.io",
                apiUrl: "https://api.celoscan.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 13112599
            }
        },
        testnet: !1
    }),
    He = e({ ...ze,
        id: 44787,
        name: "Alfajores",
        nativeCurrency: {
            decimals: 18,
            name: "CELO",
            symbol: "A-CELO"
        },
        rpcUrls: {
            default: {
                http: ["https://alfajores-forno.celo-testnet.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Celo Explorer",
                url: "https://explorer.celo.org/alfajores",
                apiUrl: "https://explorer.celo.org/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 14569001
            }
        },
        testnet: !0
    }),
    Oe = e({
        id: 88888,
        name: "Chiliz Chain",
        network: "chiliz-chain",
        nativeCurrency: {
            decimals: 18,
            name: "CHZ",
            symbol: "CHZ"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.ankr.com/chiliz", "https://chiliz-rpc.publicnode.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Chiliz Explorer",
                url: "https://scan.chiliz.com",
                apiUrl: "https://scan.chiliz.com/api"
            }
        }
    }),
    Ie = e({
        id: 61,
        name: "Ethereum Classic",
        nativeCurrency: {
            decimals: 18,
            name: "ETC",
            symbol: "ETC"
        },
        rpcUrls: {
            default: {
                http: ["https://etc.rivet.link"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://blockscout.com/etc/mainnet"
            }
        }
    }),
    Pe = e({
        id: 1030,
        name: "Conflux eSpace",
        nativeCurrency: {
            name: "Conflux",
            symbol: "CFX",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://evm.confluxrpc.org"],
                webSocket: ["wss://evm.confluxrpc.org/ws"]
            }
        },
        blockExplorers: {
            default: {
                name: "ConfluxScan",
                url: "https://evm.confluxscan.io"
            }
        },
        contracts: {
            multicall3: {
                address: "0xEFf0078910f638cd81996cc117bccD3eDf2B072F",
                blockCreated: 68602935
            }
        }
    }),
    Ne = e({
        id: 71,
        name: "Conflux eSpace Testnet",
        network: "cfx-espace-testnet",
        testnet: !0,
        nativeCurrency: {
            name: "Conflux",
            symbol: "CFX",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://evmtestnet.confluxrpc.org"],
                webSocket: ["wss://evmtestnet.confluxrpc.org/ws"]
            }
        },
        blockExplorers: {
            default: {
                name: "ConfluxScan",
                url: "https://evmtestnet.confluxscan.io"
            }
        },
        contracts: {
            multicall3: {
                address: "0xEFf0078910f638cd81996cc117bccD3eDf2B072F",
                blockCreated: 117499050
            }
        }
    }),
    Re = e({
        id: 1116,
        name: "Core Dao",
        nativeCurrency: {
            decimals: 18,
            name: "Core",
            symbol: "CORE"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.coredao.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "CoreDao",
                url: "https://scan.coredao.org"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 11907934
            }
        },
        testnet: !1
    }),
    Ke = e({
        id: 25,
        name: "Cronos Mainnet",
        nativeCurrency: {
            decimals: 18,
            name: "Cronos",
            symbol: "CRO"
        },
        rpcUrls: {
            default: {
                http: ["https://evm.cronos.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Cronos Explorer",
                url: "https://explorer.cronos.org",
                apiUrl: "https://explorer-api.cronos.org/mainnet/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 1963112
            }
        }
    }),
    Ge = e({
        id: 338,
        name: "Cronos Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "CRO",
            symbol: "tCRO"
        },
        rpcUrls: {
            default: {
                http: ["https://evm-t3.cronos.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Cronos Explorer",
                url: "https://cronos.org/explorer/testnet3"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 10191251
            }
        },
        testnet: !0
    }),
    Ve = e({
        id: 3737,
        name: "Crossbell",
        nativeCurrency: {
            decimals: 18,
            name: "CSB",
            symbol: "CSB"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.crossbell.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "CrossScan",
                url: "https://scan.crossbell.io",
                apiUrl: "https://scan.crossbell.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 38246031
            }
        }
    }),
    Xe = e({
        id: 7560,
        name: "Cyber",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://cyber.alt.technology"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://cyberscan.co",
                apiUrl: "https://cyberscan.co/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 0
            }
        }
    }),
    je = e({
        id: 111557560,
        name: "Cyber Testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://cyber-testnet.alt.technology"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://testnet.cyberscan.co",
                apiUrl: "https://testnet.cyberscan.co/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xffc391F0018269d4758AEA1a144772E8FB99545E",
                blockCreated: 304545
            }
        },
        testnet: !0
    }),
    qe = e({
        id: 46,
        name: "Darwinia Network",
        nativeCurrency: {
            decimals: 18,
            name: "RING",
            symbol: "RING"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.darwinia.network"],
                webSocket: ["wss://rpc.darwinia.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "Explorer",
                url: "https://darwinia.subscan.io"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 69420
            }
        }
    }),
    Ze = e({
        id: 1130,
        network: "defichain-evm",
        name: "DeFiChain EVM Mainnet",
        nativeCurrency: {
            name: "DeFiChain",
            symbol: "DFI",
            decimals: 8
        },
        rpcUrls: {
            default: {
                http: ["https://eth.mainnet.ocean.jellyfishsdk.com"]
            },
            public: {
                http: ["https://eth.mainnet.ocean.jellyfishsdk.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "DeFiScan",
                url: "https://meta.defiscan.live"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 137852
            }
        }
    }),
    We = e({
        id: 1131,
        network: "defichain-evm-testnet",
        name: "DeFiChain EVM Testnet",
        nativeCurrency: {
            name: "DeFiChain",
            symbol: "DFI",
            decimals: 8
        },
        rpcUrls: {
            default: {
                http: ["https://eth.testnet.ocean.jellyfishsdk.com"]
            },
            public: {
                http: ["https://eth.testnet.ocean.jellyfishsdk.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "DeFiScan",
                url: "https://meta.defiscan.live/?network=TestNet"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 156462
            }
        },
        testnet: !0
    }),
    Qe = e({
        id: 666666666,
        name: "Degen",
        nativeCurrency: {
            decimals: 18,
            name: "Degen",
            symbol: "DEGEN"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.degen.tips"],
                webSocket: ["wss://rpc.degen.tips"]
            }
        },
        blockExplorers: {
            default: {
                name: "Degen Chain Explorer",
                url: "https://explorer.degen.tips",
                apiUrl: "https://explorer.degen.tips/api/v2"
            }
        }
    }),
    Je = e({
        id: 53935,
        name: "DFK Chain",
        nativeCurrency: {
            decimals: 18,
            name: "Jewel",
            symbol: "JEWEL"
        },
        rpcUrls: {
            default: {
                http: ["https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"]
            }
        },
        blockExplorers: {
            default: {
                name: "DFKSubnetScan",
                url: "https://subnets.avax.network/defi-kingdoms"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 14790551
            }
        }
    }),
    Ye = e({
        id: 53457,
        name: "DODOchain Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "DODO",
            symbol: "DODO"
        },
        rpcUrls: {
            default: {
                http: ["https://dodochain-testnet.alt.technology"],
                webSocket: ["wss://dodochain-testnet.alt.technology/ws"]
            }
        },
        blockExplorers: {
            default: {
                name: "DODOchain Testnet (Sepolia) Explorer",
                url: "https://testnet-scan.dodochain.com"
            }
        },
        testnet: !0
    }),
    $e = e({
        id: 2e3,
        name: "Dogechain",
        nativeCurrency: {
            decimals: 18,
            name: "Dogechain",
            symbol: "DC"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.dogechain.dog"]
            }
        },
        blockExplorers: {
            default: {
                name: "DogeChainExplorer",
                url: "https://explorer.dogechain.dog",
                apiUrl: "https://explorer.dogechain.dog/api"
            }
        }
    }),
    _e = e({
        id: 23451,
        name: "DreyerX Mainnet",
        nativeCurrency: {
            name: "DreyerX",
            symbol: "DRX",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.dreyerx.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "DreyerX Scan",
                url: "https://scan.dreyerx.com"
            }
        }
    }),
    et = e({
        id: 2026,
        name: "Edgeless Network",
        nativeCurrency: {
            name: "Edgeless Wrapped ETH",
            symbol: "EwETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.edgeless.network/http"],
                webSocket: ["wss://rpc.edgeless.network/ws"]
            }
        },
        blockExplorers: {
            default: {
                name: "Edgeless Explorer",
                url: "https://explorer.edgeless.network"
            }
        }
    }),
    tt = e({
        id: 202,
        name: "Edgeless Testnet",
        nativeCurrency: {
            name: "Edgeless Wrapped ETH",
            symbol: "EwETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://edgeless-testnet.rpc.caldera.xyz/http"],
                webSocket: ["wss://edgeless-testnet.rpc.caldera.xyz/ws"]
            }
        },
        blockExplorers: {
            default: {
                name: "Edgeless Testnet Explorer",
                url: "https://testnet.explorer.edgeless.network"
            }
        }
    }),
    at = e({
        id: 2021,
        name: "Edgeware EdgeEVM Mainnet",
        nativeCurrency: {
            decimals: 18,
            name: "Edgeware",
            symbol: "EDG"
        },
        rpcUrls: {
            default: {
                http: ["https://edgeware-evm.jelliedowl.net"]
            }
        },
        blockExplorers: {
            default: {
                name: "Edgscan by Bharathcoorg",
                url: "https://edgscan.live",
                apiUrl: "https://edgscan.live/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 18117872
            }
        }
    }),
    rt = e({
        id: 2022,
        name: "Beresheet BereEVM Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "Testnet EDG",
            symbol: "tEDG"
        },
        rpcUrls: {
            default: {
                http: ["https://beresheet-evm.jelliedowl.net"]
            }
        },
        blockExplorers: {
            default: {
                name: "Edgscan by Bharathcoorg",
                url: "https://testnet.edgscan.live",
                apiUrl: "https://testnet.edgscan.live/api"
            }
        }
    }),
    st = e({
        id: 7332,
        name: "Horizen EON",
        nativeCurrency: {
            decimals: 18,
            name: "ZEN",
            symbol: "ZEN"
        },
        rpcUrls: {
            default: {
                http: ["https://eon-rpc.horizenlabs.io/ethv1"]
            }
        },
        blockExplorers: {
            default: {
                name: "EON Explorer",
                url: "https://eon-explorer.horizenlabs.io"
            }
        },
        contracts: {}
    }),
    lt = e({
        id: 17777,
        name: "EOS EVM",
        nativeCurrency: {
            decimals: 18,
            name: "EOS",
            symbol: "EOS"
        },
        rpcUrls: {
            default: {
                http: ["https://api.evm.eosnetwork.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "EOS EVM Explorer",
                url: "https://explorer.evm.eosnetwork.com",
                apiUrl: "https://explorer.evm.eosnetwork.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 7943933
            }
        }
    }),
    nt = e({
        id: 15557,
        name: "EOS EVM Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "EOS",
            symbol: "EOS"
        },
        rpcUrls: {
            default: {
                http: ["https://api.testnet.evm.eosnetwork.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "EOS EVM Testnet Explorer",
                url: "https://explorer.testnet.evm.eosnetwork.com",
                apiUrl: "https://explorer.testnet.evm.eosnetwork.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 9067940
            }
        },
        testnet: !0
    }),
    ct = e({
        id: 128123,
        name: "Etherlink Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "Tez",
            symbol: "XTZ"
        },
        rpcUrls: {
            default: {
                http: ["https://node.ghostnet.etherlink.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Etherlink Testnet",
                url: "https://testnet-explorer.etherlink.com"
            }
        },
        testnet: !0
    }),
    ot = e({
        id: 9001,
        name: "Evmos",
        nativeCurrency: {
            decimals: 18,
            name: "Evmos",
            symbol: "EVMOS"
        },
        rpcUrls: {
            default: {
                http: ["https://eth.bd.evmos.org:8545"]
            }
        },
        blockExplorers: {
            default: {
                name: "Evmos Block Explorer",
                url: "https://escan.live"
            }
        }
    }),
    it = e({
        id: 9e3,
        name: "Evmos Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "Evmos",
            symbol: "EVMOS"
        },
        rpcUrls: {
            default: {
                http: ["https://eth.bd.evmos.dev:8545"]
            }
        },
        blockExplorers: {
            default: {
                name: "Evmos Testnet Block Explorer",
                url: "https://evm.evmos.dev/"
            }
        }
    }),
    pt = e({
        id: 1994,
        name: "Ekta",
        nativeCurrency: {
            decimals: 18,
            name: "EKTA",
            symbol: "EKTA"
        },
        rpcUrls: {
            default: {
                http: ["https://main.ekta.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Ektascan",
                url: "https://ektascan.io",
                apiUrl: "https://ektascan.io/api"
            }
        }
    }),
    dt = e({
        id: 1004,
        name: "Ekta Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "EKTA",
            symbol: "EKTA"
        },
        rpcUrls: {
            default: {
                http: ["https://test.ekta.io:8545"]
            }
        },
        blockExplorers: {
            default: {
                name: "Test Ektascan",
                url: "https://test.ektascan.io",
                apiUrl: "https://test.ektascan.io/api"
            }
        },
        testnet: !0
    }),
    mt = e({
        id: 250,
        name: "Fantom",
        nativeCurrency: {
            decimals: 18,
            name: "Fantom",
            symbol: "FTM"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.ankr.com/fantom"]
            }
        },
        blockExplorers: {
            default: {
                name: "FTMScan",
                url: "https://ftmscan.com",
                apiUrl: "https://api.ftmscan.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 33001987
            }
        }
    }),
    ut = e({
        id: 64240,
        name: "Fantom Sonic Open Testnet",
        network: "fantom-sonic-testnet",
        nativeCurrency: {
            decimals: 18,
            name: "Fantom",
            symbol: "FTM"
        },
        rpcUrls: {
            default: {
                http: ["https://rpcapi.sonic.fantom.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "Fantom Sonic Open Testnet Explorer",
                url: "https://public-sonic.fantom.network"
            }
        },
        testnet: !0
    }),
    bt = e({
        id: 4002,
        name: "Fantom Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "Fantom",
            symbol: "FTM"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.testnet.fantom.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "FTMScan",
                url: "https://testnet.ftmscan.com",
                apiUrl: "https://testnet.ftmscan.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 8328688
            }
        }
    }),
    ht = e({
        id: 12306,
        name: "Fibo Chain",
        nativeCurrency: {
            decimals: 18,
            name: "fibo",
            symbol: "FIBO"
        },
        rpcUrls: {
            default: {
                http: ["https://network.hzroc.art"]
            }
        },
        blockExplorers: {
            default: {
                name: "FiboScan",
                url: "https://scan.fibochain.org"
            }
        }
    }),
    kt = e({
        id: 314,
        name: "Filecoin Mainnet",
        nativeCurrency: {
            decimals: 18,
            name: "filecoin",
            symbol: "FIL"
        },
        rpcUrls: {
            default: {
                http: ["https://api.node.glif.io/rpc/v1"]
            }
        },
        blockExplorers: {
            default: {
                name: "Filfox",
                url: "https://filfox.info/en"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 3328594
            }
        }
    }),
    xt = e({
        id: 314159,
        name: "Filecoin Calibration",
        nativeCurrency: {
            decimals: 18,
            name: "testnet filecoin",
            symbol: "tFIL"
        },
        rpcUrls: {
            default: {
                http: ["https://api.calibration.node.glif.io/rpc/v1"]
            }
        },
        blockExplorers: {
            default: {
                name: "Filscan",
                url: "https://calibration.filscan.io"
            }
        },
        testnet: !0
    }),
    yt = e({
        id: 3141,
        name: "Filecoin Hyperspace",
        nativeCurrency: {
            decimals: 18,
            name: "testnet filecoin",
            symbol: "tFIL"
        },
        rpcUrls: {
            default: {
                http: ["https://api.hyperspace.node.glif.io/rpc/v1"]
            }
        },
        blockExplorers: {
            default: {
                name: "Filfox",
                url: "https://hyperspace.filfox.info/en"
            }
        },
        testnet: !0
    }),
    ft = e({
        id: 14,
        name: "Flare Mainnet",
        nativeCurrency: {
            decimals: 18,
            name: "flare",
            symbol: "FLR"
        },
        rpcUrls: {
            default: {
                http: ["https://flare-api.flare.network/ext/C/rpc"]
            }
        },
        blockExplorers: {
            default: {
                name: "Flare Explorer",
                url: "https://flare-explorer.flare.network",
                apiUrl: "https://flare-explorer.flare.network/api"
            }
        }
    }),
    Et = e({
        id: 114,
        name: "Coston2",
        nativeCurrency: {
            decimals: 18,
            name: "coston2flare",
            symbol: "C2FLR"
        },
        rpcUrls: {
            default: {
                http: ["https://coston2-api.flare.network/ext/C/rpc"]
            }
        },
        blockExplorers: {
            default: {
                name: "Coston2 Explorer",
                url: "https://coston2-explorer.flare.network",
                apiUrl: "https://coston2-explorer.flare.network/api"
            }
        },
        testnet: !0
    }),
    Ct = e({
        id: 646,
        name: "FlowEVM Previewnet",
        nativeCurrency: {
            decimals: 18,
            name: "Flow",
            symbol: "FLOW"
        },
        rpcUrls: {
            default: {
                http: ["https://previewnet.evm.nodes.onflow.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Previewnet Explorer",
                url: "https://previewnet.flowdiver.io"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 6205
            }
        }
    }),
    wt = e({
        id: 747,
        name: "FlowEVM Mainnet",
        nativeCurrency: {
            decimals: 18,
            name: "Flow",
            symbol: "FLOW"
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.evm.nodes.onflow.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Mainnet Explorer",
                url: "https://flowdiver.io"
            }
        }
    }),
    vt = e({
        id: 545,
        name: "FlowEVM Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "Flow",
            symbol: "FLOW"
        },
        rpcUrls: {
            default: {
                http: ["https://testnet.evm.nodes.onflow.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Flow Diver",
                url: "https://testnet.flowdiver.io"
            }
        }
    }),
    Ut = e({
        id: 31337,
        name: "Foundry",
        nativeCurrency: {
            decimals: 18,
            name: "Ether",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["http://127.0.0.1:8545"],
                webSocket: ["ws://127.0.0.1:8545"]
            }
        }
    }),
    gt = 1,
    St = e({ ...B,
        id: 252,
        name: "Fraxtal",
        nativeCurrency: {
            name: "Frax Ether",
            symbol: "frxETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.frax.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "fraxscan",
                url: "https://fraxscan.com",
                apiUrl: "https://api.fraxscan.com/api"
            }
        },
        contracts: { ...B.contracts,
            l2OutputOracle: {
                [gt]: {
                    address: "0x66CC916Ed5C6C2FA97014f7D1cD141528Ae171e4"
                }
            },
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11"
            },
            portal: {
                [gt]: {
                    address: "0x36cb65c1967A0Fb0EEE11569C51C2f2aA1Ca6f6D",
                    blockCreated: 19135323
                }
            },
            l1StandardBridge: {
                [gt]: {
                    address: "0x34C0bD5877A5Ee7099D0f5688D65F4bB9158BDE2",
                    blockCreated: 19135323
                }
            }
        },
        sourceId: 1
    }),
    At = 17e3,
    Tt = e({ ...B,
        id: 2522,
        name: "Fraxtal Testnet",
        nativeCurrency: {
            name: "Frax Ether",
            symbol: "frxETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.testnet.frax.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "fraxscan testnet",
                url: "https://holesky.fraxscan.com",
                apiUrl: "https://api-holesky.fraxscan.com/api"
            }
        },
        contracts: { ...B.contracts,
            l2OutputOracle: {
                [At]: {
                    address: "0x715EA64DA13F4d0831ece4Ad3E8c1aa013167F32"
                }
            },
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11"
            },
            portal: {
                [At]: {
                    address: "0xB9c64BfA498d5b9a8398Ed6f46eb76d90dE5505d",
                    blockCreated: 318416
                }
            },
            l1StandardBridge: {
                [At]: {
                    address: "0x0BaafC217162f64930909aD9f2B27125121d6332",
                    blockCreated: 318416
                }
            }
        },
        sourceId: At
    }),
    Bt = e({ ...B,
        id: 3397901,
        network: "funkiSepolia",
        name: "Funki Sepolia Sandbox",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://funki-testnet.alt.technology"]
            }
        },
        blockExplorers: {
            default: {
                name: "Funki Sepolia Sandbox Explorer",
                url: "https://sepolia-sandbox.funkichain.com/"
            }
        },
        testnet: !0,
        contracts: { ...B.contracts,
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 1620204
            }
        },
        sourceId: 11155111
    }),
    Ft = e({
        id: 122,
        name: "Fuse",
        nativeCurrency: {
            name: "Fuse",
            symbol: "FUSE",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.fuse.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Fuse Explorer",
                url: "https://explorer.fuse.io",
                apiUrl: "https://explorer.fuse.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 16146628
            }
        }
    }),
    Mt = e({
        id: 123,
        name: "Fuse Sparknet",
        nativeCurrency: {
            name: "Spark",
            symbol: "SPARK",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.fusespark.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Sparkent Explorer",
                url: "https://explorer.fusespark.io",
                apiUrl: "https://explorer.fusespark.io/api"
            }
        }
    }),
    Dt = e({
        id: 4689,
        name: "IoTeX",
        nativeCurrency: {
            decimals: 18,
            name: "IoTeX",
            symbol: "IOTX"
        },
        rpcUrls: {
            default: {
                http: ["https://babel-api.mainnet.iotex.io"],
                webSocket: ["wss://babel-api.mainnet.iotex.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "IoTeXScan",
                url: "https://iotexscan.io"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 22163670
            }
        }
    }),
    zt = e({
        id: 4690,
        name: "IoTeX Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "IoTeX",
            symbol: "IOTX"
        },
        rpcUrls: {
            default: {
                http: ["https://babel-api.testnet.iotex.io"],
                webSocket: ["wss://babel-api.testnet.iotex.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "IoTeXScan",
                url: "https://testnet.iotexscan.io"
            }
        },
        testnet: !0
    }),
    Lt = e({
        id: 8899,
        name: "JIBCHAIN L1",
        network: "jbc",
        nativeCurrency: {
            name: "JBC",
            symbol: "JBC",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc-l1.jibchain.net"]
            },
            public: {
                http: ["https://rpc-l1.jibchain.net"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://exp-l1.jibchain.net",
                apiUrl: "https://exp-l1.jibchain.net/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xc0C8C486D1466C57Efe13C2bf000d4c56F47CBdC",
                blockCreated: 2299048
            }
        },
        testnet: !1
    }),
    Ht = e({
        id: 88991,
        name: "Jibchain Testnet",
        nativeCurrency: {
            name: "tJBC",
            symbol: "tJBC",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.testnet.jibchain.net"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://exp.testnet.jibchain.net",
                apiUrl: "https://exp.testnet.jibchain.net/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xa1a858ad9041B4741e620355a3F96B3c78e70ecE",
                blockCreated: 32848
            }
        },
        testnet: !0
    }),
    Ot = e({
        id: 686,
        name: "Karura",
        network: "karura",
        nativeCurrency: {
            name: "Karura",
            symbol: "KAR",
            decimals: 18
        },
        rpcUrls: {
            public: {
                http: ["https://eth-rpc-karura.aca-api.network"],
                webSocket: ["wss://eth-rpc-karura.aca-api.network"]
            },
            default: {
                http: ["https://eth-rpc-karura.aca-api.network"],
                webSocket: ["wss://eth-rpc-karura.aca-api.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "Karura Blockscout",
                url: "https://blockscout.karura.network",
                apiUrl: "https://blockscout.karura.network/api"
            }
        },
        testnet: !1
    }),
    It = e({
        id: 1663,
        name: "Horizen Gobi Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "Test ZEN",
            symbol: "tZEN"
        },
        rpcUrls: {
            default: {
                http: ["https://gobi-testnet.horizenlabs.io/ethv1"]
            }
        },
        blockExplorers: {
            default: {
                name: "Gobi Explorer",
                url: "https://gobi-explorer.horizen.io"
            }
        },
        contracts: {},
        testnet: !0
    }),
    Pt = e({
        id: 5,
        name: "Goerli",
        nativeCurrency: {
            name: "Goerli Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.ankr.com/eth_goerli"]
            }
        },
        blockExplorers: {
            default: {
                name: "Etherscan",
                url: "https://goerli.etherscan.io",
                apiUrl: "https://api-goerli.etherscan.io/api"
            }
        },
        contracts: {
            ensRegistry: {
                address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
            },
            ensUniversalResolver: {
                address: "0xfc4AC75C46C914aF5892d6d3eFFcebD7917293F1",
                blockCreated: 10339206
            },
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 6507670
            }
        },
        testnet: !0
    }),
    Nt = e({
        id: 100,
        name: "Gnosis",
        nativeCurrency: {
            decimals: 18,
            name: "Gnosis",
            symbol: "xDAI"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.gnosischain.com"],
                webSocket: ["wss://rpc.gnosischain.com/wss"]
            }
        },
        blockExplorers: {
            default: {
                name: "Gnosisscan",
                url: "https://gnosisscan.io",
                apiUrl: "https://api.gnosisscan.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 21022491
            }
        }
    }),
    Rt = e({
        id: 10200,
        name: "Gnosis Chiado",
        nativeCurrency: {
            decimals: 18,
            name: "Gnosis",
            symbol: "xDAI"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.chiadochain.net"],
                webSocket: ["wss://rpc.chiadochain.net/wss"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://blockscout.chiadochain.net",
                apiUrl: "https://blockscout.chiadochain.net/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 4967313
            }
        },
        testnet: !0
    }),
    Kt = e({
        id: 31337,
        name: "Hardhat",
        nativeCurrency: {
            decimals: 18,
            name: "Ether",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["http://127.0.0.1:8545"]
            }
        }
    }),
    Gt = e({
        id: 16666e5,
        name: "Harmony One",
        nativeCurrency: {
            name: "Harmony",
            symbol: "ONE",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.ankr.com/harmony"]
            }
        },
        blockExplorers: {
            default: {
                name: "Harmony Explorer",
                url: "https://explorer.harmony.one"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 24185753
            }
        }
    }),
    Vt = e({
        id: 11235,
        name: "HAQQ Mainnet",
        nativeCurrency: {
            decimals: 18,
            name: "Islamic Coin",
            symbol: "ISLM"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.eth.haqq.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "HAQQ Explorer",
                url: "https://explorer.haqq.network",
                apiUrl: "https://explorer.haqq.network/api"
            }
        }
    }),
    Xt = e({
        id: 54211,
        name: "HAQQ Testedge 2",
        nativeCurrency: {
            decimals: 18,
            name: "Islamic Coin",
            symbol: "ISLMT"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.eth.testedge2.haqq.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "HAQQ Explorer",
                url: "https://explorer.testedge2.haqq.network",
                apiUrl: "https://explorer.testedge2.haqq.network/api"
            }
        }
    }),
    jt = e({
        id: 295,
        name: "Hedera Mainnet",
        network: "hedera-mainnet",
        nativeCurrency: {
            symbol: "HBAR",
            name: "HBAR",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.hashio.io/api"]
            }
        },
        blockExplorers: {
            default: {
                name: "Hashscan",
                url: "https://hashscan.io/mainnet"
            }
        },
        testnet: !1
    }),
    qt = e({
        id: 296,
        name: "Hedera Testnet",
        network: "hedera-testnet",
        nativeCurrency: {
            symbol: "HBAR",
            name: "HBAR",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://testnet.hashio.io/api"]
            }
        },
        blockExplorers: {
            default: {
                name: "Hashscan",
                url: "https://hashscan.io/testnet"
            }
        },
        testnet: !0
    }),
    Zt = e({
        id: 297,
        name: "Hedera Previewnet",
        network: "hedera-previewnet",
        nativeCurrency: {
            symbol: "HBAR",
            name: "HBAR",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://previewnet.hashio.io/api"]
            }
        },
        blockExplorers: {
            default: {
                name: "Hashscan",
                url: "https://hashscan.io/previewnet"
            }
        },
        testnet: !0
    }),
    Wt = e({
        id: 17e3,
        name: "Holesky",
        nativeCurrency: {
            name: "Holesky Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://ethereum-holesky-rpc.publicnode.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Etherscan",
                url: "https://holesky.etherscan.io"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 77
            },
            ensRegistry: {
                address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                blockCreated: 801613
            },
            ensUniversalResolver: {
                address: "0xa6AC935D4971E3CD133b950aE053bECD16fE7f3b",
                blockCreated: 973484
            }
        },
        testnet: !0
    }),
    Qt = e({
        id: 13371,
        name: "Immutable zkEVM",
        nativeCurrency: {
            decimals: 18,
            name: "Immutable Coin",
            symbol: "IMX"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.immutable.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Immutable Explorer",
                url: "https://explorer.immutable.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0x236bdA4589e44e6850f5aC6a74BfCa398a86c6c0",
                blockCreated: 4335972
            }
        }
    }),
    Jt = e({
        id: 13473,
        name: "Immutable zkEVM Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "Immutable Coin",
            symbol: "IMX"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.testnet.immutable.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Immutable Testnet Explorer",
                url: "https://explorer.testnet.immutable.com/"
            }
        },
        contracts: {
            multicall3: {
                address: "0x2CC787Ed364600B0222361C4188308Fa8E68bA60",
                blockCreated: 5977391
            }
        },
        testnet: !0
    }),
    Yt = e({
        id: 2525,
        name: "inEVM Mainnet",
        nativeCurrency: {
            decimals: 18,
            name: "Injective",
            symbol: "INJ"
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.rpc.inevm.com/http"]
            }
        },
        blockExplorers: {
            default: {
                name: "inEVM Explorer",
                url: "https://inevm.calderaexplorer.xyz",
                apiUrl: "https://inevm.calderaexplorer.xyz/api/v2"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 118606
            }
        }
    }),
    $t = e({
        id: 107107114116,
        name: "Kakarot Sepolia",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://sepolia-rpc.kakarot.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Kakarot Scan",
                url: "https://sepolia.kakarotscan.org"
            }
        },
        testnet: !0
    }),
    _t = e({
        id: 2222,
        name: "Kava EVM",
        network: "kava-mainnet",
        nativeCurrency: {
            name: "Kava",
            symbol: "KAVA",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://evm.kava.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Kava EVM Explorer",
                url: "https://kavascan.com",
                apiUrl: "https://kavascan.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 3661165
            }
        },
        testnet: !1
    }),
    ea = e({
        id: 2221,
        name: "Kava EVM Testnet",
        network: "kava-testnet",
        nativeCurrency: {
            name: "Kava",
            symbol: "KAVA",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://evm.testnet.kava.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Kava EVM Testnet Explorer",
                url: "https://testnet.kavascan.com/",
                apiUrl: "https://testnet.kavascan.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xDf1D724A7166261eEB015418fe8c7679BBEa7fd6",
                blockCreated: 7242179
            }
        },
        testnet: !0
    }),
    ta = e({
        id: 321,
        name: "KCC Mainnet",
        network: "KCC Mainnet",
        nativeCurrency: {
            decimals: 18,
            name: "KCS",
            symbol: "KCS"
        },
        rpcUrls: {
            default: {
                http: ["https://kcc-rpc.com"]
            },
            public: {
                http: ["https://kcc-rpc.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "KCC Explorer",
                url: "https://explorer.kcc.io"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 11760430
            }
        },
        testnet: !1
    }),
    aa = e({
        id: 8217,
        name: "Klaytn",
        nativeCurrency: {
            decimals: 18,
            name: "Klaytn",
            symbol: "KLAY"
        },
        rpcUrls: {
            default: {
                http: ["https://public-en-cypress.klaytn.net"]
            }
        },
        blockExplorers: {
            default: {
                name: "KlaytnScope",
                url: "https://scope.klaytn.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 96002415
            }
        }
    }),
    ra = e({
        id: 1001,
        name: "Klaytn Baobab Testnet",
        network: "klaytn-baobab",
        nativeCurrency: {
            decimals: 18,
            name: "Baobab Klaytn",
            symbol: "KLAY"
        },
        rpcUrls: {
            default: {
                http: ["https://public-en-baobab.klaytn.net"]
            }
        },
        blockExplorers: {
            default: {
                name: "KlaytnScope",
                url: "https://baobab.klaytnscope.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 123390593
            }
        },
        testnet: !0
    }),
    sa = e({
        id: 255,
        name: "Kroma",
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://api.kroma.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "Kroma Explorer",
                url: "https://blockscout.kroma.network",
                apiUrl: "https://blockscout.kroma.network/api"
            }
        },
        testnet: !1
    }),
    la = e({
        id: 2358,
        name: "Kroma Sepolia",
        nativeCurrency: {
            name: "Sepolia Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://api.sepolia.kroma.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "Kroma Sepolia Explorer",
                url: "https://blockscout.sepolia.kroma.network",
                apiUrl: "https://blockscout.sepolia.kroma.network/api"
            }
        },
        testnet: !0
    }),
    na = e({
        id: 12324,
        name: "L3X Protocol",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc-mainnet.l3x.com"],
                webSocket: ["wss://rpc-mainnet.l3x.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "L3X Mainnet Explorer",
                url: "https://explorer.l3x.com",
                apiUrl: "https://explorer.l3x.com/api/v2"
            }
        },
        testnet: !1
    }),
    ca = e({
        id: 12325,
        name: "L3X Protocol Testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc-testnet.l3x.com"],
                webSocket: ["wss://rpc-testnet.l3x.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "L3X Testnet Explorer",
                url: "https://explorer-testnet.l3x.com",
                apiUrl: "https://explorer-testnet.l3x.com/api/v2"
            }
        },
        testnet: !0
    }),
    oa = e({
        id: 1891,
        name: "LightLink Pegasus Testnet",
        network: "lightlink-pegasus",
        nativeCurrency: {
            decimals: 18,
            name: "Ether",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://replicator.pegasus.lightlink.io/rpc/v1"]
            }
        },
        blockExplorers: {
            default: {
                name: "LightLink Pegasus Explorer",
                url: "https://pegasus.lightlink.io"
            }
        },
        testnet: !0
    }),
    ia = e({
        id: 1890,
        name: "LightLink Phoenix Mainnet",
        network: "lightlink-phoenix",
        nativeCurrency: {
            decimals: 18,
            name: "Ether",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://replicator.phoenix.lightlink.io/rpc/v1"]
            }
        },
        blockExplorers: {
            default: {
                name: "LightLink Phoenix Explorer",
                url: "https://phoenix.lightlink.io"
            }
        },
        testnet: !1
    }),
    pa = e({
        id: 59144,
        name: "Linea Mainnet",
        nativeCurrency: {
            name: "Linea Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.linea.build"],
                webSocket: ["wss://rpc.linea.build"]
            }
        },
        blockExplorers: {
            default: {
                name: "Etherscan",
                url: "https://lineascan.build",
                apiUrl: "https://api.lineascan.build/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 42
            }
        },
        testnet: !1
    }),
    da = e({
        id: 59140,
        name: "Linea Goerli Testnet",
        nativeCurrency: {
            name: "Linea Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.goerli.linea.build"],
                webSocket: ["wss://rpc.goerli.linea.build"]
            }
        },
        blockExplorers: {
            default: {
                name: "Etherscan",
                url: "https://goerli.lineascan.build",
                apiUrl: "https://api-goerli.lineascan.build/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 498623
            }
        },
        testnet: !0
    }),
    ma = e({
        id: 59141,
        name: "Linea Sepolia Testnet",
        nativeCurrency: {
            name: "Linea Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.sepolia.linea.build"],
                webSocket: ["wss://rpc.sepolia.linea.build"]
            }
        },
        blockExplorers: {
            default: {
                name: "Etherscan",
                url: "https://sepolia.lineascan.build",
                apiUrl: "https://api-sepolia.lineascan.build/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 227427
            }
        },
        testnet: !0
    }),
    ua = e({
        id: 59140,
        name: "Linea Goerli Testnet",
        nativeCurrency: {
            name: "Linea Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.goerli.linea.build"],
                webSocket: ["wss://rpc.goerli.linea.build"]
            }
        },
        blockExplorers: {
            default: {
                name: "Etherscan",
                url: "https://goerli.lineascan.build",
                apiUrl: "https://goerli.lineascan.build/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 498623
            }
        },
        testnet: !0
    }),
    ba = 50000 n,
    ha = 32 n * k,
    ka = {
        block: t({
            format(e) {
                var t;
                const a = null == (t = e.transactions) ? void 0 : t.map((e => {
                    var t;
                    if ("string" == typeof e) return e;
                    const a = null == (t = ka.transaction) ? void 0 : t.format(e);
                    return "0x71" === a.typeHex ? a.type = "eip712" : "0xff" === a.typeHex && (a.type = "priority"), a
                }));
                return {
                    l1BatchNumber: e.l1BatchNumber ? f(e.l1BatchNumber) : null,
                    l1BatchTimestamp: e.l1BatchTimestamp ? f(e.l1BatchTimestamp) : null,
                    transactions: a
                }
            }
        }),
        transaction: r({
            format(e) {
                const t = {};
                return "0x71" === e.type ? t.type = "eip712" : "0xff" === e.type && (t.type = "priority"), { ...t,
                    l1BatchNumber: e.l1BatchNumber ? f(e.l1BatchNumber) : null,
                    l1BatchTxIndex: e.l1BatchTxIndex ? f(e.l1BatchTxIndex) : null
                }
            }
        }),
        transactionReceipt: s({
            format: e => ({
                l1BatchNumber: e.l1BatchNumber ? f(e.l1BatchNumber) : null,
                l1BatchTxIndex: e.l1BatchTxIndex ? f(e.l1BatchTxIndex) : null,
                logs: e.logs.map((e => ({ ...x(e),
                    l1BatchNumber: e.l1BatchNumber ? f(e.l1BatchNumber) : null,
                    transactionLogIndex: v(e.transactionLogIndex),
                    logType: e.logType
                }))),
                l2ToL1Logs: e.l2ToL1Logs.map((e => ({
                    blockNumber: f(e.blockHash),
                    blockHash: e.blockHash,
                    l1BatchNumber: f(e.l1BatchNumber),
                    transactionIndex: f(e.transactionIndex),
                    shardId: f(e.shardId),
                    isService: e.isService,
                    sender: e.sender,
                    key: e.key,
                    value: e.value,
                    transactionHash: e.transactionHash,
                    logIndex: f(e.logIndex)
                })))
            })
        }),
        transactionRequest: p({
            exclude: ["customSignature", "factoryDeps", "gasPerPubdata", "paymaster", "paymasterInput"],
            format: e => e.gasPerPubdata || e.paymaster && e.paymasterInput || e.factoryDeps || e.customSignature ? {
                eip712Meta: { ...e.gasPerPubdata ? {
                        gasPerPubdata: E(e.gasPerPubdata)
                    } : {
                        gasPerPubdata: E(ba)
                    },
                    ...e.paymaster && e.paymasterInput ? {
                        paymasterParams: {
                            paymaster: e.paymaster,
                            paymasterInput: Array.from(U(e.paymasterInput))
                        }
                    } : {},
                    ...e.factoryDeps ? {
                        factoryDeps: e.factoryDeps.map((e => Array.from(U(e))))
                    } : {},
                    ...e.customSignature ? {
                        customSignature: Array.from(U(e.customSignature))
                    } : {}
                },
                type: "0x71"
            } : {}
        })
    };
class xa extends w {
    constructor() {
        super(["Transaction is not an EIP712 transaction.", "", "Transaction must:", '  - include `type: "eip712"`', "  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`"].join("\n")), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidEip712TransactionError"
        })
    }
}

function ya(e) {
    return "eip712" === e.type || !!("customSignature" in e && e.customSignature || "paymaster" in e && e.paymaster || "paymasterInput" in e && e.paymasterInput || "gasPerPubdata" in e && "bigint" == typeof e.gasPerPubdata || "factoryDeps" in e && e.factoryDeps)
}

function fa(e) {
    const {
        chainId: t,
        to: a,
        from: r,
        paymaster: s,
        paymasterInput: l
    } = e;
    if (!ya(e)) throw new xa;
    if (!t || t <= 0) throw new u({
        chainId: t
    });
    if (a && !o(a)) throw new i({
        address: a
    });
    if (r && !o(r)) throw new i({
        address: r
    });
    if (s && !o(s)) throw new i({
        address: s
    });
    if (s && !l) throw new w("`paymasterInput` must be provided when `paymaster` is defined");
    if (!s && l) throw new w("`paymaster` must be provided when `paymasterInput` is defined")
}
const Ea = {
    transaction: function(e, t) {
        return ya(e) ? function(e) {
            const {
                chainId: t,
                gas: a,
                nonce: r,
                to: s,
                from: l,
                value: o,
                maxFeePerGas: i,
                maxPriorityFeePerGas: p,
                customSignature: d,
                factoryDeps: m,
                paymaster: u,
                paymasterInput: b,
                gasPerPubdata: h,
                data: k
            } = e;
            fa(e);
            const x = [r ? E(r) : "0x", p ? E(p) : "0x", i ? E(i) : "0x", a ? E(a) : "0x", s ? ? "0x", o ? E(o) : "0x", k ? ? "0x0", E(t), E(""), E(""), E(t), l ? ? "0x", E(h || ba), m ? ? [], d ? ? "0x", u && b ? [u, b] : []];
            return n(["0x71", c(x)])
        }(e) : l(e, t)
    }
};
class Ca extends w {
    constructor({
        givenLength: e,
        maxBytecodeSize: t
    }) {
        super(`Bytecode cannot be longer than ${t} bytes. Given length: ${e}`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BytecodeLengthExceedsMaxSizeError"
        })
    }
}
class wa extends w {
    constructor({
        givenLengthInWords: e
    }) {
        super(`Bytecode length in 32-byte words must be odd. Given length in words: ${e}`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BytecodeLengthInWordsMustBeOddError"
        })
    }
}
class va extends w {
    constructor({
        givenLength: e
    }) {
        super(`The bytecode length in bytes must be divisible by 32. Given length: ${e}`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BytecodeLengthMustBeDivisibleBy32Error"
        })
    }
}
const Ua = {
        formatters: ka,
        serializers: Ea,
        custom: {
            getEip712Domain: e => {
                fa(e);
                const t = function(e) {
                    const {
                        gas: t,
                        nonce: a,
                        to: r,
                        from: s,
                        value: l,
                        maxFeePerGas: n,
                        maxPriorityFeePerGas: c,
                        factoryDeps: o,
                        paymaster: i,
                        paymasterInput: p,
                        gasPerPubdata: d,
                        data: m
                    } = e;
                    return {
                        txType: 113 n,
                        from: BigInt(s),
                        to: r ? BigInt(r) : 0 n,
                        gasLimit: t ? ? 0 n,
                        gasPerPubdataByteLimit: d ? ? ba,
                        maxFeePerGas: n ? ? 0 n,
                        maxPriorityFeePerGas: c ? ? 0 n,
                        paymaster: i ? BigInt(i) : 0 n,
                        nonce: a ? BigInt(a) : 0 n,
                        value: l ? ? 0 n,
                        data: m || "0x0",
                        factoryDeps: (null == o ? void 0 : o.map((e => E(function(e) {
                            const t = g(e);
                            if (t.length % 32 != 0) throw new va({
                                givenLength: t.length
                            });
                            if (t.length > ha) throw new Ca({
                                givenLength: t.length,
                                maxBytecodeSize: ha
                            });
                            const a = y(t),
                                r = g(a),
                                s = t.length / 32;
                            if (s % 2 == 0) throw new wa({
                                givenLengthInWords: s
                            });
                            const l = g(s),
                                n = S(l, {
                                    size: 2
                                }),
                                c = new Uint8Array([1, 0]);
                            return r.set(c, 0), r.set(n, 2), r
                        }(e))))) ? ? [],
                        paymasterInput: p || "0x"
                    }
                }(e);
                return {
                    domain: {
                        name: "zkSync",
                        version: "2",
                        chainId: e.chainId
                    },
                    types: {
                        Transaction: [{
                            name: "txType",
                            type: "uint256"
                        }, {
                            name: "from",
                            type: "uint256"
                        }, {
                            name: "to",
                            type: "uint256"
                        }, {
                            name: "gasLimit",
                            type: "uint256"
                        }, {
                            name: "gasPerPubdataByteLimit",
                            type: "uint256"
                        }, {
                            name: "maxFeePerGas",
                            type: "uint256"
                        }, {
                            name: "maxPriorityFeePerGas",
                            type: "uint256"
                        }, {
                            name: "paymaster",
                            type: "uint256"
                        }, {
                            name: "nonce",
                            type: "uint256"
                        }, {
                            name: "value",
                            type: "uint256"
                        }, {
                            name: "data",
                            type: "bytes"
                        }, {
                            name: "factoryDeps",
                            type: "bytes32[]"
                        }, {
                            name: "paymasterInput",
                            type: "bytes"
                        }]
                    },
                    primaryType: "Transaction",
                    message: t
                }
            }
        }
    },
    ga = e({ ...Ua,
        id: 1135,
        name: "Lisk",
        network: "lisk",
        nativeCurrency: {
            decimals: 18,
            name: "Ether",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.api.lisk.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://blockscout.lisk.com",
                apiUrl: "https://blockscout.lisk.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0"
            }
        }
    }),
    Sa = 11155111,
    Aa = e({ ...B,
        id: 4202,
        network: "lisk-sepolia",
        name: "Lisk Sepolia",
        nativeCurrency: {
            name: "Sepolia Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.sepolia-api.lisk.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://sepolia-blockscout.lisk.com",
                apiUrl: "https://sepolia-blockscout.lisk.com/api"
            }
        },
        contracts: { ...B.contracts,
            l2OutputOracle: {
                [Sa]: {
                    address: "0xA0E35F56C318DE1bD5D9ca6A94Fe7e37C5663348"
                }
            },
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11"
            },
            portal: {
                [Sa]: {
                    address: "0xe3d90F21490686Ec7eF37BE788E02dfC12787264"
                }
            },
            l1StandardBridge: {
                [Sa]: {
                    address: "0x1Fb30e446eA791cd1f011675E5F3f5311b70faF5"
                }
            }
        },
        testnet: !0,
        sourceId: Sa
    }),
    Ta = e({
        id: 1337,
        name: "Localhost",
        nativeCurrency: {
            decimals: 18,
            name: "Ether",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["http://127.0.0.1:8545"]
            }
        }
    }),
    Ba = e({
        id: 42,
        network: "lukso",
        name: "LUKSO",
        nativeCurrency: {
            name: "LUKSO",
            symbol: "LYX",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.mainnet.lukso.network"],
                webSocket: ["wss://ws-rpc.mainnet.lukso.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "LUKSO Mainnet Explorer",
                url: "https://explorer.execution.mainnet.lukso.network",
                apiUrl: "https://api.explorer.execution.mainnet.lukso.network/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 468183
            }
        }
    }),
    Fa = e({
        id: 4201,
        name: "LUKSO Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "LUKSO Testnet",
            symbol: "LYXt"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.testnet.lukso.network"],
                webSocket: ["wss://ws-rpc.testnet.lukso.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "LUKSO Testnet Explorer",
                url: "https://explorer.execution.testnet.lukso.network",
                apiUrl: "https://api.explorer.execution.testnet.lukso.network/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 605348
            }
        },
        testnet: !0
    }),
    Ma = e({
        id: 1,
        name: "Ethereum",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://cloudflare-eth.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Etherscan",
                url: "https://etherscan.io",
                apiUrl: "https://api.etherscan.io/api"
            }
        },
        contracts: {
            ensRegistry: {
                address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
            },
            ensUniversalResolver: {
                address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
                blockCreated: 19258213
            },
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 14353601
            }
        }
    }),
    Da = e({
        id: 595,
        name: "Mandala TC9",
        network: "mandala",
        nativeCurrency: {
            name: "Mandala",
            symbol: "mACA",
            decimals: 18
        },
        rpcUrls: {
            public: {
                http: ["https://eth-rpc-tc9.aca-staging.network"],
                webSocket: ["wss://eth-rpc-tc9.aca-staging.network"]
            },
            default: {
                http: ["https://eth-rpc-tc9.aca-staging.network"],
                webSocket: ["wss://eth-rpc-tc9.aca-staging.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "Mandala Blockscout",
                url: "https://blockscout.mandala.aca-staging.network",
                apiUrl: "https://blockscout.mandala.aca-staging.network/api"
            }
        },
        testnet: !0
    }),
    za = e({
        id: 169,
        name: "Manta Pacific Mainnet",
        network: "manta",
        nativeCurrency: {
            decimals: 18,
            name: "ETH",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://pacific-rpc.manta.network/http"]
            }
        },
        blockExplorers: {
            default: {
                name: "Manta Explorer",
                url: "https://pacific-explorer.manta.network",
                apiUrl: "https://pacific-explorer.manta.network/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 332890
            }
        }
    }),
    La = e({
        id: 3441006,
        name: "Manta Pacific Sepolia Testnet",
        network: "manta-sepolia",
        nativeCurrency: {
            decimals: 18,
            name: "ETH",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://pacific-rpc.sepolia-testnet.manta.network/http"]
            }
        },
        blockExplorers: {
            default: {
                name: "Manta Sepolia Testnet Explorer",
                url: "https://pacific-explorer.sepolia-testnet.manta.network",
                apiUrl: "https://pacific-explorer.sepolia-testnet.manta.network/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca54918f7B525C8df894668846506767412b53E3",
                blockCreated: 479584
            }
        },
        testnet: !0
    }),
    Ha = e({
        id: 3441005,
        name: "Manta Pacific Testnet",
        network: "manta-testnet",
        nativeCurrency: {
            decimals: 18,
            name: "ETH",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://manta-testnet.calderachain.xyz/http"]
            }
        },
        blockExplorers: {
            default: {
                name: "Manta Testnet Explorer",
                url: "https://pacific-explorer.testnet.manta.network",
                apiUrl: "https://pacific-explorer.testnet.manta.network/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0x211B1643b95Fe76f11eD8880EE810ABD9A4cf56C",
                blockCreated: 419915
            }
        },
        testnet: !0
    }),
    Oa = e({
        id: 5e3,
        name: "Mantle",
        nativeCurrency: {
            decimals: 18,
            name: "MNT",
            symbol: "MNT"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.mantle.xyz"]
            }
        },
        blockExplorers: {
            default: {
                name: "Mantle Explorer",
                url: "https://mantlescan.xyz/",
                apiUrl: "https://api.mantlescan.xyz/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 304717
            }
        }
    }),
    Ia = e({
        id: 5003,
        name: "Mantle Sepolia Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "MNT",
            symbol: "MNT"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.sepolia.mantle.xyz"]
            }
        },
        blockExplorers: {
            default: {
                name: "Mantle Testnet Explorer",
                url: "https://explorer.sepolia.mantle.xyz/",
                apiUrl: "https://explorer.sepolia.mantle.xyz/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 4584012
            }
        },
        testnet: !0
    }),
    Pa = e({
        id: 5001,
        name: "Mantle Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "MNT",
            symbol: "MNT"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.testnet.mantle.xyz"]
            }
        },
        blockExplorers: {
            default: {
                name: "Mantle Testnet Explorer",
                url: "https://explorer.testnet.mantle.xyz",
                apiUrl: "https://explorer.testnet.mantle.xyz/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 561333
            }
        },
        testnet: !0
    }),
    Na = e({
        id: 4200,
        name: "Merlin",
        nativeCurrency: {
            name: "BTC",
            symbol: "BTC",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.merlinchain.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "blockscout",
                url: "https://scan.merlinchain.io",
                apiUrl: "https://scan.merlinchain.io/api"
            }
        }
    }),
    Ra = e({
        id: 571,
        name: "MetaChain Mainnet",
        nativeCurrency: {
            name: "Metatime Coin",
            symbol: "MTC",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.metatime.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "MetaExplorer",
                url: "https://explorer.metatime.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0x0000000000000000000000000000000000003001",
                blockCreated: 0
            }
        }
    }),
    Ka = e({
        id: 1453,
        name: "MetaChain Istanbul",
        nativeCurrency: {
            name: "Metatime Coin",
            symbol: "MTC",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://istanbul-rpc.metachain.dev"]
            }
        },
        blockExplorers: {
            default: {
                name: "MetaExplorer",
                url: "https://istanbul-explorer.metachain.dev"
            }
        },
        contracts: {
            multicall3: {
                address: "0x0000000000000000000000000000000000003001",
                blockCreated: 0
            }
        },
        testnet: !0
    }),
    Ga = 1,
    Va = e({ ...B,
        id: 1750,
        name: "Metal L2",
        nativeCurrency: {
            decimals: 18,
            name: "Ether",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.metall2.com"],
                webSocket: ["wss://rpc.metall2.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Explorer",
                url: "https://explorer.metall2.com",
                apiUrl: "https://explorer.metall2.com/api"
            }
        },
        contracts: { ...B.contracts,
            l2OutputOracle: {
                [Ga]: {
                    address: "0x3B1F7aDa0Fcc26B13515af752Dd07fB1CAc11426"
                }
            },
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 0
            },
            portal: {
                [Ga]: {
                    address: "0x3F37aBdE2C6b5B2ed6F8045787Df1ED1E3753956"
                }
            },
            l1StandardBridge: {
                [Ga]: {
                    address: "0x6d0f65D59b55B0FEC5d2d15365154DcADC140BF3"
                }
            }
        },
        sourceId: 1
    }),
    Xa = e({
        id: 82,
        name: "Meter",
        nativeCurrency: {
            decimals: 18,
            name: "MTR",
            symbol: "MTR"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.meter.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "MeterScan",
                url: "https://scan.meter.io"
            }
        }
    }),
    ja = e({
        id: 83,
        name: "Meter Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "MTR",
            symbol: "MTR"
        },
        rpcUrls: {
            default: {
                http: ["https://rpctest.meter.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "MeterTestnetScan",
                url: "https://scan-warringstakes.meter.io"
            }
        }
    }),
    qa = e({
        id: 1088,
        name: "Metis",
        nativeCurrency: {
            decimals: 18,
            name: "Metis",
            symbol: "METIS"
        },
        rpcUrls: {
            default: {
                http: ["https://andromeda.metis.io/?owner=1088"]
            }
        },
        blockExplorers: {
            default: {
                name: "Metis Explorer",
                url: "https://explorer.metis.io",
                apiUrl: "https://api.routescan.io/v2/network/mainnet/evm/43114/etherscan/api"
            },
            blockscout: {
                name: "Andromeda Explorer",
                url: "https://andromeda-explorer.metis.io",
                apiUrl: "https://andromeda-explorer.metis.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 2338552
            }
        }
    }),
    Za = e({
        id: 599,
        name: "Metis Goerli",
        nativeCurrency: {
            decimals: 18,
            name: "Metis Goerli",
            symbol: "METIS"
        },
        rpcUrls: {
            default: {
                http: ["https://goerli.gateway.metisdevops.link"]
            }
        },
        blockExplorers: {
            default: {
                name: "Metis Goerli Explorer",
                url: "https://goerli.explorer.metisdevops.link",
                apiUrl: "https://goerli.explorer.metisdevops.link/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 1006207
            }
        }
    }),
    Wa = e({
        id: 7518,
        name: "MEVerse Chain Mainnet",
        nativeCurrency: {
            decimals: 18,
            name: "MEVerse",
            symbol: "MEV"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.meversemainnet.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Explorer",
                url: "https://www.meversescan.io"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 86881340
            }
        }
    }),
    Qa = e({
        id: 4759,
        name: "MEVerse Chain Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "MEVerse",
            symbol: "MEV"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.meversetestnet.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Explorer",
                url: "https://testnet.meversescan.io/"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 64371115
            }
        },
        testnet: !0
    }),
    Ja = e({
        id: 1686,
        name: "Mint Sepolia Testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://testnet-rpc.mintchain.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Mintchain Testnet explorer",
                url: "https://testnet-explorer.mintchain.io"
            }
        },
        testnet: !0
    }),
    Ya = e({
        id: 34443,
        name: "Mode Mainnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.mode.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "Modescan",
                url: "https://modescan.io"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 2465882
            }
        },
        sourceId: 1
    }),
    $a = e({
        id: 919,
        name: "Mode Testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://sepolia.mode.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://sepolia.explorer.mode.network",
                apiUrl: "https://sepolia.explorer.mode.network/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF",
                blockCreated: 3019007
            }
        },
        testnet: !0,
        sourceId: 11155111
    }),
    _a = e({
        id: 1287,
        name: "Moonbase Alpha",
        nativeCurrency: {
            decimals: 18,
            name: "DEV",
            symbol: "DEV"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.api.moonbase.moonbeam.network"],
                webSocket: ["wss://wss.api.moonbase.moonbeam.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "Moonscan",
                url: "https://moonbase.moonscan.io",
                apiUrl: "https://moonbase.moonscan.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 1850686
            }
        },
        testnet: !0
    }),
    er = e({
        id: 1284,
        name: "Moonbeam",
        nativeCurrency: {
            decimals: 18,
            name: "GLMR",
            symbol: "GLMR"
        },
        rpcUrls: {
            default: {
                http: ["https://moonbeam.public.blastapi.io"],
                webSocket: ["wss://moonbeam.public.blastapi.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Moonscan",
                url: "https://moonscan.io",
                apiUrl: "https://api-moonbeam.moonscan.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 609002
            }
        },
        testnet: !1
    }),
    tr = e({
        id: 1281,
        name: "Moonbeam Development Node",
        nativeCurrency: {
            decimals: 18,
            name: "DEV",
            symbol: "DEV"
        },
        rpcUrls: {
            default: {
                http: ["http://127.0.0.1:9944"],
                webSocket: ["wss://127.0.0.1:9944"]
            }
        }
    }),
    ar = e({
        id: 1285,
        name: "Moonriver",
        nativeCurrency: {
            decimals: 18,
            name: "MOVR",
            symbol: "MOVR"
        },
        rpcUrls: {
            default: {
                http: ["https://moonriver.public.blastapi.io"],
                webSocket: ["wss://moonriver.public.blastapi.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Moonscan",
                url: "https://moonriver.moonscan.io",
                apiUrl: "https://api-moonriver.moonscan.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 1597904
            }
        },
        testnet: !1
    }),
    rr = e({
        id: 2710,
        name: "Morph Sepolia",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc-testnet.morphl2.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Morph Testnet Explorer",
                url: "https://explorer-testnet.morphl2.io",
                apiUrl: "https://explorer-api-testnet.morphl2.io/api"
            }
        },
        testnet: !0
    }),
    sr = e({
        id: 22222,
        name: "Nautilus Mainnet",
        nativeCurrency: {
            name: "ZBC",
            symbol: "ZBC",
            decimals: 9
        },
        rpcUrls: {
            default: {
                http: ["https://api.nautilus.nautchain.xyz"]
            }
        },
        blockExplorers: {
            default: {
                name: "NautScan",
                url: "https://nautscan.com"
            }
        }
    }),
    lr = e({
        id: 245022926,
        name: "Neon EVM DevNet",
        nativeCurrency: {
            name: "NEON",
            symbol: "NEON",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://devnet.neonevm.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Neonscan",
                url: "https://devnet.neonscan.org"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 205206112
            }
        },
        testnet: !0
    }),
    nr = e({
        id: 245022934,
        network: "neonMainnet",
        name: "Neon EVM MainNet",
        nativeCurrency: {
            name: "NEON",
            symbol: "NEON",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://neon-proxy-mainnet.solana.p2p.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Neonscan",
                url: "https://neonscan.org"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 206545524
            }
        },
        testnet: !1
    }),
    cr = e({
        id: 4242,
        name: "Nexi",
        nativeCurrency: {
            name: "Nexi",
            symbol: "NEXI",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.chain.nexi.technology"]
            }
        },
        blockExplorers: {
            default: {
                name: "NexiScan",
                url: "https://www.nexiscan.com",
                apiUrl: "https://www.nexiscan.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0x0277A46Cc69A57eE3A6C8c158bA874832F718B8E",
                blockCreated: 25770160
            }
        }
    }),
    or = e({
        id: 240,
        name: "Nexilix Smart Chain",
        nativeCurrency: {
            decimals: 18,
            name: "Nexilix",
            symbol: "NEXILIX"
        },
        rpcUrls: {
            default: {
                http: ["https://rpcurl.pos.nexilix.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "NexilixScan",
                url: "https://scan.nexilix.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0x58381c8e2BF9d0C2C4259cA14BdA9Afe02831244",
                blockCreated: 74448
            }
        }
    }),
    ir = e({
        id: 248,
        name: "Oasys",
        nativeCurrency: {
            name: "Oasys",
            symbol: "OAS",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.mainnet.oasys.games"]
            }
        },
        blockExplorers: {
            default: {
                name: "OasysScan",
                url: "https://scan.oasys.games",
                apiUrl: "https://scan.oasys.games/api"
            }
        }
    }),
    pr = e({
        id: 4090,
        network: "oasis-testnet",
        name: "Oasis Testnet",
        nativeCurrency: {
            name: "Fasttoken",
            symbol: "FTN",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc1.oasis.bahamutchain.com"]
            },
            public: {
                http: ["https://rpc1.oasis.bahamutchain.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Ftnscan",
                url: "https://oasis.ftnscan.com",
                apiUrl: "https://oasis.ftnscan.com/api"
            }
        },
        testnet: !0
    }),
    dr = e({
        id: 66,
        name: "OKC",
        nativeCurrency: {
            decimals: 18,
            name: "OKT",
            symbol: "OKT"
        },
        rpcUrls: {
            default: {
                http: ["https://exchainrpc.okex.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "oklink",
                url: "https://www.oklink.com/okc"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 10364792
            }
        }
    }),
    mr = 1,
    ur = e({ ...B,
        id: 10,
        name: "OP Mainnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.optimism.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Optimism Explorer",
                url: "https://optimistic.etherscan.io",
                apiUrl: "https://api-optimistic.etherscan.io/api"
            }
        },
        contracts: { ...B.contracts,
            l2OutputOracle: {
                [mr]: {
                    address: "0xdfe97868233d1aa22e815a266982f2cf17685a27"
                }
            },
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 4286263
            },
            portal: {
                [mr]: {
                    address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed"
                }
            },
            l1StandardBridge: {
                [mr]: {
                    address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
                }
            }
        },
        sourceId: 1
    }),
    br = 5,
    hr = e({ ...B,
        id: 420,
        name: "Optimism Goerli",
        nativeCurrency: {
            name: "Goerli Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://goerli.optimism.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Etherscan",
                url: "https://goerli-optimism.etherscan.io",
                apiUrl: "https://goerli-optimism.etherscan.io/api"
            }
        },
        contracts: { ...B.contracts,
            l2OutputOracle: {
                [br]: {
                    address: "0xE6Dfba0953616Bacab0c9A8ecb3a9BBa77FC15c0"
                }
            },
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 49461
            },
            portal: {
                [br]: {
                    address: "0x5b47E1A08Ea6d985D6649300584e6722Ec4B1383"
                }
            },
            l1StandardBridge: {
                [br]: {
                    address: "0x636Af16bf2f682dD3109e60102b8E1A089FedAa8"
                }
            }
        },
        testnet: !0,
        sourceId: 5
    }),
    kr = 11155111,
    xr = e({ ...B,
        id: 11155420,
        name: "OP Sepolia",
        nativeCurrency: {
            name: "Sepolia Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://sepolia.optimism.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://optimism-sepolia.blockscout.com",
                apiUrl: "https://optimism-sepolia.blockscout.com/api"
            }
        },
        contracts: { ...B.contracts,
            disputeGameFactory: {
                [kr]: {
                    address: "0x05F9613aDB30026FFd634f38e5C4dFd30a197Fa1"
                }
            },
            l2OutputOracle: {
                [kr]: {
                    address: "0x90E9c4f8a994a250F6aEfd61CAFb4F2e895D458F"
                }
            },
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 1620204
            },
            portal: {
                [kr]: {
                    address: "0x16Fc5058F25648194471939df75CF27A2fdC48BC"
                }
            },
            l1StandardBridge: {
                [kr]: {
                    address: "0xFBb0621E0B23b5478B630BD55a5f21f67730B0F1"
                }
            }
        },
        testnet: !0,
        sourceId: kr
    }),
    yr = e({
        id: 204,
        name: "opBNB",
        nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://opbnb-mainnet-rpc.bnbchain.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "opbnbscan",
                url: "https://mainnet.opbnbscan.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 512881
            }
        }
    }),
    fr = e({
        id: 5611,
        name: "opBNB Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "tBNB",
            symbol: "tBNB"
        },
        rpcUrls: {
            default: {
                http: ["https://opbnb-testnet-rpc.bnbchain.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "opbnbscan",
                url: "https://testnet.opbnbscan.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 3705108
            }
        },
        testnet: !0
    }),
    Er = e({
        id: 9700,
        name: "OORT MainnetDev",
        nativeCurrency: {
            decimals: 18,
            name: "OORT",
            symbol: "OORT"
        },
        rpcUrls: {
            default: {
                http: ["https://dev-rpc.oortech.com"]
            }
        },
        blockExplorers: {
            oort: {
                name: "OORT MainnetDev Explorer",
                url: "https://dev-scan.oortech.com"
            },
            default: {
                name: "OORT MainnetDev Explorer",
                url: "https://dev-scan.oortech.com"
            }
        }
    }),
    Cr = e({
        id: 41144114,
        name: "Otim Devnet",
        nativeCurrency: {
            decimals: 18,
            name: "ETH",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["http://devnet.otim.xyz"]
            }
        },
        contracts: {
            batchInvoker: {
                address: "0x5FbDB2315678afecb367f032d93F642f64180aa3"
            }
        }
    }),
    wr = e({
        id: 11297108109,
        name: "Palm",
        nativeCurrency: {
            decimals: 18,
            name: "PALM",
            symbol: "PALM"
        },
        rpcUrls: {
            default: {
                http: ["https://palm-mainnet.public.blastapi.io"],
                webSocket: ["wss://palm-mainnet.public.blastapi.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Chainlens",
                url: "https://palm.chainlens.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 15429248
            }
        }
    }),
    vr = e({
        id: 11297108099,
        name: "Palm Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "PALM",
            symbol: "PALM"
        },
        rpcUrls: {
            default: {
                http: ["https://palm-mainnet.public.blastapi.io"],
                webSocket: ["wss://palm-mainnet.public.blastapi.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Chainlens",
                url: "https://palm.chainlens.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 15429248
            }
        },
        testnet: !0
    }),
    Ur = e({ ...Ua,
        id: 1612127,
        name: "PlayFi Albireo Testnet",
        network: "albireo",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://albireo-rpc.playfi.ai"],
                webSocket: ["wss://albireo-rpc-ws.playfi.ai/ws"]
            }
        },
        blockExplorers: {
            default: {
                name: "PlayFi Albireo Explorer",
                url: "https://albireo-explorer.playfi.ai"
            }
        },
        contracts: {
            multicall3: {
                address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
            }
        },
        testnet: !0
    }),
    gr = 1,
    Sr = e({
        id: 424,
        network: "pgn",
        name: "PGN",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.publicgoods.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "PGN Explorer",
                url: "https://explorer.publicgoods.network",
                apiUrl: "https://explorer.publicgoods.network/api"
            },
            blocksout: {
                name: "PGN Explorer",
                url: "https://explorer.publicgoods.network",
                apiUrl: "https://explorer.publicgoods.network/api"
            }
        },
        contracts: {
            l2OutputOracle: {
                [gr]: {
                    address: "0x9E6204F750cD866b299594e2aC9eA824E2e5f95c"
                }
            },
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 3380209
            },
            portal: {
                [gr]: {
                    address: "0xb26Fd985c5959bBB382BAFdD0b879E149e48116c"
                }
            },
            l1StandardBridge: {
                [gr]: {
                    address: "0xD0204B9527C1bA7bD765Fa5CCD9355d38338272b"
                }
            }
        },
        formatters: T,
        sourceId: 1
    }),
    Ar = 11155111,
    Tr = e({
        id: 58008,
        network: "pgn-testnet",
        name: "PGN ",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://sepolia.publicgoods.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "PGN Testnet Explorer",
                url: "https://explorer.sepolia.publicgoods.network",
                apiUrl: "https://explorer.sepolia.publicgoods.network/api"
            },
            blocksout: {
                name: "PGN Testnet Explorer",
                url: "https://explorer.sepolia.publicgoods.network",
                apiUrl: "https://explorer.sepolia.publicgoods.network/api"
            }
        },
        contracts: {
            l2OutputOracle: {
                [Ar]: {
                    address: "0xD5bAc3152ffC25318F848B3DD5dA6C85171BaEEe"
                }
            },
            portal: {
                [Ar]: {
                    address: "0xF04BdD5353Bb0EFF6CA60CfcC78594278eBfE179"
                }
            },
            l1StandardBridge: {
                [Ar]: {
                    address: "0xFaE6abCAF30D23e233AC7faF747F2fC3a5a6Bfa3"
                }
            },
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 3754925
            }
        },
        formatters: T,
        sourceId: Ar,
        testnet: !0
    }),
    Br = e({
        id: 13381,
        name: "Phoenix Blockchain",
        nativeCurrency: {
            name: "Phoenix",
            symbol: "PHX",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.phoenixplorer.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Phoenixplorer",
                url: "https://phoenixplorer.com",
                apiUrl: "https://phoenixplorer.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0x498cF757a575cFF2c2Ed9f532f56Efa797f86442",
                blockCreated: 5620192
            }
        }
    }),
    Fr = e({
        id: 242,
        name: "Plinga",
        nativeCurrency: {
            name: "Plinga",
            symbol: "PLINGA",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpcurl.mainnet.plgchain.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Plgscan",
                url: "https://www.plgscan.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0x0989576160f2e7092908BB9479631b901060b6e4",
                blockCreated: 204489
            }
        }
    }),
    Mr = e({
        id: 161221135,
        name: "Plume Testnet",
        nativeCurrency: {
            name: "Plume Sepolia Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://testnet-rpc.plumenetwork.xyz/http"],
                webSocket: ["wss://testnet-rpc.plumenetwork.xyz/ws"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://testnet-explorer.plumenetwork.xyz",
                apiUrl: "https://testnet-explorer.plumenetwork.xyz/api"
            }
        },
        testnet: !0,
        sourceId: 11155111
    }),
    Dr = e({
        id: 137,
        name: "Polygon",
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://polygon-rpc.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "PolygonScan",
                url: "https://polygonscan.com",
                apiUrl: "https://api.polygonscan.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 25770160
            }
        }
    }),
    zr = e({
        id: 80002,
        name: "Polygon Amoy",
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc-amoy.polygon.technology"]
            }
        },
        blockExplorers: {
            default: {
                name: "PolygonScan",
                url: "https://amoy.polygonscan.com/",
                apiUrl: "https://api-amoy.polygonscan.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 3127388
            }
        },
        testnet: !0
    }),
    Lr = e({
        id: 80001,
        name: "Polygon Mumbai",
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.ankr.com/polygon_mumbai"]
            }
        },
        blockExplorers: {
            default: {
                name: "PolygonScan",
                url: "https://mumbai.polygonscan.com",
                apiUrl: "https://api-testnet.polygonscan.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 25770160
            }
        },
        testnet: !0
    }),
    Hr = e({
        id: 1101,
        name: "Polygon zkEVM",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://zkevm-rpc.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "PolygonScan",
                url: "https://zkevm.polygonscan.com",
                apiUrl: "https://api-zkevm.polygonscan.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 57746
            }
        }
    }),
    Or = e({
        id: 2442,
        name: "Polygon zkEVM Cardona",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.cardona.zkevm-rpc.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "PolygonScan",
                url: "https://cardona-zkevm.polygonscan.com",
                apiUrl: "https://cardona-zkevm.polygonscan.com/api"
            }
        },
        testnet: !0,
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 114091
            }
        }
    }),
    Ir = e({
        id: 1442,
        name: "Polygon zkEVM Testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.public.zkevm-test.net"]
            }
        },
        blockExplorers: {
            default: {
                name: "PolygonScan",
                url: "https://testnet-zkevm.polygonscan.com",
                apiUrl: "https://testnet-zkevm.polygonscan.com/api"
            }
        },
        testnet: !0,
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 525686
            }
        }
    }),
    Pr = e({
        id: 369,
        name: "PulseChain",
        nativeCurrency: {
            name: "Pulse",
            symbol: "PLS",
            decimals: 18
        },
        testnet: !1,
        rpcUrls: {
            default: {
                http: ["https://rpc.pulsechain.com"],
                webSocket: ["wss://ws.pulsechain.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "PulseScan",
                url: "https://scan.pulsechain.com",
                apiUrl: "https://api.scan.pulsechain.com/api"
            }
        },
        contracts: {
            ensRegistry: {
                address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
            },
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 14353601
            }
        }
    }),
    Nr = e({
        id: 943,
        name: "PulseChain V4",
        testnet: !0,
        nativeCurrency: {
            name: "V4 Pulse",
            symbol: "v4PLS",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.v4.testnet.pulsechain.com"],
                webSocket: ["wss://ws.v4.testnet.pulsechain.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "PulseScan",
                url: "https://scan.v4.testnet.pulsechain.com",
                apiUrl: "https://scan.v4.testnet.pulsechain.com/api"
            }
        },
        contracts: {
            ensRegistry: {
                address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
            },
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 14353601
            }
        }
    }),
    Rr = e({
        id: 35441,
        name: "Q Mainnet",
        nativeCurrency: {
            decimals: 18,
            name: "Q",
            symbol: "Q"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.q.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Q Mainnet Explorer",
                url: "https://explorer.q.org",
                apiUrl: "https://explorer.q.org/api"
            }
        }
    }),
    Kr = e({
        id: 35443,
        name: "Q Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "Q",
            symbol: "Q"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.qtestnet.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Q Testnet Explorer",
                url: "https://explorer.qtestnet.org",
                apiUrl: "https://explorer.qtestnet.org/api"
            }
        },
        testnet: !0
    }),
    Gr = e({
        id: 1729,
        name: "Reya Network",
        nativeCurrency: {
            decimals: 18,
            name: "Ether",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.reya.network"],
                webSocket: ["wss://ws.reya.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "Reya Network Explorer",
                url: "https://explorer.reya.network"
            }
        },
        testnet: !1
    }),
    Vr = e({
        id: 570,
        name: "Rollux Mainnet",
        nativeCurrency: {
            decimals: 18,
            name: "Syscoin",
            symbol: "SYS"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.rollux.com"],
                webSocket: ["wss://rpc.rollux.com/wss"]
            }
        },
        blockExplorers: {
            default: {
                name: "RolluxExplorer",
                url: "https://explorer.rollux.com",
                apiUrl: "https://explorer.rollux.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 119222
            }
        }
    }),
    Xr = e({
        id: 57e3,
        name: "Rollux Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "Syscoin",
            symbol: "SYS"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc-tanenbaum.rollux.com/"],
                webSocket: ["wss://rpc-tanenbaum.rollux.com/wss"]
            }
        },
        blockExplorers: {
            default: {
                name: "RolluxTestnetExplorer",
                url: "https://rollux.tanenbaum.io",
                apiUrl: "https://rollux.tanenbaum.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 1813675
            }
        }
    }),
    jr = e({
        id: 2020,
        name: "Ronin",
        nativeCurrency: {
            name: "RON",
            symbol: "RON",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://api.roninchain.com/rpc"]
            }
        },
        blockExplorers: {
            default: {
                name: "Ronin Explorer",
                url: "https://app.roninchain.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 26023535
            }
        }
    }),
    qr = e({
        id: 30,
        name: "Rootstock Mainnet",
        network: "rootstock",
        nativeCurrency: {
            decimals: 18,
            name: "Rootstock Bitcoin",
            symbol: "RBTC"
        },
        rpcUrls: {
            default: {
                http: ["https://public-node.rsk.co"]
            }
        },
        blockExplorers: {
            default: {
                name: "RSK Explorer",
                url: "https://explorer.rsk.co"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 4249540
            }
        }
    }),
    Zr = e({
        id: 31,
        name: "Rootstock Testnet",
        network: "rootstock",
        nativeCurrency: {
            decimals: 18,
            name: "Rootstock Bitcoin",
            symbol: "tRBTC"
        },
        rpcUrls: {
            default: {
                http: ["https://public-node.testnet.rsk.co"]
            }
        },
        blockExplorers: {
            default: {
                name: "RSK Explorer",
                url: "https://explorer.testnet.rootstock.io"
            }
        }
    }),
    Wr = 1,
    Qr = e({ ...B,
        id: 12553,
        name: "RSS3 VSL Mainnet",
        nativeCurrency: {
            name: "RSS3",
            symbol: "RSS3",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.rss3.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "RSS3 VSL Mainnet Scan",
                url: "https://scan.rss3.io",
                apiUrl: "https://scan.rss3.io/api"
            }
        },
        contracts: { ...B.contracts,
            l2OutputOracle: {
                [Wr]: {
                    address: "0xE6f24d2C32B3109B18ed33cF08eFb490b1e09C10"
                }
            },
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 14193
            },
            portal: {
                [Wr]: {
                    address: "0x6A12432491bbbE8d3babf75F759766774C778Db4",
                    blockCreated: 19387057
                }
            },
            l1StandardBridge: {
                [Wr]: {
                    address: "0x4cbab69108Aa72151EDa5A3c164eA86845f18438"
                }
            }
        },
        sourceId: 1
    }),
    Jr = 11155111,
    Yr = e({ ...B,
        id: 2331,
        name: "RSS3 VSL Sepolia Testnet",
        nativeCurrency: {
            name: "RSS3",
            symbol: "RSS3",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.testnet.rss3.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "RSS3 VSL Sepolia Testnet Scan",
                url: "https://scan.testnet.rss3.io",
                apiUrl: "https://scan.testnet.rss3.io/api"
            }
        },
        contracts: { ...B.contracts,
            l2OutputOracle: {
                [Jr]: {
                    address: "0xDb5c46C3Eaa6Ed6aE8b2379785DF7dd029C0dC81"
                }
            },
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 55697
            },
            portal: {
                [Jr]: {
                    address: "0xcBD77E8E1E7F06B25baDe67142cdE82652Da7b57",
                    blockCreated: 5345035
                }
            },
            l1StandardBridge: {
                [Jr]: {
                    address: "0xdDD29bb63B0839FB1cE0eE439Ff027738595D07B"
                }
            }
        },
        testnet: !0,
        sourceId: Jr
    }),
    $r = e({
        id: 2021,
        name: "Saigon Testnet",
        nativeCurrency: {
            name: "RON",
            symbol: "RON",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://saigon-testnet.roninchain.com/rpc"]
            }
        },
        blockExplorers: {
            default: {
                name: "Saigon Explorer",
                url: "https://saigon-app.roninchain.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 18736871
            }
        },
        testnet: !0
    }),
    _r = e({
        id: 23294,
        name: "Oasis Sapphire",
        network: "sapphire",
        nativeCurrency: {
            name: "Sapphire Rose",
            symbol: "ROSE",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://sapphire.oasis.io"],
                webSocket: ["wss://sapphire.oasis.io/ws"]
            }
        },
        blockExplorers: {
            default: {
                name: "Oasis Explorer",
                url: "https://explorer.oasis.io/mainnet/sapphire"
            },
            blockscout: {
                name: "Oasis Sapphire Explorer",
                url: "https://old-explorer.sapphire.oasis.io",
                apiUrl: "https://old-explorer.sapphire.oasis.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 734531
            }
        }
    }),
    es = e({
        id: 23295,
        name: "Oasis Sapphire Testnet",
        network: "sapphire-testnet",
        nativeCurrency: {
            name: "Sapphire Test Rose",
            symbol: "TEST",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://testnet.sapphire.oasis.dev"],
                webSocket: ["wss://testnet.sapphire.oasis.dev/ws"]
            }
        },
        blockExplorers: {
            default: {
                name: "Oasis Explorer",
                url: "https://explorer.oasis.io/testnet/sapphire"
            },
            blockscout: {
                name: "Oasis Sapphire Testnet Explorer",
                url: "https://testnet.old-explorer.sapphire.oasis.dev",
                apiUrl: "https://testnet.old-explorer.sapphire.oasis.dev/api"
            }
        },
        testnet: !0
    }),
    ts = e({
        id: 534352,
        name: "Scroll",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.scroll.io"],
                webSocket: ["wss://wss-rpc.scroll.io/ws"]
            }
        },
        blockExplorers: {
            default: {
                name: "Scrollscan",
                url: "https://scrollscan.com",
                apiUrl: "https://api.scrollscan.com/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 14
            }
        },
        testnet: !1
    }),
    as = e({
        id: 534351,
        name: "Scroll Sepolia",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://sepolia-rpc.scroll.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://sepolia-blockscout.scroll.io",
                apiUrl: "https://sepolia-blockscout.scroll.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 9473
            }
        },
        testnet: !0
    }),
    rs = e({
        id: 534353,
        name: "Scroll Testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://alpha-rpc.scroll.io/l2"],
                webSocket: ["wss://alpha-rpc.scroll.io/l2/ws"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://blockscout.scroll.io",
                apiUrl: "https://blockscout.scroll.io/api"
            }
        },
        testnet: !0
    }),
    ss = e({
        id: 713715,
        name: "Sei Devnet",
        nativeCurrency: {
            name: "Sei",
            symbol: "SEI",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://evm-rpc-arctic-1.sei-apis.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Seitrace",
                url: "https://seitrace.com"
            }
        },
        testnet: !0
    }),
    ls = e({
        id: 11155111,
        name: "Sepolia",
        nativeCurrency: {
            name: "Sepolia Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.sepolia.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Etherscan",
                url: "https://sepolia.etherscan.io",
                apiUrl: "https://api-sepolia.etherscan.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 751532
            },
            ensRegistry: {
                address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
            },
            ensUniversalResolver: {
                address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
                blockCreated: 5317080
            }
        },
        testnet: !0
    }),
    ns = e({
        id: 148,
        name: "Shimmer",
        network: "shimmer",
        nativeCurrency: {
            decimals: 18,
            name: "Shimmer",
            symbol: "SMR"
        },
        rpcUrls: {
            default: {
                http: ["https://json-rpc.evm.shimmer.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "Shimmer Network Explorer",
                url: "https://explorer.evm.shimmer.network",
                apiUrl: "https://explorer.evm.shimmer.network/api"
            }
        }
    }),
    cs = e({
        id: 1073,
        name: "Shimmer Testnet",
        network: "shimmer-testnet",
        nativeCurrency: {
            decimals: 18,
            name: "Shimmer",
            symbol: "SMR"
        },
        rpcUrls: {
            default: {
                http: ["https://json-rpc.evm.testnet.shimmer.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "Shimmer Network Explorer",
                url: "https://explorer.evm.testnet.shimmer.network",
                apiUrl: "https://explorer.evm.testnet.shimmer.network/api"
            }
        },
        testnet: !0
    }),
    os = e({
        id: 391845894,
        name: "SKALE | Block Brawlers",
        nativeCurrency: {
            name: "BRAWL",
            symbol: "BRAWL",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.skalenodes.com/v1/frayed-decent-antares"],
                webSocket: ["wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares"]
            }
        },
        blockExplorers: {
            default: {
                name: "SKALE Explorer",
                url: "https://frayed-decent-antares.explorer.mainnet.skalenodes.com"
            }
        },
        contracts: {}
    }),
    is = e({
        id: 1564830818,
        name: "SKALE | Calypso NFT Hub",
        nativeCurrency: {
            name: "sFUEL",
            symbol: "sFUEL",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"],
                webSocket: ["wss://mainnet.skalenodes.com/v1/ws/honorable-steel-rasalhague"]
            }
        },
        blockExplorers: {
            default: {
                name: "SKALE Explorer",
                url: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 3107626
            }
        }
    }),
    ps = e({
        id: 974399131,
        name: "SKALE Calypso Testnet",
        nativeCurrency: {
            name: "sFUEL",
            symbol: "sFUEL",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://testnet.skalenodes.com/v1/giant-half-dual-testnet"],
                webSocket: ["wss://testnet.skalenodes.com/v1/ws/giant-half-dual-testnet"]
            }
        },
        blockExplorers: {
            default: {
                name: "SKALE Explorer",
                url: "https://giant-half-dual-testnet.explorer.testnet.skalenodes.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 103220
            }
        },
        testnet: !0
    }),
    ds = e({
        id: 1026062157,
        name: "SKALE | CryptoBlades",
        nativeCurrency: {
            name: "sFUEL",
            symbol: "sFUEL",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux"],
                webSocket: ["wss://mainnet.skalenodes.com/v1/ws/affectionate-immediate-pollux"]
            }
        },
        blockExplorers: {
            default: {
                name: "SKALE Explorer",
                url: "https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com"
            }
        },
        contracts: {}
    }),
    ms = e({
        id: 1032942172,
        name: "SKALE | Crypto Colosseum",
        nativeCurrency: {
            name: "sFUEL",
            symbol: "sFUEL",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.skalenodes.com/v1/haunting-devoted-deneb"],
                webSocket: ["wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb"]
            }
        },
        blockExplorers: {
            default: {
                name: "SKALE Explorer",
                url: "https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com"
            }
        },
        contracts: {}
    }),
    us = e({
        id: 2046399126,
        name: "SKALE | Europa Liquidity Hub",
        nativeCurrency: {
            name: "sFUEL",
            symbol: "sFUEL",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.skalenodes.com/v1/elated-tan-skat"],
                webSocket: ["wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat"]
            }
        },
        blockExplorers: {
            default: {
                name: "SKALE Explorer",
                url: "https://elated-tan-skat.explorer.mainnet.skalenodes.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 3113495
            }
        }
    }),
    bs = e({
        id: 1444673419,
        name: "SKALE Europa Testnet",
        nativeCurrency: {
            name: "sFUEL",
            symbol: "sFUEL",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://testnet.skalenodes.com/v1/juicy-low-small-testnet"],
                webSocket: ["wss://testnet.skalenodes.com/v1/ws/juicy-low-small-testnet"]
            }
        },
        blockExplorers: {
            default: {
                name: "SKALE Explorer",
                url: "https://juicy-low-small-testnet.explorer.testnet.skalenodes.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 110858
            }
        },
        testnet: !0
    }),
    hs = e({
        id: 2139927552,
        name: "SKALE | Exorde",
        nativeCurrency: {
            name: "sFUEL",
            symbol: "sFUEL",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.skalenodes.com/v1/light-vast-diphda"],
                webSocket: ["wss://mainnet.skalenodes.com/v1/ws/light-vast-diphda"]
            }
        },
        blockExplorers: {
            default: {
                name: "SKALE Explorer",
                url: "https://light-vast-diphda.explorer.mainnet.skalenodes.com"
            }
        },
        contracts: {}
    }),
    ks = e({
        id: 1273227453,
        name: "SKALE | Human Protocol",
        nativeCurrency: {
            name: "sFUEL",
            symbol: "sFUEL",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.skalenodes.com/v1/wan-red-ain"],
                webSocket: ["wss://mainnet.skalenodes.com/v1/ws/wan-red-ain"]
            }
        },
        blockExplorers: {
            default: {
                name: "SKALE Explorer",
                url: "https://wan-red-ain.explorer.mainnet.skalenodes.com"
            }
        },
        contracts: {}
    }),
    xs = e({
        id: 1482601649,
        name: "SKALE | Nebula Gaming Hub",
        nativeCurrency: {
            name: "sFUEL",
            symbol: "sFUEL",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.skalenodes.com/v1/green-giddy-denebola"],
                webSocket: ["wss://mainnet.skalenodes.com/v1/ws/green-giddy-denebola"]
            }
        },
        blockExplorers: {
            default: {
                name: "SKALE Explorer",
                url: "https://green-giddy-denebola.explorer.mainnet.skalenodes.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 2372986
            }
        }
    }),
    ys = e({
        id: 37084624,
        name: "SKALE Nebula Testnet",
        nativeCurrency: {
            name: "sFUEL",
            symbol: "sFUEL",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://testnet.skalenodes.com/v1/lanky-ill-funny-testnet"],
                webSocket: ["wss://testnet.skalenodes.com/v1/ws/lanky-ill-funny-testnet"]
            }
        },
        blockExplorers: {
            default: {
                name: "SKALE Explorer",
                url: "https://lanky-ill-funny-testnet.explorer.testnet.skalenodes.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 105141
            }
        },
        testnet: !0
    }),
    fs = e({
        id: 278611351,
        name: "SKALE | Razor Network",
        nativeCurrency: {
            name: "sFUEL",
            symbol: "sFUEL",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.skalenodes.com/v1/turbulent-unique-scheat"],
                webSocket: ["wss://mainnet.skalenodes.com/v1/ws/turbulent-unique-scheat"]
            }
        },
        blockExplorers: {
            default: {
                name: "SKALE Explorer",
                url: "https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com"
            }
        },
        contracts: {}
    }),
    Es = e({
        id: 1350216234,
        name: "SKALE | Titan Community Hub",
        nativeCurrency: {
            name: "sFUEL",
            symbol: "sFUEL",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.skalenodes.com/v1/parallel-stormy-spica"],
                webSocket: ["wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica"]
            }
        },
        blockExplorers: {
            default: {
                name: "SKALE Explorer",
                url: "https://parallel-stormy-spica.explorer.mainnet.skalenodes.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 2076458
            }
        }
    }),
    Cs = e({
        id: 1020352220,
        name: "SKALE Titan Hub",
        nativeCurrency: {
            name: "sFUEL",
            symbol: "sFUEL",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://testnet.skalenodes.com/v1/aware-fake-trim-testnet"],
                webSocket: ["wss://testnet.skalenodes.com/v1/ws/aware-fake-trim-testnet"]
            }
        },
        blockExplorers: {
            default: {
                name: "SKALE Explorer",
                url: "https://aware-fake-trim-testnet.explorer.testnet.skalenodes.com"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 104072
            }
        },
        testnet: !0
    }),
    ws = e({
        id: 19,
        name: "Songbird Mainnet",
        nativeCurrency: {
            decimals: 18,
            name: "songbird",
            symbol: "SGB"
        },
        rpcUrls: {
            default: {
                http: ["https://songbird-api.flare.network/ext/C/rpc"]
            }
        },
        blockExplorers: {
            default: {
                name: "Songbird Explorer",
                url: "https://songbird-explorer.flare.network",
                apiUrl: "https://songbird-explorer.flare.network/api"
            }
        }
    }),
    vs = e({
        id: 16,
        name: "Coston",
        nativeCurrency: {
            decimals: 18,
            name: "costonflare",
            symbol: "CFLR"
        },
        rpcUrls: {
            default: {
                http: ["https://coston-api.flare.network/ext/C/rpc"]
            }
        },
        blockExplorers: {
            default: {
                name: "Coston Explorer",
                url: "https://coston-explorer.flare.network",
                apiUrl: "https://coston-explorer.flare.network/api"
            }
        },
        testnet: !0
    }),
    Us = e({
        id: 88882,
        name: "Chiliz Spicy Testnet",
        network: "chiliz-spicy-Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "CHZ",
            symbol: "CHZ"
        },
        rpcUrls: {
            default: {
                http: ["https://spicy-rpc.chiliz.com", "https://chiliz-spicy-rpc.publicnode.com"],
                webSocket: ["wss://spicy-rpc-ws.chiliz.com", "wss://chiliz-spicy-rpc.publicnode.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Chiliz Explorer",
                url: "http://spicy-explorer.chiliz.com",
                apiUrl: "http://spicy-explorer.chiliz.com/api"
            }
        },
        testnet: !0
    }),
    gs = e({
        id: 8082,
        name: "Shardeum Sphinx",
        nativeCurrency: {
            name: "SHARDEUM",
            symbol: "SHM",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://sphinx.shardeum.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Shardeum Explorer",
                url: "https://explorer-sphinx.shardeum.org"
            }
        },
        testnet: !0
    }),
    Ss = e({
        id: 109,
        name: "Shibarium",
        network: "shibarium",
        nativeCurrency: {
            name: "Bone",
            symbol: "BONE",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.shibrpc.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://shibariumscan.io"
            }
        },
        contracts: {
            multicall3: {
                address: "0x864Bf681ADD6052395188A89101A1B37d3B4C961",
                blockCreated: 265900
            }
        }
    }),
    As = e({
        id: 105105,
        name: "Stratis Mainnet",
        network: "stratis",
        nativeCurrency: {
            name: "Stratis",
            symbol: "STRAX",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.stratisevm.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Stratis Explorer",
                url: "https://explorer.stratisevm.com"
            }
        }
    }),
    Ts = e({
        id: 57,
        name: "Syscoin Mainnet",
        nativeCurrency: {
            decimals: 18,
            name: "Syscoin",
            symbol: "SYS"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.syscoin.org"],
                webSocket: ["wss://rpc.syscoin.org/wss"]
            }
        },
        blockExplorers: {
            default: {
                name: "SyscoinExplorer",
                url: "https://explorer.syscoin.org",
                apiUrl: "https://explorer.syscoin.org/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 287139
            }
        }
    }),
    Bs = e({
        id: 5700,
        name: "Syscoin Tanenbaum Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "Syscoin",
            symbol: "SYS"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.tanenbaum.io"],
                webSocket: ["wss://rpc.tanenbaum.io/wss"]
            }
        },
        blockExplorers: {
            default: {
                name: "SyscoinTestnetExplorer",
                url: "https://tanenbaum.io"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 271288
            }
        }
    }),
    Fs = e({
        id: 841,
        name: "Taraxa Mainnet",
        nativeCurrency: {
            name: "Tara",
            symbol: "TARA",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.mainnet.taraxa.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Taraxa Explorer",
                url: "https://explorer.mainnet.taraxa.io"
            }
        }
    }),
    Ms = e({
        id: 167009,
        name: "Taiko Hekla L2",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.hekla.taiko.xyz"]
            }
        },
        blockExplorers: {
            default: {
                name: "Taikoscan",
                url: "https://hekla.taikoscan.network"
            }
        }
    }),
    Ds = e({
        id: 167007,
        name: "Taiko Jolnir (Alpha-5 Testnet)",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.jolnir.taiko.xyz"]
            }
        },
        blockExplorers: {
            default: {
                name: "blockscout",
                url: "https://explorer.jolnir.taiko.xyz"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 732706
            }
        },
        testnet: !0
    }),
    zs = e({
        id: 167008,
        name: "Taiko Katla (Alpha-6 Testnet)",
        network: "tko-katla",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.katla.taiko.xyz"]
            },
            public: {
                http: ["https://rpc.katla.taiko.xyz"]
            }
        },
        blockExplorers: {
            default: {
                name: "blockscout",
                url: "https://explorer.katla.taiko.xyz"
            }
        }
    }),
    Ls = e({
        id: 167005,
        name: "Taiko (Alpha-3 Testnet)",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.test.taiko.xyz"]
            }
        },
        blockExplorers: {
            default: {
                name: "blockscout",
                url: "https://explorer.test.taiko.xyz"
            }
        }
    }),
    Hs = e({
        id: 842,
        name: "Taraxa Testnet",
        nativeCurrency: {
            name: "Tara",
            symbol: "TARA",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.testnet.taraxa.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Taraxa Explorer",
                url: "https://explorer.testnet.taraxa.io"
            }
        },
        testnet: !0
    }),
    Os = e({
        id: 2017,
        name: "Telcoin Adiri Testnet",
        nativeCurrency: {
            name: "Telcoin",
            symbol: "TEL",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.telcoin.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "telscan",
                url: "https://telscan.io"
            }
        },
        testnet: !0
    }),
    Is = e({
        id: 40,
        name: "Telos",
        nativeCurrency: {
            decimals: 18,
            name: "Telos",
            symbol: "TLOS"
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.telos.net/evm"]
            }
        },
        blockExplorers: {
            default: {
                name: "Teloscan",
                url: "https://www.teloscan.io/"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 246530709
            }
        }
    }),
    Ps = e({
        id: 41,
        name: "Telos",
        nativeCurrency: {
            decimals: 18,
            name: "Telos",
            symbol: "TLOS"
        },
        rpcUrls: {
            default: {
                http: ["https://testnet.telos.net/evm"]
            }
        },
        blockExplorers: {
            default: {
                name: "Teloscan (testnet)",
                url: "https://testnet.teloscan.io/"
            }
        },
        testnet: !0
    }),
    Ns = e({
        id: 1559,
        name: "Tenet",
        network: "tenet-mainnet",
        nativeCurrency: {
            name: "TENET",
            symbol: "TENET",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.tenet.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "TenetScan Mainnet",
                url: "https://tenetscan.io",
                apiUrl: "https://tenetscan.io/api"
            }
        },
        testnet: !1
    }),
    Rs = e({
        id: 7,
        name: "ThaiChain",
        nativeCurrency: {
            name: "TCH",
            symbol: "TCH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["hhttps://rpc.thaichain.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blockscout",
                url: "https://exp.thaichain.org",
                apiUrl: "https://exp.thaichain.org/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0x0DaD6130e832c21719C5CE3bae93454E16A84826",
                blockCreated: 4806386
            }
        },
        testnet: !1
    }),
    Ks = e({
        id: 997,
        name: "5ireChain Thunder Testnet",
        nativeCurrency: {
            name: "5ire Token",
            symbol: "5IRE",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc-testnet.5ire.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "5ireChain Explorer",
                url: "https://explorer.5ire.network"
            }
        },
        testnet: !0
    }),
    Gs = e({
        id: 100009,
        name: "Vechain",
        nativeCurrency: {
            name: "VeChain",
            symbol: "VET",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.vechain.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "Vechain Explorer",
                url: "https://explore.vechain.org"
            },
            vechainStats: {
                name: "Vechain Stats",
                url: "https://vechainstats.com"
            }
        }
    }),
    Vs = e({
        id: 888,
        name: "Wanchain",
        nativeCurrency: {
            name: "WANCHAIN",
            symbol: "WAN",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://gwan-ssl.wandevs.org:56891", "https://gwan2-ssl.wandevs.org"]
            }
        },
        blockExplorers: {
            default: {
                name: "WanScan",
                url: "https://wanscan.org"
            }
        },
        contracts: {
            multicall3: {
                address: "0xcDF6A1566e78EB4594c86Fe73Fcdc82429e97fbB",
                blockCreated: 25312390
            }
        }
    }),
    Xs = e({
        id: 999,
        name: "Wanchain Testnet",
        nativeCurrency: {
            name: "WANCHAIN",
            symbol: "WANt",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://gwan-ssl.wandevs.org:46891"]
            }
        },
        blockExplorers: {
            default: {
                name: "WanScanTest",
                url: "https://wanscan.org"
            }
        },
        contracts: {
            multicall3: {
                address: "0x11c89bF4496c39FB80535Ffb4c92715839CC5324",
                blockCreated: 24743448
            }
        },
        testnet: !0
    }),
    js = e({
        id: 1111,
        name: "WEMIX",
        network: "wemix-mainnet",
        nativeCurrency: {
            name: "WEMIX",
            symbol: "WEMIX",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://api.wemix.com"]
            },
            public: {
                http: ["https://api.wemix.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "wemixExplorer",
                url: "https://explorer.wemix.com"
            }
        }
    }),
    qs = e({
        id: 1112,
        name: "WEMIX Testnet",
        network: "wemix-testnet",
        nativeCurrency: {
            name: "WEMIX",
            symbol: "tWEMIX",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://api.test.wemix.com"]
            },
            public: {
                http: ["https://api.test.wemix.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "wemixExplorer",
                url: "https://testnet.wemixscan.com",
                apiUrl: "https://testnet.wemixscan.com/api"
            }
        },
        testnet: !0
    }),
    Zs = e({
        id: 195,
        name: "X1 Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "OKB",
            symbol: "OKB"
        },
        rpcUrls: {
            default: {
                http: ["https://x1testrpc.okx.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "OKLink",
                url: "https://www.oklink.com/x1-test"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 624344
            }
        },
        testnet: !0
    }),
    Ws = e({
        id: 196,
        name: "X Layer Mainnet",
        nativeCurrency: {
            decimals: 18,
            name: "OKB",
            symbol: "OKB"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.xlayer.tech"]
            }
        },
        blockExplorers: {
            default: {
                name: "OKLink",
                url: "https://www.oklink.com/xlayer"
            }
        }
    }),
    Qs = e({
        id: 50,
        name: "XinFin Network",
        nativeCurrency: {
            decimals: 18,
            name: "XDC",
            symbol: "XDC"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.xinfin.network"]
            }
        },
        blockExplorers: {
            xinfin: {
                name: "XinFin",
                url: "https://explorer.xinfin.network"
            },
            default: {
                name: "Blocksscan",
                url: "https://xdc.blocksscan.io"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 71542788
            }
        }
    }),
    Js = e({
        id: 51,
        name: "Apothem Network",
        nativeCurrency: {
            decimals: 18,
            name: "TXDC",
            symbol: "TXDC"
        },
        rpcUrls: {
            default: {
                http: ["https://erpc.apothem.network"]
            }
        },
        blockExplorers: {
            default: {
                name: "Blocksscan",
                url: "https://apothem.blocksscan.io"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 59765389
            }
        }
    }),
    Ys = e({
        id: 50005,
        name: "Yooldo Verse",
        nativeCurrency: {
            name: "OAS",
            symbol: "OAS",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.yooldo-verse.xyz"]
            }
        },
        blockExplorers: {
            default: {
                name: "Yooldo Verse Explorer",
                url: "https://explorer.yooldo-verse.xyz"
            }
        }
    }),
    $s = e({
        id: 50006,
        name: "Yooldo Verse Testnet",
        nativeCurrency: {
            name: "OAS",
            symbol: "OAS",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.testnet.yooldo-verse.xyz"]
            }
        },
        blockExplorers: {
            default: {
                name: "Yooldo Verse Testnet Explorer",
                url: "https://explorer.testnet.yooldo-verse.xyz"
            }
        },
        testnet: !0
    }),
    _s = e({
        id: 7e3,
        name: "ZetaChain",
        nativeCurrency: {
            decimals: 18,
            name: "Zeta",
            symbol: "ZETA"
        },
        rpcUrls: {
            default: {
                http: ["https://zetachain-evm.blockpi.network/v1/rpc/public"]
            }
        },
        blockExplorers: {
            default: {
                name: "ZetaScan",
                url: "https://explorer.zetachain.com"
            }
        },
        testnet: !1
    }),
    el = e({
        id: 7001,
        name: "ZetaChain Athens Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "Zeta",
            symbol: "aZETA"
        },
        rpcUrls: {
            default: {
                http: ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"]
            }
        },
        blockExplorers: {
            default: {
                name: "ZetaScan",
                url: "https://athens.explorer.zetachain.com"
            }
        },
        testnet: !0
    }),
    tl = e({
        id: 1337803,
        name: "Zhejiang",
        nativeCurrency: {
            name: "Zhejiang Ether",
            symbol: "ZhejETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.zhejiang.ethpandaops.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "Beaconchain",
                url: "https://zhejiang.beaconcha.in"
            }
        },
        testnet: !0
    }),
    al = e({
        id: 32769,
        name: "Zilliqa",
        network: "zilliqa",
        nativeCurrency: {
            name: "Zilliqa",
            symbol: "ZIL",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://api.zilliqa.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Ethernal",
                url: "https://evmx.zilliqa.com"
            }
        },
        testnet: !1
    }),
    rl = e({
        id: 33101,
        name: "Zilliqa Testnet",
        network: "zilliqa-testnet",
        nativeCurrency: {
            name: "Zilliqa",
            symbol: "ZIL",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://dev-api.zilliqa.com"]
            }
        },
        blockExplorers: {
            default: {
                name: "Ethernal",
                url: "https://evmx.testnet.zilliqa.com"
            }
        },
        testnet: !0
    }),
    sl = e({
        id: 42766,
        name: "ZKFair Mainnet",
        network: "zkfair-mainnet",
        nativeCurrency: {
            decimals: 18,
            name: "USD Coin",
            symbol: "USDC"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.zkfair.io"]
            },
            public: {
                http: ["https://rpc.zkfair.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "zkFair Explorer",
                url: "https://scan.zkfair.io",
                apiUrl: "https://scan.zkfair.io/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xca11bde05977b3631167028862be2a173976ca11",
                blockCreated: 6090959
            }
        },
        testnet: !1
    }),
    ll = e({
        id: 43851,
        name: "ZKFair Testnet",
        network: "zkfair-testnet",
        nativeCurrency: {
            decimals: 18,
            name: "USD Coin",
            symbol: "USDC"
        },
        rpcUrls: {
            default: {
                http: ["https://testnet-rpc.zkfair.io"]
            },
            public: {
                http: ["https://testnet-rpc.zkfair.io"]
            }
        },
        blockExplorers: {
            default: {
                name: "zkFair Explorer",
                url: "https://testnet-scan.zkfair.io"
            }
        },
        testnet: !0
    }),
    nl = e({ ...Ua,
        id: 324,
        name: "zkSync Era",
        network: "zksync-era",
        nativeCurrency: {
            decimals: 18,
            name: "Ether",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://mainnet.era.zksync.io"],
                webSocket: ["wss://mainnet.era.zksync.io/ws"]
            }
        },
        blockExplorers: {
            default: {
                name: "Etherscan",
                url: "https://era.zksync.network/",
                apiUrl: "https://api-era.zksync.network/api"
            }
        },
        contracts: {
            multicall3: {
                address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
            }
        }
    }),
    cl = e({ ...Ua,
        id: 260,
        name: "zkSync InMemory Node",
        network: "zksync-in-memory-node",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["http://localhost:8011"]
            }
        },
        testnet: !0
    }),
    ol = e({ ...Ua,
        id: 270,
        name: "zkSync CLI Local Node",
        network: "zksync-cli-local-node",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["http://localhost:3050"]
            }
        },
        testnet: !0
    }),
    il = e({ ...Ua,
        id: 300,
        name: "zkSync Sepolia Testnet",
        network: "zksync-sepolia-testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://sepolia.era.zksync.dev"],
                webSocket: ["wss://sepolia.era.zksync.dev/ws"]
            }
        },
        blockExplorers: {
            default: {
                name: "zkExplorer",
                url: "https://sepolia.explorer.zksync.io/"
            }
        },
        contracts: {
            multicall3: {
                address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
            }
        },
        testnet: !0
    }),
    pl = e({ ...Ua,
        id: 280,
        name: "zkSync Era Testnet",
        network: "zksync-era-testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: {
                http: ["https://testnet.era.zksync.dev"],
                webSocket: ["wss://testnet.era.zksync.dev/ws"]
            }
        },
        blockExplorers: {
            default: {
                name: "zkExplorer",
                url: "https://goerli.explorer.zksync.io"
            }
        },
        contracts: {
            multicall3: {
                address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
            }
        },
        testnet: !0
    }),
    dl = 1,
    ml = e({ ...B,
        id: 7777777,
        name: "Zora",
        nativeCurrency: {
            decimals: 18,
            name: "Ether",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.zora.energy"],
                webSocket: ["wss://rpc.zora.energy"]
            }
        },
        blockExplorers: {
            default: {
                name: "Explorer",
                url: "https://explorer.zora.energy",
                apiUrl: "https://explorer.zora.energy/api"
            }
        },
        contracts: { ...B.contracts,
            l2OutputOracle: {
                [dl]: {
                    address: "0x9E6204F750cD866b299594e2aC9eA824E2e5f95c"
                }
            },
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 5882
            },
            portal: {
                [dl]: {
                    address: "0x1a0ad011913A150f69f6A19DF447A0CfD9551054"
                }
            },
            l1StandardBridge: {
                [dl]: {
                    address: "0x3e2Ea9B92B7E48A52296fD261dc26fd995284631"
                }
            }
        },
        sourceId: 1
    }),
    ul = 11155111,
    bl = e({ ...B,
        id: 999999999,
        name: "Zora Sepolia",
        network: "zora-sepolia",
        nativeCurrency: {
            decimals: 18,
            name: "Zora Sepolia",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://sepolia.rpc.zora.energy"],
                webSocket: ["wss://sepolia.rpc.zora.energy"]
            }
        },
        blockExplorers: {
            default: {
                name: "Zora Sepolia Explorer",
                url: "https://sepolia.explorer.zora.energy/",
                apiUrl: "https://sepolia.explorer.zora.energy/api"
            }
        },
        contracts: { ...B.contracts,
            l2OutputOracle: {
                [ul]: {
                    address: "0x2615B481Bd3E5A1C0C7Ca3Da1bdc663E8615Ade9"
                }
            },
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 83160
            },
            portal: {
                [ul]: {
                    address: "0xeffE2C6cA9Ab797D418f0D91eA60807713f3536f"
                }
            },
            l1StandardBridge: {
                [ul]: {
                    address: "0x5376f1D543dcbB5BD416c56C189e4cB7399fCcCB"
                }
            }
        },
        sourceId: ul,
        testnet: !0
    }),
    hl = 5,
    kl = e({ ...B,
        id: 999,
        name: "Zora Goerli Testnet",
        nativeCurrency: {
            decimals: 18,
            name: "Zora Goerli",
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: ["https://testnet.rpc.zora.energy"],
                webSocket: ["wss://testnet.rpc.zora.energy"]
            }
        },
        blockExplorers: {
            default: {
                name: "Explorer",
                url: "https://testnet.explorer.zora.energy",
                apiUrl: "https://testnet.explorer.zora.energy/api"
            }
        },
        contracts: { ...B.contracts,
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
                blockCreated: 189123
            },
            portal: {
                [hl]: {
                    address: "0xDb9F51790365e7dc196e7D072728df39Be958ACe"
                }
            }
        },
        sourceId: 5,
        testnet: !0
    });
export {
    A as acala, M as ancient8, z as ancient8Sepolia, L as anvil, H as apexTestnet, O as arbitrum, I as arbitrumGoerli, P as arbitrumNova, G as arbitrumSepolia, V as areonNetwork, X as areonNetworkTestnet, N as astar, R as astarZkEVM, K as astarZkyoto, j as aurora, q as auroraTestnet, Z as auroria, W as avalanche, Q as avalancheFuji, J as bahamut, $ as base, ee as baseGoerli, ae as baseSepolia, re as beam, se as beamTestnet, le as bearNetworkChainMainnet, ne as bearNetworkChainTestnet, ce as berachainTestnet, oe as bevmMainnet, ie as bitTorrent, pe as bitTorrentTestnet, de as blast, me as blastSepolia, ue as bob, be as boba, he as bronos, ke as bronosTestnet, xe as bsc, fe as bscGreenfield, ye as bscTestnet, Ee as btr, Ce as btrTestnet, we as bxn, ve as bxnTestnet, Ue as canto, Le as celo, He as celoAlfajores, Oe as chiliz, Ie as classic, Pe as confluxESpace, Ne as confluxESpaceTestnet, Re as coreDao, Ke as cronos, Ge as cronosTestnet, Ve as crossbell, Xe as cyber, je as cyberTestnet, qe as darwinia, Ze as defichainEvm, We as defichainEvmTestnet, Qe as degen, Je as dfk, Ye as dodochainTestnet, $e as dogechain, _e as dreyerxMainnet, et as edgeless, tt as edgelessTestnet, at as edgeware, rt as edgewareTestnet, pt as ekta, dt as ektaTestnet, st as eon, lt as eos, nt as eosTestnet, ct as etherlinkTestnet, ot as evmos, it as evmosTestnet, mt as fantom, ut as fantomSonicTestnet, bt as fantomTestnet, ht as fibo, kt as filecoin, xt as filecoinCalibration, yt as filecoinHyperspace, ft as flare, Et as flareTestnet, wt as flowMainnet, Ct as flowPreviewnet, vt as flowTestnet, Ut as foundry, St as fraxtal, Tt as fraxtalTestnet, Bt as funkiSepolia, Ft as fuse, Mt as fuseSparknet, Nt as gnosis, Rt as gnosisChiado, It as gobi, Pt as goerli, Vt as haqqMainnet, Xt as haqqTestedge2, Kt as hardhat, Gt as harmonyOne, jt as hedera, Zt as hederaPreviewnet, qt as hederaTestnet, Wt as holesky, Qt as immutableZkEvm, Jt as immutableZkEvmTestnet, Yt as inEVM, Dt as iotex, zt as iotexTestnet, Lt as jbc, Ht as jbcTestnet, $t as kakarotSepolia, Ot as karura, _t as kava, ea as kavaTestnet, ta as kcc, aa as klaytn, ra as klaytnBaobab, sa as kroma, la as kromaSepolia, na as l3x, ca as l3xTestnet, oa as lightlinkPegasus, ia as lightlinkPhoenix, pa as linea, da as lineaGoerli, ma as lineaSepolia, ua as lineaTestnet, ga as lisk, Aa as liskSepolia, Ta as localhost, Ba as lukso, Fa as luksoTestnet, Ma as mainnet, Da as mandala, za as manta, La as mantaSepoliaTestnet, Ha as mantaTestnet, Oa as mantle, Ia as mantleSepoliaTestnet, Pa as mantleTestnet, Na as merlin, Ra as metachain, Ka as metachainIstanbul, Va as metalL2, Xa as meter, ja as meterTestnet, qa as metis, Za as metisGoerli, Wa as mev, Qa as mevTestnet, Ja as mintSepoliaTestnet, Ya as mode, $a as modeTestnet, _a as moonbaseAlpha, er as moonbeam, tr as moonbeamDev, ar as moonriver, rr as morphSepolia, sr as nautilus, lr as neonDevnet, nr as neonMainnet, cr as nexi, or as nexilix, pr as oasisTestnet, ir as oasys, dr as okc, Er as oortMainnetDev, yr as opBNB, fr as opBNBTestnet, ur as optimism, hr as optimismGoerli, xr as optimismSepolia, Cr as otimDevnet, wr as palm, vr as palmTestnet, Sr as pgn, Tr as pgnTestnet, Br as phoenix, Ur as playfiAlbireo, Fr as plinga, Mr as plumeTestnet, Dr as polygon, zr as polygonAmoy, Lr as polygonMumbai, Hr as polygonZkEvm, Or as polygonZkEvmCardona, Ir as polygonZkEvmTestnet, Pr as pulsechain, Nr as pulsechainV4, Rr as qMainnet, Kr as qTestnet, Gr as reyaNetwork, Vr as rollux, Xr as rolluxTestnet, jr as ronin, qr as rootstock, Zr as rootstockTestnet, Qr as rss3, Yr as rss3Sepolia, $r as saigon, _r as sapphire, es as sapphireTestnet, ts as scroll, as as scrollSepolia, rs as scrollTestnet, ss as seiDevnet, ls as sepolia, gs as shardeumSphinx, Ss as shibarium, ns as shimmer, cs as shimmerTestnet, os as skaleBlockBrawlers, is as skaleCalypso, ps as skaleCalypsoTestnet, ds as skaleCryptoBlades, ms as skaleCryptoColosseum, us as skaleEuropa, bs as skaleEuropaTestnet, hs as skaleExorde, ks as skaleHumanProtocol, xs as skaleNebula, ys as skaleNebulaTestnet, fs as skaleRazor, Es as skaleTitan, Cs as skaleTitanTestnet, ws as songbird, vs as songbirdTestnet, Us as spicy, As as stratis, Ts as syscoin, Bs as syscoinTestnet, Ms as taikoHekla, Ds as taikoJolnir, zs as taikoKatla, Ls as taikoTestnetSepolia, Fs as taraxa, Hs as taraxaTestnet, Os as telcoinTestnet, Is as telos, Ps as telosTestnet, Ns as tenet, Rs as thaiChain, Ks as thunderTestnet, Gs as vechain, Vs as wanchain, Xs as wanchainTestnet, js as wemix, qs as wemixTestnet, Zs as x1Testnet, Ws as xLayer, Zs as xLayerTestnet, Qs as xdc, Js as xdcTestnet, Ys as yooldoVerse, $s as yooldoVerseTestnet, _s as zetachain, el as zetachainAthensTestnet, tl as zhejiang, al as zilliqa, rl as zilliqaTestnet, sl as zkFair, ll as zkFairTestnet, nl as zkSync, cl as zkSyncInMemoryNode, ol as zkSyncLocalNode, il as zkSyncSepoliaTestnet, pl as zkSyncTestnet, ml as zora, bl as zoraSepolia, kl as zoraTestnet
};