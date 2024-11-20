import React, { useState } from 'react';

export default function FlyoutLink({ children, href, FlyoutContent }) {
    const [open, setOpen] = useState(false);
    const showFlyout = open && FlyoutContent;

    return (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="relative h-fit w-fit">
            <a href={href} className="relative ">
                {children}
                <span
                    style={{
                        transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
                    }}
                    className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
                />
            </a>
            {showFlyout && (
                <div className="absolute left-1/2 top-11 bg-white text-black -translate-x-1/2">
                    <div className="absolute -top-6 left-0 right-0 h-6 "></div>
                    <FlyoutContent />
                </div>
            )}
        </div>
    );
}
