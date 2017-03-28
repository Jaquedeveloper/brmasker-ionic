# masker
return mask in input

# install

```sh
npm install brmasker
```

# HTML

```html
<input type="text" name="teste" [brmasker]="{mask:'00.000-000', len:10}">
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