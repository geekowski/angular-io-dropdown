# angular-io-dropdown

So you are looking for something that will close your custom dropdown by clicking outside the dropdown.

## Install

```
npm install angular-io-dropdown -s
```

## Sample usage
### Module
```ts
import { AngularioDropdownModule } from 'node_modules/angular-io-dropdown';
```
### Component (.ts file)

```ts
dropdownOpen = false;
```
It can alse be true if you want your dropdown shown on start.

### Template
```html
<div class="main-content">
    <div class="dropdown" [(dropdown)]="dropdownOpen">
        <div class="dropdown__starter">Open dropdown {{dropdownOpen}}</div>
        <div class="dropdown__inner" *ngIf="dropdownOpen">
            <input placeholder="Some random element" />
            <ul>
                <li>Option one - not closing dropdown</li>
                <li (click)="this.dropdownOpen = false">Option two - closing dropdown</li>
            </ul>
        </div>
    </div>
</div>
```

### Styles 

Feel free to use this styles: 

```scss

```

