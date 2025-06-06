import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, d as renderHead } from '../chunks/astro/server_afRpe8AA.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script lang="js">\n  if (\n    localStorage["starlight-theme"] === "dark" ||\n    (!(["starlight-theme"] in localStorage) &&\n      window.matchMedia("(prefers-color-scheme: dark)").matches)\n  ) {\n    document.documentElement.classList.add("dark");\n  } else {\n    document.documentElement.classList.remove("dark");\n  }\n\n  const HSThemeAppearance = {\n    init() {\n      const defaultTheme = "default";\n      let theme = localStorage.getItem("starlight-theme") || defaultTheme;\n\n      if (document.querySelector("html").classList.contains("dark")) return;\n      this.setAppearance(theme);\n    },\n    _resetStylesOnLoad() {\n      const $resetStyles = document.createElement("style");\n      $resetStyles.innerText = `*{transition: unset !important;}`;\n      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");\n      document.head.appendChild($resetStyles);\n      return $resetStyles;\n    },\n    setAppearance(theme, saveInStore = true, dispatchEvent = true) {\n      const $resetStylesEl = this._resetStylesOnLoad();\n\n      if (saveInStore) {\n        localStorage.setItem("starlight-theme", theme);\n      }\n\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n\n      document.querySelector("html").classList.remove("dark");\n      document.querySelector("html").classList.remove("default");\n      document.querySelector("html").classList.remove("auto");\n\n      document\n        .querySelector("html")\n        .classList.add(this.getOriginalAppearance());\n\n      setTimeout(() => {\n        $resetStylesEl.remove();\n      });\n\n      if (dispatchEvent) {\n        window.dispatchEvent(\n          new CustomEvent("on-hs-appearance-change", { detail: theme }),\n        );\n      }\n    },\n    getAppearance() {\n      let theme = this.getOriginalAppearance();\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n      return theme;\n    },\n    getOriginalAppearance() {\n      const defaultTheme = "default";\n      return localStorage.getItem("starlight-theme") || defaultTheme;\n    },\n  };\n  HSThemeAppearance.init();\n\n  window\n    .matchMedia("(prefers-color-scheme: dark)")\n    .addEventListener("change", (e) => {\n      if (HSThemeAppearance.getOriginalAppearance() === "auto") {\n        HSThemeAppearance.setAppearance("auto", false);\n      }\n    });\n\n  window.addEventListener("load", () => {\n    const $clickableThemes = document.querySelectorAll(\n      "[data-hs-theme-click-value]",\n    );\n    const $switchableThemes = document.querySelectorAll(\n      "[data-hs-theme-switch]",\n    );\n\n    $clickableThemes.forEach(($item) => {\n      $item.addEventListener("click", () =>\n        HSThemeAppearance.setAppearance(\n          $item.getAttribute("data-hs-theme-click-value"),\n          true,\n          $item,\n        ),\n      );\n    });\n\n    $switchableThemes.forEach(($item) => {\n      $item.addEventListener("change", (e) => {\n        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");\n      });\n\n      $item.checked = HSThemeAppearance.getAppearance() === "dark";\n    });\n\n    window.addEventListener("on-hs-appearance-change", (e) => {\n      $switchableThemes.forEach(($item) => {\n        $item.checked = e.detail === "dark";\n      });\n    });\n  });\n<\/script> ', '<header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full border-b border-gray-200 text-sm py-3 sm:py-0 dark:border-stone-700"> <nav class="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global"> <div class="flex items-center justify-between"> <a class="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">C3</a> <div class="sm:hidden"> <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-stone-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-stone-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-stone-950" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path> </svg> <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path> </svg> </button> </div> </div> <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"> <div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7"> <a class="font-medium text-gray-500 hover:text-blue-500 sm:py-6 dark:text-gray-400 dark:hover:text-blue-500" href="/getting-started/">Docs</a> <a class="font-medium text-gray-500 hover:text-blue-500 sm:py-6 dark:text-gray-400 dark:hover:text-blue-500" href="/language-overview/examples">Examples</a> <a class="font-medium text-gray-500 hover:text-blue-500 sm:py-6 dark:text-gray-400 dark:hover:text-blue-500" href="/getting-started/prebuilt-binaries">Download</a> <a class="font-medium text-gray-500 hover:text-blue-500 sm:py-6 dark:text-gray-400 dark:hover:text-blue-500" href="https://discord.gg/qN76R87">\nDiscord\n</a> <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4"> <button type="button" class="flex items-center w-full text-stone-600 hover:text-blue-500 font-medium dark:text-gray-400 dark:hover:text-blue-500">\nMore\n<svg class="ml-2 w-2.5 h-2.5 text-stone-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path> </svg> </button> <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-stone-950 sm:dark:border dark:border-stone-700 dark:divide-stone-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5"> <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md font-medium text-stone-600 hover:text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-gray-100" href="https://github.com/c3lang/c3c">\nGithub\n</a> <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md font-medium text-stone-600 hover:text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-gray-100" href="https://github.com/sponsors/c3lang">\nSupport us\n</a> </div> </div> <a class="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" href="#!" data-hs-theme-click-value="dark"> <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path> </svg> </a> <a class="hs-dark-mode-active:block hs-dark-mode hidden group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" href="#!" data-hs-theme-click-value="light"> <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path> </svg> </a> </div> </div> </nav> </header>'], ['<script lang="js">\n  if (\n    localStorage["starlight-theme"] === "dark" ||\n    (!(["starlight-theme"] in localStorage) &&\n      window.matchMedia("(prefers-color-scheme: dark)").matches)\n  ) {\n    document.documentElement.classList.add("dark");\n  } else {\n    document.documentElement.classList.remove("dark");\n  }\n\n  const HSThemeAppearance = {\n    init() {\n      const defaultTheme = "default";\n      let theme = localStorage.getItem("starlight-theme") || defaultTheme;\n\n      if (document.querySelector("html").classList.contains("dark")) return;\n      this.setAppearance(theme);\n    },\n    _resetStylesOnLoad() {\n      const $resetStyles = document.createElement("style");\n      $resetStyles.innerText = \\`*{transition: unset !important;}\\`;\n      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");\n      document.head.appendChild($resetStyles);\n      return $resetStyles;\n    },\n    setAppearance(theme, saveInStore = true, dispatchEvent = true) {\n      const $resetStylesEl = this._resetStylesOnLoad();\n\n      if (saveInStore) {\n        localStorage.setItem("starlight-theme", theme);\n      }\n\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n\n      document.querySelector("html").classList.remove("dark");\n      document.querySelector("html").classList.remove("default");\n      document.querySelector("html").classList.remove("auto");\n\n      document\n        .querySelector("html")\n        .classList.add(this.getOriginalAppearance());\n\n      setTimeout(() => {\n        $resetStylesEl.remove();\n      });\n\n      if (dispatchEvent) {\n        window.dispatchEvent(\n          new CustomEvent("on-hs-appearance-change", { detail: theme }),\n        );\n      }\n    },\n    getAppearance() {\n      let theme = this.getOriginalAppearance();\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n      return theme;\n    },\n    getOriginalAppearance() {\n      const defaultTheme = "default";\n      return localStorage.getItem("starlight-theme") || defaultTheme;\n    },\n  };\n  HSThemeAppearance.init();\n\n  window\n    .matchMedia("(prefers-color-scheme: dark)")\n    .addEventListener("change", (e) => {\n      if (HSThemeAppearance.getOriginalAppearance() === "auto") {\n        HSThemeAppearance.setAppearance("auto", false);\n      }\n    });\n\n  window.addEventListener("load", () => {\n    const $clickableThemes = document.querySelectorAll(\n      "[data-hs-theme-click-value]",\n    );\n    const $switchableThemes = document.querySelectorAll(\n      "[data-hs-theme-switch]",\n    );\n\n    $clickableThemes.forEach(($item) => {\n      $item.addEventListener("click", () =>\n        HSThemeAppearance.setAppearance(\n          $item.getAttribute("data-hs-theme-click-value"),\n          true,\n          $item,\n        ),\n      );\n    });\n\n    $switchableThemes.forEach(($item) => {\n      $item.addEventListener("change", (e) => {\n        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");\n      });\n\n      $item.checked = HSThemeAppearance.getAppearance() === "dark";\n    });\n\n    window.addEventListener("on-hs-appearance-change", (e) => {\n      $switchableThemes.forEach(($item) => {\n        $item.checked = e.detail === "dark";\n      });\n    });\n  });\n<\/script> ', '<header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full border-b border-gray-200 text-sm py-3 sm:py-0 dark:border-stone-700"> <nav class="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global"> <div class="flex items-center justify-between"> <a class="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">C3</a> <div class="sm:hidden"> <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-stone-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-stone-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-stone-950" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path> </svg> <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path> </svg> </button> </div> </div> <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"> <div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7"> <a class="font-medium text-gray-500 hover:text-blue-500 sm:py-6 dark:text-gray-400 dark:hover:text-blue-500" href="/getting-started/">Docs</a> <a class="font-medium text-gray-500 hover:text-blue-500 sm:py-6 dark:text-gray-400 dark:hover:text-blue-500" href="/language-overview/examples">Examples</a> <a class="font-medium text-gray-500 hover:text-blue-500 sm:py-6 dark:text-gray-400 dark:hover:text-blue-500" href="/getting-started/prebuilt-binaries">Download</a> <a class="font-medium text-gray-500 hover:text-blue-500 sm:py-6 dark:text-gray-400 dark:hover:text-blue-500" href="https://discord.gg/qN76R87">\nDiscord\n</a> <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4"> <button type="button" class="flex items-center w-full text-stone-600 hover:text-blue-500 font-medium dark:text-gray-400 dark:hover:text-blue-500">\nMore\n<svg class="ml-2 w-2.5 h-2.5 text-stone-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path> </svg> </button> <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-stone-950 sm:dark:border dark:border-stone-700 dark:divide-stone-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5"> <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md font-medium text-stone-600 hover:text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-gray-100" href="https://github.com/c3lang/c3c">\nGithub\n</a> <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md font-medium text-stone-600 hover:text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-gray-100" href="https://github.com/sponsors/c3lang">\nSupport us\n</a> </div> </div> <a class="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" href="#!" data-hs-theme-click-value="dark"> <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path> </svg> </a> <a class="hs-dark-mode-active:block hs-dark-mode hidden group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" href="#!" data-hs-theme-click-value="light"> <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path> </svg> </a> </div> </div> </nav> </header>'])), maybeRenderHead());
}, "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/components/navbar.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<div class="relative
  overflow-hidden
  before:absolute
  before:top-0 before:left-1/2
  before:bg-no-repeat
  before:bg-top
  before:bg-cover
  before:w-full
  before:h-full
  before:-z-[1]
  before:transform
  before:-translate-x-1/2"> <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10"> <div class="mt-5 text-center mx-auto"> <h1 class="flex justify-center content-center font-bold text-stone-950 text-2xl md:text-5xl lg:text-6xl dark:text-gray-200"> <img src="/logo.svg" class="flex justfity-center"> </h1> </div> <div class="mt-5 max-w-3xl text-center mx-auto"> <p class="text-lg text-gray-600 dark:text-gray-400"> <!-- The Next Generation of C --> </p> </div> <div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center"> <a class="inline-flex
        justify-center
        items-center
        gap-x-3 text-center
        bg-blue-600
        border-blue-600
        hover:border-slate-950
        border-2
        rounded-md
        py-3
        px-4
        shadow-sm
        focus:z-10
        focus:outline-none focus:ring-2 dark:focus:ring-blue-200 focus:ring-blue-800 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-stone-950
        transition-all
        leading-1
        text-sm
        text-white
        font-medium
        select-none
        dark:bg-blue-600
        dark:hover:border-blue-500
        dark:border-blue-600
        dark:text-white" href="/getting-started">
