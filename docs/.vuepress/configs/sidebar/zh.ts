import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/guide/': [
    {
      text: 'NeuroMaster',
      children: ['/guide/arduino.md'],
    },
  ],
}
