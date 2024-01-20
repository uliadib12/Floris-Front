interface MenuButtonBadgeProps {
    path? : string,
    title: string,
    icon?: string,
    badge?: boolean,
    onClick?: () => void
}

export default function MenuButtonBadge(
    {
        path = undefined,
        title = '',
        icon = '',
        badge = true,
        onClick = () => {}
    } : MenuButtonBadgeProps
) {
    return (
        <>
        {path === undefined ?
            <div onClick={onClick} className="flex items-center cursor-pointer gap-1 peer">
                {icon === undefined ?
                <></>
                :
                <img src={icon} width={20} height={20} alt="home" style={{filter: 'invert(1)'}}/>}
                <div className="text-white  hover:underline hover:font-medium text-lg">
                    <div className="flex justify-start items-center relative">
                        <div className="absolute -left-3 -top-1 text-white bg-yellow-300 rounded-full h-3 w-3">
                            <div className="text-[0px]">-</div>
                        </div>
                        {title}
                    </div>
                </div>
            </div>
            :
            <a onClick={onClick} href={path} className="flex items-center cursor-pointer gap-1 peer">
                {icon === undefined ?
                <></>
                :
                <img src={icon} width={20} height={20} alt="home" style={{filter: 'invert(1)'}}/>}
                <div className="text-white  hover:underline hover:font-medium text-lg">
                    <div className="flex justify-start items-center relative">
                       {badge === true &&
                        <div className="absolute -left-3 -top-1 text-white bg-yellow-300 rounded-full h-3 w-3">
                            <div className="text-[0px]">-</div>
                        </div>}
                        {title}
                    </div>
                </div>
            </a>
        }
        </>
    )
}