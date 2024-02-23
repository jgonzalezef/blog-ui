import './customLink.css';

export function CustomLink({valueStr="",icon}) {
    return (
        <>
            <a href="" className="link-menu-button">
                {icon && <span className="icon">{icon}</span>}
                {valueStr && valueStr}
            </a>
        </>
    );
}