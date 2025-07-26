const robot = require('robotjs');

module.exports = {
  pressKeys: (keyNames, duration) => {
    // 1. WebView内の画面をクリック（中央に仮定）
    const screenSize = robot.getScreenSize();
    const x = Math.floor(screenSize.width / 2);
    const y = Math.floor(screenSize.height / 2);
    robot.moveMouse(x, y);
    robot.mouseClick();

    // 2. 少し待ってからキー押下
    setTimeout(() => {
      keyNames.forEach(k => robot.keyToggle(k, 'down'));
      setTimeout(() => {
        keyNames.reverse().forEach(k => robot.keyToggle(k, 'up'));
      }, duration * 1000);
    }, 300); // 300ms程度の遅延で確実にフォーカス
  }
};
