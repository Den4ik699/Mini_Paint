import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { usedTypedSelector } from '../hooks/reduxHooks'
import { setUserActionCreator } from '../userData/userDataActions';

const TestComp = () => {

    const { user } = usedTypedSelector(state => state.userData)
    console.log(user);
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setUserActionCreator({ name: 'Bob', age: 20 }))
    }, [])

    return (
        <div>
            <span>{ JSON.stringify(user) }</span>
        </div>
    )
}

export default TestComp