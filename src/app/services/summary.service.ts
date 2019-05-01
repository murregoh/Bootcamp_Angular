import { Injectable } from '@angular/core';
import { ISummaryItem } from '../interfaces/summaryItem';

@Injectable({
    providedIn: "root"
})
export class SummaryService {

    getSummaryItems(): ISummaryItem[] {
        return [
            {
                title: 'Angular',
                description: 'Angular es una plataforma que facilita la creación de aplicaciones con la web. Angular combina plantillas declarativas, inyección de dependencia, herramientas de extremo a extremo y mejores prácticas integradas para resolver los desafíos de desarrollo. Angular permite a los desarrolladores crear aplicaciones que viven en la web, el móvil o el escritorio.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
                idItem: 'angular',
                ref: 'https://angular.io/docs'
            },
            {
                title: 'Estructura',
                description: 'Desarrollas aplicaciones en el contexto de un espacio de trabajo angular. Un espacio de trabajo contiene los archivos para uno o más proyectos. Un proyecto es el conjunto de archivos que comprende una aplicación independiente, una biblioteca o un conjunto de pruebas de extremo a extremo (e2e).',
                image: 'https://i.stack.imgur.com/X3mgE.jpg',
                idItem: 'estructura',
                ref: 'https://angular.io/guide/file-structure'
            },
            {
                title: 'Componentes',
                description: 'Decorador que marca una clase como un componente angular y proporciona metadatos de configuración que determinan cómo se debe procesar, crear una instancia y utilizar el componente en el tiempo de ejecución.',
                image: 'https://cdn-images-1.medium.com/max/1600/1*B83ALDLW89-Vse4zk_OMOQ.png',
                idItem: 'componente',
                ref: 'https://angular.io/api/core/Component'
            },
            {
                title: 'Templates',
                description: 'La aplicación Angular gestiona lo que el usuario ve y puede hacer, logrando esto a través de la interacción de una instancia de clase de componente (el componente) y su plantilla orientada al usuario.',
                image: 'https://cdn-images-1.medium.com/max/1600/1*4TtqfzCoX-fu3Bwim0LBXA.png',
                idItem: 'template',
                ref: 'https://angular.io/guide/template-syntax'
            },
            {
                title: 'Mas de componentes (typescript)',
                description: '...',
                image: '',
                idItem: 'mascomponente',
                ref: ''
            },
            {
                title: 'Pipes',
                description: '...',
                image: '',
                idItem: 'pipes',
                ref: ''
            },
            {
                title: 'Componentes Anidados',
                description: '...',
                image: '',
                idItem: 'componentesanidados',
                ref: ''
            },
            {
                title: 'Servicios',
                description: '...',
                image: '',
                idItem: 'servicios',
                ref: ''
            },
            {
                title: 'Routing',
                description: '...',
                image: '',
                idItem: 'routing',
                ref: ''
            }
        ]
    }

}