Get started
<svg class="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none"> <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path> </svg> </a> <!-- <a
        class="relative group inline-flex justify-center items-center gap-x-3.5 text-center bg-white border hover:border-gray-300 shadow-sm font-mono text-sm font-medium rounded-md
        focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white
        transition p-2 pl-4 dark:bg-slate-900 dark:border-stone-950 dark:hover:border-gray-600 dark:shadow-slate-700/[.7]
         dark:text-white
          dark:focus:ring-blue-200 dark:focus:ring-offset-stone-950"
        href="javascript:navigator.clipboard.writeText('c3c compile hello.c3');"
      >
        c3c compile hello.c3
        <span
          class="flex justify-center items-center bg-gray-200 rounded-md w-7 h-7 dark:bg-stone-700 dark:text-gray-400"
        >
          <svg
            class="w-3.5 h-3.5 group-hover:rotate-6 transition"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
            ></path>
            <path
              d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
            ></path>
          </svg>
        </span>
      </a> --> </div> <div class="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3"> <span class="text-sm text-gray-600 dark:text-gray-400">Current version:
</span> <span class="text-sm font-bold text-gray-900 dark:text-white">0.6.8</span> <svg class="h-5 w-5 text-gray-300 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"></path> </svg> <a class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="/getting-started/prebuilt-binaries">
Installation Guide
<svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none"> <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path> </svg> </a> </div> </div> </div>`;
}, "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/components/hero.astro", void 0);

