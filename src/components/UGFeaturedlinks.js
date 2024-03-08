export const UGFeaturedLinks = (props) => {
    return (
        <div>
            <p className="bg-teal-500 text-white mb-2 p-2 text-center"><b>{props.name}</b></p>
        </div>
    )
}

export const UGFeaturedLinks2 = ({name}) => {
    return (
        <div>
            <p className="bg-teal-500 text-white mb-2 p-2 text-center"><b>{name}</b></p>
        </div>
    )
}