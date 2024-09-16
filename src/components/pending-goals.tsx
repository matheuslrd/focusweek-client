import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { getPendingGoals } from '../http/get-pending-goals';
import { OutlineButton } from './ui/outline-button';

export function PendingGoals() {
    const ONE_MINUTE_IN_MILLISECONDS = 1000 * 60;

    const { data } = useQuery({
        queryFn: getPendingGoals,
        queryKey: ['pendingGoals'],
        staleTime: ONE_MINUTE_IN_MILLISECONDS,
    });

    if (!data) return null;

    return (
        <div className="flex flex-wrap gap-3">
            {data.map((pendingGoal) => (
                <OutlineButton
                    key={pendingGoal.id}
                    disabled={pendingGoal.desiredWeeklyFrequency === pendingGoal.completionCount}
                >
                    <Plus className="size-4 text-zinc-600" />
                    {pendingGoal.title}
                </OutlineButton>
            ))}
        </div>
    );
}
