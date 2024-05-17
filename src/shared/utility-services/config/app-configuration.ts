import { InjectionToken } from "@angular/core";

export const APP_CONFIG = new InjectionToken<AppConfiguration>('app.config');
export const APP_CONFIG_URL = '/assets/config.json';

export class AppConfiguration
{

    fahrschulenApiBaseUrl!: string;

}