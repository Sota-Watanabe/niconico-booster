export const playbackControl = () => {
  const canvas = document.querySelector('.VideoSymbolContainer-canvas');

  canvas?.addEventListener('click', (event) => {
    const play = document.querySelector(
      'button[data-title="再生"]'
    ) as HTMLButtonElement;
    if (play) {
      play.click();
      return;
    }
    const pause = document.querySelector(
      'button[data-title="停止"]'
    ) as HTMLButtonElement;
    if (pause) {
      pause.click();
      return;
    }
    event.preventDefault();
    event.stopPropagation();
  });
};
