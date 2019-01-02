import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1.2s cubic-bezier(1, 0.5, 0.8, 0.8)', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('1s linear', style({ opacity: 0 }))
  ])
]);
