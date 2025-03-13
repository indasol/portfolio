import '../../css/prdList.css'

function About() {
     return (
          <div className="container wrap-prdList">
               <p className="title">About</p>
               <p className="description">풀스택 개발자 인다솔 자기소개</p>
               <div className="detailInfo">
                    <div className="personalInfo">
                         <h3>기본 정보</h3>
                         <ul>
                         <li><span className="tag">이름</span>인다솔</li>
                         <li><span className="tag">나이</span>만 28세(96년생)</li>
                         <li><span className="tag">주소</span>경기도 고양시 덕양구</li>
                         </ul>
                    </div>
                    <div className="divider"></div>
                    <h3>소속 정보</h3>
                    <ul>
                         <li><span className="tag">소속</span>미디어젠</li>
                         <li><span className="tag">직급</span>프로</li>
                         <li><span className="tag">부서</span>웹개발팀</li>
                         <li><span className="tag">업무 내용</span>풀스택 개발</li>
                         <li><span className="tag">경력</span>5년차</li>
                         <li><span className="tag">스킬</span>JAVA, VUE, JSP, REDIS, ORACLE, MYSQL, POSTGRESQL, JAVASCRIPT, HTML, CSS, MEDIA QUERY, PLUGIN</li>
                    </ul>
               </div>
          </div>
     );
   }

export default About;