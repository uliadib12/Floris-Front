export default function MenuButton(
    props: {
        path? : string,
        title: string,
        icon?: string,
        onClick?: () => void
    }
) {
    return (
        <>
        {props.path === undefined ?
            <div onClick={props.onClick} className="flex items-center cursor-pointer gap-1 peer">
                {props.icon === undefined ?
                <></>
                :
                <img src={props.icon} width={20} height={20} alt="home" style={{filter: 'invert(1)'}}/>}
                <div className="text-white  hover:underline hover:font-medium text-lg">{props.title}</div>
            </div>
            :
            <a onClick={props.onClick} href={props.path} className="flex items-center cursor-pointer gap-1 peer">
                {props.icon === undefined ?
                <></>
                :
                <img src={props.icon} width={20} height={20} alt="home" style={{filter: 'invert(1)'}}/>}
                <div className="text-white  hover:underline hover:font-medium text-lg">{props.title}</div>
            </a>
        }
        </>
    )
}