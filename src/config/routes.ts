export const PAGES = {
  HOME: {
    pathname: "Главная",
    url: "/",
  },
  PROJECT: {
    pathname: "Проекты",
    url: "/projects",
    DASHBOARD: {
      pathname: (name:string) => name,
      url: (name:string) => `/projects/${name}`,
    }
  }
} as const;