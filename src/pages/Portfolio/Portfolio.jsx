import React from 'react';
import '../../css/prdList.css'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setDetailIndex } from '../../store/detailIndex.js';
import { Link } from 'react-router-dom'; // 아울렛 컴포넌트(네비게이션, 컴폰넌트가 나타날박스)

function Portfolio() {
  const [state, setState] = React.useState({
    PortfolioList:[]
  });

  const dispatch = useDispatch();

  const onClickDetailIndex=(index)=>{
    console.log("onClickDetailIndex" + index)
    dispatch(setDetailIndex(index));
  }

  React.useEffect(()=>{
    axios({
        url:process.env.PUBLIC_URL+'/json/portfolio-data.json',
        method:'GET'
    })
    .then((res)=>{
      console.log(res)
        setState({
            ...state,
            PortfolioList: res.data.dataList
        });
    })
    .catch((err)=>{
        console.log(err);
    });
  },[]);

  return (
      <div className="container wrap-prdList">
        <p className="title">Portfolio</p>
        <p className="description"></p>
        <div className="filter-wrap cf">
          <ul className="filter">
            <li>
              <button className="active">
                <i className="icon-update"></i>
                <span>업데이트 순</span>
              </button>
            </li>
          </ul>
        </div>
    <ul className="stationery-list">
      {
        state.PortfolioList.map((item, idx)=>{
          const imgUrl = item.img
          return(

            <li key={idx}>
              <Link to={"/portfolioDetail"} role="button" onClick={()=>onClickDetailIndex(item.detailIndex)}>
                <div className="thumbnail">
                  <img
                    src={`${process.env.PUBLIC_URL}${imgUrl}`}
                    alt={item.imgAlt}
                  />
                </div>

                <div className="thumbnail-info">
                  <button className="btn btn--like">
                    <i></i>
                  </button>
                  <p className="tag">{item.tag}...</p>
                  <p className="title" dangerouslySetInnerHTML={{__html:item.title}} >
                  </p>
                  <p className="name">{item.period}</p>
                </div>
              </Link>
            </li>
          )
      })
      }
    </ul>
  </div>
  );
}

export default Portfolio;