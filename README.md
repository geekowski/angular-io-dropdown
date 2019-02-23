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
    <div class="dropdown__starter">Open dropdown</div>
    <div class="dropdown__inner" *ngIf="dropdownOpen">
        <input class="dropdown__filter" placeholder="Some randome element" />
        <ul class="dropdown__list">
          <li class="dropdown__item">Option one - not closing dropdown</li>
          <li class="dropdown__item" (click)="this.dropdownOpen = false" *ngFor="let i of [1,1,1,1,1]">Option two - closing dropdown</li>
        </ul>
    </div>
  </div>
</div>
```

### Styles 

Feel free to use this styles: 

```scss
$color--border: #f2f2f2;
$dropdown-shadow: 0px 5px 10px rgba(#000, 0.15);
.dropdown {position: relative; 
  &__starter {padding: 15px; cursor: pointer;}
  &__inner {position: absolute; top: 100%; left: 0; box-shadow: $dropdown-shadow; border: 1px solid $color--border;}
  &__list {list-style-type: none; margin: 0; padding: 0;}
  &__item {margin: 0; padding: 10px; cursor: pointer;}
  &__filter{width: 100%; border: 0; border-bottom: 1px dashed $color--border;padding: 20px 10px; box-sizing: border-box;}
}
```

