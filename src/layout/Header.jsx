import { Link } from 'react-router';
import '../css/gnb.css'

function header() {
  return (
    <header>
      <div className="header__wrap">
        <Link to="/main"><span className="gnb_logo"></span></Link>
        <div className="gnb_new_line_header pc_on">
          <ul>
            <li>
              <Link to="/about">About Dasol</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default header;