const $$Download = createComponent(($$result, $$props, $$slots) => {
  const downloadUrl = (os, ext = "zip") => `https://github.com/c3lang/c3c/releases/latest/download/c3-${os}.${ext}`;
  return renderTemplate`${maybeRenderHead()}<div class="mt-3 flex"> <a id="download-button" class="bg-blue-600
      border-blue-600
      hover:border-slate-950
      border-2
      rounded-l-md
      py-3
      px-4
      shadow-sm
      focus:z-10
      focus:outline-none focus:ring-2 dark:focus:ring-blue-200 focus:ring-blue-800 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-stone-950
      transition-all
      leading-1
      text-sm
      text-white
      font-medium
      select-none
      dark:bg-blue-600
      dark:hover:border-blue-500
      dark:border-blue-600
      dark:text-white"${addAttribute(downloadUrl("windows"), "href")}>
Download for Windows
</a> <button class="relative
    flex
    items-center
    bg-gray-100
    py-3
    px-4
    rounded-r-md
    border-gray-200
    font-medium
    text-sm
    shadow-sm
    align-middle
    transition-all
    hover:bg-gray-50
    hover:border-gray-300
    border-2
    dark:bg-slate-800
    dark:hover:bg-gray-800
    dark:hover:text-white
    dark:border-gray-800
    dark:hover:border-gray-700
    focus:outline-none focus:ring-2 dark:focus:ring-blue-200 focus:ring-blue-800 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-stone-950" id="dropDownTopLevel"> <span class="sr-only">Toggle Dropdown</span> <!-- this will rotate-180 on click --> <svg class="w-2.5 h-2.5 text-gray-600 dark:text-gray-100
      transition-all duration-150" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="shevron"> <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path> </svg> </button> <div class="transition-[opacity,margin] duration-200 opacity-0
    hidden
    p-2
    mt-[3.9rem]
    z-10
    rounded-lg
    shadow-xl
    absolute
    bg-slate-50 dark:bg-slate-700
    border-2 border-gray-200
  dark:border-slate-600" id="menuDiv" aria-haspopup="dialog"> <ul id="extra_download_options"> <li tabindex="2"> <a id="windows-download" style="display: none;" class="flex justify-end items-center gap-x-3.5 py-2 px-3 rounded-md text-sm select-none
      text-gray-900
        hover:shadow-sm hover:bg-blue-200
      dark:hover:bg-blue-700 dark:text-white
        focus:ring-2 focus:ring-blue-500"${addAttribute(downloadUrl("windows"), "href")}>
Windows
</a> </li> <li tabindex="3"> <a id="macos-download" class="flex justify-end items-center gap-x-3.5 py-2 px-3 rounded-md text-sm select-none
      text-gray-900
        hover:shadow-sm hover:bg-blue-200
      dark:hover:bg-blue-700 dark:text-white
        focus:ring-2 focus:ring-blue-500"${addAttribute(downloadUrl("macos"), "href")}>
MacOS
</a> </li> <li tabindex="4"> <a id="linux-download" class="flex justify-end items-center gap-x-3.5 py-2 px-3 rounded-md text-sm select-none
      text-gray-900
        hover:shadow-sm hover:bg-blue-200
      dark:hover:bg-blue-700 dark:text-white
        focus:ring-2 focus:ring-blue-500"${addAttribute(downloadUrl("linux", "tar.gz"), "href")}>
Linux
</a> </li> </ul> </div> </div> `;
}, "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/components/download.astro", void 0);

