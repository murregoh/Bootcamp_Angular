import { Injectable } from '@angular/core';
import { IHomeItem } from '../interfaces/homeItem';

@Injectable({
    providedIn: "root"
})
export class HomeService {

    getHomeItems(): IHomeItem[] {
        return [
            {
                title: 'Resumen del Bootcamp',
                description: 'En este Bootcamp hablaremos especificamente de Angular y temas relacionados con este, adicional, crearemos una aplicación desde cero donde aprenderemos los conceptos, funcionalidad y arquitectura de este Framework.',
                buttonText: 'Ver Contenido',
                route: '/summary'
            },
            {
                title: 'Demostración',
                description: 'Como resultado final tendremos la siguiente aplicación la cual se conecta a la API publica de GitHub donde consumiremos diferentes End Points de este servicio gratuito para desarrolladores.',
                buttonText: 'Ver Demostración',
                route: '/demo'
            },
            {
                title: 'Retate!',
                description: 'Aquí podras demostrarte a ti mismo que no has perdido el tiempo utilizando los conceptos aprendidos durante el BootCamp. \n Buena Suerte',
                buttonText: 'Quiero Hacerlo',
                route: '/challenge'
            }
        ]
    }

}