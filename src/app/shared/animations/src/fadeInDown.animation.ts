import {
  trigger,
  animate,
  style,
  transition,
  state
} from '@angular/animations';

export const fadeInDown = trigger('fadeInDown', [
  state(
    'in',
    style({
      opacity: 1,
      height: '*',
      transform: 'translateY(0) scale(1)'
    })
  ),
  transition('void => *', [
    style({
      opacity: 0,
      height: '0',
      transform: 'translateY(-1000px) scale(0.2)'
    }),
    animate('0.4s cubic-bezier(.75,-0.2,0,1.2)')
  ]),
  transition('* => void', [
    animate(
      '0.4s cubic-bezier(.75,-0.2,0,1.2)',
      style({
        opacity: 0,
        height: '0',
        transform: 'translateY(-1000px) scale(0.2)'
      })
    )
  ])
]);
