import React from "react";
import { Link } from "react-router-dom";
import "./OurValues.css";

const OurValues = () => {
  return (
    <div className="ourvalues_page">
      <div className="about_contents">
        <h1 className="ourvalues_header">Our Story</h1>

        <div className="about_text">
          Lorem ipsum dolor sit amet. Et consequatur quasi aut sint corporis ea
          fuga autem qui laboriosam qui magnam consequatur aut ipsam incidunt.
          Qui nostrum voluptate ut cumque officia At minus eveniet rem eligendi
          ipsum et sunt voluptatem.
          <br></br> <br></br>
          Et quas facilis qui voluptatem recusandae aut architecto ullam eum
          sint unde. Eos ullam ipsa non voluptatem ipsum id facilis libero ut
          doloribus reprehenderit et dicta velit. Ut quae quibusdam qui voluptas
          deleniti ea inventore excepturi sit dolor rerum nam voluptate
          quibusdam. Et dicta omnis At voluptatum eveniet eum architecto.
        </div>
        <div className="order_now_button_container">
          <Link to="/orderpage">
            <button className="order_now_button">Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
