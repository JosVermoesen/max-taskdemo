// 1. For standalone mode, the imports are needed because the components are not imported in the app.module.ts
//    and are not available in the app.component.ts
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// bootstrapApplication(AppComponent).catch((err) => console.error(err));

// 2. For no standalone mode, with modules
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);