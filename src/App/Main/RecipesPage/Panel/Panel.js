import React from 'react'
import RecentPost from '../../SearchForm/RecentPost/RecentPost'

import SearchForm from '../../SearchForm/SearchForm'
import CategoryList from '../CategoryList/CategoryList'

import './Panel.css'

const Panel = ({recipeDB, className=''}) => {
    const recentPosts = recipeDB.sort((recipe1, recipe2) => new Date(recipe2.date) - new Date(recipe1.date))

    return (
        <div className={"panel " + className}>
            <div className="panel__child">
                <SearchForm className="panel__child1" />
            </div>
            <div className="panel__child">
                <div>
                    <h5 className="margin-bottom--xs">About us</h5>
                    <div className="text">Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat.</div>
                </div>
            </div>
            <div className="panel__child">
                <div>
                    <h5 className="margin-bottom--xs">Recent posts</h5>
                    <RecentPost className="panel__recent-post" name={recentPosts[0].name} date={new Date(recentPosts[0].date)} image={recentPosts[0].image}/>
                    <RecentPost className="panel__recent-post" name={recentPosts[1].name} date={new Date(recentPosts[1].date)} image={recentPosts[1].image}/>
                </div>
            </div>
            <div className="panel__child">
                <div>
                    <h5 className="margin-bottom--xs">Categories</h5>
                    <CategoryList />
                </div>
            </div>
        </div>
    )
}

export default Panel