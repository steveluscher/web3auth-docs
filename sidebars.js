/** @type {import('@docusaurus/plugin-content-docs/lib/types').Sidebars} */
module.exports = {
  docs: [
    // Overview Section
    {
      type: "html",
      value: "<span class='sidebarHeading'>Overview</span>",
      defaultStyle: true,
    },
    "what-is-web3auth",
    "how-web3auth-works",
    "quick-start",
    {
      type: "category",
      label: "Deciding your Product Fit",
      link: { type: "doc", id: "product-fit/product-fit" },
      items: ["product-fit/pnp-vs-core-kit", "product-fit/user-flow", "product-fit/web3auth-for-wallets", "product-fit/web3auth-for-dapps"],
    },
    {
      type: "category",
      label: "Web3Auth Infrastructure",
      link: { type: "doc", id: "infrastructure/infrastructure" },
      items: [
        "infrastructure/key-management",
        // "infrastructure/sss-vs-tss-mpc",
        {
          type: "category",
          label: "Technical Architecture",
          link: { type: "doc", id: "infrastructure/technical-architecture/technical-architecture" },
          items: [
            {
              type: "category",
              label: "Role of Nodes",
              link: { type: "doc", id: "infrastructure/technical-architecture/role-of-nodes/role-of-nodes" },
              items: [
                "infrastructure/technical-architecture/role-of-nodes/lifecycle",
                "infrastructure/technical-architecture/role-of-nodes/key-generation",
                "infrastructure/technical-architecture/role-of-nodes/logins-key-assignment",
                "infrastructure/technical-architecture/role-of-nodes/oauth2-vs-proxy-signin",
                {
                  type: "link",
                  label: "DKG Technical Specification",
                  href: "https://github.com/torusresearch/audit/blob/master/Torus_DKG_Technical_Specification.pdf",
                },
              ],
            },
          ],
        },
        "infrastructure/audits",
      ],
    },
    // Plug and Play Section
    {
      type: "html",
      value: "<span class='sidebarHeading'>Plug and Play</span>",
      defaultStyle: true,
    },
    "pnp/introduction",
    {
      type: "category",
      label: "Features",
      // link: { type: "doc", id: "pnp/features/features" },
      items: [
        {
          type: "category",
          label: "Whitelabel",
          link: { type: "doc", id: "pnp/features/whitelabel/whitelabel" },
          items: ["pnp/features/whitelabel/login-modal", "pnp/features/whitelabel/user-flow-screens", "pnp/features/whitelabel/torus-wallet-plugin"],
        },
        "pnp/features/custom-authentication",
        "pnp/features/mfa",
        // "pnp/features/session-management",
        {
          type: "category",
          label: "Server Side Verification",
          link: { type: "doc", id: "pnp/features/server-side-verification/server-side-verification" },
          items: [
            "pnp/features/server-side-verification/social-login-users",
            {
              type: "category",
              label: "External Wallets",
              collapsed: false,
              collapsible: true,
              link: { type: "doc", id: "pnp/features/server-side-verification/external-wallets" },
              items: [
                {
                  type: "link",
                  label: "Sign in with Web3",
                  href: "https://siww.web3auth.io/",
                },
                {
                  type: "link",
                  label: "Sign in with Solana",
                  href: "https://siws.web3auth.io/",
                },
                {
                  type: "link",
                  label: "Sign in with Starkware",
                  href: "https://siwst.web3auth.io/",
                },
              ],
            },
          ],
        },
        "pnp/features/interoperability",
        "pnp/features/connect-external-wallets",
        "pnp/features/dapp-share",
      ],
    },
    // "pnp/going-live",
    // {
    //   type: "category",
    //   label: "Release Notes",
    //   items: [
    //     "pnp/release-notes/web",
    //     "pnp/release-notes/android",
    //     "pnp/release-notes/ios",
    //     "pnp/release-notes/react-native",
    //     "pnp/release-notes/flutter",
    //     "pnp/release-notes/unity",
    //     "pnp/release-notes/unreal",
    //   ],
    // },
    // Core Kit Section
    {
      type: "html",
      value: "<span class='sidebarHeading'>Core Kit</span>",
      defaultStyle: true,
    },
    "core-kit/introduction",
    // "core-kit/going-live",
    // {
    //   type: "category",
    //   label: "Release Notes",
    //   items: ["core-kit/release-notes/tkey", "core-kit/release-notes/single-factor-auth", "core-kit/release-notes/node"],
    // },
    // Resources Section
    {
      type: "html",
      value: "<span class='sidebarHeading'>Resources</span>",
      defaultStyle: true,
    },
    {
      type: "category",
      label: "Dashboard Setup",
      link: { type: "doc", id: "dashboard-setup/dashboard-setup" },
      items: [
        "dashboard-setup/get-client-id",
        "dashboard-setup/enable-interoperability",
        "dashboard-setup/setup-custom-authentication",
        "dashboard-setup/billing-and-user-stats",
      ],
    },
    {
      type: "category",
      label: "Auth Provider Setup",
      link: { type: "doc", id: "auth-provider-setup/auth-provider-setup" },
      items: [
        "auth-provider-setup/verifiers",
        {
          type: "category",
          label: "Social Providers",
          link: { type: "doc", id: "auth-provider-setup/social-providers/social-providers" },
          items: [
            "auth-provider-setup/social-providers/google",
            "auth-provider-setup/social-providers/facebook",
            "auth-provider-setup/social-providers/twitch",
            "auth-provider-setup/social-providers/discord",
          ],
          collapsible: true,
          collapsed: false,
        },
        "auth-provider-setup/federated-identity-providers",
        "auth-provider-setup/byo-jwt-providers",
      ],
    },
    {
      type: "category",
      label: "Connect Blockchain",
      link: { type: "doc", id: "connect-blockchain/connect-blockchain" },
      items: [
        "connect-blockchain/multi-chain",
        {
          type: "category",
          label: "Ethereum",
          link: { type: "doc", id: "connect-blockchain/ethereum/ethereum" },
          items: [
            "connect-blockchain/ethereum/web",
            "connect-blockchain/ethereum/android",
            "connect-blockchain/ethereum/ios",
            "connect-blockchain/ethereum/react-native",
            "connect-blockchain/ethereum/flutter",
            "connect-blockchain/ethereum/unity",
          ],
        },
        "connect-blockchain/solana",
        {
          type: "category",
          label: "EVM Based Chains",
          items: [
            "connect-blockchain/polygon",
            "connect-blockchain/base",
            "connect-blockchain/bnb",
            "connect-blockchain/avalanche",
            "connect-blockchain/arbitrum",
            "connect-blockchain/optimism",
            "connect-blockchain/cronos",
            "connect-blockchain/harmony",
            "connect-blockchain/celo",
            "connect-blockchain/moonbeam",
            "connect-blockchain/moonriver",
            "connect-blockchain/klaytn",
          ],
          collapsible: true,
          collapsed: false,
        },
        {
          type: "category",
          label: "Non EVM Chains",
          items: [
            "connect-blockchain/starkex",
            "connect-blockchain/starknet",
            "connect-blockchain/tezos",
            "connect-blockchain/algorand",
            "connect-blockchain/immutablex",
            "connect-blockchain/polkadot",
            "connect-blockchain/aptos",
          ],
          collapsible: true,
          collapsed: false,
        },
      ],
    },
    "examples",
    {
      type: "category",
      label: "Troubleshooting",
      link: { type: "doc", id: "troubleshooting/troubleshooting" },
      items: [
        "troubleshooting/sdk-errors-warnings",
        "troubleshooting/error-429",
        "troubleshooting/webpack-issues",
        "troubleshooting/vite-issues",
        "troubleshooting/jwt-errors",
        "troubleshooting/different-wallet-address-issue",
        "troubleshooting/supported-browsers",
        "troubleshooting/react-big-int-error",
      ],
    },
    {
      type: "category",
      label: "Contribute",
      link: { type: "doc", id: "contribute/contribute" },
      items: ["contribute/bug-bounty"],
    },
    {
      type: "link",
      label: "Integration Builder",
      href: "/integration-builder",
    },
    {
      type: "link",
      label: "Guides",
      href: "/guides",
    },
    {
      type: "link",
      label: "SDK Reference",
      href: "/sdk",
    },
    {
      Legal: ["legal/cookie-policy", "legal/privacy-policy", "legal/terms-and-conditions"],
    },
  ],
  sdk: [
    {
      type: "html",
      value: "<span class='sidebarHeading'>Plug and Play</span>",
      defaultStyle: true,
    },
    {
      type: "category",
      label: "Web SDKs",
      link: { type: "doc", id: "sdk/web/web" },
      items: [
        {
          type: "category",
          label: "Modal SDK",
          link: { type: "doc", id: "sdk/web/modal/modal" },
          items: [
            "sdk/web/modal/initialize",
            "sdk/web/modal/usage",
            {
              type: "category",
              collapsible: true,
              collapsed: false,
              label: "Additional Settings",
              items: [
                "sdk/web/modal/whitelabel",
                "sdk/web/modal/custom-authentication",
                "sdk/web/modal/mfa",
                "sdk/web/modal/initiate-topup",
                "sdk/web/modal/show-wallet-connect",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "No Modal SDK",
          link: { type: "doc", id: "sdk/web/no-modal/no-modal" },
          items: [
            "sdk/web/no-modal/initialize",
            "sdk/web/no-modal/usage",
            {
              type: "category",
              collapsible: true,
              collapsed: false,
              label: "Additional Settings",
              items: [
                "sdk/web/no-modal/whitelabel",
                "sdk/web/no-modal/custom-authentication",
                "sdk/web/no-modal/mfa",
                "sdk/web/no-modal/initiate-topup",
                "sdk/web/no-modal/show-wallet-connect",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Helper SDKs",
          items: [
            "sdk/web/openlogin",
            "sdk/web/wagmi-connector",
            "sdk/web/web3auth-mpc"
          ],
        },
        {
          type: "category",
          label: "Adapters",
          link: { type: "doc", id: "sdk/web/adapters/adapters" },
          items: [
            "sdk/web/adapters/torus-evm",
            "sdk/web/adapters/torus-solana",
            "sdk/web/adapters/metamask",
            "sdk/web/adapters/phantom",
            "sdk/web/adapters/wallet-connect-v1",
            "sdk/web/adapters/coinbase",
            "sdk/web/adapters/slope",
            "sdk/web/adapters/solflare",
          ],
        },
        {
          type: "category",
          label: "Providers",
          link: { type: "doc", id: "sdk/web/providers/providers" },
          items: ["sdk/web/providers/evm", "sdk/web/providers/solana", "sdk/web/providers/other"],
        },
        {
          type: "category",
          label: "Plugins",
          link: { type: "doc", id: "sdk/web/plugins/plugins" },
          items: ["sdk/web/plugins/evm-wallet", "sdk/web/plugins/solana-wallet"],
        },
      ],
    },
    {
      type: "category",
      label: "Android SDK",
      link: { type: "doc", id: "sdk/android/android" },
      items: [
        "sdk/android/initialize",
        "sdk/android/usage",
        {
          type: "category",
          collapsible: true,
          collapsed: false,
          label: "Additional Settings",
          items: [
            "sdk/android/whitelabel",
            "sdk/android/custom-authentication",
            "sdk/android/mfa",
            "sdk/android/dapp-share",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "iOS SDK",
      link: { type: "doc", id: "sdk/ios/ios" },
      items: [
        "sdk/ios/initialize",
        "sdk/ios/usage",
        {
          type: "category",
          collapsible: true,
          collapsed: false,
          label: "Additional Settings",
          items: [
            "sdk/ios/whitelabel",
            "sdk/ios/custom-authentication",
            "sdk/ios/mfa",
            "sdk/ios/dapp-share",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "React Native",
      link: { type: "doc", id: "sdk/react-native/react-native" },
      items: [
        "sdk/react-native/initialize",
        "sdk/react-native/usage",
        {
          type: "category",
          collapsible: true,
          collapsed: false,
          label: "Additional Settings",
          items: [
            "sdk/react-native/whitelabel",
            "sdk/react-native/custom-authentication",
            "sdk/react-native/mfa",
            "sdk/react-native/dapp-share",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Flutter SDK",
      link: { type: "doc", id: "sdk/flutter/flutter" },
      items: [
        "sdk/flutter/initialize",
        "sdk/flutter/usage",
        {
          type: "category",
          collapsible: true,
          collapsed: false,
          label: "Additional Settings",
          items: [
            "sdk/flutter/whitelabel",
            "sdk/flutter/custom-authentication",
            "sdk/flutter/mfa",
            "sdk/flutter/dapp-share",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Unity SDK",
      link: { type: "doc", id: "sdk/unity/unity" },
      items: [
        "sdk/unity/initialize",
        "sdk/unity/usage",
        {
          type: "category",
          collapsible: true,
          collapsed: false,
          label: "Additional Settings",
          items: [
            "sdk/unity/whitelabel",
            "sdk/unity/custom-authentication",
            "sdk/unity/mfa",
            "sdk/unity/dapp-share",
          ],
        },
      ],
    },
    {
      type: "html",
      value: "<span class='sidebarHeading'>Core Kit</span>",
      defaultStyle: true,
    },
    {
      type: "category",
      label: "tKey JS SDK",
      link: { type: "doc", id: "sdk/tkey/tkey" },
      items: [
        "sdk/tkey/install",
        "sdk/tkey/initialize",
        "sdk/tkey/usage",
        {
          type: "category",
          label: "Modules",
          link: { type: "doc", id: "sdk/tkey/modules/modules" },
          items: [
            "sdk/tkey/modules/share-serialization",
            "sdk/tkey/modules/share-transfer",
            "sdk/tkey/modules/chrome-storage",
            "sdk/tkey/modules/web-storage",
            "sdk/tkey/modules/security-questions",
            "sdk/tkey/modules/seed-phrase",
            "sdk/tkey/modules/private-keys",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Single Factor Auth SDK",
      link: { type: "doc", id: "sdk/single-factor-auth/single-factor-auth" },
      items: ["sdk/single-factor-auth/initialize", "sdk/single-factor-auth/authentication", "sdk/single-factor-auth/usage"],
    },
    {
      type: "category",
      label: "Node SDK",
      link: { type: "doc", id: "sdk/node/node" },
      items: ["sdk/node/initialize", "sdk/node/authentication", "sdk/node/usage"],
    },
  ],
};
