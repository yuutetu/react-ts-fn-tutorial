import React, { useState } from 'react';

type Props = {
}

const Square: React.VFC<Props> = (props) => {
    const [value, setValue] = useState<string | null>(null)
    return (
        <button className="square" onClick={() => { setValue("X"); }}>
            {value}
        </button >
    )
}

export default Square;
