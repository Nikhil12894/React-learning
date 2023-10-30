import React from "react";

const BlogCardTwo = ({ blogs = [] }) => {
  function firstHundredWords(postContent) {
    return postContent?.substring(0, 150) + " ...";
  }
  return (
    <div className="flex flex-col">
      <div className="relative w-full py-[70px]">
        <div className="container z-1">
          <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 mb-4 justify-center">
            {blogs?.map((blog) => (
              <div
                key={blog.postId}
                className="col-span-12 sm:col-span-12  md:col-span-6 lg:col-span-6 xl:col-span-6 "
              >
                <div className="bg-white dark:bg-gray-800/40 backdrop-blur-2xl  rounded-2xl shadow-lg w-full relative p-4">
                  <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4">
                    <div className="col-span-12 sm:col-span-6  md:col-span-6 lg:col-span-4 xl:col-span-4 ">
                      <img
                        src={blog.featuredImage}
                        alt={blog.title}
                        className="max-w-full h-auto rounded-xl max-h-fit"
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-6  md:col-span-6 lg:col-span-8 xl:col-span-8 ">
                      <div className=" h-full flex flex-col p-3">
                        <div className="w-full block">
                          <span className="text-[12px] bg-pink-500/10 text-pink-500 dark:text-pink-600 rounded font-medium py-1 px-2 inline-block mb-3">
                            {blog.title}
                          </span>
                          <span className="text-slate-700 dark:text-slate-300 font-medium text-xs ms-2">
                            {blog.createdAt}
                          </span>
                        </div>
                        <a
                          href="#"
                          className="text-lg sm:text-xl font-semibold  text-gray-600 dark:text-slate-200 block"
                        >
                          {firstHundredWords(blog.content)}
                        </a>
                        <div className="flex flex-wrap justify-between mt-auto">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded">
                              <img
                                className="w-full h-full overflow-hidden object-cover rounded object-center"
                                src={blog.userAvatar}
                                alt="logo"
                              />
                            </div>
                            <div className="ml-2">
                              <a
                                tabIndex="0"
                                className="cursor-pointer hover:text-gray-500 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none focus:underline"
                              >
                                <h5 className=" font-medium text-sm">
                                  {blog.createdBy}
                                </h5>
                              </a>
                              <p
                                tabIndex="0"
                                className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium"
                              >
                                {blog.location}
                              </p>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="block text-slate-500 dark:text-slate-400 hover:text-slate-600 underline decoration-1 decoration-dashed underline-offset-4  decoration-primary-500 font-medium  focus:outline-none self-center"
                          >
                            Read More{" "}
                            <i
                              data-lucide="arrow-right"
                              className="self-center inline-block ms-1 h-4 w-4"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardTwo;
