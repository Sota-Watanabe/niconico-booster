export const printLine = (line: string) => {
  console.log('===>! FROM THE PRINT MODULE:', line);
  const canvas = document.querySelector('.VideoSymbolContainer-canvas');
  const a = document.querySelector('#MainVideoPlayer');
  console.log(a);
  console.log(canvas);
  canvas?.addEventListener('click', (event) => {
    a?.querySelector('video')?.pause();
    console.log('end pause');
  });
};
