import {
    REGISTER_MEMBER
} from '../_actions/types';

export default function(state={},action) {
    switch (action.type) {
        case REGISTER_MEMBER:
                return { ...state, registerSuccess : action.payload}
            break;
    
        default:
            return state;
    }
}