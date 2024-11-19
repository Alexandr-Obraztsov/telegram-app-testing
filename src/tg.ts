export const tg = window.Telegram.WebApp

export const user = tg.initDataUnsafe?.user

export const colors = { ...tg.themeParams }
