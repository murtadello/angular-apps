
export interface CounterState {
    counter : number;
    channelName:string,
    title: string
}
export const initialState: CounterState = {
    counter: 0,
    channelName: 'Tech & Mac',
    title: 'Angular Framework'
};

