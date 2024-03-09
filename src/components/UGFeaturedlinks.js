export const UGFeaturedLinks = (props) => {
    return (
        <div>
            <p className={`${props.estherColor} text-white mb-2 p-2 text-center`}><b>{props.name}</b></p>
        </div>
    )
}

export const UGFeaturedLinks2 = ({name, estherColor}) => {
    return (
        <div>
            <p className={`${estherColor} text-white mb-2 p-2 text-center`}><b>{name}</b></p>
        </div>
    )
}