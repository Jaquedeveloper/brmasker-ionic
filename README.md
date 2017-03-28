# brmasker-ionic
return custom mask in input for ionic 2
# Required
- node 7.7.3 or up
- npm 4.1.2 or up
- ionic 2.2.1

# install

```sh
npm install brmasker-ionic --save
```

### HTML

### correct usage

```html
<ion-item>
	<ion-input type="text" name="cpf" placeholder="CPF" [brmasker]="{mask:'000.000.000-00', len:14}"></ion-input>
</ion-item>
```

### usage in input

```html
<input type="text" name="cpf" placeholder="CPF" [brmasker]="{mask:'000.000.000-00', len:14}" value="">
```

# Guide
[brmasker]="{mask:'000.000.000-00', len:14}"
[brmasker] = component receive array (mask, len)
mask --> required / default = '' / custom mask
len --> required / default = 0 / number of length

### data
```html
[brmasker]="{mask:'00/00/0000', len:10}"
```
### cep
```html
[brmasker]="{mask:'00.000-000', len:10}"
```

### cpf
```html
[brmasker]="{mask:'000.000.000-00', len:14}"
```

### cnpj
```html
[brmasker]="{mask:'00.000.000/0000-00', len:18}"
```

### telefone
```html
[brmasker]="{mask:'(00) 0000-0000', len:14}"
```

### whatsapp
```html
[brmasker]="{mask:'(00) 00000-0000', len:15}"
```

# Module

```javascript
import { AppMaskerModule } from 'brmasker';

@NgModule({
  imports: [
    AppMaskerModule
  ],
})

```

# Build for developer
remove files before build
```file
dist/
src/app/app.module.ngfactory.ts
src/app/app.module.ngsummary.json
src/app/index.ngsummary.json
src/app/components/index.ngsummary.json
src/app/components/masker/index.ngsummary.json
src/app/components/masker/masker.component.ngfactory.ts
src/app/components/masker/masker.component.ngsummary.json
src/app/components/masker/masker.module.ngfactory.ts
src/app/components/masker/masker.module.ngsummary.json
```

```sh
npm run build
```