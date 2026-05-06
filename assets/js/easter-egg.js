document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector("[data-footer-easter-egg]");

  if (!trigger) {
    return;
  }

  let clickCount = 0;

  trigger.addEventListener("click", (event) => {
    if (event.button !== 0) {
      return;
    }

    clickCount += 1;

    if (clickCount < 5) {
      return;
    }

    clickCount = 0;

    // Playful non-public entrance only; this is not real security.
    const pageLang = document.body.dataset.pageLang || document.documentElement.lang || "en";
    const baseUrl = (document.body.dataset.baseurl || "").replace(/\/$/, "");
    const target = pageLang === "zh" ? `${baseUrl}/zh/garden/` : `${baseUrl}/garden/`;

    window.location.assign(target);
  });
});
