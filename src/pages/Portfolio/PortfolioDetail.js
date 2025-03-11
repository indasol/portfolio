import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import '../../css/prdInfo.css'
import { Link } from 'react-router';
import { getStateDetailIndex } from '../../store/detailIndex.js'

function PortfolioDetail() {
     const selector = useSelector((state)=>state.detailIndex);
     const dispatch = useDispatch();
     const detailIndex = selector.detailIndex;
     const localDetailIndex = localStorage.getItem("detailIndex");
     const [state, setState] = React.useState({
          PortfolioDetail: {}
        });

     if (detailIndex === 0) {
          dispatch(getStateDetailIndex(localDetailIndex))
     }

     React.useEffect(() => {
          axios({
               url:'../../json/portfolio-data.json',
               method:'GET'
          })
          .then((res)=>{
               res.data.dataList.forEach((item,idx) => {
                    if(item.detailIndex === localDetailIndex) {
                         setState({
                              ...state,
                              PortfolioDetail: item
                         });
                    }
               })
          })
          .catch((err)=>{
               console.log(err);
          });
     },[]);

     return (
          <div id="container" className="container">
               <div className="content">
                    <div className="prdInfo">
                         <div className="pict">
                              <img
                              src={`${process.env.PUBLIC_URL}/img/stationery/prd_detail${state.PortfolioDetail.detailIndex}_thumb.png`}
                              alt={state.PortfolioDetail.imgAlt}
                              />
                         </div>

                         <div className="fixedArea">
                              <div className="area_wrap jca-option-window-pc">
                                   <div className="keyText">
                                        <span className="subTxt" dangerouslySetInnerHTML={{__html: state.PortfolioDetail.subTxt }} />
                                        <h3 className="mainTxt fw--bold" dangerouslySetInnerHTML={{__html: state.PortfolioDetail.mainTxt }} />
                                        <em className="adTxt fw--rgl" dangerouslySetInnerHTML={{__html: state.PortfolioDetail.adTxt }} />
                                   </div>
                                   <ul className="textArea cf">
                                        <li className="fw--rgl" onClick="">
                                        <a href="!#">
                                             <span className="flag flag--gray">사용스킬</span>
                                             { state.PortfolioDetail.skill }
                                        </a>
                                        </li>
                                        <li className="fw--rgl" onClick="">
                                        <a href="!#">
                                             <span className="flag flag--gray">업무내용</span>
                                             { state.PortfolioDetail.taskDetail }
                                        </a>
                                        </li>
                                   </ul>

                                   <div className="sub-info">
                                        <ul>
                                        <li className="cf">
                                             <span className="name">작업기간</span>
                                             <em className="label label--time">{ state.PortfolioDetail.period }</em>
                                        </li>
                                        <li className="cf">
                                             <span className="name">팀인원</span>
                                             <em className="label label--time">1 ~ 3명</em>
                                        </li>
                                        <li className="cf">
                                             <span className="name">작업화면</span>
                                             <em className="label">{ state.PortfolioDetail.taskList }</em>
                                        </li>
                                        </ul>
                                        <div className="noti">
                                             <span
                                                  >※ 보안 문제로 바로가기 선택 시 링크 이동이 안될 수 있습니다.
                                             </span>
                                        </div>
                                   </div>

                                   <div className="btn-list">
                                        <ul className="cf">
                                        <li>
                                             <button
                                             type="button"
                                             className="btn btn--apply fw--Semibold jca-purchase-btn-pc"
                                             >
                                             <Link to={state.PortfolioDetail.url}
                                             target="_blank"
                                             >바로가기</Link>
                                             </button>
                                        </li>

                                        </ul>      </div>
                              </div>
                         </div>

                         <div className="prdInfo_detail bdbt20">
                              <div className="tab_contents">
                                   <div className="image-wrap">
                                        <img
                                        src={`${process.env.PUBLIC_URL}/img/stationery/prd_detail${state.PortfolioDetail.detailIndex}.png`}
                                        alt="하나원큐"
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default PortfolioDetail;