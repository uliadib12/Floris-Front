export default function MenuButton(
    props: {
        path : string,
        title: string,
        icon: string,
    }
) {
    return (
        <a href={props.path} className="flex items-center gap-1">
            <img src={props.icon} width={20} height={20} alt="home" style={{filter: 'invert(1)'}}/>
            <div className="text-white cursor-pointer hover:underline hover:font-medium text-lg">{props.title}</div>
        </a>
    )
}