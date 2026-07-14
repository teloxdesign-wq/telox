<!DOCTYPE html><html lang="en" data-theme="dark" data-theme-option="dark"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><script type="application/json" id="bolt-build-info">{"revision":"3db82bf","release":"3db82bf8e6965c3b648d575b9e71b35e742f793f"}</script><script>(function setMinViewport() {
  const MIN_WIDTH = 360;
  const meta = document.querySelector('meta[name="viewport"]');

  if (!meta) {
    return;
  }

  function update() {
    /**
     * Never let the layout drop below the min width: on narrower screens the
     * browser scales the page down to fit instead of reflowing or scrolling.
     */
    const width = Math.max(window.screen.width, MIN_WIDTH);
    meta.setAttribute('content', 'width=' + width);
  }

  update();
  window.addEventListener('resize', update);
  window.addEventListener('orientationchange', update);
})();
</script><title>teloxdesign-wq/telox (imported from GitHub) - Bolt.new</title><meta name="description" content="Prompt, run, edit &amp; publish apps"/><meta property="og:type" content="object"/><meta property="og:site_name" content="bolt.new"/><meta property="og:title" content="teloxdesign-wq/telox (imported from GitHub) - Bolt.new"/><meta property="og:description" content="Prompt, run, edit &amp; publish apps"/><meta property="og:image" content="https://social-img.staticblitz.com/bolt-projects/github-f3pd7ru6"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="teloxdesign-wq/telox (imported from GitHub) - Bolt.new"/><meta name="twitter:description" content="Prompt, run, edit &amp; publish apps"/><meta name="twitter:image" content="https://social-img.staticblitz.com/bolt-projects/github-f3pd7ru6"/><meta name="twitter:site" content="@StackBlitz"/><script>(function detectTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  globalThis.prefersDark = prefersDark;

  const themeOption = document.documentElement.getAttribute('data-theme-option');

  if (themeOption === 'system') {
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }
})();
</script><link rel="stylesheet" href="/assets/EmptyState-scVdpVyl.css"/><link rel="stylesheet" href="/assets/root-CDh5bcM8.css"/><link rel="stylesheet" href="/assets/LightRaysCloud-_RGYDnNX.css"/><link rel="stylesheet" href="/assets/LightRays-apN2LHcc.css"/><link rel="icon" href="/static/favicon.svg" type="image/svg+xml"/><link rel="icon" href="/static/favicon-48x48.png" type="image/png" sizes="48x48"/><link rel="icon" href="/static/favicon-96x96.png" type="image/png" sizes="96x96"/><link rel="icon" href="/static/favicon-192x192.png" type="image/png" sizes="192x192"/><link rel="apple-touch-icon" href="/static/apple-touch-icon.png" sizes="180x180"/><link rel="stylesheet" href="/assets/tailwind-compat-DeJTMLhw.css"/><link rel="stylesheet" href="/assets/index-BiG6FDMl.css"/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/><link rel="preload" href="/static/fonts/inter-display-semibold.woff2" as="font" type="font/woff2" crossorigin="anonymous"/><link rel="preload" href="/static/fonts/inter-display-bold.woff2" as="font" type="font/woff2" crossorigin="anonymous"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap"/><link rel="stylesheet" href="/static/fonts/fonts.css"/><link rel="stylesheet" href="/assets/Chat-Czbss2A6.css"/><link rel="stylesheet" href="/assets/Markdown-Cy6kMErP.css"/><link rel="stylesheet" href="/assets/Prompt-BAuldNfg.css"/><script>(function createWorkaroundGlobal() {
  /**
   * A bug in wrangler injects a __name call in these script tags.
   *
   * @see https://github.com/cloudflare/workers-sdk/issues/7107#issuecomment-2454829854
   */
  window['__' + 'name'] = () => {
    // noop
  };
})();
</script><script>// prevent modifications to the DOM until hydration is finished
(function blockDOMMutations() {
  let allowed = false;

  const observer = new MutationObserver((mutations) => {
    observer.disconnect();

    // we iterate backwards so that the oldValue is always correct by the end, in the case of simultaneous changes
    mutations.reverse().forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          /**
           * Modifications to the head do not affect hydration (vite uses this for HMR styles).
           *
           * Nodes added as children of the body do not affect hydration (WebContainer uses this for the iframe).
           */
          if ([document.head, document.body, document.documentElement].includes(node.parentNode)) {
            return;
          }

          if (node.parentNode) {
            node.parentNode.removeChild(node);
          }
        });

        mutation.removedNodes.forEach((node) => {
          if (mutation.previousSibling) {
            mutation.target.insertBefore(node, mutation.previousSibling.nextSibling);
          } else if (mutation.target) {
            mutation.target.appendChild(node);
          }
        });
      }

      if (mutation.type === 'attributes') {
        const { target, attributeName, oldValue } = mutation;

        if (attributeName) {
          if (oldValue === null) {
            target.removeAttribute(attributeName);
          } else {
            target.setAttribute(attributeName, oldValue);
          }
        }
      }

      if (mutation.type === 'characterData') {
        mutation.target.data = mutation.oldValue ?? '';
      }
    });

    observe();
  });

  function observe() {
    /**
     * Deferred module scripts (the client entry that calls __allowDOMMutations and
     * starts hydration) run BEFORE DOMContentLoaded. Without this guard the observer
     * would re-arm here after hydration has already begun and revert React's own DOM
     * writes, breaking hydration ("Root did not complete").
     */
    if (allowed) {
      return;
    }

    observer.observe(document, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeOldValue: true,
      characterData: true,
      characterDataOldValue: true,
    });
  }

  window.addEventListener('DOMContentLoaded', observe);

  window.__allowDOMMutations = () => {
    allowed = true;
    window.removeEventListener('DOMContentLoaded', observe);
    observer.disconnect();
    window.__loadingPrompt = document.querySelector('textarea')?.value;
  };
})();
</script></head><body class="bg-bolt-ds-bgAlt"><div id="root" class="w-full h-full"><div class="flex size-full"><div class="size-full flex flex-col"><div class="size-full flex flex-col border-bolt-ds-borderOutline light:bg-bolt-ds-bg"><!--$--><div role="status" aria-label="Loading" class="fixed inset-0 flex items-center justify-center bg-bolt-ds-bgSecondary"><div class="i-bolt:logos-bolt-b size-16 text-bolt-ds-textTertiary opacity-50 animate-pulse"></div></div><!--/$--></div></div></div><section aria-label="Notifications alt+T" tabindex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section></div><script>((STORAGE_KEY3, restoreKey) => {
    if (!window.history.state || !window.history.state.key) {
      let key2 = Math.random().toString(32).slice(2);
      window.history.replaceState({
        key: key2
      }, "");
    }
    try {
      let positions = JSON.parse(sessionStorage.getItem(STORAGE_KEY3) || "{}");
      let storedY = positions[restoreKey || window.history.state.key];
      if (typeof storedY === "number") {
        window.scrollTo(0, storedY);
      }
    } catch (error7) {
      console.error(error7);
      sessionStorage.removeItem(STORAGE_KEY3);
    }
  })("positions", null)</script><link rel="modulepreload" href="/assets/entry.client-Hm6bfcWL.js"/><link rel="modulepreload" href="/assets/react-vendor-eXveGTm0.js"/><link rel="modulepreload" href="/assets/Toast-CdtQeD0m.js"/><link rel="modulepreload" href="/assets/EmptyState-DbPOglfl.js"/><link rel="modulepreload" href="/assets/internal-g3xxCx4a.js"/><link rel="modulepreload" href="/assets/constants-BVvrI3gl.js"/><link rel="modulepreload" href="/assets/sentry.client-CTlkQ2HL.js"/><link rel="modulepreload" href="/assets/performance-CCtWU46v.js"/><link rel="modulepreload" href="/assets/node-DXIkIHKm.js"/><link rel="modulepreload" href="/assets/breadcrumbs-CU2D61VD.js"/><link rel="modulepreload" href="/assets/bundle-mjs-5MOacnAK.js"/><link rel="modulepreload" href="/assets/index-CpiZbNvP.js"/><link rel="modulepreload" href="/assets/index-mw_D8U7y.js"/><link rel="modulepreload" href="/assets/stripIndents-pFh2tRUP.js"/><link rel="modulepreload" href="/assets/compare-Br3z3FUS-DP0i2jnV.js"/><link rel="modulepreload" href="/assets/client-only-C95A7mV1.js"/><link rel="modulepreload" href="/assets/analytics-CYOhtNEj.js"/><link rel="modulepreload" href="/assets/oauth-DM372jE5.js"/><link rel="modulepreload" href="/assets/ErrorBoundary-wk-Ah1dO.js"/><link rel="modulepreload" href="/assets/growthbook-BCnrX3sp.js"/><link rel="modulepreload" href="/assets/theme-DhBwBCgj.js"/><link rel="modulepreload" href="/assets/index-C4FbzPKq.js"/><link rel="modulepreload" href="/assets/login-BYIG6uIu.js"/><link rel="modulepreload" href="/assets/settings-Dp8dcj8L.js"/><link rel="modulepreload" href="/assets/Alert-Cix0IOLm.js"/><link rel="modulepreload" href="/assets/cello-attribution-CvNWcY-K.js"/><link rel="modulepreload" href="/assets/login-ao6KOO3g.js"/><link rel="modulepreload" href="/assets/preload-helper-2mcYJXfA.js"/><link rel="modulepreload" href="/assets/authFlowRoutes-0PvSSBdp.js"/><link rel="modulepreload" href="/assets/cello-config-DYx1Gvkk.js"/><link rel="modulepreload" href="/assets/queryClient-BsLpWLYJ.js"/><link rel="modulepreload" href="/assets/QueryClientProvider-BOXWkUao.js"/><link rel="modulepreload" href="/assets/urls-C5Zd6i8e.js"/><link rel="modulepreload" href="/assets/database-tabs-DvZimEH-.js"/><link rel="modulepreload" href="/assets/logger-DSDnpB7z.js"/><link rel="modulepreload" href="/assets/index-DyxeRtzf.js"/><link rel="modulepreload" href="/assets/Header-CVKvpdot.js"/><link rel="modulepreload" href="/assets/lifecycle-events-B47IGqIK.js"/><link rel="modulepreload" href="/assets/config-DWMPqNt8.js"/><link rel="modulepreload" href="/assets/classNames-Bt8A0frr.js"/><link rel="modulepreload" href="/assets/Logo-C60Iurcp.js"/><link rel="modulepreload" href="/assets/Link-CDzUh2f2.js"/><link rel="modulepreload" href="/assets/Avatar-BirguWvD.js"/><link rel="modulepreload" href="/assets/store-CBpo2ni6.js"/><link rel="modulepreload" href="/assets/index-DNGa4-6b.js"/><link rel="modulepreload" href="/assets/ai-DRsxWALo.js"/><link rel="modulepreload" href="/assets/index-DRXXH9YX.js"/><link rel="modulepreload" href="/assets/invariant-DO_RTA5C.js"/><link rel="modulepreload" href="/assets/chat-started-CSv3_ecf.js"/><link rel="modulepreload" href="/assets/noops-TSSrUl-c.js"/><link rel="modulepreload" href="/assets/page-visibility-6WPc68Q5.js"/><link rel="modulepreload" href="/assets/util-CZ4hggdC.js"/><link rel="modulepreload" href="/assets/url-x_E2PVS_.js"/><link rel="modulepreload" href="/assets/index-BxE9UzoT.js"/><link rel="modulepreload" href="/assets/text_line_stream-DtdTslVH.js"/><link rel="modulepreload" href="/assets/workDir-swQ4-CX4.js"/><link rel="modulepreload" href="/assets/chat-hooks-BD_djxiC.js"/><link rel="modulepreload" href="/assets/path-C47uQrgn.js"/><link rel="modulepreload" href="/assets/download-rUGbmDk0.js"/><link rel="modulepreload" href="/assets/plural-CG7PYDXy.js"/><link rel="modulepreload" href="/assets/artifacts-DxQBXx56.js"/><link rel="modulepreload" href="/assets/description-BrPYZWab.js"/><link rel="modulepreload" href="/assets/unreachable-dJ0nIuQ4.js"/><link rel="modulepreload" href="/assets/useDuplicateProject.client-BehwQYt2.js"/><link rel="modulepreload" href="/assets/useQuery-ftbMyxJN.js"/><link rel="modulepreload" href="/assets/query-DrV6Nbpx.js"/><link rel="modulepreload" href="/assets/LoadingDots-6fTW8iXX.js"/><link rel="modulepreload" href="/assets/netlify-B7nhQmbK.js"/><link rel="modulepreload" href="/assets/useMutation-BBzPjAAm.js"/><link rel="modulepreload" href="/assets/mutation-BhUxlytM.js"/><link rel="modulepreload" href="/assets/queryOptions-dfte2Pzq.js"/><link rel="modulepreload" href="/assets/domains-CBRTUzGt.js"/><link rel="modulepreload" href="/assets/parse-domain-Djua73yQ.js"/><link rel="modulepreload" href="/assets/withSpinner-DGE-K6ya.js"/><link rel="modulepreload" href="/assets/openWithStackblitzAuth-B_870J_E.js"/><link rel="modulepreload" href="/assets/menu-BpukjQQm.js"/><link rel="modulepreload" href="/assets/useProjectsOwnerContext-wxsIInZB.js"/><link rel="modulepreload" href="/assets/useProjectRename-WEtW9vXO.js"/><link rel="modulepreload" href="/assets/animationVariants-4-h6CqJM.js"/><link rel="modulepreload" href="/assets/easings-CHv8XFKy.js"/><link rel="modulepreload" href="/assets/teamTemplates-eXgEbYOn.js"/><link rel="modulepreload" href="/assets/mutationOptions-DuEc1oJu.js"/><link rel="modulepreload" href="/assets/version-history-DFdO92Mq.js"/><link rel="modulepreload" href="/assets/LazyLoadWrapper-BscXx96m.js"/><link rel="modulepreload" href="/assets/LightRays.client-Dz34-1e_.js"/><link rel="modulepreload" href="/assets/LightRaysCore-BWNLM3-4.js"/><link rel="modulepreload" href="/assets/LightRays.module-Bxd9H68z.js"/><link rel="modulepreload" href="/assets/detectBrowser-DCyV7zrH.js"/><link rel="modulepreload" href="/assets/LightRaysCloud-B1Kg1Rp0.js"/><link rel="modulepreload" href="/assets/infiniteQueryBehavior-DPWPR94H.js"/><link rel="modulepreload" href="/assets/root-DLmc1_p8.js"/><link rel="modulepreload" href="/assets/AgentSwitchDialog-u2PsVgeb.js"/><link rel="modulepreload" href="/assets/organizations-BEmX2Wd8.js"/><link rel="modulepreload" href="/assets/useChatAgent-BWgfLfYI.js"/><link rel="modulepreload" href="/assets/MembersTable-Dea61aJa.js"/><link rel="modulepreload" href="/assets/designSystemStepper-DrW8_8kq.js"/><link rel="modulepreload" href="/assets/persistentBanner-CQAldaY8.js"/><link rel="modulepreload" href="/assets/team-BT-yYT9j.js"/><link rel="modulepreload" href="/assets/confetti-DP4n26Cd.js"/><link rel="modulepreload" href="/assets/Skeletons-CqL-uO1T.js"/><link rel="modulepreload" href="/assets/useDesignSystemDraft-jCugpKHm.js"/><link rel="modulepreload" href="/assets/useDesignSystems-DIo3tDWX.js"/><link rel="modulepreload" href="/assets/IndexLayout-BYDMZuDr.js"/><link rel="modulepreload" href="/assets/TransferProjectDialogContent-DMneP9BO.js"/><link rel="modulepreload" href="/assets/StripeLogo-DvvQv9LP.js"/><link rel="modulepreload" href="/assets/PricingSelector-MczAKmRo.js"/><link rel="modulepreload" href="/assets/format-FBMKGxjf.js"/><link rel="modulepreload" href="/assets/organizations-DlzWA1Pg.js"/><link rel="modulepreload" href="/assets/meta-BJ8nQAJU.js"/><link rel="modulepreload" href="/assets/agent-CbTgfwlC.js"/><link rel="modulepreload" href="/assets/SearchInput-BUJF1_ek.js"/><link rel="modulepreload" href="/assets/ActionMenu-SOwQiHs0.js"/><link rel="modulepreload" href="/assets/useRequestUpgrade-MyvTKy9W.js"/><link rel="modulepreload" href="/assets/AccountDisplay-DyUilvIj.js"/><link rel="modulepreload" href="/assets/plan-info-bOltHqlQ.js"/><link rel="modulepreload" href="/assets/ClippedTextTooltip-D0KQZyZQ.js"/><link rel="modulepreload" href="/assets/Pagination-Dmm-cm2n.js"/><link rel="modulepreload" href="/assets/usePaginatedData-fsun7dtB.js"/><link rel="modulepreload" href="/assets/confetti.module-W9IyG_S9.js"/><link rel="modulepreload" href="/assets/designSystems-eI8iArQf.js"/><link rel="modulepreload" href="/assets/index-CWF52E-a.js"/><link rel="modulepreload" href="/assets/index-Da7tqQ08.js"/><link rel="modulepreload" href="/assets/formatDistanceToNow-Q5mxsr9y.js"/><link rel="modulepreload" href="/assets/constructNow-D13YYkKN.js"/><link rel="modulepreload" href="/assets/command-CQFMXNwE.js"/><link rel="modulepreload" href="/assets/AccountSelector.client-DZUs2dvX.js"/><link rel="modulepreload" href="/assets/teamPlans-BHkFEuXV.js"/><link rel="modulepreload" href="/assets/index-B73H_akJ.js"/><link rel="modulepreload" href="/assets/index-DtIIRuyq.js"/><link rel="modulepreload" href="/assets/github-p8Gk9Fqy.js"/><link rel="modulepreload" href="/assets/proctor-BwnwkI-Y.js"/><link rel="modulepreload" href="/assets/init-ref-camhBRwR.js"/><link rel="modulepreload" href="/assets/Sheet-V9guxEo7.js"/><link rel="modulepreload" href="/assets/subscription-BrluS7RW.js"/><link rel="modulepreload" href="/assets/useInitializeUserStore-C-MdK9Wn.js"/><link rel="modulepreload" href="/assets/token-CVTly7hN.js"/><link rel="modulepreload" href="/assets/AccountSelectMenu-BYXVpUzh.js"/><link rel="modulepreload" href="/assets/_chat-C872KVrc.js"/><link rel="modulepreload" href="/assets/Chat.client-hv7nQu6P.js"/><link rel="modulepreload" href="/assets/useProjectCollaborationV2-Br11p0kN.js"/><link rel="modulepreload" href="/assets/index-CzrRaM7B.js"/><link rel="modulepreload" href="/assets/Markdown-v8em3RMW.js"/><link rel="modulepreload" href="/assets/index-D5Iscai9.js"/><link rel="modulepreload" href="/assets/stripe-CXA8aV2v.js"/><link rel="modulepreload" href="/assets/deploy.client-CgBamRia.js"/><link rel="modulepreload" href="/assets/UpgradeLink-Cy2HZyQ_.js"/><link rel="modulepreload" href="/assets/useFreeTrialVariant-CSCr8jQ9.js"/><link rel="modulepreload" href="/assets/SupabaseConfigurationDialog.client-DbuzY8i9.js"/><link rel="modulepreload" href="/assets/support-D-upHLdM.js"/><link rel="modulepreload" href="/assets/csv-DNicIMRr.js"/><link rel="modulepreload" href="/assets/useApplications-D6VlzGlq.js"/><link rel="modulepreload" href="/assets/UpgradePlanDialogs-3JB6ttYL.js"/><link rel="modulepreload" href="/assets/UpdatePlanScreenDialog-B8YPc7by.js"/><link rel="modulepreload" href="/assets/IntervalSelector-gKf10V_G.js"/><link rel="modulepreload" href="/assets/tokens-stats-BWsF6vgl.js"/><link rel="modulepreload" href="/assets/parseISO-47UPI2M8.js"/><link rel="modulepreload" href="/assets/DesignSources-Cw3YWBX1.js"/><link rel="modulepreload" href="/assets/zod-C68WAwPY.js"/><link rel="modulepreload" href="/assets/index.esm-p9MZrO69.js"/><link rel="modulepreload" href="/assets/index-Bn8eywsJ.js"/><link rel="modulepreload" href="/assets/getDefaultOptions-BgDbzmDV.js"/><link rel="modulepreload" href="/assets/TextArea-DIpJtGW7.js"/><link rel="modulepreload" href="/assets/ProgressBar-CnXuR_fA.js"/><link rel="modulepreload" href="/assets/ConfirmationDialog.client-C8_FsQ2x.js"/><link rel="modulepreload" href="/assets/Prompt-Dhuli1lW.js"/><link rel="modulepreload" href="/assets/scroll-overflow-mask-CbZfhFCM.js"/><link rel="modulepreload" href="/assets/index-733DDPFr.js"/><link rel="modulepreload" href="/assets/skill-frontmatter-BrmbUIJA.js"/><link rel="modulepreload" href="/assets/store-DdO433Qh.js"/><link rel="modulepreload" href="/assets/selectors-DVt4ymyk.js"/><link rel="modulepreload" href="/assets/useSelectedDesignSystem-DRjhcSU8.js"/><link rel="modulepreload" href="/assets/mcp-known-servers-lp-kcUgj.js"/><link rel="modulepreload" href="/assets/mcp-BpVPotcx.js"/><link rel="modulepreload" href="/assets/useEnsureSkillsLoaded-jv_mlYa3.js"/><link rel="modulepreload" href="/assets/ConnectToFigmaDialog-DHBoBkA1.js"/><link rel="modulepreload" href="/assets/useTokenRefresh-CqERrWuX.js"/><link rel="modulepreload" href="/assets/DiscordSupportModal.client-DgM_6IUJ.js"/><link rel="modulepreload" href="/assets/utils-B9az3Bbj.js"/><link rel="modulepreload" href="/assets/useTrackOnMount-CSXUvBXL.js"/><link rel="modulepreload" href="/assets/differenceInDays-D4DuZ4Yf.js"/><link rel="modulepreload" href="/assets/isYesterday-B8fL6JnG.js"/><link rel="modulepreload" href="/assets/addDays-LM_kdQV6.js"/><link rel="modulepreload" href="/assets/sso-XFs3vgDq.js"/><link rel="modulepreload" href="/assets/AllProjects-C8n0g0jH.js"/><link rel="modulepreload" href="/assets/FiltersBar-BDWujguO.js"/><link rel="modulepreload" href="/assets/RecentProjects-D_b76r3a.js"/><link rel="modulepreload" href="/assets/sheetNavigation-BpmDOmMM.js"/><link rel="modulepreload" href="/assets/command-CtjqSbJK.js"/><link rel="modulepreload" href="/assets/chart-ALSI-EMa.js"/><link rel="modulepreload" href="/assets/serialize-messages-B3NpRyz4.js"/><link rel="modulepreload" href="/assets/client-error-DejbHZY5.js"/><link rel="modulepreload" href="/assets/theme-CaxmedKW.js"/><link rel="modulepreload" href="/assets/unpublish-project-B84qOsxW.js"/><link rel="modulepreload" href="/assets/organizationMembers-D5xYL1Vj.js"/><link rel="modulepreload" href="/assets/mcp-oauth-listener-CYhKDAWS.js"/><link rel="modulepreload" href="/assets/index-C_s9gSTi.js"/><link rel="modulepreload" href="/assets/prepare-body-BTgOFTN2.js"/><link rel="modulepreload" href="/assets/usePaymentIntentStatusMessage-B3CvEB1F.js"/><link rel="modulepreload" href="/assets/_chat.~._slug-SLMHTEQP.js"/><link rel="modulepreload" href="/assets/_chat.~._slug._index-DmPZdu6N.js"/><script>window.__remixContext = {"basename":"/","future":{"v3_fetcherPersist":true,"v3_relativeSplatPath":true,"v3_throwAbortReason":true,"v3_routeConfig":false,"v3_singleFetch":true,"v3_lazyRouteDiscovery":true,"unstable_optimizeDeps":false},"isSpaMode":false};window.__remixContext.stream = new ReadableStream({start(controller){window.__remixContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());</script><script type="module" async="">;
import * as route0 from "/assets/root-DLmc1_p8.js";
import * as route1 from "/assets/_chat-C872KVrc.js";
import * as route2 from "/assets/_chat.~._slug-SLMHTEQP.js";
import * as route3 from "/assets/_chat.~._slug._index-DmPZdu6N.js";
window.__remixManifest = {
  "entry": {
    "module": "/assets/entry.client-Hm6bfcWL.js",
    "imports": [
      "/assets/react-vendor-eXveGTm0.js",
      "/assets/Toast-CdtQeD0m.js",
      "/assets/EmptyState-DbPOglfl.js",
      "/assets/internal-g3xxCx4a.js",
      "/assets/constants-BVvrI3gl.js",
      "/assets/sentry.client-CTlkQ2HL.js",
      "/assets/performance-CCtWU46v.js",
      "/assets/node-DXIkIHKm.js",
      "/assets/breadcrumbs-CU2D61VD.js",
      "/assets/bundle-mjs-5MOacnAK.js",
      "/assets/index-CpiZbNvP.js"
    ],
    "css": [
      "/assets/EmptyState-scVdpVyl.css"
    ]
  },
  "routes": {
    "root": {
      "id": "root",
      "path": "",
      "hasAction": false,
      "hasLoader": true,
      "hasClientAction": false,
      "hasClientLoader": false,
      "hasErrorBoundary": true,
      "module": "/assets/root-DLmc1_p8.js",
      "imports": [
        "/assets/react-vendor-eXveGTm0.js",
        "/assets/Toast-CdtQeD0m.js",
        "/assets/EmptyState-DbPOglfl.js",
        "/assets/internal-g3xxCx4a.js",
        "/assets/constants-BVvrI3gl.js",
        "/assets/sentry.client-CTlkQ2HL.js",
        "/assets/performance-CCtWU46v.js",
        "/assets/node-DXIkIHKm.js",
        "/assets/breadcrumbs-CU2D61VD.js",
        "/assets/bundle-mjs-5MOacnAK.js",
        "/assets/index-CpiZbNvP.js",
        "/assets/index-mw_D8U7y.js",
        "/assets/stripIndents-pFh2tRUP.js",
        "/assets/compare-Br3z3FUS-DP0i2jnV.js",
        "/assets/client-only-C95A7mV1.js",
        "/assets/analytics-CYOhtNEj.js",
        "/assets/oauth-DM372jE5.js",
        "/assets/ErrorBoundary-wk-Ah1dO.js",
        "/assets/growthbook-BCnrX3sp.js",
        "/assets/theme-DhBwBCgj.js",
        "/assets/index-C4FbzPKq.js",
        "/assets/login-BYIG6uIu.js",
        "/assets/settings-Dp8dcj8L.js",
        "/assets/Alert-Cix0IOLm.js",
        "/assets/cello-attribution-CvNWcY-K.js",
        "/assets/login-ao6KOO3g.js",
        "/assets/preload-helper-2mcYJXfA.js",
        "/assets/authFlowRoutes-0PvSSBdp.js",
        "/assets/cello-config-DYx1Gvkk.js",
        "/assets/queryClient-BsLpWLYJ.js",
        "/assets/QueryClientProvider-BOXWkUao.js",
        "/assets/urls-C5Zd6i8e.js",
        "/assets/database-tabs-DvZimEH-.js",
        "/assets/logger-DSDnpB7z.js",
        "/assets/index-DyxeRtzf.js",
        "/assets/Header-CVKvpdot.js",
        "/assets/lifecycle-events-B47IGqIK.js",
        "/assets/config-DWMPqNt8.js",
        "/assets/classNames-Bt8A0frr.js",
        "/assets/Logo-C60Iurcp.js",
        "/assets/Link-CDzUh2f2.js",
        "/assets/Avatar-BirguWvD.js",
        "/assets/store-CBpo2ni6.js",
        "/assets/index-DNGa4-6b.js",
        "/assets/ai-DRsxWALo.js",
        "/assets/index-DRXXH9YX.js",
        "/assets/invariant-DO_RTA5C.js",
        "/assets/chat-started-CSv3_ecf.js",
        "/assets/noops-TSSrUl-c.js",
        "/assets/page-visibility-6WPc68Q5.js",
        "/assets/util-CZ4hggdC.js",
        "/assets/url-x_E2PVS_.js",
        "/assets/index-BxE9UzoT.js",
        "/assets/text_line_stream-DtdTslVH.js",
        "/assets/workDir-swQ4-CX4.js",
        "/assets/chat-hooks-BD_djxiC.js",
        "/assets/path-C47uQrgn.js",
        "/assets/download-rUGbmDk0.js",
        "/assets/plural-CG7PYDXy.js",
        "/assets/artifacts-DxQBXx56.js",
        "/assets/description-BrPYZWab.js",
        "/assets/unreachable-dJ0nIuQ4.js",
        "/assets/useDuplicateProject.client-BehwQYt2.js",
        "/assets/useQuery-ftbMyxJN.js",
        "/assets/query-DrV6Nbpx.js",
        "/assets/LoadingDots-6fTW8iXX.js",
        "/assets/netlify-B7nhQmbK.js",
        "/assets/useMutation-BBzPjAAm.js",
        "/assets/mutation-BhUxlytM.js",
        "/assets/queryOptions-dfte2Pzq.js",
        "/assets/domains-CBRTUzGt.js",
        "/assets/parse-domain-Djua73yQ.js",
        "/assets/withSpinner-DGE-K6ya.js",
        "/assets/openWithStackblitzAuth-B_870J_E.js",
        "/assets/menu-BpukjQQm.js",
        "/assets/useProjectsOwnerContext-wxsIInZB.js",
        "/assets/useProjectRename-WEtW9vXO.js",
        "/assets/animationVariants-4-h6CqJM.js",
        "/assets/easings-CHv8XFKy.js",
        "/assets/teamTemplates-eXgEbYOn.js",
        "/assets/mutationOptions-DuEc1oJu.js",
        "/assets/version-history-DFdO92Mq.js",
        "/assets/LazyLoadWrapper-BscXx96m.js",
        "/assets/LightRays.client-Dz34-1e_.js",
        "/assets/LightRaysCore-BWNLM3-4.js",
        "/assets/LightRays.module-Bxd9H68z.js",
        "/assets/detectBrowser-DCyV7zrH.js",
        "/assets/LightRaysCloud-B1Kg1Rp0.js",
        "/assets/infiniteQueryBehavior-DPWPR94H.js"
      ],
      "css": [
        "/assets/EmptyState-scVdpVyl.css",
        "/assets/root-CDh5bcM8.css",
        "/assets/LightRaysCloud-_RGYDnNX.css",
        "/assets/LightRays-apN2LHcc.css"
      ]
    },
    "routes/_chat": {
      "id": "routes/_chat",
      "parentId": "root",
      "hasAction": false,
      "hasLoader": true,
      "hasClientAction": false,
      "hasClientLoader": false,
      "hasErrorBoundary": false,
      "module": "/assets/_chat-C872KVrc.js",
      "imports": [
        "/assets/preload-helper-2mcYJXfA.js",
        "/assets/react-vendor-eXveGTm0.js",
        "/assets/index-mw_D8U7y.js",
        "/assets/client-only-C95A7mV1.js",
        "/assets/EmptyState-DbPOglfl.js",
        "/assets/AgentSwitchDialog-u2PsVgeb.js",
        "/assets/index-C4FbzPKq.js",
        "/assets/Toast-CdtQeD0m.js",
        "/assets/organizations-BEmX2Wd8.js",
        "/assets/constants-BVvrI3gl.js",
        "/assets/useChatAgent-BWgfLfYI.js",
        "/assets/MembersTable-Dea61aJa.js",
        "/assets/designSystemStepper-DrW8_8kq.js",
        "/assets/persistentBanner-CQAldaY8.js",
        "/assets/team-BT-yYT9j.js",
        "/assets/classNames-Bt8A0frr.js",
        "/assets/withSpinner-DGE-K6ya.js",
        "/assets/analytics-CYOhtNEj.js",
        "/assets/oauth-DM372jE5.js",
        "/assets/settings-Dp8dcj8L.js",
        "/assets/confetti-DP4n26Cd.js",
        "/assets/Alert-Cix0IOLm.js",
        "/assets/Skeletons-CqL-uO1T.js",
        "/assets/useDesignSystemDraft-jCugpKHm.js",
        "/assets/useDesignSystems-DIo3tDWX.js",
        "/assets/useDuplicateProject.client-BehwQYt2.js",
        "/assets/IndexLayout-BYDMZuDr.js",
        "/assets/config-DWMPqNt8.js",
        "/assets/TransferProjectDialogContent-DMneP9BO.js",
        "/assets/urls-C5Zd6i8e.js",
        "/assets/menu-BpukjQQm.js",
        "/assets/logger-DSDnpB7z.js",
        "/assets/useQuery-ftbMyxJN.js",
        "/assets/StripeLogo-DvvQv9LP.js",
        "/assets/index-DNGa4-6b.js",
        "/assets/queryOptions-dfte2Pzq.js",
        "/assets/PricingSelector-MczAKmRo.js",
        "/assets/format-FBMKGxjf.js",
        "/assets/organizations-DlzWA1Pg.js",
        "/assets/LazyLoadWrapper-BscXx96m.js",
        "/assets/meta-BJ8nQAJU.js",
        "/assets/noops-TSSrUl-c.js",
        "/assets/bundle-mjs-5MOacnAK.js",
        "/assets/invariant-DO_RTA5C.js",
        "/assets/internal-g3xxCx4a.js",
        "/assets/sentry.client-CTlkQ2HL.js",
        "/assets/index-DRXXH9YX.js",
        "/assets/chat-started-CSv3_ecf.js",
        "/assets/page-visibility-6WPc68Q5.js",
        "/assets/cello-attribution-CvNWcY-K.js",
        "/assets/util-CZ4hggdC.js",
        "/assets/url-x_E2PVS_.js",
        "/assets/index-BxE9UzoT.js",
        "/assets/chat-hooks-BD_djxiC.js",
        "/assets/agent-CbTgfwlC.js",
        "/assets/SearchInput-BUJF1_ek.js",
        "/assets/plural-CG7PYDXy.js",
        "/assets/ActionMenu-SOwQiHs0.js",
        "/assets/useRequestUpgrade-MyvTKy9W.js",
        "/assets/AccountDisplay-DyUilvIj.js",
        "/assets/Avatar-BirguWvD.js",
        "/assets/plan-info-bOltHqlQ.js",
        "/assets/ClippedTextTooltip-D0KQZyZQ.js",
        "/assets/Pagination-Dmm-cm2n.js",
        "/assets/usePaginatedData-fsun7dtB.js",
        "/assets/openWithStackblitzAuth-B_870J_E.js",
        "/assets/index-CpiZbNvP.js",
        "/assets/index-DyxeRtzf.js",
        "/assets/theme-DhBwBCgj.js",
        "/assets/confetti.module-W9IyG_S9.js",
        "/assets/QueryClientProvider-BOXWkUao.js",
        "/assets/useMutation-BBzPjAAm.js",
        "/assets/mutation-BhUxlytM.js",
        "/assets/designSystems-eI8iArQf.js",
        "/assets/mutationOptions-DuEc1oJu.js",
        "/assets/index-CWF52E-a.js",
        "/assets/LoadingDots-6fTW8iXX.js",
        "/assets/netlify-B7nhQmbK.js",
        "/assets/domains-CBRTUzGt.js",
        "/assets/parse-domain-Djua73yQ.js",
        "/assets/Logo-C60Iurcp.js",
        "/assets/Header-CVKvpdot.js",
        "/assets/login-ao6KOO3g.js",
        "/assets/LightRaysCloud-B1Kg1Rp0.js",
        "/assets/lifecycle-events-B47IGqIK.js",
        "/assets/login-BYIG6uIu.js",
        "/assets/detectBrowser-DCyV7zrH.js",
        "/assets/Link-CDzUh2f2.js",
        "/assets/store-CBpo2ni6.js",
        "/assets/description-BrPYZWab.js",
        "/assets/useProjectsOwnerContext-wxsIInZB.js",
        "/assets/useProjectRename-WEtW9vXO.js",
        "/assets/animationVariants-4-h6CqJM.js",
        "/assets/easings-CHv8XFKy.js",
        "/assets/teamTemplates-eXgEbYOn.js",
        "/assets/version-history-DFdO92Mq.js",
        "/assets/workDir-swQ4-CX4.js",
        "/assets/index-Da7tqQ08.js",
        "/assets/formatDistanceToNow-Q5mxsr9y.js",
        "/assets/constructNow-D13YYkKN.js",
        "/assets/command-CQFMXNwE.js",
        "/assets/AccountSelector.client-DZUs2dvX.js",
        "/assets/teamPlans-BHkFEuXV.js",
        "/assets/index-B73H_akJ.js",
        "/assets/index-DtIIRuyq.js",
        "/assets/github-p8Gk9Fqy.js",
        "/assets/cello-config-DYx1Gvkk.js",
        "/assets/authFlowRoutes-0PvSSBdp.js",
        "/assets/proctor-BwnwkI-Y.js",
        "/assets/init-ref-camhBRwR.js",
        "/assets/Sheet-V9guxEo7.js",
        "/assets/subscription-BrluS7RW.js",
        "/assets/useInitializeUserStore-C-MdK9Wn.js",
        "/assets/growthbook-BCnrX3sp.js",
        "/assets/token-CVTly7hN.js",
        "/assets/AccountSelectMenu-BYXVpUzh.js",
        "/assets/query-DrV6Nbpx.js",
        "/assets/ai-DRsxWALo.js",
        "/assets/text_line_stream-DtdTslVH.js",
        "/assets/path-C47uQrgn.js",
        "/assets/download-rUGbmDk0.js",
        "/assets/artifacts-DxQBXx56.js",
        "/assets/unreachable-dJ0nIuQ4.js"
      ],
      "css": [
        "/assets/EmptyState-scVdpVyl.css",
        "/assets/LightRaysCloud-_RGYDnNX.css"
      ]
    },
    "routes/_chat.~.$slug": {
      "id": "routes/_chat.~.$slug",
      "parentId": "routes/_chat",
      "path": "~/:slug",
      "hasAction": false,
      "hasLoader": true,
      "hasClientAction": false,
      "hasClientLoader": false,
      "hasErrorBoundary": false,
      "module": "/assets/_chat.~._slug-SLMHTEQP.js",
      "imports": [
        "/assets/react-vendor-eXveGTm0.js",
        "/assets/EmptyState-DbPOglfl.js",
        "/assets/client-only-C95A7mV1.js",
        "/assets/Chat.client-hv7nQu6P.js",
        "/assets/constants-BVvrI3gl.js",
        "/assets/github-p8Gk9Fqy.js",
        "/assets/useProjectCollaborationV2-Br11p0kN.js",
        "/assets/index-DNGa4-6b.js",
        "/assets/agent-CbTgfwlC.js",
        "/assets/index-C4FbzPKq.js",
        "/assets/description-BrPYZWab.js",
        "/assets/logger-DSDnpB7z.js",
        "/assets/index-mw_D8U7y.js",
        "/assets/database-tabs-DvZimEH-.js",
        "/assets/Toast-CdtQeD0m.js",
        "/assets/analytics-CYOhtNEj.js",
        "/assets/domains-CBRTUzGt.js",
        "/assets/chat-hooks-BD_djxiC.js",
        "/assets/store-CBpo2ni6.js",
        "/assets/sentry.client-CTlkQ2HL.js",
        "/assets/settings-Dp8dcj8L.js",
        "/assets/noops-TSSrUl-c.js",
        "/assets/meta-BJ8nQAJU.js",
        "/assets/bundle-mjs-5MOacnAK.js",
        "/assets/index-CzrRaM7B.js",
        "/assets/index-DyxeRtzf.js",
        "/assets/index-B73H_akJ.js",
        "/assets/index-DtIIRuyq.js",
        "/assets/stripIndents-pFh2tRUP.js",
        "/assets/Markdown-v8em3RMW.js",
        "/assets/Alert-Cix0IOLm.js",
        "/assets/version-history-DFdO92Mq.js",
        "/assets/workDir-swQ4-CX4.js",
        "/assets/index-DRXXH9YX.js",
        "/assets/theme-DhBwBCgj.js",
        "/assets/preload-helper-2mcYJXfA.js",
        "/assets/index-CpiZbNvP.js",
        "/assets/internal-g3xxCx4a.js",
        "/assets/invariant-DO_RTA5C.js",
        "/assets/chat-started-CSv3_ecf.js",
        "/assets/page-visibility-6WPc68Q5.js",
        "/assets/classNames-Bt8A0frr.js",
        "/assets/index-D5Iscai9.js",
        "/assets/easings-CHv8XFKy.js",
        "/assets/unreachable-dJ0nIuQ4.js",
        "/assets/stripe-CXA8aV2v.js",
        "/assets/withSpinner-DGE-K6ya.js",
        "/assets/Link-CDzUh2f2.js",
        "/assets/deploy.client-CgBamRia.js",
        "/assets/UpgradeLink-Cy2HZyQ_.js",
        "/assets/team-BT-yYT9j.js",
        "/assets/config-DWMPqNt8.js",
        "/assets/openWithStackblitzAuth-B_870J_E.js",
        "/assets/util-CZ4hggdC.js",
        "/assets/url-x_E2PVS_.js",
        "/assets/index-BxE9UzoT.js",
        "/assets/cello-attribution-CvNWcY-K.js",
        "/assets/urls-C5Zd6i8e.js",
        "/assets/organizations-BEmX2Wd8.js",
        "/assets/useFreeTrialVariant-CSCr8jQ9.js",
        "/assets/growthbook-BCnrX3sp.js",
        "/assets/SupabaseConfigurationDialog.client-DbuzY8i9.js",
        "/assets/command-CQFMXNwE.js",
        "/assets/ai-DRsxWALo.js",
        "/assets/text_line_stream-DtdTslVH.js",
        "/assets/path-C47uQrgn.js",
        "/assets/download-rUGbmDk0.js",
        "/assets/plural-CG7PYDXy.js",
        "/assets/artifacts-DxQBXx56.js",
        "/assets/lifecycle-events-B47IGqIK.js",
        "/assets/support-D-upHLdM.js",
        "/assets/useQuery-ftbMyxJN.js",
        "/assets/QueryClientProvider-BOXWkUao.js",
        "/assets/query-DrV6Nbpx.js",
        "/assets/queryOptions-dfte2Pzq.js",
        "/assets/useMutation-BBzPjAAm.js",
        "/assets/mutation-BhUxlytM.js",
        "/assets/csv-DNicIMRr.js",
        "/assets/useApplications-D6VlzGlq.js",
        "/assets/Header-CVKvpdot.js",
        "/assets/login-ao6KOO3g.js",
        "/assets/LightRaysCloud-B1Kg1Rp0.js",
        "/assets/LoadingDots-6fTW8iXX.js",
        "/assets/login-BYIG6uIu.js",
        "/assets/oauth-DM372jE5.js",
        "/assets/detectBrowser-DCyV7zrH.js",
        "/assets/Logo-C60Iurcp.js",
        "/assets/Avatar-BirguWvD.js",
        "/assets/useDuplicateProject.client-BehwQYt2.js",
        "/assets/netlify-B7nhQmbK.js",
        "/assets/menu-BpukjQQm.js",
        "/assets/useProjectsOwnerContext-wxsIInZB.js",
        "/assets/useProjectRename-WEtW9vXO.js",
        "/assets/animationVariants-4-h6CqJM.js",
        "/assets/teamTemplates-eXgEbYOn.js",
        "/assets/mutationOptions-DuEc1oJu.js",
        "/assets/LazyLoadWrapper-BscXx96m.js",
        "/assets/UpgradePlanDialogs-3JB6ttYL.js",
        "/assets/UpdatePlanScreenDialog-B8YPc7by.js",
        "/assets/IntervalSelector-gKf10V_G.js",
        "/assets/teamPlans-BHkFEuXV.js",
        "/assets/format-FBMKGxjf.js",
        "/assets/PricingSelector-MczAKmRo.js",
        "/assets/tokens-stats-BWsF6vgl.js",
        "/assets/formatDistanceToNow-Q5mxsr9y.js",
        "/assets/constructNow-D13YYkKN.js",
        "/assets/parseISO-47UPI2M8.js",
        "/assets/designSystemStepper-DrW8_8kq.js",
        "/assets/useDesignSystemDraft-jCugpKHm.js",
        "/assets/AccountDisplay-DyUilvIj.js",
        "/assets/plan-info-bOltHqlQ.js",
        "/assets/ClippedTextTooltip-D0KQZyZQ.js",
        "/assets/AccountSelectMenu-BYXVpUzh.js",
        "/assets/DesignSources-Cw3YWBX1.js",
        "/assets/zod-C68WAwPY.js",
        "/assets/index.esm-p9MZrO69.js",
        "/assets/index-Bn8eywsJ.js",
        "/assets/getDefaultOptions-BgDbzmDV.js",
        "/assets/TextArea-DIpJtGW7.js",
        "/assets/init-ref-camhBRwR.js",
        "/assets/ProgressBar-CnXuR_fA.js",
        "/assets/ActionMenu-SOwQiHs0.js",
        "/assets/confetti-DP4n26Cd.js",
        "/assets/confetti.module-W9IyG_S9.js",
        "/assets/useDesignSystems-DIo3tDWX.js",
        "/assets/designSystems-eI8iArQf.js",
        "/assets/index-CWF52E-a.js",
        "/assets/ConfirmationDialog.client-C8_FsQ2x.js",
        "/assets/Prompt-Dhuli1lW.js",
        "/assets/scroll-overflow-mask-CbZfhFCM.js",
        "/assets/useChatAgent-BWgfLfYI.js",
        "/assets/index-733DDPFr.js",
        "/assets/skill-frontmatter-BrmbUIJA.js",
        "/assets/store-DdO433Qh.js",
        "/assets/selectors-DVt4ymyk.js",
        "/assets/Sheet-V9guxEo7.js",
        "/assets/subscription-BrluS7RW.js",
        "/assets/useSelectedDesignSystem-DRjhcSU8.js",
        "/assets/mcp-known-servers-lp-kcUgj.js",
        "/assets/mcp-BpVPotcx.js",
        "/assets/useEnsureSkillsLoaded-jv_mlYa3.js",
        "/assets/persistentBanner-CQAldaY8.js",
        "/assets/ConnectToFigmaDialog-DHBoBkA1.js",
        "/assets/StripeLogo-DvvQv9LP.js",
        "/assets/useTokenRefresh-CqERrWuX.js",
        "/assets/token-CVTly7hN.js",
        "/assets/DiscordSupportModal.client-DgM_6IUJ.js",
        "/assets/AgentSwitchDialog-u2PsVgeb.js",
        "/assets/utils-B9az3Bbj.js",
        "/assets/useTrackOnMount-CSXUvBXL.js",
        "/assets/compare-Br3z3FUS-DP0i2jnV.js",
        "/assets/SearchInput-BUJF1_ek.js",
        "/assets/proctor-BwnwkI-Y.js",
        "/assets/differenceInDays-D4DuZ4Yf.js",
        "/assets/isYesterday-B8fL6JnG.js",
        "/assets/addDays-LM_kdQV6.js",
        "/assets/TransferProjectDialogContent-DMneP9BO.js",
        "/assets/sso-XFs3vgDq.js",
        "/assets/AllProjects-C8n0g0jH.js",
        "/assets/FiltersBar-BDWujguO.js",
        "/assets/Pagination-Dmm-cm2n.js",
        "/assets/RecentProjects-D_b76r3a.js",
        "/assets/ErrorBoundary-wk-Ah1dO.js",
        "/assets/LightRays.client-Dz34-1e_.js",
        "/assets/LightRaysCore-BWNLM3-4.js",
        "/assets/LightRays.module-Bxd9H68z.js",
        "/assets/node-DXIkIHKm.js",
        "/assets/queryClient-BsLpWLYJ.js",
        "/assets/infiniteQueryBehavior-DPWPR94H.js",
        "/assets/usePaginatedData-fsun7dtB.js",
        "/assets/sheetNavigation-BpmDOmMM.js",
        "/assets/command-CtjqSbJK.js",
        "/assets/index-Da7tqQ08.js",
        "/assets/chart-ALSI-EMa.js",
        "/assets/serialize-messages-B3NpRyz4.js",
        "/assets/cello-config-DYx1Gvkk.js",
        "/assets/client-error-DejbHZY5.js",
        "/assets/theme-CaxmedKW.js",
        "/assets/unpublish-project-B84qOsxW.js",
        "/assets/organizationMembers-D5xYL1Vj.js",
        "/assets/organizations-DlzWA1Pg.js",
        "/assets/breadcrumbs-CU2D61VD.js",
        "/assets/mcp-oauth-listener-CYhKDAWS.js",
        "/assets/index-C_s9gSTi.js",
        "/assets/prepare-body-BTgOFTN2.js",
        "/assets/usePaymentIntentStatusMessage-B3CvEB1F.js",
        "/assets/authFlowRoutes-0PvSSBdp.js",
        "/assets/parse-domain-Djua73yQ.js"
      ],
      "css": [
        "/assets/EmptyState-scVdpVyl.css",
        "/assets/Chat-Czbss2A6.css",
        "/assets/Markdown-Cy6kMErP.css",
        "/assets/LightRaysCloud-_RGYDnNX.css",
        "/assets/Prompt-BAuldNfg.css",
        "/assets/LightRays-apN2LHcc.css"
      ]
    },
    "routes/_chat.~.$slug._index": {
      "id": "routes/_chat.~.$slug._index",
      "parentId": "routes/_chat.~.$slug",
      "index": true,
      "hasAction": false,
      "hasLoader": false,
      "hasClientAction": false,
      "hasClientLoader": false,
      "hasErrorBoundary": false,
      "module": "/assets/_chat.~._slug._index-DmPZdu6N.js",
      "imports": [],
      "css": []
    },
    "routes/_chat._index": {
      "id": "routes/_chat._index",
      "parentId": "routes/_chat",
      "index": true,
      "hasAction": false,
      "hasLoader": false,
      "hasClientAction": false,
      "hasClientLoader": false,
      "hasErrorBoundary": false,
      "module": "/assets/_chat._index-D4JBsufI.js",
      "imports": [
        "/assets/react-vendor-eXveGTm0.js",
        "/assets/index-DZyWzdgy.js",
        "/assets/client-only-C95A7mV1.js",
        "/assets/Chat.client-hv7nQu6P.js",
        "/assets/constants-BVvrI3gl.js",
        "/assets/index-C4FbzPKq.js",
        "/assets/preload-helper-2mcYJXfA.js",
        "/assets/settings-Dp8dcj8L.js",
        "/assets/index-DRXXH9YX.js",
        "/assets/logger-DSDnpB7z.js",
        "/assets/index-CpiZbNvP.js",
        "/assets/analytics-CYOhtNEj.js",
        "/assets/sentry.client-CTlkQ2HL.js",
        "/assets/internal-g3xxCx4a.js",
        "/assets/index-DyxeRtzf.js",
        "/assets/EmptyState-DbPOglfl.js",
        "/assets/bundle-mjs-5MOacnAK.js",
        "/assets/invariant-DO_RTA5C.js",
        "/assets/Toast-CdtQeD0m.js",
        "/assets/chat-started-CSv3_ecf.js",
        "/assets/noops-TSSrUl-c.js",
        "/assets/page-visibility-6WPc68Q5.js",
        "/assets/index-CzrRaM7B.js",
        "/assets/index-DNGa4-6b.js",
        "/assets/ai-DRsxWALo.js",
        "/assets/util-CZ4hggdC.js",
        "/assets/url-x_E2PVS_.js",
        "/assets/index-BxE9UzoT.js",
        "/assets/text_line_stream-DtdTslVH.js",
        "/assets/workDir-swQ4-CX4.js",
        "/assets/store-CBpo2ni6.js",
        "/assets/chat-hooks-BD_djxiC.js",
        "/assets/path-C47uQrgn.js",
        "/assets/download-rUGbmDk0.js",
        "/assets/plural-CG7PYDXy.js",
        "/assets/artifacts-DxQBXx56.js",
        "/assets/description-BrPYZWab.js",
        "/assets/unreachable-dJ0nIuQ4.js",
        "/assets/lifecycle-events-B47IGqIK.js",
        "/assets/index-mw_D8U7y.js",
        "/assets/index-B73H_akJ.js",
        "/assets/index-DtIIRuyq.js",
        "/assets/stripIndents-pFh2tRUP.js",
        "/assets/Markdown-v8em3RMW.js",
        "/assets/Alert-Cix0IOLm.js",
        "/assets/version-history-DFdO92Mq.js",
        "/assets/theme-DhBwBCgj.js",
        "/assets/classNames-Bt8A0frr.js",
        "/assets/index-D5Iscai9.js",
        "/assets/easings-CHv8XFKy.js",
        "/assets/stripe-CXA8aV2v.js",
        "/assets/withSpinner-DGE-K6ya.js",
        "/assets/Link-CDzUh2f2.js",
        "/assets/database-tabs-DvZimEH-.js",
        "/assets/deploy.client-CgBamRia.js",
        "/assets/UpgradeLink-Cy2HZyQ_.js",
        "/assets/team-BT-yYT9j.js",
        "/assets/config-DWMPqNt8.js",
        "/assets/openWithStackblitzAuth-B_870J_E.js",
        "/assets/cello-attribution-CvNWcY-K.js",
        "/assets/urls-C5Zd6i8e.js",
        "/assets/organizations-BEmX2Wd8.js",
        "/assets/useFreeTrialVariant-CSCr8jQ9.js",
        "/assets/growthbook-BCnrX3sp.js",
        "/assets/SupabaseConfigurationDialog.client-DbuzY8i9.js",
        "/assets/command-CQFMXNwE.js",
        "/assets/support-D-upHLdM.js",
        "/assets/useQuery-ftbMyxJN.js",
        "/assets/QueryClientProvider-BOXWkUao.js",
        "/assets/query-DrV6Nbpx.js",
        "/assets/queryOptions-dfte2Pzq.js",
        "/assets/useMutation-BBzPjAAm.js",
        "/assets/mutation-BhUxlytM.js",
        "/assets/csv-DNicIMRr.js",
        "/assets/useApplications-D6VlzGlq.js",
        "/assets/Header-CVKvpdot.js",
        "/assets/login-ao6KOO3g.js",
        "/assets/LightRaysCloud-B1Kg1Rp0.js",
        "/assets/LoadingDots-6fTW8iXX.js",
        "/assets/login-BYIG6uIu.js",
        "/assets/oauth-DM372jE5.js",
        "/assets/detectBrowser-DCyV7zrH.js",
        "/assets/Logo-C60Iurcp.js",
        "/assets/Avatar-BirguWvD.js",
        "/assets/useDuplicateProject.client-BehwQYt2.js",
        "/assets/netlify-B7nhQmbK.js",
        "/assets/domains-CBRTUzGt.js",
        "/assets/parse-domain-Djua73yQ.js",
        "/assets/menu-BpukjQQm.js",
        "/assets/useProjectsOwnerContext-wxsIInZB.js",
        "/assets/useProjectRename-WEtW9vXO.js",
        "/assets/animationVariants-4-h6CqJM.js",
        "/assets/teamTemplates-eXgEbYOn.js",
        "/assets/mutationOptions-DuEc1oJu.js",
        "/assets/LazyLoadWrapper-BscXx96m.js",
        "/assets/UpgradePlanDialogs-3JB6ttYL.js",
        "/assets/UpdatePlanScreenDialog-B8YPc7by.js",
        "/assets/IntervalSelector-gKf10V_G.js",
        "/assets/teamPlans-BHkFEuXV.js",
        "/assets/format-FBMKGxjf.js",
        "/assets/PricingSelector-MczAKmRo.js",
        "/assets/tokens-stats-BWsF6vgl.js",
        "/assets/formatDistanceToNow-Q5mxsr9y.js",
        "/assets/constructNow-D13YYkKN.js",
        "/assets/parseISO-47UPI2M8.js",
        "/assets/designSystemStepper-DrW8_8kq.js",
        "/assets/useDesignSystemDraft-jCugpKHm.js",
        "/assets/AccountDisplay-DyUilvIj.js",
        "/assets/plan-info-bOltHqlQ.js",
        "/assets/ClippedTextTooltip-D0KQZyZQ.js",
        "/assets/AccountSelectMenu-BYXVpUzh.js",
        "/assets/DesignSources-Cw3YWBX1.js",
        "/assets/zod-C68WAwPY.js",
        "/assets/index.esm-p9MZrO69.js",
        "/assets/index-Bn8eywsJ.js",
        "/assets/getDefaultOptions-BgDbzmDV.js",
        "/assets/TextArea-DIpJtGW7.js",
        "/assets/init-ref-camhBRwR.js",
        "/assets/ProgressBar-CnXuR_fA.js",
        "/assets/ActionMenu-SOwQiHs0.js",
        "/assets/confetti-DP4n26Cd.js",
        "/assets/confetti.module-W9IyG_S9.js",
        "/assets/useDesignSystems-DIo3tDWX.js",
        "/assets/designSystems-eI8iArQf.js",
        "/assets/index-CWF52E-a.js",
        "/assets/ConfirmationDialog.client-C8_FsQ2x.js",
        "/assets/Prompt-Dhuli1lW.js",
        "/assets/scroll-overflow-mask-CbZfhFCM.js",
        "/assets/useChatAgent-BWgfLfYI.js",
        "/assets/agent-CbTgfwlC.js",
        "/assets/index-733DDPFr.js",
        "/assets/skill-frontmatter-BrmbUIJA.js",
        "/assets/store-DdO433Qh.js",
        "/assets/selectors-DVt4ymyk.js",
        "/assets/Sheet-V9guxEo7.js",
        "/assets/subscription-BrluS7RW.js",
        "/assets/useSelectedDesignSystem-DRjhcSU8.js",
        "/assets/mcp-known-servers-lp-kcUgj.js",
        "/assets/mcp-BpVPotcx.js",
        "/assets/useEnsureSkillsLoaded-jv_mlYa3.js",
        "/assets/persistentBanner-CQAldaY8.js",
        "/assets/ConnectToFigmaDialog-DHBoBkA1.js",
        "/assets/StripeLogo-DvvQv9LP.js",
        "/assets/useTokenRefresh-CqERrWuX.js",
        "/assets/token-CVTly7hN.js",
        "/assets/DiscordSupportModal.client-DgM_6IUJ.js",
        "/assets/AgentSwitchDialog-u2PsVgeb.js",
        "/assets/utils-B9az3Bbj.js",
        "/assets/useTrackOnMount-CSXUvBXL.js",
        "/assets/compare-Br3z3FUS-DP0i2jnV.js",
        "/assets/SearchInput-BUJF1_ek.js",
        "/assets/proctor-BwnwkI-Y.js",
        "/assets/differenceInDays-D4DuZ4Yf.js",
        "/assets/isYesterday-B8fL6JnG.js",
        "/assets/addDays-LM_kdQV6.js",
        "/assets/TransferProjectDialogContent-DMneP9BO.js",
        "/assets/sso-XFs3vgDq.js",
        "/assets/AllProjects-C8n0g0jH.js",
        "/assets/FiltersBar-BDWujguO.js",
        "/assets/Pagination-Dmm-cm2n.js",
        "/assets/RecentProjects-D_b76r3a.js",
        "/assets/github-p8Gk9Fqy.js",
        "/assets/cello-config-DYx1Gvkk.js",
        "/assets/authFlowRoutes-0PvSSBdp.js",
        "/assets/ErrorBoundary-wk-Ah1dO.js",
        "/assets/LightRays.client-Dz34-1e_.js",
        "/assets/LightRaysCore-BWNLM3-4.js",
        "/assets/LightRays.module-Bxd9H68z.js",
        "/assets/node-DXIkIHKm.js",
        "/assets/queryClient-BsLpWLYJ.js",
        "/assets/infiniteQueryBehavior-DPWPR94H.js",
        "/assets/useProjectCollaborationV2-Br11p0kN.js",
        "/assets/usePaginatedData-fsun7dtB.js",
        "/assets/sheetNavigation-BpmDOmMM.js",
        "/assets/command-CtjqSbJK.js",
        "/assets/index-Da7tqQ08.js",
        "/assets/chart-ALSI-EMa.js",
        "/assets/serialize-messages-B3NpRyz4.js",
        "/assets/client-error-DejbHZY5.js",
        "/assets/theme-CaxmedKW.js",
        "/assets/unpublish-project-B84qOsxW.js",
        "/assets/organizationMembers-D5xYL1Vj.js",
        "/assets/organizations-DlzWA1Pg.js",
        "/assets/breadcrumbs-CU2D61VD.js",
        "/assets/mcp-oauth-listener-CYhKDAWS.js",
        "/assets/index-C_s9gSTi.js",
        "/assets/prepare-body-BTgOFTN2.js",
        "/assets/usePaymentIntentStatusMessage-B3CvEB1F.js"
      ],
      "css": [
        "/assets/Chat-Czbss2A6.css",
        "/assets/EmptyState-scVdpVyl.css",
        "/assets/Markdown-Cy6kMErP.css",
        "/assets/LightRaysCloud-_RGYDnNX.css",
        "/assets/Prompt-BAuldNfg.css",
        "/assets/LightRays-apN2LHcc.css"
      ]
    },
    "routes/$slug": {
      "id": "routes/$slug",
      "parentId": "root",
      "path": ":slug",
      "hasAction": false,
      "hasLoader": true,
      "hasClientAction": false,
      "hasClientLoader": false,
      "hasErrorBoundary": false,
      "module": "/assets/_slug-KBuz8kv0.js",
      "imports": [],
      "css": []
    }
  },
  "url": "/assets/manifest-d4d52471.js",
  "version": "d4d52471"
};
window.__remixRouteModules = {"root":route0,"routes/_chat":route1,"routes/_chat.~.$slug":route2,"routes/_chat.~.$slug._index":route3};

import("/assets/entry.client-Hm6bfcWL.js");</script></body></html><!--$--><script>window.__remixContext.streamController.enqueue("[{\"_1\":2,\"_651\":-5,\"_652\":-5},\"loaderData\",{\"_3\":4,\"_462\":463,\"_593\":594,\"_650\":-5},\"root\",{\"_5\":-7,\"_6\":7,\"_318\":319,\"_327\":328,\"_441\":442,\"_443\":444,\"_445\":446,\"_383\":447,\"_454\":15,\"_455\":15,\"_456\":457,\"_458\":459,\"_460\":461},\"banner\",\"growthbookPayload\",{\"_8\":9,\"_10\":11,\"_314\":315,\"_316\":317},\"status\",200,\"features\",{\"_12\":13,\"_54\":55,\"_56\":57,\"_58\":59,\"_61\":62,\"_63\":64,\"_71\":72,\"_92\":93,\"_130\":131,\"_203\":204,\"_229\":230,\"_262\":263,\"_281\":282,\"_312\":313},\"insta-teams\",{\"_14\":15,\"_16\":17},\"defaultValue\",false,\"rules\",[18],{\"_19\":20,\"_21\":22,\"_27\":28,\"_29\":30,\"_31\":32,\"_35\":36,\"_37\":38,\"_39\":40,\"_42\":43,\"_45\":46,\"_47\":48,\"_53\":50},\"id\",\"fr_19g6smq6mtc2b\",\"condition\",{\"_23\":24},\"createdAt\",{\"_25\":26},\"$gt\",\"2026-06-09T09:43\",\"coverage\",1,\"hashAttribute\",\"email\",\"namespace\",[33,34,28],\"ns-19g6smm9ksjuu\",0.95,\"seed\",\"0921cd29-b3b2-4aa9-8816-dd749413bc02\",\"hashVersion\",2,\"variations\",[15,41],true,\"weights\",[44,44],0.5,\"key\",\"insta-teams_june-re-launch\",\"meta\",[49,51],{\"_45\":50},\"0\",{\"_45\":52},\"1\",\"phase\",\"team-aware-switcher\",{\"_14\":15},\"plan-mode-enable\",{\"_14\":15},\"free-tier-experiment-group\",{\"_14\":60},\"OFF\",\"free-trial-popup\",{\"_14\":60},\"free-tier-min-messages-per-day\",{\"_14\":65,\"_16\":66},0,[67],{\"_19\":68,\"_69\":70},\"fr_mpx0zzuq\",\"force\",3,\"anthropic-model-provider\",{\"_14\":73,\"_16\":74},\"anthropic\",[75],{\"_19\":76,\"_27\":28,\"_29\":30,\"_77\":78,\"_35\":79,\"_37\":38,\"_39\":80,\"_42\":83,\"_45\":71,\"_47\":86,\"_53\":91},\"fr_19g6rmpd0xd9h\",\"bucketVersion\",6,\"fe53f041-77c0-461e-adb6-11a769a6f071\",[73,81,82],\"bedrock\",\"foundry\",[65,84,85],0.9,0.1,[87,88,89],{\"_45\":50},{\"_45\":52},{\"_45\":90},\"2\",\"6\",\"glm-5-1-provider\",{\"_14\":94,\"_16\":95},\"baseten\",[96],{\"_19\":97,\"_21\":98,\"_27\":28,\"_29\":30,\"_77\":100,\"_35\":101,\"_37\":38,\"_39\":102,\"_42\":104,\"_45\":107,\"_47\":108,\"_53\":129},\"fr_19g6smqikil4k\",{\"_99\":15},\"isPaid\",53,\"44c9a595-c255-4a09-9276-6823b9029f0a\",[94,94,94,94,94,94,94,94,103,94],\"fireworks\",[65,65,65,65,105,65,65,106,65,65],0.8,0.2,\"free-tier-model-provider-harness-2\",[109,111,113,115,117,119,121,123,125,127],{\"_45\":110},\"SH\",{\"_45\":112},\"S2\",{\"_45\":114},\"S3\",{\"_45\":116},\"G-B\",{\"_45\":118},\"G2-B\",{\"_45\":120},\"K-B\",{\"_45\":122},\"G2S-B\",{\"_45\":124},\"G2-FFW\",{\"_45\":126},\"K-FW\",{\"_45\":128},\"G2-B-v2\",\"53\",\"standard-model-routing\",{\"_14\":132,\"_16\":135},{\"_133\":134},\"default\",\"claude-sonnet-4-6\",[136,169,199],{\"_19\":137,\"_21\":138,\"_27\":28,\"_29\":30,\"_77\":139,\"_35\":140,\"_37\":38,\"_39\":141,\"_42\":149,\"_45\":154,\"_47\":155,\"_53\":168},\"fr_19g6rmre31w7c\",{\"_99\":41},17,\"487b7a20-9db1-480c-b0da-16ddad97a55b\",[142,143,144,146,147,148],{\"_133\":134},{\"_133\":134},{\"_133\":145},\"zai-org/GLM-5.2\",{\"_133\":145},{\"_133\":134},{\"_133\":134},[150,151,152,153,65,65],0.05,0.41,0.4,0.14,\"paid-tier-model-provider-harness\",[156,158,160,162,164,166],{\"_45\":157},\"S-v3\",{\"_45\":159},\"S-v2\",{\"_45\":161},\"GLM5.2-v3-B\",{\"_45\":163},\"GLM5.2-v3-FFW\",{\"_45\":165},\"UU1\",{\"_45\":167},\"UU2\",\"16\",{\"_19\":170,\"_21\":171,\"_27\":28,\"_29\":30,\"_77\":100,\"_35\":101,\"_37\":38,\"_39\":172,\"_42\":187,\"_45\":107,\"_47\":188,\"_53\":129},\"fr_19g6smqik6g8r\",{\"_99\":15},[173,176,177,178,180,181,183,184,185,186],{\"_133\":134,\"_174\":175},\"followup\",\"claude-haiku-4-5-20251001\",{\"_133\":134},{\"_133\":134},{\"_133\":179},\"zai-org/GLM-5.1\",{\"_133\":145},{\"_133\":182},\"moonshotai/Kimi-K2.6\",{\"_133\":145,\"_174\":134},{\"_133\":145},{\"_133\":182},{\"_133\":145},[65,65,65,65,105,65,65,106,65,65],[189,190,191,192,193,194,195,196,197,198],{\"_45\":110},{\"_45\":112},{\"_45\":114},{\"_45\":116},{\"_45\":118},{\"_45\":120},{\"_45\":122},{\"_45\":124},{\"_45\":126},{\"_45\":128},{\"_19\":200,\"_21\":201,\"_69\":202},\"fr_mpyc7gxd\",{\"_99\":15},{\"_133\":134,\"_174\":175},\"max-model-routing\",{\"_14\":205,\"_16\":207},{\"_133\":206},\"claude-opus-4-6\",[208],{\"_19\":209,\"_21\":210,\"_27\":28,\"_29\":19,\"_77\":38,\"_35\":211,\"_37\":38,\"_39\":212,\"_42\":220,\"_45\":222,\"_47\":223,\"_53\":228},\"fr_19g6smq178k71\",{\"_99\":41},\"7c1fe5f2-453a-4feb-b3f0-e8420576fad0\",[213,214,216,218],{\"_133\":206},{\"_133\":215},\"claude-opus-4-7\",{\"_133\":217},\"claude-opus-4-8\",{\"_133\":219},\"claude-fable-5\",[221,85,85,150],0.75,\"max-agent-underlying-model\",[224,225,226,227],{\"_45\":50},{\"_45\":52},{\"_45\":90},{\"_45\":228},\"3\",\"harness\",{\"_14\":231,\"_16\":232},\"v2\",[233,250],{\"_19\":234,\"_21\":235,\"_27\":28,\"_29\":30,\"_77\":100,\"_35\":101,\"_37\":38,\"_39\":236,\"_42\":238,\"_45\":107,\"_47\":239,\"_53\":129},\"fr_19g6smqikgh25\",{\"_99\":15},[231,231,237,231,237,237,237,237,237,231],\"v3\",[65,65,65,65,105,65,65,106,65,65],[240,241,242,243,244,245,246,247,248,249],{\"_45\":110},{\"_45\":112},{\"_45\":114},{\"_45\":116},{\"_45\":118},{\"_45\":120},{\"_45\":122},{\"_45\":124},{\"_45\":126},{\"_45\":128},{\"_19\":251,\"_21\":252,\"_27\":28,\"_29\":30,\"_77\":139,\"_35\":140,\"_37\":38,\"_39\":253,\"_42\":254,\"_45\":154,\"_47\":255,\"_53\":168},\"fr_19g6rmre33qwa\",{\"_99\":41},[237,231,237,237,231,231],[150,151,152,153,65,65],[256,257,258,259,260,261],{\"_45\":157},{\"_45\":159},{\"_45\":161},{\"_45\":163},{\"_45\":165},{\"_45\":167},\"kimi-k2-6-provider\",{\"_14\":94,\"_16\":264},[265],{\"_19\":266,\"_21\":267,\"_27\":28,\"_29\":30,\"_77\":100,\"_35\":101,\"_37\":38,\"_39\":268,\"_42\":269,\"_45\":107,\"_47\":270,\"_53\":129},\"fr_19g6smqikhr1d\",{\"_99\":15},[94,94,94,94,94,94,94,94,103,94],[65,65,65,65,105,65,65,106,65,65],[271,272,273,274,275,276,277,278,279,280],{\"_45\":110},{\"_45\":112},{\"_45\":114},{\"_45\":116},{\"_45\":118},{\"_45\":120},{\"_45\":122},{\"_45\":124},{\"_45\":126},{\"_45\":128},\"glm-5-2-provider\",{\"_14\":94,\"_16\":283},[284,300],{\"_19\":285,\"_21\":286,\"_27\":28,\"_29\":30,\"_77\":100,\"_35\":101,\"_37\":38,\"_39\":287,\"_42\":288,\"_45\":107,\"_47\":289,\"_53\":129},\"fr_mr0w5w9k\",{\"_99\":15},[94,94,94,94,94,94,94,82,94,94],[65,65,65,65,105,65,65,106,65,65],[290,291,292,293,294,295,296,297,298,299],{\"_45\":110},{\"_45\":112},{\"_45\":114},{\"_45\":116},{\"_45\":118},{\"_45\":120},{\"_45\":122},{\"_45\":124},{\"_45\":126},{\"_45\":128},{\"_19\":301,\"_21\":302,\"_27\":28,\"_29\":30,\"_77\":139,\"_35\":140,\"_37\":38,\"_39\":303,\"_42\":304,\"_45\":154,\"_47\":305,\"_53\":168},\"fr_19g6rmre32otk\",{\"_99\":41},[94,94,94,82,94,94],[150,151,152,153,65,65],[306,307,308,309,310,311],{\"_45\":157},{\"_45\":159},{\"_45\":161},{\"_45\":163},{\"_45\":165},{\"_45\":167},\"send-button-exp\",{\"_14\":15},\"experiments\",[],\"dateUpdated\",\"2026-07-13T22:43:43.831Z\",\"latestReleaseNote\",{\"_19\":320,\"_321\":322,\"_323\":324,\"_325\":326},\"3d3db4bdaad3290a\",\"title\",\"June 20 - 29\",\"url\",\"https://support.bolt.new/release-notes#june-20-29\",\"publishedAt\",\"2026-06-29T14:14:36.000Z\",\"user\",{\"_329\":330,\"_331\":-5,\"_332\":15,\"_333\":41,\"_334\":-5,\"_23\":335,\"_336\":65,\"_30\":337,\"_338\":339,\"_340\":341,\"_346\":347,\"_354\":355,\"_394\":15,\"_395\":15,\"_396\":397,\"_19\":401,\"_402\":403,\"_404\":-5,\"_405\":38,\"_406\":-5,\"_407\":65,\"_408\":337,\"_409\":65,\"_410\":411,\"_414\":65,\"_415\":416,\"_417\":-5,\"_418\":15,\"_419\":-5,\"_420\":15,\"_421\":422,\"_423\":65,\"_342\":424,\"_425\":-5,\"_426\":-5,\"_427\":428,\"_429\":430,\"_431\":-5,\"_432\":433,\"_435\":436},\"avatar\",\"https://avatars.githubusercontent.com/u/303985264\",\"bio\",\"canPurchaseDomain\",\"canSubscribe\",\"churnkeyAuthKey\",\"2026-07-13T08:42:19.483Z\",\"currentPlanTier\",\"rohitchang06@gmail.com\",\"expirableBoltTokenPurchases\",[],\"externalAccount\",{\"_342\":343,\"_323\":344,\"_345\":15},\"username\",\"teloxdesign-wq\",\"https://github.com//teloxdesign-wq\",\"needsReauthorization\",\"externalAccounts\",[348,352],{\"_349\":350,\"_342\":343,\"_351\":344,\"_345\":15},\"provider\",\"github\",\"uri\",{\"_349\":353,\"_342\":-5,\"_351\":-5,\"_345\":15},\"google\",\"featureFlags\",{\"_356\":15,\"_357\":15,\"_358\":15,\"_359\":15,\"_360\":15,\"_361\":15,\"_362\":15,\"_363\":15,\"_364\":41,\"_365\":41,\"_366\":15,\"_367\":15,\"_368\":41,\"_369\":15,\"_370\":41,\"_371\":41,\"_372\":41,\"_373\":-7,\"_374\":41,\"_375\":-7,\"_376\":15,\"_377\":15,\"_378\":15,\"_379\":41,\"_380\":15,\"_381\":41,\"_382\":41,\"_383\":41,\"_384\":41,\"_385\":41,\"_386\":15,\"_387\":41,\"_388\":41,\"_389\":41,\"_390\":41,\"_391\":41,\"_392\":15,\"_393\":-7},\"experimentalNode\",\"previewTunneling\",\"liveProjectSafeDelete\",\"freeDomainPromo\",\"hackathon\",\"debugger\",\"boltDevtools\",\"browserTools\",\"figmaFrameImport\",\"teamTemplates\",\"importURL\",\"userSkills\",\"mcpServers\",\"jiraIntegration\",\"agentImageGeneration\",\"collaborationV2\",\"designSystems\",\"prototypeHandoff\",\"tokenLedgerNoMigration\",\"teamsSetupRedesign\",\"usageBasedBilling\",\"ossModels\",\"openaiModels\",\"sentimentCapture\",\"messageQueue\",\"blockNewV1Projects\",\"enhancePromptQs\",\"cello\",\"cancellationFlowV2\",\"codeStorageAnnotations\",\"v3Harness\",\"tokenLedger\",\"codeStorage\",\"proctor\",\"enforceAgentSessionState\",\"wsPush\",\"boltSlides\",\"premiumPod\",\"freeDomainPromoEligible\",\"freeDomainPromoUsed\",\"githubAppInstallation\",{\"_398\":399,\"_8\":400},\"installationId\",146249423,\"active\",\"10964528\",\"kind\",\"USER\",\"location\",\"loginCount\",\"membership\",\"membershipLevel\",\"name\",\"nextMembershipLevel\",\"onboardingSurveyResponse\",{\"_8\":412,\"_413\":-5},\"viewed\",\"surveyVersion\",\"planType\",\"roles\",[],\"site\",\"ssoRestricted\",\"stripeCustomerId\",\"teamsPlan\",\"tokenAllocations\",[],\"totalBoltTokenPurchases\",\"rohitchang06\",\"wcAPIMembership\",\"wcAPIStripeAccount\",\"organizations\",[],\"organizationInvites\",[],\"activeOrganizationId\",\"surveys\",{\"_434\":412},\"onboarding\",\"settings\",{\"_437\":438},\"featurePreviews\",{\"_439\":15,\"_440\":15},\"reasoning\",\"imageGeneration\",\"token\",\"JDw6BFwim-2RFkW5qgzdpp0CnA4Pv9jB-OA7KiJ21DQ\",\"serverTime\",\"2026-07-14T07:40:12.136Z\",\"country\",\"NP\",{\"_448\":41,\"_449\":41,\"_450\":451,\"_452\":453},\"enabled\",\"configured\",\"scriptSrc\",\"https://assets.cello.so/app/latest/cello.js\",\"attributionScriptSrc\",\"https://assets.cello.so/attribution/latest/cello-attribution.js\",\"isMobileExperience\",\"sidebarCollapsed\",\"turnstileSiteKey\",\"0x4AAAAAABt_LacRZZp7J2A6\",\"swk\",\"ta1kDK49qdEDEfd8KYxI37mW0GPkLKn1\",\"gbk\",\"sdk-ye5YC6vB6I5SoRX\",\"routes/_chat\",{\"_327\":464,\"_480\":481,\"_530\":531},{\"_329\":330,\"_331\":-5,\"_332\":15,\"_333\":41,\"_334\":-5,\"_23\":335,\"_336\":65,\"_30\":337,\"_338\":465,\"_340\":466,\"_346\":467,\"_354\":470,\"_394\":15,\"_395\":15,\"_396\":471,\"_19\":401,\"_402\":403,\"_404\":-5,\"_405\":38,\"_406\":-5,\"_407\":65,\"_408\":337,\"_409\":65,\"_410\":472,\"_414\":65,\"_415\":473,\"_417\":-5,\"_418\":15,\"_419\":-5,\"_420\":15,\"_421\":474,\"_423\":65,\"_342\":424,\"_425\":-5,\"_426\":-5,\"_427\":475,\"_429\":476,\"_431\":-5,\"_432\":477,\"_435\":478},[],{\"_342\":343,\"_323\":344,\"_345\":15},[468,469],{\"_349\":350,\"_342\":343,\"_351\":344,\"_345\":15},{\"_349\":353,\"_342\":-5,\"_351\":-5,\"_345\":15},{\"_356\":15,\"_357\":15,\"_358\":15,\"_359\":15,\"_360\":15,\"_361\":15,\"_362\":15,\"_363\":15,\"_364\":41,\"_365\":41,\"_366\":15,\"_367\":15,\"_368\":41,\"_369\":15,\"_370\":41,\"_371\":41,\"_372\":41,\"_374\":41,\"_376\":15,\"_377\":15,\"_378\":15,\"_379\":41,\"_380\":15,\"_381\":41,\"_382\":41,\"_383\":41,\"_384\":41,\"_385\":41,\"_386\":15,\"_387\":41,\"_388\":41,\"_389\":41,\"_390\":41,\"_391\":41,\"_392\":15},{\"_398\":399,\"_8\":400},{\"_8\":412,\"_413\":-5},[],[],[],[],{\"_434\":412},{\"_437\":479},{\"_439\":15,\"_440\":15},\"tokenStats\",{\"_482\":-5,\"_483\":484,\"_485\":486,\"_487\":488,\"_492\":493,\"_499\":500,\"_501\":502,\"_503\":504,\"_512\":513,\"_514\":515,\"_516\":491,\"_517\":518,\"_519\":65,\"_520\":65,\"_521\":522,\"_528\":529},\"billingPeriod\",\"maxPerDay\",300000,\"maxPerMonth\",1000000,\"regularTokens\",{\"_489\":486,\"_490\":491},\"available\",\"used\",576635,\"regularTokenBreakdown\",[494],{\"_495\":496,\"_489\":486,\"_490\":491,\"_497\":498},\"expiresOn\",1785542399999,\"type\",\"active-month\",\"rewardTokens\",{\"_490\":65,\"_489\":65},\"rewardTokenBreakdown\",[],\"nextTier\",{\"_505\":28,\"_506\":507,\"_497\":511},\"level\",\"limits\",{\"_508\":509,\"_510\":509},\"perDay\",10000000,\"perMonth\",\"pro\",\"overflow\",{\"_489\":65,\"_490\":65},\"purchased\",{\"_489\":65,\"_490\":65},\"totalThisMonth\",\"totalToday\",276635,\"totalThisMonthSonnet46\",\"totalTodaySonnet46\",\"referralTokens\",{\"_523\":524,\"_526\":527},\"free\",{\"_489\":65,\"_525\":65,\"_490\":65},\"rewardCount\",\"paid\",{\"_489\":65,\"_525\":65,\"_490\":65},\"specialTokens\",{\"_489\":65,\"_490\":65},\"publicDesignSystems\",[532,547,556,565,575,584],{\"_19\":533,\"_408\":534,\"_535\":536,\"_537\":538},\"e560d0e7-4fba-4857-a197-a03f50115e72\",\"Chakra\",\"logoUrl\",\"/api/design-systems/e560d0e7-4fba-4857-a197-a03f50115e72/files/logo.webp\",\"publicMetadata\",{\"_497\":539,\"_540\":541},\"open-source\",\"prompts\",[542],{\"_543\":544,\"_545\":546},\"text\",\"Build a movie streaming web app\",\"replayId\",\"abe042b0-1514-4f5f-999c-47611556dd5a\",{\"_19\":548,\"_408\":549,\"_535\":550,\"_537\":551},\"c780062a-25f0-4a60-bdaf-c5b27da476fb\",\"Material UI\",\"/api/design-systems/c780062a-25f0-4a60-bdaf-c5b27da476fb/files/logo.webp\",{\"_497\":539,\"_540\":552},[553],{\"_543\":554,\"_545\":555},\"Build a Google Drive dashboard\",\"cf113b81-bbe3-4168-b53f-7fa2696bceeb\",{\"_19\":557,\"_408\":558,\"_535\":559,\"_537\":560},\"24db67f1-2979-4ee4-8881-1cf620ecf1e9\",\"Shadcn\",\"/api/design-systems/24db67f1-2979-4ee4-8881-1cf620ecf1e9/files/logo.webp\",{\"_497\":539,\"_540\":561},[562],{\"_543\":563,\"_545\":564},\"Build an appointment booking landing page\",\"eb619f11-6227-41d2-a63e-f34d2f723546\",{\"_19\":566,\"_408\":567,\"_535\":568,\"_537\":569},\"8c0d5ecc-f2f4-486d-baee-8d50d61280ea\",\"Washington Post\",\"/api/design-systems/8c0d5ecc-f2f4-486d-baee-8d50d61280ea/files/logo.webp\",{\"_497\":570,\"_540\":571},\"corporate\",[572],{\"_543\":573,\"_545\":574},\"Build a news blog\",\"2f69f91d-24f2-452b-8619-f8a4c29d1889\",{\"_19\":576,\"_408\":577,\"_535\":578,\"_537\":579},\"c2cae65c-e390-4bba-989e-4ddf6f0be5ca\",\"AWS Cloudscape\",\"/api/design-systems/c2cae65c-e390-4bba-989e-4ddf6f0be5ca/files/logo.webp\",{\"_497\":570,\"_540\":580},[581],{\"_543\":582,\"_545\":583},\"Build a management dashboard for a database service\",\"a63d181f-7693-4862-b1c8-ad8f7244c7bb\",{\"_19\":585,\"_408\":586,\"_535\":587,\"_537\":588},\"96de9aa8-2543-4658-aef6-abda7df52e2f\",\"Porsche\",\"/api/design-systems/96de9aa8-2543-4658-aef6-abda7df52e2f/files/logo.webp\",{\"_497\":570,\"_540\":589},[590],{\"_543\":591,\"_545\":592},\"Build a landing page for the Porsche GT3 RS\",\"68fab858-6204-4f09-99b9-8371d504df2e\",\"routes/_chat.~.$slug\",{\"_350\":595,\"_610\":611,\"_612\":613,\"_371\":41,\"_614\":615,\"_643\":644,\"_647\":648,\"_649\":-5},{\"_596\":41,\"_597\":598},\"linked\",\"data\",{\"_599\":600,\"_604\":605,\"_606\":41,\"_607\":608,\"_497\":350,\"_609\":41},\"repository\",{\"_601\":343,\"_408\":602,\"_19\":603},\"owner\",\"telox\",\"R_kgDOTWCpaw\",\"branchName\",\"main\",\"initialized\",\"lastSyncedOid\",\"4031693ba3f2f2a3f638167b8fbb5c0987406bbc\",\"skipInitialPull\",\"slug\",\"github-f3pd7ru6\",\"projectId\",\"68858476\",\"projectAccess\",{\"_616\":41,\"_617\":41,\"_618\":41,\"_619\":41,\"_620\":41,\"_621\":15,\"_622\":41,\"_623\":41,\"_624\":41,\"_625\":41,\"_626\":41,\"_627\":41,\"_628\":15,\"_629\":15,\"_630\":15,\"_631\":41,\"_632\":15,\"_633\":41,\"_634\":635,\"_641\":15,\"_642\":15},\"canAdministrate\",\"canChangeVisibility\",\"canEdit\",\"canFork\",\"canForkToPersonal\",\"canHostWithoutBadge\",\"canMakePrivate\",\"canManage\",\"canShare\",\"canTransfer\",\"canUpdateSettings\",\"canUploadFiles\",\"canUseCorsProxy\",\"canUseLocalhostAccess\",\"canUsePaidFeatures\",\"canView\",\"commercial\",\"currentUserIsOwner\",\"forkTargets\",[636],{\"_637\":638,\"_133\":41,\"_639\":640},\"action\",\"fork\",\"target\",{\"_329\":330,\"_402\":403,\"_408\":424,\"_349\":-5,\"_610\":424},\"localhostAccessEnabled\",\"userIsParticipant\",\"projectInfo\",{\"_645\":-5,\"_19\":613,\"_610\":611,\"_321\":646},\"description\",\"teloxdesign-wq/telox (imported from GitHub)\",\"chatAgent\",\"claude-code\",\"chatModel\",\"routes/_chat.~.$slug._index\",\"actionData\",\"errors\"]\n");</script><!--$--><script>window.__remixContext.streamController.close();</script><!--/$--><!--/$-->