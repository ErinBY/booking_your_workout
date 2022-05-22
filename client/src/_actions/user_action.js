import axios from 'axios';
import {
    REGISTER_MEMBER
} from './types';

export function registerMember(dataToSubmit) {

    const request = axios.post('/api/member/register',dataToSubmit)
        .then(response => response.data)   
        
    return {
        type: REGISTER_MEMBER,
        payload: request
    }
}