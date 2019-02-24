# angular-io-dropdown

So you are looking for something that will close your custom dropdown by clicking outside the dropdown.

## Demo

[Demo page](http://demo.geekowski.pl/angular-io-dropdown)

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
It can also be true if you want your dropdown is shown on start.

### Template
```html
<div class="dropdown" [(dropdown)]="dropdownOpen">
  <div class="dropdown__starter">Open dropdown</div>
  <div class="dropdown__inner" *ngIf="dropdownOpen">
      <input class="dropdown__filter" placeholder="Some random HTML element" />
      <ul class="dropdown__list">
        <li class="dropdown__item" (click)="dropdownOpen = false">Option one - closing dropdown</li>
        <li class="dropdown__item">Option two - not closing dropdown</li>
        <li class="dropdown__item" (click)="dropdownOpen = false">Option three - closing dropdown</li>
        <li class="dropdown__item" (click)="dropdownOpen = false">Option four - closing dropdown</li>
        <li class="dropdown__item" (click)="dropdownOpen = false">Option five - closing dropdown</li>
        <li class="dropdown__item" (click)="dropdownOpen = false">Option six - closing dropdown</li>
        <li class="dropdown__item" (click)="dropdownOpen = false">Option seven - closing dropdown</li>
      </ul>
  </div>
</div>
```

### Styles 

Feel free to use: 

```scss
$color--border: #f2f2f2;
$dropdown-shadow: 0 5px 10px rgba(#000, .15);
.dropdown {position: relative; display: inline-block;
  &__starter {padding: 15px; cursor: pointer; display: inline-block; border-radius: 2px; background: #f2f2f2;}
  &__inner {position: absolute; top: 100%; left: 0; box-shadow: $dropdown-shadow; border: 1px solid $color--border; min-width: 300px; background: #fff;}
  &__list {list-style-type: none; margin: 0; padding: 0;}
  &__item {margin: 0; padding: 10px; cursor: pointer;}
  &__filter{width: 100%; border: 0; border-bottom: 1px dashed $color--border;padding: 20px 10px; box-sizing: border-box;}
}
```

