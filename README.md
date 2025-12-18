# test-lib

Локальный playground для `@tot/ui-kit` на Vite.

## Запуск
```bash
npm install
npm run dev
```

## Обновить либу @tot/ui-kit (локальная папка)
```bash
npm run update
```
Скрипт билдит `../tot-ui-kit` и форсит установку свежей версии из локальной папки `file:../tot-ui-kit`.

## Тема и цвета
- Тема хранится в `localStorage` (`tot-ui-kit-theme`) и выставляется на `html` как `data-theme="light"` или `data-theme="dark"`.
- Цвета берутся из triplex-токенов, переопределённых в `tot-ui-kit/src/global.css`. Тёмный фон — токен `--triplex-next-DropdownMobileList-Active_Background-1-5-0` (fallback `#1e2330`), применяется и к меню, и к фону layout.
- Узнать текущую тему в коде:
  ```tsx
  import { useTheme } from '@tot/ui-kit'

  const theme = useTheme() // 'light' | 'dark'
  ```

## Где смотреть цвета
- Глобальные переопределения темы: `tot-ui-kit/src/global.css`
- Фон layout: `tot-ui-kit/src/components/Layout/styles.css`
- Меню и его фон: `tot-ui-kit/src/components/MainMenu/MainMenu.css`
