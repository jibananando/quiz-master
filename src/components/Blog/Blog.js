import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>All Blog</h2>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            What is the purpose of react router?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">React Router is a standard library for routing in React. It enables the navigation
                            among views of various components in a React Application, allows changing the browser
                            URL, and keeps the UI in sync with the URL</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            How does context api work in react?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">The React Context API is a way for a React app to effectively produce global variables
                            that can be passed around. This is the alternative to "prop drilling" or moving props
                            from grandparent to child to parent, and so on. Context is also touted as an easier,
                            lighter approach to state management using Redux.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            How does useRef works in React?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">useRef returns a mutable ref object whose .current property is initialized to the passed
                            argument ( initialValue ). The returned object will persist for the full lifetime of the
                            component. Essentially, useRef is like a “box” that can hold a mutable value in its
                            .current property.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;