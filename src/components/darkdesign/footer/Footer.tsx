import { MY_EMAIL, MY_MOBILE } from "../../../common/constants";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div><p>© {new Date().getFullYear()} Mahendra Pratap Singh</p></div>
      <div>
        <p>
            <a href={`tel:${MY_MOBILE}`}>📞 {MY_MOBILE}</a> | <a href={`mailto:${MY_EMAIL}`}>{MY_EMAIL}</a>
        </p>
      </div>
    </footer>
  );
}
