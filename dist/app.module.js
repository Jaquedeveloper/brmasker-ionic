import { MaskerModule } from './components/masker/masker.module';
import { NgModule } from '@angular/core';
export var AppMaskerModule = (function () {
    function AppMaskerModule() {
    }
    AppMaskerModule.forRoot = function () {
        return {
            ngModule: MaskerModule
        };
    };
    AppMaskerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MaskerModule
                    ],
                    exports: [
                        MaskerModule
                    ]
                },] },
    ];
    /** @nocollapse */
    AppMaskerModule.ctorParameters = function () { return []; };
    return AppMaskerModule;
}());
//# sourceMappingURL=/Volumes/macHD/htdocs/github/br-masker-ionic/brmasker-ionic/app.module.js.map