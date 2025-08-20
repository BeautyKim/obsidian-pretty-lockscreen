# Pretty Lockscreen for Obsidian

**Pretty Lockscreen**은 당신의 Obsidian 볼트를 아름답고 안전하게 보호하는 간단한 잠금 화면 플러그인입니다. 일정 시간 자리를 비우면 자동으로 화면이 잠기며, 사용자 정의 배경화면과 불투명도 설정으로 나만의 잠금 화면을 꾸밀 수 있습니다.

![Pretty Lockscreen Demo GIF](prettyLockscreen.gif)

---
## ✨ 주요 기능

* **자동 잠금**: 설정된 시간 동안 아무런 입력이 없으면 자동으로 잠금 화면이 활성화됩니다.
* **즉시 잠금**: 커맨드(`즉시 잠금 실행`)를 통해 원할 때 바로 잠글 수 있습니다.
* **비밀번호 보호**: 설정한 비밀번호를 입력해야만 잠금을 해제할 수 있습니다.
* **커스텀 배경화면**: 원하는 이미지 URL이나 로컬 파일 경로를 지정하여 잠금 화면의 배경으로 사용할 수 있습니다.
* **불투명도 조절**: 배경 위에 표시되는 오버레이의 불투명도를 조절하여 가독성을 높일 수 있습니다.
* **현재 시간 표시**: 잠금 화면에 현재 시간이 표시됩니다.

---
## ⚙️ 설치 방법

1.  Obsidian의 `설정` > `커뮤니티 플러그인`에서 `안전 모드`를 비활성화하세요.
2.  `커뮤_니티 플러그인 찾아보기`를 클릭하고 `Pretty Lockscreen`을 검색하여 설치하세요. (아직 출시되지 않았다면 수동 설치)
3.  `Pretty Lockscreen` 플러그인을 활성화하세요.

### 수동 설치

1.  이 저장소의 [Releases](https://github.com/BeautyKim/obsidian-pretty-lockscreen) 페이지에서 최신 버전의 `main.js`, `styles.css`, `manifest.json` 파일을 다운로드합니다.
2.  Obsidian 볼트의 `.obsidian/plugins/` 디렉토리 안에 `obsidian-pretty-lockscreen`이라는 새 폴더를 만듭니다.
3.  다운로드한 파일들을 `obsidian-pretty-lockscreen` 폴더 안에 붙여넣습니다.
4.  Obsidian 설정에서 플러그인을 활성화합니다.

---
## 🚀 사용 방법

1.  **설정하기**: 플러그인을 활성화한 후, 설정 탭(`설정` > `Pretty Lockscreen`)으로 이동하여 **비밀번호**를 먼저 설정하세요.
2.  **자동 잠금**: 설정한 '잠금 대기 시간'이 지나면 화면이 자동으로 잠깁니다.
3.  **수동 잠금**: `Ctrl+P` (또는 `Cmd+P`)를 눌러 커맨드 팔레트를 열고 '즉시 잠금 실행'을 선택하면 바로 잠금 화면이 나타납니다.

---
## 🔧 설정 옵션

* **비밀번호 설정**: 잠금 해제에 사용할 비밀번호를 설정합니다. (필수)
* **잠금 대기 시간(초)**: 마지막 활동 후 잠금 화면이 나타나기까지의 대기 시간을 초 단위로 설정합니다.
* **배경 이미지 URL**: 잠금 화면의 배경으로 사용할 이미지의 웹 URL 또는 Obsidian 볼트 내의 로컬 파일 경로(예: `attachments/background.jpg`)를 입력합니다.
* **배경 불투명도**: 배경 이미지 위에 덮이는 검은색 오버레이의 불투명도를 설정합니다. (0.0 ~ 1.0, 예: 0.7)

---
## 📄 라이선스

이 플러그인은 [MIT 라이선스](LICENSE)를 따릅니다.

---
<a href="https://www.buymeacoffee.com/beautyKim" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;">
</a>
