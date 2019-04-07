import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  state(
    'in',
    style({
      opacity: 1
    })
  ),
  transition('void => *', [
    style({
      opacity: 0
    }),
    animate('0.3s')
  ]),
  transition('* => void', [
    animate(
      '0.4s',
      style({
        opacity: 0
      })
    )
  ])
]);
