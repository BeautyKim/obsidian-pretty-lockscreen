import { App, Modal } from 'obsidian';
import MyPlugin from '../../main';

export class LockScreenModal extends Modal {
  plugin: MyPlugin;
  onSuccess: () => void;
  passwordInputEl: HTMLInputElement;
  errorEl: HTMLDivElement;
  clockInterval: number;

  constructor(app: App, plugin: MyPlugin, onSuccess: () => void) {
    super(app);
    this.plugin = plugin;
    this.onSuccess = onSuccess;
  }

  onOpen() {
    this.closeable = false;
	  this.modalEl.addClass('pretty-lockscreen-modal');

	  const { contentEl } = this;
    contentEl.empty();

    contentEl.addClass('lockscreen-container');

    const { backgroundImageUrl, backgroundOpacity } = this.plugin.settings;

    if (backgroundImageUrl) {
      const imagePath = this.app.vault.adapter.getResourcePath(backgroundImageUrl);
      contentEl.style.backgroundImage = `url("${imagePath}")`;
    }

    // 오버레이 생성 및 스타일 적용
    const overlay = contentEl.createDiv({ cls: 'lockscreen-overlay' });
    overlay.style.backgroundColor = `rgba(0, 0, 0, ${backgroundOpacity ?? 0.8})`;

    const timeEl = overlay.createEl('div', { cls: 'lockscreen-clock' });
    const updateClock = () => {
      timeEl.setText(new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateClock();
    this.clockInterval = window.setInterval(updateClock, 1000);

    const form = overlay.createDiv({ cls: 'lockscreen-form' });

    this.passwordInputEl = form.createEl('input', { type: 'password', placeholder: 'password' });
    this.passwordInputEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') { this.checkPassword(); } });

    this.errorEl = form.createDiv({ cls: 'lockscreen-error' });

    setTimeout(() => this.passwordInputEl.focus(), 0);
  }

  checkPassword() {
    const correctPassword = this.plugin.settings.password;
    const input = this.passwordInputEl.value;

    if (input === correctPassword) {
      this.close();
      this.onSuccess();
    } else {
      this.errorEl.setText('비밀번호가 일치하지 않습니다.');
      this.passwordInputEl.value = '';
    }
  }

  onClose() {
    this.contentEl.empty();
    if (this.clockInterval) {
      window.clearInterval(this.clockInterval);
    }
  }
}
