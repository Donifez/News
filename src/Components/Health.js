import React from "react";
import axios from "axios";

class Health extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

            posts:[]
         };
    }
    componentDidMount(){
        
        axios.get("https://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey=107705bc76e94112bf30feef9ca5aa0e")
        .then(res=>{
        console.log(res)

        this.setState({
            posts:res.data.articles
        })
        })
    }
    render() {
        const{posts}=this.state;
        const postsList=posts.length ? (posts.map(post=>{ 
            return(
                <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 text-xs-center flex-item">
						<div className="card-deck">
							<div className="card bg-success">
								<div className="card-body text-center"  key={post.id} >
									<img
									  src={post.urlToImage}
										className="img-fluid"
										alt="No_Image_For_This_News_Article"
									/>
									<a href={post.url}> 
										<h5 className="text-white">{post.title}</h5>
                                        </a>
									
                                    <p className="text-white">Description : {post.description}....</p>
                                    
                                    
                                    <a href={post.url}> 
                                    <button className='btn btn-dark'>View More Details</button>
                                    </a>
                                   
								</div>
							</div>
						</div>
					</div>
            );
        })
        ): (
        
        <div className="loading"> Loading Data
        
        
        </div>

        );
        return (
            <div>
            <center>
            <h2>Health Forum</h2>
            
            </center>
               
                <div className="flex-item">
                {postsList}
                  
                   
                   
                   
                  {/*https://newsapi.org/v2/top-headlines?country=ng&category=general&apiKey=be1939fe6be743508bdf643a5f4708d0*/}  
                  {/*https://newsapi.org/v2/everything?q=buhari&apiKey=be1939fe6be743508bdf643a5f4708d0*/} 
                  {/*https://newsapi.org/v2/everything?q=bokoharam&from=2020-01-04&to=2019-11-04&sortBy=popularity&apiKey=be1939fe6be743508bdf643a5f4708d0*/} 
                </div>
				
			</div>
		);
      
    }
}

export default Health;