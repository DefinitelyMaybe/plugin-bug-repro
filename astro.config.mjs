// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopicsDropdown from "starlight-sidebar-topics-dropdown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        "zh-cn": {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      plugins: [
        starlightSidebarTopicsDropdown([
          {
            label: {
              en: "Guides",
              "zh-CN": "指南",
            },
            link: "guides/example",
            items: [
              // Each item here is one entry in the navigation menu.
              {
                label: "test",
                translations: {
                  "zh-CN": "测试",
                },
                autogenerate: { directory: "guides" },
              },
            ],
          },
          {
            label: "Reference",
            link: "reference/example",
            items: [
              {
                label: "abc",
                autogenerate: { directory: "reference" },
              },
            ],
          },
        ]),
      ],
    }),
  ],
});
