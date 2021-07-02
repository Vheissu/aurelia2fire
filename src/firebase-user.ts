import { bindable, BindingMode, customElement, ICustomElementViewModel } from '@aurelia/runtime-html';
import { getFirebaseAuth } from 'auth';

@customElement({
    name: 'firebase-user',
    template: `<template><au-slot></au-slot></template>`
})
export class FirebaseUser implements ICustomElementViewModel {
    @bindable({ mode: BindingMode.twoWay }) protected user;

    async attached() {
        this.user = await getFirebaseAuth();
    }
}