import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='q-box'>
                <h2>What is cors?</h2>
                <p> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>

            </div>
            <div className='q-box'>
                <h2> Why are you useing firebase?</h2>
                <p>Firebase provide secure athuentication syestem. Firebase is used for many purposes that can help your apps to develop, grow and make it a quality app. </p>

            </div>
            <div className='q-box'>
                <h2>How does the private route works</h2>
                <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>

                <p></p>
            </div>
            <div className='q-box'>
                <h2>what is node js</h2>
                <p>Node.js is an open source server environment; Node.js is free ; Node.js can generate dynamic page content; Node.js can create, open, read, write, delete, etc</p>
            </div>
        </div>
    );
};

export default Blog;