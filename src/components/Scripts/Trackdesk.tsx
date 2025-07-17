"use client";

import Script from "next/script";

export default function Trackdesk() {
  return (
    <>
      <Script
        src="//cdn.trackdesk.com/tracking.js"
        strategy="afterInteractive"
      />

      <Script id="trackdesk-init" strategy="afterInteractive">
        {`
          (function(t,d,k){
            (t[k]=t[k]||[]).push(d);
            t[d]=t[d]||t[k].f||function(){
              (t[d].q=t[d].q||[]).push(arguments)
            }
          })(window,"trackdesk","TrackdeskObject");

          trackdesk("empirefunded", "click");
        `}
      </Script>

      <Script id="cid-updater" strategy="afterInteractive">
        {`
          (function () {
            let cid = null;
            let cookieCheckInterval = null;
            let linkCheckInterval = null;

            function getCookie(name) {
              const value = \`; \${document.cookie}\`;
              const parts = value.split(\`; \${name}=\`);
              if (parts.length === 2) return parts.pop().split(';').shift();
            }

            function parseCidFromCookie() {
              try {
                const cookieValue = getCookie("trakdesk_cid");
                if (cookieValue) {
                  const parsed = JSON.parse(cookieValue);
                  if (parsed && parsed.cid && /^[0-9a-fA-F\\-]{36}$/.test(parsed.cid)) {
                    return parsed.cid;
                  }
                }
              } catch (e) {
                console.warn("Error parsing trakdesk_cid cookie:", e);
              }
              return null;
            }

            function updateLinksWithCid(cid) {
              const links = document.querySelectorAll('a[href*="https://empirefundedcheckout.com/product/"]');
              links.forEach(link => {
                const url = new URL(link.href);
                if (url.searchParams.get("cid") !== cid) {
                  url.searchParams.set("cid", cid);
                  link.href = url.toString();
                }
              });
            }

            function startLinkMonitor() {
              linkCheckInterval = setInterval(() => {
                if (cid) {
                  updateLinksWithCid(cid);
                }
              }, 1000);
            }

            cookieCheckInterval = setInterval(() => {
              const foundCid = parseCidFromCookie();
              if (foundCid) {
                cid = foundCid;
                clearInterval(cookieCheckInterval);
                startLinkMonitor();
              }
            }, 1000);
          })();
        `}
      </Script>
    </>
  );
}
