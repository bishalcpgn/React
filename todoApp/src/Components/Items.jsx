import React, { useState } from 'react';
import { GoTrash } from 'react-icons/go';

const Items = (props) => {
    const [taskCompleted, setTaskCompleted] = useState(false);

    return (
        <div
            onClick={() => setTaskCompleted(!taskCompleted)}
            className='select-none cursor-pointer w-full border-b p-3 flex justify-between'
        >
            <div>
                <span className='pr-2 text-sm text-slate-400'>{props.time}</span>

                <span className={`${taskCompleted === true ? 'line-through' : ''}`}>{props.item}</span>
            </div>

            <div className='text-red-500 w-1/12'>
                <GoTrash
                    onClick={() => props.removeHandler(props.id)} />
            </div>
        </div>
    );
};

export default Items;
