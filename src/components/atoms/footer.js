import React from 'react';
import DateUtils from "../../ressources/utils/date.utils";
import SiteUtils from "../../ressources/utils/site.utils";
import ICON from "../../ressources/utils/icon.utils";
import {Link} from "react-router-dom";

function Footer() {
    let instagram = "svynt"
    let twitter = "svynt_";
    let facebook = "profile.php?id=100013010292450";
    return (
        <footer>

            <div className="bg-gold w-100 p-0 m-0 fs-5 py-1">
                <div className="container-lg mx-auto d-flex justify-content-between">
                        <a href={`https://instagram.com/${instagram}`} className="text-dark mb-1" target="_blank">
                            {ICON.INSTAGRAM}
                        </a>
                        <a href={`https://twitter.com/${twitter}`} className="text-dark mb-1" target="_blank">
                            {ICON.TWITTER}
                        </a>
                        <a href={`https://facebook.com/${facebook}`} className="text-dark mb-1" target="_blank">
                            {ICON.FACEBOOK}
                        </a>
                </div>

            </div>
            <div className="bg-dark text-gold  w-100 m-0 ">
                <div className="container-lg mx-auto row row-cols-1 g-2">
                    <div className="d-flex justify-content-between">
                        <div className="text-start d-flex flex-column" >
                            <Link to={"/"}>À props</Link>
                            <Link to={"/"}>À props</Link>
                        </div>
                        <div className="">2</div>
                        <div className="">3</div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="">
                            <p>
                                &copy; {DateUtils.year()} {SiteUtils.siteNAme}
                            </p>
                        </div>
                        <div className="d-flex justify-content-around">
                            <a href="/">PRIVACY POLICY</a>
                            <a href="">CGU/CGV</a>
                            <a className="" href="">SITEMAP</a>
                        </div>
                    </div>
                </div>


            </div>

        </footer>
    );
}

export default Footer;