const $$Sample = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main> <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center"> <div> <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
The
<span class="bg-clip-text bg-gradient-to-l from-violet-600 to-blue-600 text-transparent">C3</span>
Programming Language
</h1> <p class="mt-3 text-lg text-gray-800 dark:text-gray-400 mb-5"> <!-- Simple, fast, safe, compiled. For developing maintainable software. -->
The Ergonomic, Safe and Familiar Evolution of C
</p> ${renderComponent($$result, "DownloadButton", $$Download, {})} </div> <div class="relative"> <div class="flex items-center justify-center"> <div class="lg:w-10/12 dark:bg-slate-900 shadow-2xl rounded-lg overflow-hidden"> <div id="header-buttons" class="py-3 px-4 flex"> <div class="rounded-full w-3 h-3 bg-red-500 mr-2"></div> <div class="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div> <div class="rounded-full w-3 h-3 bg-green-500"></div> </div> <div id="code-area" class="mt-1 text-white text-xl"> <div class="mb-2"> <code class="text-xl sm:text-xl inline-flex text-left items-center space-x-4 text-stone-950 dark:text-white rounded-lg p-10">
                  <span> <span class="text-blue-500">module</span> <span
                  class="text-red-400">hello_world</span>;<br /> <span
                  class="text-blue-500">import</span> <span
                  class="text-red-400">std</span>::<span
                  class="text-red-400">io</span >;<br /> <br /> <span
                  class="text-blue-500">fn</span> <span
                  class="text-red-400">void</span> <span
                  class="text-orange-400">main</span>() <br />{<br /> <span
                  class="ml-5"> <span class="text-red-400">io</span>::<span
                  class="text-red-400">printn</span>(<span
                  class="text-green-500">"Hello, world!"</span>); </span> <br />
                  }<br /> </span>
                </code> </div> </div> </div> </div> </div> </div> </div> </main>`;
}, "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/components/sample.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<hr class="w-96 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-900"> <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"> <div class="grid md:grid-cols-2 gap-12"> <div class="space-y-6 lg:space-y-10"> <div class="flex"> <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-blue-700 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-blue-700 dark:text-gray-200"> ${renderComponent($$result, "box-icon", "box-icon", { "name": "exclude", "color": "currentColor", "fill": "currentColor" })} </span> <div class="ml-5 sm:ml-8"> <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
Full C ABI Compatibility
</h3> <p class="mt-1 text-gray-600 dark:text-gray-400">
C3 fits right into your C/C++ application with full C ABI
            compatibility out of the box: no need for special "C compatible"
            types or functions, no limitations on what C3 features you can use
            from C.
</p> </div> </div> <div class="flex"> <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-blue-700 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-blue-700 dark:text-gray-200"> ${renderComponent($$result, "box-icon", "box-icon", { "type": "solid", "name": "package", "color": "currentColor", "fill": "currentColor" })} </span> <div class="ml-5 sm:ml-8"> <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
Module System
</h3> <p class="mt-1 text-gray-600 dark:text-gray-400">
A simple and straightforward module system that doesn't get into the
            way with defaults that makes sense.
</p> </div> </div> <div class="flex"> <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-blue-700 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-blue-700 dark:text-gray-200"> ${renderComponent($$result, "box-icon", "box-icon", { "name": "command", "color": "currentColor", "fill": "currentColor" })} </span> <div class="ml-5 sm:ml-8"> <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
Semantic Macros
</h3> <p class="mt-1 text-gray-600 dark:text-gray-400">
Macros that are just as easy to read and write as regular functions.
            Packing much more power than C's preprocessor, they're deliberately
            balanced to ensure that code reading isn't made difficult.
</p> </div> </div> </div> <div class="lg:w-3/4"> <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
C3 is an evolution, not a revolution:
<span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">the C-like for programmers who like C.</span> </h2> <p class="mt-3 text-gray-800 dark:text-gray-400">
C3 is a programming language that builds on the syntax and semantics of
        the C language, with the goal of evolving it while still retaining
        familiarity for C programmers.<br><br>
Thanks to full ABI compatibility with C, it's possible to mix C and C3 in
        the same project with no effort. As a demonstration, vkQuake was compiled
        with a small portion of the code converted to C3 and compiled with the c3c
        compiler.
</p> <a class="mt-5 inline-flex items-center gap-x-2 font-medium text-blue-600 dark:text-blue-500" href="https://github.com/c3lang/vkQuake">
The fork can be found here
<svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"></path> </svg> </a> </div> </div> </div> <!-- Icon Blocks --> <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"> <div class="mx-auto"> <!-- Grid --> <div class="grid md:grid-cols-2 gap-6 lg:gap-12"> <div class="space-y-6 lg:space-y-10"> <!-- Icon Block --> <div class="flex"> ${renderComponent($$result, "box-icon", "box-icon", { "class": "text-black dark:text-white", "type": "solid", "name": "pen", "color": "currentColor", "fill": "currentColor", "size": "24px" })} <div class="ms-5 sm:ms-8"> <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
Gradual Contracts
</h3> <p class="mt-1 text-gray-600 dark:text-gray-400">
C3 brings programming-by-contract to the mainstream with
              unobtrusive contracts that are used to express both runtime and
              compile-time constraints.
</p> </div> </div> <!-- End Icon Block --> <!-- Icon Block --> <div class="flex"> ${renderComponent($$result, "box-icon", "box-icon", { "class": "text-black dark:text-white", "name": "comment-error", "color": "currentColor", "fill": "currentColor", "size": "24px" })} <div class="ms-5 sm:ms-8"> <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
Zero Overhead Errors
</h3> <p class="mt-1 text-gray-600 dark:text-gray-400">
Error handling that combines the best parts of "Result" errors
              with the easy use of exceptions and integrates seamlessly with C.
</p> </div> </div> <!-- End Icon Block --> <!-- Icon Block --> <div class="flex"> ${renderComponent($$result, "box-icon", "box-icon", { "class": "text-black dark:text-white", "name": "bracket", "color": "currentColor", "fill": "currentColor", "size": "24px" })} <div class="ms-5 sm:ms-8"> <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
Built-in slices and slicing
</h3> <p class="mt-1 text-gray-600 dark:text-gray-400">
Slices are type safe "pointer + length" types which natively
              supports copying and comparison.
</p> </div> </div> <!-- End Icon Block --> <div class="flex"> ${renderComponent($$result, "box-icon", "box-icon", { "class": "text-black dark:text-white", "name": "package", "color": "currentColor", "fill": "currentColor", "size": "24px" })} <div class="ms-5 sm:ms-8"> <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
Generic modules
</h3> <p class="mt-1 text-gray-600 dark:text-gray-400">
C3 generic modules offer superior simplicity and clarity for
              creating generic types.
</p> </div> </div> <!-- End Icon Block --> </div> <!-- End Col --> <div class="space-y-6 lg:space-y-10"> <!-- Icon Block --> <div class="flex"> ${renderComponent($$result, "box-icon", "box-icon", { "class": "text-black dark:text-white", "name": "refresh", "color": "currentColor", "fill": "currentColor", "size": "24px" })} <div class="ms-5 sm:ms-8"> <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
Runtime and compile reflection
</h3> <p class="mt-1 text-gray-600 dark:text-gray-400">
Type introspection is available both at compile time and runtime,
              powering flexible macros and functions
</p> </div> </div> <!-- End Icon Block --> <!-- Icon Block --> <div class="flex"> ${renderComponent($$result, "box-icon", "box-icon", { "class": "text-black dark:text-white", "name": "code", "color": "currentColor", "fill": "currentColor", "size": "24px" })} <div class="ms-5 sm:ms-8"> <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
Inline Assembly
</h3> <p class="mt-1 text-gray-600 dark:text-gray-400">
Write asm as regular inline code without using strings or cryptic
              constraints.
</p> </div> </div> <!-- End Icon Block --> <div class="flex"> ${renderComponent($$result, "box-icon", "box-icon", { "class": "text-black dark:text-white", "name": "bug", "type": "solid", "color": "currentColor", "fill": "currentColor", "size": "24px" })} <div class="ms-5 sm:ms-8"> <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
Debug with safety checks
</h3> <p class="mt-1 text-gray-600 dark:text-gray-400">
Feel confident in your code's correctness: in debug mode the
              compiler inserts extensive runtime bounds checks and value checks,
              which together with contracts will let you catch bugs early.
</p> </div> </div> <!-- End Icon Block --> <div class="flex"> ${renderComponent($$result, "box-icon", "box-icon", { "class": "text-black dark:text-white", "name": "code", "color": "currentColor", "fill": "currentColor", "size": "24px" })} <div class="ms-5 sm:ms-8"> <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
Detailed stacktraces
</h3> <p class="mt-1 text-gray-600 dark:text-gray-400">
No more anonymous "segmentation fault" errors: the C3 standard
              library enables detailed stacktraces out of the box for your debug
              builds.
</p> </div> </div> </div> <!-- End Col --> </div> <!-- End Grid --> </div> </div> <hr class="w-96 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-900">`;
}, "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/components/features.astro", void 0);

