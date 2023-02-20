import React from "react";
import Link from "./link";

const Links = ()=> {
    return (
        <ul className="linksContent">
            <Link link="https://www.parceiromagalu.com.br/magazinehenriquedev/livro-desbloqueie-o-poder-da-sua-mente/p/223803600/LI/LESO/?utm_source=henriquedev&utm_medium=livro-desbloqueie-o-poder-da-sua-mente&utm_campaign=copy-paste&utm_content=copy-paste-share"
                  name="LIVRO: DESBLOQUEIE O PODER DA SUA MENTE"
            />
            <Link link="https://www.instagram.com/henrique_dev_/"
                  name="Instagram"
            />
            <Link link="https://github.com/DevPedrogit"
                  name="Github"  
            />
            <Link link="https://www.linkedin.com/in/pedro-henrique-05a09a235/"
                  name="Linkedin"  
            />
        </ul>
    );
}

export default Links;