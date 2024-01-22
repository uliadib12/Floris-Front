import MenuButton from "./MenuButton";

export default function MenuListButton(
    props: {
        children: React.ReactNode;
        title: string;
        icon: string;
    }
){
    return(
    <div className="relative">
        <MenuButton title={props.title} icon={props.icon} />

        <div className="hidden peer-hover:flex hover:flex
            absolute left-0
            w-[200px]
            flex-col bg-pink-400 drop-shadow-lg p-4">
                {props.children}
        </div>
    </div>
    )
}