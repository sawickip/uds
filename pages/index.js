import Link from 'next/link';
import { Parallax } from 'react-scroll-parallax';
import cls from 'classnames';

// CSS reset

import css from '../style/style.scss';

import Head from '../components/Head';


const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg/1200px-Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg';


export default () => {
  return (
    <div>
      <Head />
      <div className={css.heroContainer}>

        <header className={css.root}>
          <div className={css.rootContent}>
            <span className={css.mainLine} />
            <button className={cls(css.rectangle, css.rectangleSmall, css.whiteBg)}>
              <span className={css.rectangleText}>
                Informacje o nas
              </span>

              <span className={cls(css.rectangleCircle, css.rectangleCircleSmall, css.yellowBg)} />
            </button>
            <span className={cls(css.mainLine, css.sideLine)} />
          </div>

          <h1 className={css.heroHeader}>
            Nasze ubezpieczenia są jak superbohaterowie:
          </h1>

          <span className={css.freeConsultationText}>
            Skorzystaj z darmowej konsultacji
          </span>

          <button className={cls(css.rectangle, css.rectangleBig, css.yellowBg)}>
            <span className={css.rectangleText}>
              Wyślij swoje zgłoszenie
            </span>
            <span className={cls(css.rectangleCircle, css.rectangleCircleBig, css.backBg)} />
          </button>
        </header>

        <Parallax
          className="custom-class"
          offsetYMax={'50%'}
          offsetYMin={'-50%'}
          tag="figure"
          slowerScrollRate
        >
          <div
            className={css.heroImage}
            style={{ backgroundImage: `url(${image})` }}
          >
          </div>
        </Parallax>
      </div>

      {/* remove */}
      <div className={css.test}>1</div>

      <div>
          Click{' '}
          <Link href="/xxx">
              <a>here</a>
          </Link>{' '}
          to read more
      </div>
    </div>
  )
}