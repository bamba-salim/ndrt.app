import {GET, POST} from "../web-service";

export default class LinksService  {

    static fetchAllLinks = () => {
        return GET("fetch-all-links");
    }

    static initAddLinksData() {
        return GET("init-add-link-data");
    }

    static fetchLinkByDomaine = (idDomaine) => {
        return POST("fetch-links-by-domaine", {idDomaine: idDomaine});
    }

    static fetchLinkByType = (idType) => {
        return POST("fetch-links-by-type", {idType: idType});
    }

    static saveLink(linkData) {
        return POST(("save-link-submit"), {linkData: linkData})
    }


}
