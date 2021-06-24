import React from 'react'

export default function Template({children, cssStyle}) {
    return (
        <header className={cssStyle}>
            {children}
        </header>
    )
}

Template.defaultProps={
    cssStyle: "defaultHero"
};
