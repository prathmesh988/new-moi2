interface AppConfig {
    name: string,
    github: {
        title: string,
        url: string
    },
    author: {
        name: string,
        url: string
    },
}

export const appConfig: AppConfig = {
    name: "Decentralized Crowdfunding Platform",
    github: {
        title: "React Shadcn Starter",
        url: "https://github.com/ORCUSio",
    },
    author: {
        name: "Piyush Rawat",
        url: "https://github.com/ORCUSio",
    }
}