import React from 'react'

export default function MenuBar() {
    return (
        <div className="art-menu-bar">
                <div className="art-menu-bar-frame">
                    <div className="art-menu-bar-header">
                        <a className="art-menu-bar-btn" href="#.">
                        <span></span>
                        </a>
                    </div>
                    <div className="art-current-page"></div>
                    <div className="art-scroll-frame">
                        <nav id="swupMenu">
                            <ul className="main-menu">
                                <li className="menu-item current-menu-item"><a href="home.html">Home</a></li>
                                {/* <li className="menu-item menu-item-has-children">
                                    <a href="#.">Portfolio</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="portfolio-2-col.html">2 column</a></li>
                                        <li className="menu-item"><a href="portfolio-3-col.html">3 column</a></li>
                                        <li className="menu-item"><a href="portfolio-2-col-masonry.html">2 column masonry</a></li>
                                        <li className="menu-item"><a href="portfolio-3-col-masonry.html">3 column masonry</a></li>
                                        <li className="menu-item"><a href="portfolio-single.html">Single project</a></li>
                                        <li className="menu-item"><a href="portfolio-single-2.html">Single project 2</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item"><a href="history.html">History</a></li>
                                <li className="menu-item"><a href="contact.html">Contact</a></li>
                                <li className="menu-item menu-item-has-children">
                                    <a href="#.">Blog</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="blog-2-col.html">2 column</a></li>
                                        <li className="menu-item"><a href="blog-3-col.html">3 column</a></li>
                                        <li className="menu-item"><a href="blog-post.html">Publication</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item"><a href="onepage.html" target="_blank">Onepage</a></li> */}
                            </ul>
                        </nav>
                        <ul className="art-language-change">
                            {/* <li><a href="#.">UR</a></li> */}
                            <li className="art-active-lang"><a href="#.">EN</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        

    )
}
