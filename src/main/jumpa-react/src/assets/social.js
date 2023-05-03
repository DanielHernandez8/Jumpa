import './social.css';
function Social(){
    const linktree = process.env.PUBLIC_URL + '/img/linktree.png'
    return(
        <div class="card">
        <div class="icon">
    
                <img src={linktree} width="100px"/>
        </div>
        <strong> LinkTree
        </strong>
        <div class="card__body">
            Nuestras redes
        </div>
        <span>Siguenos</span>
    </div>
    );
}
export default Social;