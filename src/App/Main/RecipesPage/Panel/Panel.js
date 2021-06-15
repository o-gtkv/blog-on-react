import React from 'react'
import { connect } from 'react-redux'
import RecentPost from '../../SearchForm/RecentPost/RecentPost'

import SearchForm from '../../SearchForm/SearchForm'
import CategoryList from '../CategoryList/CategoryList'

import './Panel.css'

// TODO: make RecentPostList

const Panel = ({recipesDB, className=''}) => {    
    if (recipesDB.length === 0)
        return null

    let recentPosts = recipesDB.sort((recipe1, recipe2) => new Date(recipe2.date) - new Date(recipe1.date))

    return (        
        <div className={`panel ${className}`}>            
            <SearchForm className="panel__child" />                        
            <div className="panel__child panel__child-about-us">
                <h5 className="margin-bottom--xs">About us</h5>
                <div className="text">Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat.</div>
            </div>            
            <div className="panel__child panel__child-recent-post">
                <h5 className="margin-bottom--xs">Recent posts</h5>
                <RecentPost name={recentPosts[0].name} date={new Date(recentPosts[0].date)} image={recentPosts[0].image}/>
                <RecentPost name={recentPosts[1].name} date={new Date(recentPosts[1].date)} image={recentPosts[1].image}/>
            </div>        
            <div className="panel__child">
                <h5 className="margin-bottom--xs">Categories</h5> 
                <CategoryList />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({recipesDB: state.recipesState.recipesList})

export default connect(mapStateToProps)(Panel)