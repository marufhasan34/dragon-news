import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='container rounded-2xl mx-auto flex justify-between gap-4 items-center bg-gray-200 p-4 my-5'>
            <button className='btn text-white bg-red-500'>Latest News</button>
            <Marquee pauseOnHover={true}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit modi voluptatum recusandae explicabo mollitia quibusdam, repellendus corporis obcaecati ullam, sequi voluptas culpa facilis sunt quaerat voluptatem quis esse perspiciatis error, assumenda totam ad ea! Est, at asperiores. Quos nobis quod dicta, eius libero doloribus accusantium praesentium facilis totam eum sunt.
            </Marquee>
        </div>
    );
};

export default BreakingNews;