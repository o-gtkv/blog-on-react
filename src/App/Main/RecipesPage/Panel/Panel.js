import React from 'react'
import { connect } from 'react-redux'

import RecentPost from '../RecentPost/RecentPost'
import SearchForm from '../SearchForm/SearchForm'
import CategoryList from '../CategoryList/CategoryList'

import './Panel.css'

// TODO: make RecentPostList

const Panel = ({recipesDB, className=''}) => {    
    if (!recipesDB.length)
        return null

    let recentPosts = recipesDB.sort((recipe1, recipe2) => new Date(recipe2.date) - new Date(recipe1.date)).slice(0, 2)

    return (        
        <div className={`panel ${className}`}>            
            <SearchForm className="panel__child" />                        
            <div className="panel__child panel__child-about-us">
                <h5 className="panel__block-title">About us</h5>
                <div className="text">Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat.</div>
            </div>            
            <div className="panel__child panel__child-recent-post">
                <h5 className="panel__block-title">Recent posts</h5>
                {
                    recentPosts.map((recentPost, i) => (
                        <RecentPost key={i} name={recentPost.name} date={new Date(recentPost.date)} image={recentPost.image}/>
                    ))
                }
            </div>        
            <div className="panel__child">
                <h5 className="panel__block-title">Categories</h5> 
                <CategoryList />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({recipesDB: state.recipesState.recipesList})

export default connect(mapStateToProps)(Panel)