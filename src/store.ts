import { Observable, BehaviorSubject } from 'rxjs';
import { pluck, distinctUntilChanged } from "rxjs/operators";


export interface State {
	publicKey: string,
	[key: string]: any
}

const state: State = {
	publicKey: undefined,
};

export class Store {

	private subject = new BehaviorSubject<State>(state);
	private store = this.subject.asObservable().pipe(distinctUntilChanged());

	get value() {
		return this.subject.value;
	}

	select<T>(name: string): Observable<T> {
		return this.store.pipe(pluck(name));
	}

	set(name: string, state: any) {
		this.subject.next({ ...this.value, [name]: state });
	}

}