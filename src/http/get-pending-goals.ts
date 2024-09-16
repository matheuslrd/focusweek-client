import type { PendingGoal } from '../interfaces/pending-goals';

export async function getPendingGoals(): Promise<Array<PendingGoal>> {
    const response = await fetch('http://localhost:3333/pending-goals');
    const data = await response.json();

    return data;
}
