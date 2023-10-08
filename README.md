![TeleVue](https://raw.githubusercontent.com/erfanmola/TeleVue/master/TeleVue.png)

# TeleVue
TeleVue is a simple lightweight UI library for [Telegram Web Apps](https://core.telegram.org/bots/webapps) in **Vue**

## Installation
You can simply use NPM to install TeleVue package in your Vue project.  
```
yarn add @erfanmola/televue
npm install @erfanmola/televue
```

## Usage  
Inside your vue projects, you can import any provider/component that you want, but keep in mind that you must import the `style.css` file separately. For example:  
```javascript
import { AppearanceProvider, LocaleProvider } from '@erfanmola/televue';
import '@erfanmola/televue/style.css';
```

## Motivation
Telegram expanded it's field by introducing the WebApps built-in the messenger. Soon after developers started developing their own useful WebApps as Telegram Web Apps, but this introduced the problem of unfitting appearances of most WebApps on Telegram clients, since Telegram supports different themes and color schemes (Dark, Light) on different platforms (Android, iOS, Desktop, etc)

That's TeleVue project started aiming to become the UI Library for Vue including all the components of Telegram clients with their native-like styles on different platforms, to reduce the headaches of designing components that look same as the client on each platform.

## Documentation
You can see our Documentation as [Storybook](https://erfanmola.github.io/TeleVue/)

## Example WebApps
This kit is developed mainly for simplifying the development of [SimpList Bot](https://t.me/SimpListBot) for [Telegram Mini App Contest](https://t.me/contest/327), so it's good to mention the [SimpList Bot](https://t.me/SimpListBot) as an example, also here could be a list of WebApps developed by you too.

## Progress
TeleVue is still an in-development library and some features may change overtime until it reaches an stable point, but here is our plan for development of this library.

### Providers
- [x] AppearanceProvider
- [x] LocaleProvider
- [x] AuthProvider

### UI Components
- [x] Switch
- [x] CheckBox
- [x] RadioButton
- [x] Section
- [x] List
- [ ] ColorPicker
- [ ] Chips
- [ ] Avatar
- [ ] SkeletonLoading
- [ ] Charts
- [ ] ToastMessage
- [ ] Tabs
- [ ] TGS Player (Lottie, Animated Telegram Stickers)

### WebApp Components
- [ ] BackButton
- [ ] MainButton

## Contribution
Everyone is welcome to contribute to the project, you can start from [TeleVue's Github Repository](https://github.com/erfanmola/TeleVue)

## License
[MIT](https://github.com/erfanmola/TeleVue/blob/master/LICENSE)