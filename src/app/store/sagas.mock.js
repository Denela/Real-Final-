import {
    take, 
    put,
    select
} from 'redux-saga/effects';
import * as mutations from './mutations';
import { v4 as uuidv4 } from 'uuid';

// this saga(genrator function) creates the task
export function* taskCreationSaga(){
    while (true){
        const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        const ownerID = `u1`;
        const taskID = uuidv4();
        yield put(mutations.createTask(taskID, groupID, ownerID));
    }
}
