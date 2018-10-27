import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'sub-component',
    template: ` <br/>
                <h2>Sub Component</h2>
                <label> Enter Sub Component Value </label>
                <input type = "text" #subtext (keyup)="onChange(subtext.value)">
                <p> Value from App Component is = {{appComponentData}}</p>
                
                `,
    inputs: ['appComponentData'],
    outputs: [`childEvent`]
})

export class SubComponent{
    public appComponentData: string;
    childEvent = new EventEmitter<string>();
    onChange(value:string){
        this.childEvent.emit(value);
    }
}