import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/en/guide/': [
    {
      text: 'NeuroMaster',
      children: ['/en/guide/arduino.md'],
    },
  ],
}
