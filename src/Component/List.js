import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { react } from 'react';
function List(props) {
    var data = JSON.parse(localStorage.getItem("data"));
    var name = data.user;
    const navigate = useNavigate();
    function Logout() {
        localStorage.clear();
    }
    return (
        <>
            <div className="header">
                <ul>
                    <li> <a href="#">Trang chủ</a></li>
                    <li> <a href="#">Động vật</a></li>
                    <li> <a href="#">Thực vật</a></li>
                    <li> <a href="#">Trong nước</a></li>
                    <li> <a href="#">Quốc tế</a></li>
                    <li> <a href="#">Xin chào</a></li>
                    <li> <a href="#">{name}</a></li>
                    <li onClick={Logout}> <Link to="/">Đăng xuất</Link></li>
                </ul>
            </div>
            <div className="content">
                <div className="content-head">
                    <ul>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Panthera_tigris_altaica_in_Lodz_Zoo_2.jpg" />
                            <p className="d1">Hổ</p>
                            <p>Hổ hay còn gọi là cọp hoặc hùm (và các tên gọi khác như Ông ba mươi, kễnh, khái) là một loài động vật có vú thuộc Họ Mèo được xếp vào một trong năm loài "mèo lớn" thuộc chi Panthera[4]. Hổ là một loài thú ăn thịt, chúng dễ nhận biết nhất bởi các sọc vằn dọc sẫm màu trên bộ lông màu đỏ cam với phần bụng trắng. Hổ là loài thú lớn nhất trong họ Mèo và là động vật lớn thứ ba trong các loài thú ăn thịt (sau gấu Bắc Cực và gấu nâu). Hổ là một trong những loài động vật có biểu tượng lôi cuốn và dễ nhận biết nhất trên thế giới với những sọc vằn vện không lẫn vào đâu được. </p>
                        </li>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Panthera_tigris_altaica_in_Lodz_Zoo_2.jpg" />
                            <p className="d1">Hổ</p>
                            <p>Hổ hay còn gọi là cọp hoặc hùm là một loài động vật có vú thuộc Họ Mèo được xếp vào một trong năm loài "mèo lớn" thuộc chi Panthera.</p>
                        </li>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Panthera_tigris_altaica_in_Lodz_Zoo_2.jpg" />
                            <p className="d1">Hổ</p>
                            <p>Hổ hay còn gọi là cọp hoặc hùm là một loài động vật có vú thuộc Họ Mèo được xếp vào một trong năm loài "mèo lớn" thuộc chi Panthera.</p>
                        </li>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Panthera_tigris_altaica_in_Lodz_Zoo_2.jpg" />
                            <p className="d1">Hổ</p>
                            <p>Hổ hay còn gọi là cọp hoặc hùm là một loài động vật có vú thuộc Họ Mèo được xếp vào một trong năm loài "mèo lớn" thuộc chi Panthera.</p>
                        </li>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Panthera_tigris_altaica_in_Lodz_Zoo_2.jpg" />
                            <p className="d1">Hổ</p>
                            <p>Hổ hay còn gọi là cọp hoặc hùm là một loài động vật có vú thuộc Họ Mèo được xếp vào một trong năm loài "mèo lớn" thuộc chi Panthera.</p>
                        </li>
                    </ul>
                </div>
                <div className="content-bot">
                    <ul>
                        <li>
                            <img src="https://cms.lichngaytot.com/medias/original/2019/9/26/Bi-an-giac-mo-ve-loai-bao.jpg" />
                            <p className="d1">Báo</p>
                            <p>Báo săn (Acinonyx jubatus) (tiếng Anh: Cheetah), còn được gọi là Báo gê-pa</p>
                        </li>
                        <li>
                            <img src="https://cms.lichngaytot.com/medias/original/2019/9/26/Bi-an-giac-mo-ve-loai-bao.jpg" />
                            <p className="d1">Báo</p>
                            <p>Báo săn (Acinonyx jubatus) (tiếng Anh: Cheetah), còn được gọi là Báo gê-pa</p>
                        </li>
                        <li>
                            <img src="https://cms.lichngaytot.com/medias/original/2019/9/26/Bi-an-giac-mo-ve-loai-bao.jpg" />
                            <p className="d1">Báo</p>
                            <p>Báo săn (Acinonyx jubatus) (tiếng Anh: Cheetah), còn được gọi là Báo gê-pa</p>
                        </li>
                        <li>
                            <img src="https://cms.lichngaytot.com/medias/original/2019/9/26/Bi-an-giac-mo-ve-loai-bao.jpg" />
                            <p className="d1">Báo</p>
                            <p>Báo săn (Acinonyx jubatus) (tiếng Anh: Cheetah), còn được gọi là Báo gê-pa</p>
                        </li>
                        <li>
                            <img src="https://cms.lichngaytot.com/medias/original/2019/9/26/Bi-an-giac-mo-ve-loai-bao.jpg" />
                            <p className="d1">Báo</p>
                            <p>Báo săn (Acinonyx jubatus) (tiếng Anh: Cheetah), còn được gọi là Báo gê-pa</p>
                        </li>
                        <li>
                            <img src="https://cms.lichngaytot.com/medias/original/2019/9/26/Bi-an-giac-mo-ve-loai-bao.jpg" />
                            <p className="d1">Báo</p>
                            <p>Báo săn (Acinonyx jubatus) (tiếng Anh: Cheetah), còn được gọi là Báo gê-pa</p>
                        </li>
                        <li>
                            <img src="https://cms.lichngaytot.com/medias/original/2019/9/26/Bi-an-giac-mo-ve-loai-bao.jpg" />
                            <p className="d1">Báo</p>
                            <p>Báo săn (Acinonyx jubatus) (tiếng Anh: Cheetah), còn được gọi là Báo gê-pa</p>
                        </li>
                        <li>
                            <img src="https://cms.lichngaytot.com/medias/original/2019/9/26/Bi-an-giac-mo-ve-loai-bao.jpg" />
                            <p className="d1">Báo</p>
                            <p>Báo săn (Acinonyx jubatus) (tiếng Anh: Cheetah), còn được gọi là Báo gê-pa</p>
                        </li>
                        <li>
                            <img src="https://cms.lichngaytot.com/medias/original/2019/9/26/Bi-an-giac-mo-ve-loai-bao.jpg" />
                            <p className="d1">Báo</p>
                            <p>Báo săn (Acinonyx jubatus) (tiếng Anh: Cheetah), còn được gọi là Báo gê-pa</p>
                        </li>
                        <li>
                            <img src="https://cms.lichngaytot.com/medias/original/2019/9/26/Bi-an-giac-mo-ve-loai-bao.jpg" />
                            <p className="d1">Báo</p>
                            <p>Báo săn (Acinonyx jubatus) (tiếng Anh: Cheetah), còn được gọi là Báo gê-pa</p>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="pagination">
                <ul>
                    <li className="item">
                        <a href="#">
                            <i class="fa-solid fa-angle-left"></i>
                        </a>
                    </li>
                    <li className="item">
                        <a href="#">1</a>
                    </li>
                    <li className="item">
                        <a href="#">2</a>
                    </li>
                    <li className="item">
                        <a href="#">3</a>
                    </li>
                    <li className="item">
                        <a href="#">4</a>
                    </li>
                    <li className="item">
                        <a href="#">...</a>
                    </li>
                    <li className="item">
                        <a href="#">14</a>
                    </li>
                    <li className="item">
                        <a href="#">
                            <i class="fa-solid fa-angle-right"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default List;