export class History {
    history: any = [];
    pointer: any = 0;

    public constructor(state?: any) {
        this.history.push([state]);
    }

    saveListToHistory(state: any): void {
        this.pointer++
        this.history.push(state)
    }

    undo() {
        if (this.pointer === 0) return this.history[0];
        return this.history[--this.pointer];
    }

    redo() {
        if (this.pointer === this.history.length - 1) return this.history[this.pointer];
        return this.history[++this.pointer];
    }
}