import Chart from 'chart.js';


import {
  mutationObserver,
  intersectionObserver,
  isChildList,
  isIntersecting
} from '~/helpers/observer';



const createChart =
  (canvas, config) =>
  new Chart(canvas.getContext('2d'), config);



export const chart = {
  connect (h, k) {
    const parent = document.createElement('div');
    parent.canvas = document.createElement('canvas');

    parent.classList.add('relative');
    parent.style.width = h.width;
    parent.style.height = h.height;

    mutationObserver(
      (i, mo) =>
      isChildList(i) &&
      ( mo.disconnect(),
        intersectionObserver(
          (j, io) =>
          isIntersecting(j) &&
          ( io.disconnect(),
            parent.chart = createChart(j.target.canvas, h.config)
          ),
          { root: null, rootMargin: '0px', threshold: 0 },
          parent
        )
      ),
      { childList: true },
      parent
    );

    parent.appendChild(parent.canvas);
    h[k] = parent;
  }
};
