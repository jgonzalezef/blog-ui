import './post.css';
export function Post() {
    let image = "https://s3-alpha-sig.figma.com/img/89fe/31c7/9df8fb6bbfd99db1cb18960fb1e8e0e1?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E5XdmWC8eK46smjAIUg5IgXt3z74l9RutOalZonAgbZxHnU-n0ME7KP4oYaFwTyIPwZTQzLOayJwQIwelFYg2JDKqrHapUhl-E80hDGXBF40w-ZitNnbDuTVGTrcXNP1FhxCWzVGu29PNfvMcbY1bkjOk3AvVhC8gc7T2BhCTKZQKXqHUPO4ZPJ3UxXwA-3~4H5gKpprVLYQM~20zcttb05JMbBS~uVRtT6Effn7fyUhfs1ORrRueazxmbOd0yDD9fD9IFg582h09pUH4e~FUGEE4baoyO-zDHVa~CIvC7AbvaHh1KQvAkVt0ATEpKrtHey-42ugOmCrAN1lF5BaRg__";
    let banner = "https://s3-alpha-sig.figma.com/img/062c/5214/2b13f65cb595899054d25579108619e2?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CTwOyQJPtl4d3vsmEyqUprlAnibc38DKLEZosgFyyx8GXuYQ7h-j2rTYZmcrkLqp0KOVnjaiQB1FyrVNhlUCdsP6bw462-mugg3I3XCcxi9qsp8UpmjWm7nSSOcNFZzqoGAElvCIG4aO32pXCsKFmhYUMuEW-quykVUr5e-ossiChx-4Fqi4Et5hbPpmYeSjIWzHmSxBO9eObDuc3dFjCTnot7zGVPaGoa07SezILH1QMRbL4kqglA9rcoTEOyWE~hXSH6iPd6L5nG2J5vf6bmWbO4W5J947tx6HzjYPEMLOGjU~m66XnA2veYs4kmc9hqNGrymJN8FbN2q5Rf0UpA__";
    return (
        <>
            <div className="post_divider">
                <article className="post">
                    <div className="post_profile">
                        <img className="post_image" src={image} alt="" />
                        <div className="username">
                            <h5 className="not-margin post-username"> 
                                Jesus G.
                            </h5>
                            <span className="post_date">
                                4 Horas
                            </span>
                        </div>
                    </div>
                    <div className="post-description">
                        <p className='post-text'>
                            Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.
                        </p>
                    </div>
                    <div className="post_banner">
                        <img className="post_thumbnail" src={banner} alt="" />
                    </div>
                    <div className="post_interactions">
                        <nav className="post_interactions_nav">
                            <li>
                                <span className="post_interactions_icon"></span>
                                <a href="" className="post_interactions_link">10 me gusta</a>
                            </li>
                            <li>
                                <span className="post_interactions_icon"></span>
                                <a href="" className="post_interactions_link_inherit ">2 Comentarios</a>
                            </li>
                            <li>
                                <span className="post_interactions_icon"></span>
                                <a href="" className="post_interactions_link">0 Compartir</a>
                            </li>
                        </nav>
                    </div>
                </article>
                <div className="post_bottom">
                    <div className="post_bottom_interactions">
                        <span className="post_interactions_icon"></span>
                        <a href="" className="post_interactions_link">10 me gusta</a>
                    </div>
                    <div className="d-flex-beetween">
                        <div className="post_bottom_interactions">
                            <span className="post_interactions_icon"></span>
                            <a href="" className="post_interactions_link">2 Comentarios</a>
                        </div>
                        <div className="post_bottom_interactions">
                            <span className="post_interactions_icon"></span>
                            <a href="" className="post_interactions_link">0 Compartir</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}