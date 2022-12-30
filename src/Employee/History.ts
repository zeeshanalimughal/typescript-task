import { IEmployee } from '../types/employee';
export class History {
    history: any = [];
    pointer: any = 0;

    public constructor() {
    }

    // add employees to history

    saveListToHistory(state:any): void {
        this.history.push(state)
    }

    getAllHistory(): any{
        return this.history;
    }

    getHistoryLength(): Number {
        return this.history.length;
    }

    getPointer(): Number {
        return this.pointer;
    }

    updatePointer(count: Number): void {
            this.pointer = count
    }

}