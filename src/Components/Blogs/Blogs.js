import React from "react";
import './Blogs.css'
const Blogs = () => {
  return (
    <div className="blog-container">
      <div class="card">
        <div class="container-blog">
          <h4>
            <b>What Is Context Api</b>
            <hr />
          </h4>
          <p>
            Context api is a new feature in react that allows one to share state
            across the entire app ..context api is a react api that can solve a
            lot of problems like context api can be used to share data with
            multiple components, without having to pass the data thought props
            and manually.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="container-blog">
          <h4>
            <b>What is Semantic tag</b>
            <hr />
          </h4>
          <p>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as header , footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.Semantic HTML refers to syntax that makes the HTML more comprehensible by better defining the different sections and layout of web pages. It makes web pages more informative and adaptable, allowing browsers and search engines to better interpret content.</p>
        </div>
      </div>
      <div class="card">
        <div class="container-blog">
          <h4>
            <b>Inline-Block and Inline-Element</b>
            <hr />
          </h4>
          <p>inline-block:
              <li>respect left & right margins and padding, but not top & bottom</li>
              <li>cannot have a width and height set</li>
              <li>allow other elements to sit to their left and right.</li>
          </p>
          <hr />
          <p>Inline-element</p>
          <li>Inline elements occupy only sufficient width required.</li>
          <li>It can contain data and other inline elements.</li>
          <li>By default, inline elements do not begin on new lines.</li>
          <li>inline elements create shorter structures (than block level elements).</li>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
