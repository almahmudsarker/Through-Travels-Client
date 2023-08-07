import React from 'react';
import Container from '../Shared/Container';
import { categories } from './categoriesData';
import CategoryBox from './CategoryBox';
import Heading from '../Heading/Heading';
const Categories = () => {
    return (
        <div className='mt-8'>
            <Heading title='Explore Category' subtitle='Now you can select your destination by categories' center={true} />
            <Container>
                <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
                    {
                        categories.map(item => <CategoryBox key={item.label} label={item.label} icon={item.icon} />)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Categories;