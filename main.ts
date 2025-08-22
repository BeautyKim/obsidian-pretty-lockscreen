import { Plugin } from 'obsidian';

import { MyPluginSettings, DEFAULT_SETTINGS, SampleSettingTab } from './src/settings/SettingTab';
import { LockScreenModal } from './src/modals/LockScreenModal';

declare module 'obsidian' {
  interface Modal {
    closeable: boolean;
  }
}

export default class MyPlugin extends Plugin {
  settings: MyPluginSettings;
  isLocked = false;

  async onload() {
    await this.loadSettings();

    let lastActive = Date.now();

    if (this.settings.password) {
      this.isLocked = true;
      new LockScreenModal(this.app, this, () => {
        lastActive = Date.now();
        this.isLocked = false;
      }).open();
    }

    const checkLock = () => {
      if (this.isLocked) return;

      const now = Date.now();

      if (now - lastActive > this.settings.lockTimeout) {
        this.isLocked = true;
				
        new LockScreenModal(this.app, this, () => {
          lastActive = Date.now();
          this.isLocked = false;
        }).open();
      }
    };

    this.registerInterval(window.setInterval(checkLock, 5000));
    this.registerDomEvent(document, 'mousemove', () => lastActive = Date.now());
    this.registerDomEvent(document, 'keydown', () => lastActive = Date.now());

    this.addCommand({
      id: 'lock-now',
      name: '즉시 잠금 실행',
      callback: () => {
        if (!this.isLocked) {
          this.isLocked = true;
          new LockScreenModal(this.app, this, () => {
            lastActive = Date.now();
            this.isLocked = false;
          }).open();
        }
      },
    });

    // 설정 탭 추가
    this.addSettingTab(new SampleSettingTab(this.app, this));
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
