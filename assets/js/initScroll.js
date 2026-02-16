document.addEventListener("DOMContentLoaded", function (event) {
  var locked = false;
  var active = "";

  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  if (vw < MIN_WIDTH_FOR_TOC) return;

  // land on linked toc item when reloading
  // window.scrollBy(0, 1); 

  function activateId(id) {
    document
      .querySelectorAll("#markdown-toc a")
      .forEach((element) => element.classList.remove("active"));
    document.getElementById(`markdown-toc-${id}`).classList.add("active");
  }

  new ScrollProgress.Init(
    "#cursor",
    "#markdown-toc",
    (progress) => {
      if (!locked) {
        //   console.log(progress.Id);
        activateId(progress.Id);
      }
    },
    (id) => {
      if (!locked) activateId(id);
    }
  );

  let interval;
  document.querySelectorAll("#markdown-toc a").forEach(
    (element) =>
      (element.onclick = function (e) {
        if (interval) clearInterval(interval);
        locked = true;
        active = e.target.id.replace("markdown-toc-", "");
        document
          .querySelectorAll("#markdown-toc a")
          .forEach((element) => element.classList.remove("active"));
        e.target.classList.add("active");
        interval = setTimeout(() => {
          locked = false;
        }, 1100);
      })
  );
});
