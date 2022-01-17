import React,{useState,useEffect} from 'react'
import './Comment.scss'

export default function Comment({loading}) {
  const [dataAPI, setDataAPI] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState(5);

  async function requestData() {
    const commentData = await fetch(`https://dummyapi.io/data/v1/comment?limit=${review}`,{
            method:'GET',
            headers: {"app-id": "61dd0698da29dd61f504a67a"}
           })
    const commentDataJson = await commentData.json()
      setDataAPI(commentDataJson.data)
      loading(false)
      setTimeout(() => {
        setIsLoading(false)
      }, 1000);
  }

  function loadMore() {
    if(review === 30){
      setReview(30)
    }else{
      setReview(review + 5)
    }
  }
  
  useEffect(() => {
    requestData()
    return () => {
    }
  }, [review])


  return (
    <div className='comment_container'>
      <div className="comment_title">
        Buyer review
        <span>30 reviewed</span>
      </div>

       {dataAPI.map(item => (
        <div key={item.id} className={isLoading ? 'comment_list-loading' : 'comment_list'}>
        <div className="comment_wrapper">
          <img src={item.owner.picture} alt="" />
          <div className="comment_text">
            <div className="user_name">{item.owner.firstName} {item.owner.lastName}</div>
            <div className="user_message">{item.message}</div>
          </div>
        </div>

        <div className="user_post">{item.publishDate}</div>
        </div>
       ))}
          
      <button 
        className={review === 30 ? 'more-hide' : 'more'}
        onClick={loadMore}>
        load more review
      </button>
    </div>
  )
}
