// Progressive enhancements only: the page is fully usable without this file.

// ---- Theme toggle -------------------------------------------------------
// The saved choice is applied in <head> before first paint; this wires the button.
(() => {
  const btn = document.querySelector("[data-theme-toggle]");
  if (!btn) return;
  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const current = () => root.dataset.theme || (media.matches ? "dark" : "light");
  const sync = () => {
    const next = current() === "dark" ? "light" : "dark";
    btn.setAttribute("aria-label", `Switch to ${next} theme`);
  };
  btn.hidden = false;
  sync();
  btn.addEventListener("click", () => {
    const next = current() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) { /* storage unavailable */ }
    sync();
  });
  media.addEventListener("change", sync);
})();

// ---- Highlight the nav link of the section in view ----------------------
(() => {
  const links = new Map();
  document.querySelectorAll("[data-nav]").forEach((a) => {
    const id = a.hash.slice(1);
    const section = id && document.getElementById(id);
    if (section) links.set(section, a);
  });
  if (!links.size || !("IntersectionObserver" in window)) return;

  const visible = new Set();
  const update = () => {
    // The topmost visible section wins.
    let top = null;
    visible.forEach((s) => { if (!top || s.offsetTop < top.offsetTop) top = s; });
    links.forEach((a, s) => {
      if (s === top) {
        a.setAttribute("aria-current", "location");
        // On narrow screens the nav is a horizontal strip: keep the active link in view.
        const list = a.closest("ul");
        if (list && list.scrollWidth > list.clientWidth) list.scrollLeft = a.offsetLeft - 16;
      } else {
        a.removeAttribute("aria-current");
      }
    });
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
    update();
  }, { rootMargin: "-35% 0px -55% 0px" });
  links.forEach((_, s) => io.observe(s));
})();

// ---- Copy e-mail address --------------------------------------------------
(() => {
  if (!navigator.clipboard) return;
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    const label = btn.querySelector("[data-copy-label]");
    btn.hidden = false;
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        label.textContent = "Copied";
      } catch (e) {
        label.textContent = "Copy failed";
      }
      setTimeout(() => { label.textContent = "Copy"; }, 2000);
    });
  });
})();
