export function toCopy(object: any): any {
    return JSON.parse(JSON.stringify(object));
}