const $$Community = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="hs-basic-modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden w-full h-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none"> <div class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"> <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-stone-950 dark:border-gray-700 dark:shadow-slate-700/[.7]"> <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700"> <h3 class="font-bold text-gray-800 dark:text-white">The Community</h3> <button type="button" class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-basic-modal"> <span class="sr-only">Close</span> <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> <div class="p-4 overflow-y-auto"> <p class="mt-1 text-gray-800 dark:text-gray-400">
C3 has a wonderful and welcoming community full of passionate people,
          join us on:
</p> <!-- icon + link --> <div class="flex items-center gap-x-2 mt-4"> ${renderComponent($$result, "box-icon", "box-icon", { "class": "w-6 h-6 text-black dark:text-white", "type": "logo", "name": "discord", "color": "currentColor", "fill": "currentColor" })} <a class="text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400" href="https://discord.gg/qN76R87" target="_blank" rel="noopener noreferrer">
Discord
</a> </div> <!-- icon + link --> <div class="flex items-center gap-x-2 mt-4"> ${renderComponent($$result, "box-icon", "box-icon", { "class": "w-6 h-6 text-black dark:text-white", "type": "logo", "name": "discourse", "color": "currentColor", "fill": "currentColor" })} <a class="text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400" href="https://c3lang.discourse.group/" target="_blank" rel="noopener noreferrer">
Discourse
</a> </div> <!-- icon + link --> <div class="flex items-center gap-x-2 mt-4"> ${renderComponent($$result, "box-icon", "box-icon", { "class": "w-6 h-6 text-black dark:text-white", "type": "logo", "name": "github", "color": "currentColor", "fill": "currentColor" })} <a class="text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400" href="https://github.com/c3lang/c3c/discussions" target="_blank" rel="noopener noreferrer">
GitHub Discussions
</a> </div> <p class="mt-4 text-gray-800 dark:text-gray-400">
You can also follow us on:
</p> <!-- icon + link --> <div class="flex items-center gap-x-2 mt-4"> ${renderComponent($$result, "box-icon", "box-icon", { "class": "w-6 h-6 text-black dark:text-white", "type": "logo", "name": "twitter", "color": "currentColor", "fill": "currentColor" })} <a class="text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400" href="https://twitter.com/C3Lang" target="_blank" rel="noopener noreferrer">
Twitter
</a> </div> </div> <div class="flex
            justify-end
            items-center
            gap-x-2
            py-3
            px-4
            border-t
            dark:border-gray-700"> <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-basic-modal">
