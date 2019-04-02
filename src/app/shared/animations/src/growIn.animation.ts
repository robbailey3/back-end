import {
  trigger,
  animate,
  style,
  transition,
  state
} from '@angular/animations';

export const growIn = trigger('growIn', [
  state(
    'in',
    style({
      transform: 'scaleY(1)',
      height: '*'
    })
  ),
  transition(':enter', [
    style({
      transform: 'scaleY(0)',
      height: '0'
    }),
    animate('0.3s cubic-bezier(0.0, 0.0, 0.2, 1)')
  ]),
  transition(':leave', [
    animate(
      '0.4s cubic-bezier(0.4, 0.0, 1, 1)',
      style({
        transform: 'scaleY(0)',
        height: '0'
      })
    )
  ])
]);
