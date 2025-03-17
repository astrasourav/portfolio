
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className=" py-6 text-center">
      <p>Contact me at <a href="mailto:souravkumarr77@gmail.com" className="text-yellow-400">souravkumarr77@gmail.com</a></p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://www.linkedin.com/in/sourav-kumar-30141b174/" target="_blank" className="hover:text-yellow-400">LinkedIn</a>
                <a href="https://x.com/souravkumarr73" target="_blank" className="hover:text-yellow-400">X</a>
        <a href="https://github.com/astrasourav" target="_blank" className="hover:text-yellow-400">GitHub</a>
        <a href="https://leetcode.com/souravkumarr73/" target="_blank" className="hover:text-yellow-400">LeetCode</a>
      </div>
    </footer>
  );
};

export default Footer;
