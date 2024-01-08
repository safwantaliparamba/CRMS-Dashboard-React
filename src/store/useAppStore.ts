import { create ,StateCreator} from "zustand"


interface InitialState {
    count: number;
    increment:(inc: number) => void;
}

interface AuthSliceState{
    username: string;
}

const initialState = {
    count:0
}

const authSlice:StateCreator<InitialState & AuthSliceState,[],[],AuthSliceState> = (set,get)=>({
    username:"",
})

const tempSlice :StateCreator<InitialState & AuthSliceState,[],[],InitialState> = (set,get)=>({
    ...initialState,
    increment:(inc)=> {
        set(state => ({count:state.count+inc}))
    }
})

const useAppStore = create<InitialState & AuthSliceState>((...a)=>({
    ...tempSlice(...a),
    ...authSlice(...a),
}))


export default useAppStore