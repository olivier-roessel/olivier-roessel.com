import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimation', [
    transition('home => projects, projects => contact, contact => cv, home => contact, home => cv, projects => cv', [
        style({
            position: 'relative',
            height: '100vh',
            overflow: 'hidden',
            boxSizing: 'border-box'
        }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                right: 0,
                width: '100%'
            })
        ]),
        query(':enter', [style({ right: '-50%', opacity: 0 })]),
        query(':leave', animateChild()),
        group([
            query(':leave', [animate('0.5s ease-in-out', style({ right: '50%', opacity: 0 }))]),
            query(':enter', [animate('0.5s ease-in-out', style({ right: '0%', opacity: 1 }))])
        ]),
        query(':enter', animateChild())
    ]),
    transition('projects => home, contact => projects, cv => contact, contact => home, cv => home, cv => projects', [
        style({
            position: 'relative',
            height: '100vh',
            overflow: 'hidden',
            boxSizing: 'border-box'
        }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [style({ left: '-50%', opacity: 0 })]),
        query(':leave', animateChild()),
        group([
            query(':leave', [animate('0.5s ease-in-out', style({ left: '50%', opacity: 0 }))]),
            query(':enter', [animate('0.5s ease-in-out', style({ left: '0%', opacity: 1 }))])
        ]),
        query(':enter', animateChild())
    ])
]);