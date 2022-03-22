import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="nx52__blog section__padding" id="blog">
    <div className="nx52__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br />Keep up to date with NX-52 and read our Blog</h1>
    </div>
    <div className="nx52__blog-container">
      <div className="nx52__blog-container_groupA">
        <Article imgUrl={blog01} date="Aug 09th, 2021" text="NX-52 Continuous learning and development in a fast paced industry" />
      </div>
      <div className="nx52__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 23th, 2022" text="NX-52 Above and Beyond our wildest expectations" />
        <Article imgUrl={blog03} date="Oct 03rd, 2022" text="NX-52 Projects for open source learning" />
        <Article imgUrl={blog04} date="Nov 18th, 2021" text="NX-52 A day in the life of an AI engineer" />
        <Article imgUrl={blog05} date="Feb 24th, 2021" text="NX-52 How do you know if it is working?" />
      </div>
    </div>
  </div>
);

export default Blog;
