// create card container component

const CardContainer = ({ children }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {children}
        </div>
    )
}

export default CardContainer