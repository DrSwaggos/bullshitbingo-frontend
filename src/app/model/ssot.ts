import { produce } from "immer";
import { BehaviorSubject } from "rxjs";
import { Phrase } from "./phrase";

interface ssot {
    phrases: Phrase[],
}

const state: BehaviorSubject<ssot> = new BehaviorSubject<ssot>({ phrases: [] });

const nextState: ssot = produce(state.getValue(), (draft: ssot) => draft);
state.next(nextState);

export { state, ssot };


