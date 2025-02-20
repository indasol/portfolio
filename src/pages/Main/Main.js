import { Link } from 'react-router';
import '../../css/main.css'


function main () {
     return (
     <div className="container">
      <div className="feature f01">
        <div className="f01_list_wrap">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src="./img/main/banner_mo_01.png"
                  className="mo_on"
                  alt=""
                />
                <img
                  src="./img/main/banner_pc_01.png"
                  className="pc_on"
                  alt=""
                />
                <Link
                  to="https://play.google.com/store/apps/details?id=com.kebhana.hanapush&hl=ko"
                  target="_blank"
                  role="button"
                  alt="" rel="noreferrer"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="./img/main/banner_mo_02.png"
                  className="mo_on"
                  alt=""
                />
                <img
                  src="./img/main/banner_pc_02.png"
                  className="pc_on"
                  alt=""
                />
                <Link
                  to="https://sweetdream.navienhouse.com/"
                  target="_blank"
                  role="button"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="./img/main/banner_mo_03.png"
                  className="mo_on"
                  alt=""
                />
                <img
                  src="./img/main/banner_pc_03.png"
                  className="pc_on"
                  alt=""
                />
                <Link
                  to="https://jammy.lge.co.kr/"
                  target="_blank"
                  role="button"
                  without rel="noreferrer"
                />
              </div>
            </div>
            <div className="swiper-pagination" style={{ opacity:'0'}}></div>
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
        <div className="artist_list_wrap">
          <ul className="artist_list">
            <li>
              <Link
                to="https://spcstt.spc.co.kr/"
                target="_blank"
                role="button"
                alt=""
              >
                <div className="obj">
                  <img src="../img/main/f01_artist_list_10_m.png" alt=""/>
                </div>
                <div className="txt">SPC</div>
              </Link>
            </li>
            <li>
              <Link
                to="https://ipcc-stt.hanaw.com:18080"
                target="_blank"
                role="button"
              >
                <div className="obj">
                  <img src="../img/main/f01_artist_list_11_m.png" alt=""/>
                </div>
                <div className="txt">하나증권</div>
              </Link>
            </li>
            <li>
              <Link
                to="https://flec.bufs.ac.kr/uat/uia/egovLoginUsr.do?status=fail"
                target="_blank"
                role="button"
              >
                <div className="obj">
                  <img src="../img/main/f01_artist_list_13_m.png" alt="" />
                </div>
                <div className="txt">부산외대</div>
              </Link>
            </li>
            <li>
              <Link
                to="https://minwonai.sd.go.kr/"
                target="_blank"
                role="button"
              >
                <div className="obj">
                  <img src="../img/main/f01_artist_list_12_m.png" alt="" />
                </div>
                <div className="txt">성동구청</div>
              </Link>
            </li>
            <li>
              <Link
                to="https://slei.seoul.kr/"
                target="_blank"
                role="button"
              >
                <div className="obj">
                  <img src="../img/main/f01_artist_list_14_m.png" alt="" />
                </div>
                <div className="txt">서울평생교육원</div>
              </Link>
            </li>
            <li>
              <Link
                to="https://play.google.com/store/apps/details?id=com.kebhana.hanapush&hl=ko"
                target="_blank"
                role="button"
              >
                <div className="obj">
                  <img src="../img/main/f01_artist_list_1_m.png" alt="" />
                </div>
                <div className="txt">하나은행</div>
              </Link>
            </li>
            <li>
              <Link to="https://jammy.lge.co.kr/" target="_blank" role="button">
                <div className="obj">
                  <img src="../img/main/f01_artist_list_2_m.png" alt="" />
                </div>
                <div className="txt">LG전자</div>
              </Link>
            </li>
            <li>
              <Link
                to="https://sweetdream.navienhouse.com/"
                target="_blank"
                role="button"
              >
                <div className="obj">
                  <img src="../img/main/f01_artist_list_3_m.png" alt="" />
                </div>
                <div className="txt">경동나비엔</div>
              </Link>
            </li>
            <li>
              <Link
                to="https://vr.lge.co.kr/?viewMode=main"
                target="_blank"
                role="button"
              >
                <div className="obj">
                  <img src="../img/main/f01_artist_list_6_m.png" alt="" />
                </div>
                <div className="txt">LG전자 VR쇼룸</div>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.heungkukfire.co.kr/LCW/login.do"
                target="_blank"
                role="button"
              >
                <div className="obj">
                  <img src="../img/main/f01_artist_list_4_m.png" alt="" />
                </div>
                <div className="txt">흥국화재</div>
              </Link>
            </li>
            <li>
              <Link to="" target="_blank" role="button">
                <div className="obj">
                  <img src="../img/main/f01_artist_list_5_m.png" alt="" />
                </div>
                <div className="txt">인생네컷X망고데이</div>
              </Link>
            </li>

            <li>
              <Link to="https://www.4cgate.com/" target="_blank" role="button">
                <div className="obj">
                  <img src="../img/main/f01_artist_list_7_m.png" alt="" />
                </div>
                <div className="txt">4cgate</div>
              </Link>
            </li>
            <li>
              <Link to="http://gjea.org/" target="_blank" role="button">
                <div className="obj">
                  <img src="../img/main/f01_artist_list_8_m.png" alt="" />
                </div>
                <div className="txt">광주시기업인협회</div>
              </Link>
            </li>
            <li>
              <Link to="http://sesa.co.kr/" target="_blank" role="button">
                <div className="obj">
                  <img src="../img/main/f01_artist_list_9_m.png" alt="" />
                </div>
                <div className="txt">세사</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="feature f02">
        <ul className="cf">
          <li>
            <Link to="#">
              <div className="obj">
                <img src="../img/common/digital_shop_01_m.png" className="" alt=""/>
              </div>
              <div className="txt">
                <h3>장점 하나,책임감</h3>
                <p>
                  'complete tasks'라는 공통된 목표를 가지고<br />
                  책임감있게 업무를 수행합니다!
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="obj">
                <img src="../img/common/digital_shop_02_m.png" className="" alt=""/>
              </div>
              <div className="txt">
                <h3>장점 둘,끈기</h3>
                <p>부족한 부분이 있다면 끈기와 노력으로<br />채우겠습니다!</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
     )
}
export default main;