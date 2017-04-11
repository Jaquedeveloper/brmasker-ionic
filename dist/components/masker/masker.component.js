import { Input, Directive, forwardRef, Renderer, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var MaskerDirective = (function () {
    function MaskerDirective(renderer, element) {
        this.renderer = renderer;
        this.element = element;
    }
    MaskerDirective.prototype.onInput = function (value) {
        var ret = this.formataCampo(value, this.brmaskere.mask, this.brmaskere.len);
        if (ret) {
            if (this.element.nativeElement.getElementsByTagName('INPUT')[0]) {
                this.element.nativeElement.getElementsByTagName('INPUT')[0].value = ret;
            }
            else {
                this.element.nativeElement.value = ret;
            }
        }
    };
    MaskerDirective.prototype.formataCampo = function (campo, Mascara, tamanho) {
        var boleanoMascara;
        var exp = /\-|\.|\/|\(|\)| /g;
        var campoSoNumeros = campo.toString().replace(exp, "");
        var posicaoCampo = 0;
        var NovoValorCampo = "";
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) == "-") || (Mascara.charAt(i) == ".") || (Mascara.charAt(i) == "/"));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) == "(") || (Mascara.charAt(i) == ")") || (Mascara.charAt(i) == " "));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) == ",") || (Mascara.charAt(i) == "*") || (Mascara.charAt(i) == "+"));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) == "@") || (Mascara.charAt(i) == "#") || (Mascara.charAt(i) == "R$"));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) == "$") || (Mascara.charAt(i) == "&") || (Mascara.charAt(i) == "%"));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    MaskerDirective.decorators = [
        { type: Directive, args: [{
                    host: {
                        '(input)': 'onInput($event.target.value)',
                    },
                    selector: '[brmasker]',
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return MaskerDirective; }),
                            multi: true
                        }]
                },] },
    ];
    /** @nocollapse */
    MaskerDirective.ctorParameters = function () { return [
        { type: Renderer, },
        { type: ElementRef, },
    ]; };
    MaskerDirective.propDecorators = {
        'brmaskere': [{ type: Input, args: ['brmasker',] },],
    };
    return MaskerDirective;
}());
//# sourceMappingURL=/media/grupo/48DEADD9DEADBF94/projetos/avulso/npm/brmasker-ionic/components/masker/masker.component.js.map