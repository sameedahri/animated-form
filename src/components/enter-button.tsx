import React from 'react'
import { Button } from './ui/button'

function EnterButton() {
    return (
        <Button
            type='submit'
            className=''
        >
            Ok <span className='pt-1'>&#8629;</span>
        </Button>
    )
}

export default EnterButton