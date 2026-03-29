async function injectComponent(placeholderId, componentPath) {
  const mount = document.getElementById(placeholderId);
  if (!mount) {
    return;
  }

  try {
    const response = await fetch(componentPath, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error("Failed to load " + componentPath + " (" + response.status + ")");
    }

    mount.innerHTML = await response.text();
  } catch (error) {
    console.error("Component injection error:", error);
  }
}

async function loadSharedLayoutComponents() {
  await injectComponent("topbar-placeholder", "components/topbar.html");
  await injectComponent("header-placeholder", "components/header.html");
  await injectComponent("navbar-placeholder", "components/navbar.html");
  await injectComponent("footer-placeholder", "components/footer.html");

  if (typeof initializeThemeState === "function") {
    initializeThemeState();
  }

  if (typeof initializeSharedFooterWidgets === "function") {
    initializeSharedFooterWidgets();
  }

  document.dispatchEvent(new CustomEvent("shared-components-loaded"));
}

document.addEventListener("DOMContentLoaded", function () {
  loadSharedLayoutComponents();
});
