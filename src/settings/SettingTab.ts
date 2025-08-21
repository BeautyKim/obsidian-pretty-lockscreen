// src/settings/SettingTab.ts
import { App, PluginSettingTab, Setting } from 'obsidian';
import MyPlugin from '../main';

export interface MyPluginSettings {
  mySetting: string;
  password: string;
  lockTimeout: number;
  backgroundImageUrl?: string;
  backgroundOpacity?: number;
}

export const DEFAULT_SETTINGS: MyPluginSettings = {
  mySetting: 'default',
  password: '',
  lockTimeout: 5 * 60 * 1000,
  backgroundImageUrl: '',
  backgroundOpacity: 0.8,
};

export class SampleSettingTab extends PluginSettingTab {
  plugin: MyPlugin;

  constructor(app: App, plugin: MyPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    new Setting(containerEl)
      .setName('비밀번호 설정')
      .setDesc('앱 잠금을 위한 비밀번호를 설정하세요')
      .addText(text => text
        .setPlaceholder('비밀번호')
        .setValue(this.plugin.settings.password)
        .onChange(async (value) => {
          this.plugin.settings.password = value;
          await this.plugin.saveSettings();
        }));

    new Setting(containerEl)
      .setName('잠금 대기 시간(초)')
      .setDesc('입력되지 않으면 잠금이 실행됩니다')
      .addText(text => text
        .setPlaceholder('예: 300')
        .setValue((this.plugin.settings.lockTimeout / 1000).toString())
        .onChange(async (value) => {
          const ms = parseInt(value) * 1000;
          this.plugin.settings.lockTimeout = isNaN(ms) ? 300000 : ms;
          await this.plugin.saveSettings();
        }));

    new Setting(containerEl)
      .setName('배경 이미지 URL')
      .setDesc('잠금 화면 배경으로 사용할 이미지 URL 또는 파일 경로를 입력하세요 (예: attachments/image.jpg)')
      .addText(text => text
        .setPlaceholder('https://example.com/image.jpg')
        .setValue(this.plugin.settings.backgroundImageUrl || '')
        .onChange(async (value) => {
          this.plugin.settings.backgroundImageUrl = value;
          await this.plugin.saveSettings();
        }));

    new Setting(containerEl)
      .setName('배경 불투명도')
      .setDesc('0.0 ~ 1.0 사이의 값을 입력하세요 (예: 0.8)')
      .addText(text => text
        .setPlaceholder('0.8')
        .setValue(this.plugin.settings.backgroundOpacity?.toString() || '0.8')
        .onChange(async (value) => {
          const opacity = parseFloat(value);
          if (!isNaN(opacity) && opacity >= 0 && opacity <= 1) {
            this.plugin.settings.backgroundOpacity = opacity;
            // CSS 변수 업데이트
            document.documentElement.style.setProperty('--background-opacity', opacity.toString());
            await this.plugin.saveSettings();
          }
        }));
  }
}
