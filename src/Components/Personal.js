import React from "react";

const Personal = ({ data }) => {
  if (data) {
    var hobbies = data.hobbies.map(function (hobby) {
      return (
        <li key={hobby}>
          <p>{hobby}</p>
        </li>
      );
    });

    var blogs = data.blogs.map(function (blog) {
      return (
        <li key={blog.title}>
          <a style={{color: "white"}} href={blog.link} target="_blank" rel="noreferrer">
            <p>
              {blog.title}{" "}
              <span className="personal__link">
                <i className="fa fa-link"></i>
              </span>
            </p>
          </a>
        </li>
      );
    });

    // var testimonials = data.testimonials.map(function (testimonials) {
    //   return (
    //     <li key={testimonials.user}>
    //       <blockquote>
    //         <p>{testimonials.text}</p>
    //         <cite>{testimonials.user}</cite>
    //       </blockquote>
    //     </li>
    //   );
    // });
  }

  // return (
  //   <section id="testimonials">
  //     <div className="text-container">
  //       <div className="row">
  //         <div className="two columns header-col">
  //           <h1>
  //             <span>Blogs and Hobbies</span>
  //           </h1>
  //         </div>

  //         <div className="ten columns flex-container">
  //           <ul className="slides"></ul>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="personal">
          <div className="personal__div">
            <h1>Blogs</h1>
            <ul>{blogs}</ul>
          </div>
          <div className="personal__div">
            <h1>Hobbies</h1>
            <ul>{hobbies}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;
