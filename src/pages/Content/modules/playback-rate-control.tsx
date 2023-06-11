import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  setRate: (rate: string) => void;
};
const RateBtns: React.FC<Props> = ({ setRate }) => {
  return (
    <div className="radio02">
      <input
        name="test"
        id="select1"
        value="1"
        type="radio"
        onClick={() => setRate('x1.0')}
      />
      <label htmlFor="select1">1.0倍速</label>
      <input
        name="test"
        id="select2"
        value="2"
        type="radio"
        onClick={() => setRate('x1.5')}
      />
      <label htmlFor="select2">1.5倍速</label>
      <input
        name="test"
        id="select3"
        value="3"
        type="radio"
        onClick={() => setRate('x2.0')}
      />
      <label htmlFor="select3">2.0倍速</label>
    </div>
  );
};

export const playbackRateControl = () => {
  const mainContainer = document.querySelector('.MainContainer-player');
  const playerContainer =
    mainContainer?.querySelector('.PlayerContainer') || mainContainer;
  const rootElement = document.createElement('div');
  rootElement.id = 'playbackRootElement';
  mainContainer?.insertBefore(rootElement, playerContainer);

  const setRate = (rate: string) => {
    const rateBtn = document.querySelector('button[data-title="再生速度"]');
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    rateBtn?.dispatchEvent(event);
    rateBtn?.dispatchEvent(event);

    setTimeout(() => {
      const rateItems = Array.from(
        document.querySelectorAll('.PlaybackRateMenuItem')
      );
      const rateItem = rateItems.find(
        (item) => item.childNodes[1].textContent === rate
      ) as HTMLButtonElement;
      rateItem.click();
      console.log(rateItems);
    }, 500);
  };

  ReactDOM.render(<RateBtns setRate={setRate} />, rootElement);
};
