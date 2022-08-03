import '../css/section01.css';

const Section01 = () => {
    return (
        <section className="about">
            <h2>
                <span className="mainColor">CEO'S</span> GREETINGS
            </h2>
            <p>새로운 미래를 열어가는 기업</p>
            <div className="container">
                <div className="des">
                    <p className="title">
                        웹서비스의 <span className="mainColor">새로운 미래를</span> <br />
                        <span className="mainColor">기업</span>이 만들어 가겠습니다.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad, <br />
                        Lore ipsum dolor sit amet consectetur adipisicing elit. Ratione ad
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad, dfaedf aeatgdf <br />
                        illo reiciendis quo facere suscipit qui. Voluptas aspernatur nam est? <br />
                        Lore ipsum dolor sit amet consectetur adipisicing elit. Ratione ad
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad, <br />
                        illo reiciendis quo facere suscipit qui. Voluptas aspernatur nam est?
                    </p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <figure>
                    <img src="./img/hd01.jpg" alt="" />
                </figure>
            </div>

            <div className="inner">
                <h3>
                    주요현황
                </h3>
                <div className="responsive_table">
                    <table className="table">
                        <caption>* description</caption>
                        <tbody>
                            <tr>
                                <th>주  소</th>
                                <td>부산시 동래구 사직동 1234-56 쌍둥이 돼지국밥 옆</td>
                            </tr>
                            <tr>
                                <th>전화번호</th>
                                <td>051-783-2318</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Section01;