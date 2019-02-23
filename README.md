# angular-io-dropdown

So you are looking for something that will close your custom dropdown by clicking outside the dropdown.

## Install

```
npm install angular-io-dropdown -s
```

## Sample usage
### Module
```
import { AngularioDropdownModule } from 'node_modules/angular-io-dropdown';
```
### Component (.ts file)

```
dropdownOpen = false;
```
It can alse be true if you want your dropdown shown on start.

### Template
```
<div class="dropdown" [(dropdown)]="dropdownOpen">
    <div class="dropdown__starter">Open dropdown</div>
    <div class="dropdown__inner" *ngIf="">
        <input placeholder="Will close on enter" () />
        <ul>
            <li>Option one - not closing dropdown</li>
            <li (click)="dropdownOpen=false">Option two - closing dropdown</li>
        <ul>
    </div>
</div> 
```

### Styles 

Feel free to use this styles: 

```

```

