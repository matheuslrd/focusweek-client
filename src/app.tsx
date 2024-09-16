import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { CreateGoal } from './components/create-goal';
import { EmptyGoals } from './components/empty-goals';
import { Summary } from './components/summary';
import { Dialog } from './components/ui/dialog';
import { getSummary } from './http/get-summary';

dayjs.locale('pt-br');

export function App() {
    const ONE_MINUTE_IN_MILLISECONDS = 1000 * 60;

    const { data } = useQuery({
        queryFn: getSummary,
        queryKey: ['summary'],
        staleTime: ONE_MINUTE_IN_MILLISECONDS,
    });

    return (
        <Dialog>
            {data?.total && data.total > 0 ? <Summary data={data} /> : <EmptyGoals />}

            <CreateGoal />
        </Dialog>
    );
}
