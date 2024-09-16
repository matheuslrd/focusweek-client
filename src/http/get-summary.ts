import type { Summary } from '../interfaces/summary';

export async function getSummary(): Promise<Summary> {
    const response = await fetch('http://localhost:3333/summary');
    const data = await response.json();

    return data.summary;
}
