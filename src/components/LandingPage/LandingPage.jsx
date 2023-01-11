import { Link } from "react-router-dom";
import style from './LandingPage.module.css'

function LandingPage() {
var title="Encuesta Web"
    return (

    <div className={style.container}>
        <div className={style.nav} data-text={title}>
                {title} 
        </div>
        <div className={style.main}>
            <div className={style.subtitleNav}>
                <h3 className={style.subtitle}>
                    Encuesta Usuarios
                </h3>
            </div>
            <div className={style.enter}>
                <Link to='/home' className={style.enterButton}>¡Realiza tu encuesta!</Link>
            </div>
        </div>
      <div className={style.footer}>
          <h3>
              Technology Stack || ReactJs
          </h3>
      </div>    
      {/**container end*/}
  </div>

    );
  }

export default LandingPage;