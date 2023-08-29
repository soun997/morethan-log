const CONFIG = {
  // profile setting (required)
  profile: {
    name: "SoYun Park",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "backend developer",
    bio: "Spring Boot를 메인으로 다양한 프로젝트 경험을 쌓고 있습니다.",
    email: "soun997@gmail.com",
    linkedin: "none",
    github: "https://github.com/soun997",
    instagram: "@sso_yun_22",
  },
  projects: [
    {
      name: `morethan-log`,
      href: "https://github.com/soun997/morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "SSO's Code",
    description: "배움에서 즐거움을 얻는 개발자입니다.",
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
