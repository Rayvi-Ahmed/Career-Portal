import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="hero bg-base-300">
                <div className="hero-content text-center">
                    <div className="max-w-md h-60">
                        <h1 className="text-3xl font-bold">Blog</h1>
                    </div>
                </div>

            </div>

            <div className="container mx-auto grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-8 my-5">
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body text-start text-md font-semibold hover:bg-slate-200">
                        <h2 class="card-title">1. When should you use context API ?</h2>
                        <p>If i  want to avoid passing some props through many levels, component composition is often a simpler solution use context API to easier my work.</p>
                        <div class="card-actions justify-end">

                        </div>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body text-start text-md font-semibold hover:bg-slate-200">
                        <h2 class="card-title">2. What is custom hook ?</h2>
                        <p>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If i have code in a component that i feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, i can pull that out into a function.</p>
                        <div class="card-actions justify-end">

                        </div>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body text-start text-md font-semibold hover:bg-slate-200">
                        <h2 class="card-title">3. What is UseRef ?</h2>
                        <p>The useRef Hook allows to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                        <div class="card-actions justify-end">

                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body text-start text-md font-semibold hover:bg-slate-200">
                        <h2 class="card-title">4. What is useMemo ?</h2>
                        <p>The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. In this example, we have an expensive function that runs on every render. When changing the count or adding a todo, you will notice a delay in execution.</p>
                        <div class="card-actions justify-end">

                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Blog;