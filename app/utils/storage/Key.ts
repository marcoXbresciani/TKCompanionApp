export interface Key {
    getRoot(): string;

    getFullKey(key: string): string;
}
