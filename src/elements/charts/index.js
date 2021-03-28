import Chart from 'chart.js';

import {
  mutationObserver,
  intersectionObserver
} from '~/helpers/observer';



const createChart =
  (canvas, config) =>
  new Chart(canvas.getContext('2d'), config);



export const chart =
  ({ width, height, config }) => {
    const outer = document.createElement('div');
    outer.canvas = document.createElement('canvas');

    outer.classList.add('relative');
    outer.style.width = width;
    outer.style.height = height;

    mutationObserver(
      (i, mo) =>
      i.type === 'childList' &&
      ( mo.disconnect(),
        intersectionObserver(
          (k, io) =>
          k.isIntersecting &&
          ( io.disconnect(),
            createChart(k.target.canvas, config)
          ),
          { root: null,
            rootMargin: '0px',
            threshold: 0
          },
          outer
        )
      ),
      { childList: true },
      outer
    );

    outer.appendChild(outer.canvas);
    return outer;
  };
