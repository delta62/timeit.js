interface ITimeit {
    (name: string, seq: string): void;
    sequence(name: string): string;
    config(options: Object): void;
}

declare module 'timeit' {
    export = timeit;
}

declare var timeit: ITimeit;
