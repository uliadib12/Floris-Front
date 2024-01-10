export default function HamburgerButton(
    props: {
        onClick: () => void;
    }
) {
    return (
        <button onClick={props.onClick}>
            <img src="/icons/list.svg" width={30} height={30} alt="list" style={{filter: 'invert(1)'}}/>
        </button>
    )
}