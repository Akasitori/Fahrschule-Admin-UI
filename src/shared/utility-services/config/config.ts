import { Injectable, Injector } from "@angular/core";
import { APP_CONFIG, AppConfiguration } from "./app-configuration";

@Injectable()
export class ConfigService {

    private config: AppConfiguration | null = null;

    constructor(private injector: Injector){
        this.config = injector.get(APP_CONFIG) as AppConfiguration;
    }

    getConfig(): AppConfiguration{
        if (this.config == null)
        throw new Error("Configuration not found.")
      return this.config;
    }

}