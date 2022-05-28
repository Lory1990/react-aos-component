import IAOSProps from "./IAOSProps"
import React from "react";

export interface AosBoxProps extends React.HTMLAttributes<HTMLDivElement>, IAOSProps {
    animate?: boolean
}

const AOSAnimation: React.FC<AosBoxProps> = ({
    children,
    dataAosDuration,
    dataAos,
    dataAosOffset,
    dataAosAnchorPlacement,
    dataAosOnce,
    dataAosDelay,
    dataAosEasing,
    dataAosMirror,
    onlyDesktop,
    animate =  true,
    ...rest
}) => {

    return (
        <div
            data-aos={animate ? dataAos : undefined}
            data-aos-offset={animate ? dataAosOffset : undefined}
            data-aos-delay={animate ? dataAosDelay : undefined}
            data-aos-duration={animate ? dataAosDuration : undefined}
            data-aos-easing={animate ? dataAosEasing : undefined}
            data-aos-mirror={animate ? dataAosMirror : undefined}
            data-aos-once={animate ? dataAosOnce : undefined}
            data-aos-anchor-placement={animate ? dataAosAnchorPlacement : undefined}
            {...rest}
        >
            {children}
        </div>
    )
}

export default AOSAnimation