Close
</button> </div> </div> </div> </div> <div class="flex flex-col center content-center items-center justify-center"> <h1 style="font-size: 64px" class="font-bold
    text-gray-800
    dark:text-white">
Get Started
</h1> <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8"> <a class="flex flex-col h-full text-center rounded-md hover:bg-gray-100 p-4 sm:p-6 dark:hover:bg-white/[.05]" href="/getting-started/prebuilt-binaries"> ${renderComponent($$result, "box-icon", "box-icon", { "class": "w-24 h-24 mx-auto text-black dark:text-white", "type": "solid", "name": "download", "color": "currentColor", "fill": "currentColor" })} <div class="grow"> <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
Download
</h3> <p class="mt-1 text-gray-500">
Install the C3 compiler for Windows, Mac and Linux.
</p> </div> </a> <a class="flex flex-col h-full text-center rounded-md hover:bg-gray-100 p-4 sm:p-6 dark:hover:bg-white/[.05]" href="/getting-started"> ${renderComponent($$result, "box-icon", "box-icon", { "class": "w-24 h-24 mx-auto text-black dark:text-white", "type": "solid", "name": "graduation", "color": "currentColor", "fill": "currentColor" })} <div class="grow"> <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
Learn
</h3> <p class="mt-1 text-gray-500">
Check out the C3 manual to start programming with C3.
</p> </div> </a> <button class="flex flex-col h-full text-center rounded-md hover:bg-gray-100 p-4 sm:p-6 dark:hover:bg-white/[.05]" type="button" data-hs-overlay="#hs-basic-modal"> ${renderComponent($$result, "box-icon", "box-icon", { "class": "w-24 h-24 mx-auto text-black dark:text-white", "type": "solid", "name": "chat", "color": "currentColor", "fill": "currentColor" })} <div class="grow"> <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
Engage
</h3> <p class="mt-1 text-gray-500">
Help us improve C3 by being a part of the community.
</p> </div> </button> </div> </div> <footer class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto"> <!-- Grid --> <div class="text-center"> <div>
Sponsors
<div> <a href="https://huly.io"><img style="margin:auto" src="/huly-safe-black.svg" alt="Huly logo" width="30%"></a> </div> </div> <!-- End Col --> <div class="mt-3"> <p class="text-gray-500">
This website is <a class="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400" href="https://github.com/onrirr/c3-web">Open Source</a>.
</p> </div> </div> <!-- End Grid --> </footer>`;
}, "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/components/community.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="description" content="C3 is a programming language that builds on the syntax and semantics of the C language, with the goal of evolving it while still retaining familiarity for C programmers."><meta name="og:title" content="C3"><meta name="og:description" content="C3 is a programming language that builds on the syntax and semantics of the C language, with the goal of evolving it while still retaining familiarity for C programmers."><meta content="/logo.svg" property="og:image"><meta content="#4355ec" data-react-helmet="true" name="theme-color"><meta name="og:image" content="/logo.svg"><link rel="icon" href="/ico.svg" type="image/x-icon"><title>C3 | An evolution, not a revolution</title>${renderHead()}</head> <body class="dark:bg-stone-950 bg-white"> <div style="height: auto"> ${renderComponent($$result, "Hero", $$Hero, {})} ${renderComponent($$result, "Sample", $$Sample, {})} ${renderComponent($$result, "Features", $$Features, {})} ${renderComponent($$result, "Community", $$Community, {})} </div> <link rel="stylesheet" href="/index.css"> </body>`;
}, "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/pages/index.astro", void 0);

const $$file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
