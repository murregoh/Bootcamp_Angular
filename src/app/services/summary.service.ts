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
                description: 'En esta seccion hablaremos temas como Interfaces y strong typing',
                image: '',
                idItem: 'mascomponente',
                ref: 'Written by Mateo Urrego Hoyos'
            },
            {
                title: 'Pipes & Custom Pipes',
                description: 'Cada aplicación comienza con lo que parece una tarea simple: obtener datos, transformarlos y mostrarlos a los usuarios. Obtener datos puede ser tan simple como crear una variable local o tan complejo como transmitir datos a través de un WebSocket.',
                image: 'https://appdividend.com/wp-content/uploads/2018/12/Angular-Pipe-Example-Tutorial.png',
                idItem: 'pipes',
                ref: 'https://angular.io/guide/pipes'
            },
            {
                title: 'Componentes Anidados',
                description: 'Tal como su palabra lo indica, los componentes anidados son aquellos que se encuentran dentro de otros componentes, asimismo, estos componente pueden compartir informacion entre si por medio de los @Input @Output',
                image: '',
                idItem: 'componentesanidados',
                ref: 'Written by Mateo Urrego Hoyos'
            },
            {
                title: 'Servicios',
                description: 'El servicio es una categoría amplia que abarca cualquier valor, función o característica que necesita una aplicación. Un servicio es típicamente una clase con un propósito estrecho y bien definido. Debe hacer algo específico y hacerlo bien.',
                image: 'https://cdn-images-1.medium.com/max/1600/1*NrNWDYjMUb8n5T701_ibKw.png',
                idItem: 'servicios',
                ref: 'https://angular.io/guide/architecture-services#service-examples'
            },
            {
                title: 'Routing',
                description: 'El enrutador angular ("el enrutador") toma prestado de este modelo. Puede interpretar una URL del navegador como una instrucción para navegar a una vista generada por el cliente. Puede pasar parámetros opcionales junto con el componente de vista de soporte que lo ayuda a decidir qué contenido específico presentar. Puede vincular el enrutador a los enlaces en una página y navegará a la vista de aplicación adecuada cuando el usuario haga clic en un enlace. Puede navegar de forma imperativa cuando el usuario hace clic en un botón, selecciona de un cuadro desplegable o en respuesta a algún otro estímulo de cualquier fuente. Y el enrutador registra la actividad en el diario de historial del navegador para que los botones de avance y retroceso también funcionen.',
                image: 'https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2017/05/03145249/angulartics.png',
                idItem: 'routing',
                ref: 'https://angular.io/guide/router'
            }
        ]
    }

}
