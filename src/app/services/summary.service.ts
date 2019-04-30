import { Injectable } from '@angular/core';
import { ISummaryItems } from '../interfaces/summaryItems';

@Injectable({
    providedIn: "root"
})
export class SummaryService {

    getSummaryItems(): ISummaryItems[] {
        return [
            {
                title: 'Angular',
                description: 'Angular es...',
                id: 'list-angular-list',
                href: 'list-angular',
                control: 'angular'
            },
            {
                title: 'Structura',
                description: 'Estructura es ...',
                id: 'list-structure-list',
                href: 'list-structure',
                control: 'structure'
            },
            {
                title: 'Componentes',
                description: 'Componentes es ...',
                id: 'list-component-list',
                href: 'list-component',
                control: 'component'
            },
            {
                title: 'Templates',
                description: '...',
                id: 'list-template-list',
                href: 'list-template',
                control: 'template'
            },
            {
                title: 'Mas de componentes (typescript)',
                description: '...',
                id: 'list-mascomponentes-list',
                href: 'list-mascomponentes',
                control: 'mascomponentes'
            },
            {
                title: 'Pipes',
                description: '...',
                id: 'list-pipes-list',
                href: 'list-pipes',
                control: 'pipes'
            },
            {
                title: 'Componentes Anidados',
                description: '...',
                id: 'list-componentesanidados-list',
                href: 'list-componentesanidados',
                control: 'componentesanidados'
            },
            {
                title: 'Servicios',
                description: '...',
                id: 'list-servicios-list',
                href: 'list-servicios',
                control: 'servicios'
            },
            {
                title: 'Routing',
                description: '...',
                id: 'list-routing-list',
                href: 'list-routing',
                control: 'routing'
            }
        ]
    }

}