import { observable } from 'mobx'

export interface CounterStore {
    /** 计数 */
    counter: number
    increment: () => void
    decrement: () => void
    incrementAsync: () => void
}

const counterStore: CounterStore = observable({
    counter: 0,
    increment() {
        this.counter++
    },
    decrement() {
        this.counter--
    },
    incrementAsync() {
        setTimeout(() => {
            this.counter++
        }, 1000)
    }
})

export default counterStore
