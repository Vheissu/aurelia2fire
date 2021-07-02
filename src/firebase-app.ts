import { bindable, customElement, ICustomElementViewModel } from '@aurelia/runtime-html';

@customElement({
    name: 'firebase-app',
    template: `<template><au-slot></au-slot></template>`
})
export class FirebaseApp implements ICustomElementViewModel {
    @bindable() protected firebase;

    protected performance = false;
    protected analytics = false;

    attached() {
        if (!this.firebase) {
            throw Error('Firebase not found')
        }

        this.performance = this.firebase.performance();
        this.analytics = this.firebase.analytics();
    }
}