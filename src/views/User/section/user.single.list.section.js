import React from 'react';

function UserSingleListSection({item = {}, i}) {

    console.log(item)
    return (
        <div key={i}>
                {JSON.stringify(item)}
        </div>
    );
}

export default UserSingleListSection;
