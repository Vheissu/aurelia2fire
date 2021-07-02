import { bindable, BindingMode, customElement, ICustomElementViewModel } from '@aurelia/runtime-html';

@customElement({
    name: 'firebase-doc',
    template: `<template><au-slot></au-slot></template>`
})
export class FirebaseUser implements ICustomElementViewModel {
    @bindable() protected path;
    @bindable({ mode: BindingMode.twoWay }) protected data;
    @bindable({ mode: BindingMode.twoWay }) protected ref;

    async attached() {
        
    }
}