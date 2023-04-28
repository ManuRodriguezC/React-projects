import { useState } from "react"

export function TwitterFollowCard ( {userName = "unknown", name = "unknown", initialIsFollowing = false} ) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-img" alt="El avatar 1" src={`https://unavatar.io/${userName}/`} />
                <div className="tw-infoCard">
                    <strong>{name}</strong>
                    <span className="tw-userName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )

}