import { CreateGoalModal } from './components/create-goal';
import { Summary } from './components/summary';
import { Dialog } from './components/ui/dialog';

export function App() {
    return (
        <Dialog>
            {/* <div className="h-screen flex flex-col items-center justify-center gap-8">
                <img src={logo} alt="logo in orbit" />
                <img src={letsStartIllustration} alt="lets start illustration" />
                <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
                    Você ainda não cadastrou nenhuma meta, que tal começar agora mesmo?
                </p>

                <DialogTrigger asChild>
                    <Button>
                        <Plus className="size-4" /> Cadastrar meta
                    </Button>
                </DialogTrigger>
            </div> */}

            <Summary />

            <CreateGoalModal />
        </Dialog>
    );
}
