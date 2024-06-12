import React from 'react';


const Loading = (props) => {
    return props.msg == '' ? null : (
    <div className="w-full">
        État : {props.msg}
    </div>

    );
};

export default Loading;