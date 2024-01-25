function Reviews(){
  //mempersiapkan data dummy json
  const users = [
    {
      "id" : 1,
      "name" : " Rico Prediansyah",
      "review" : " Harga murah tapi berkualialitas bukan kaleng-kaleng",
      "photo" : "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      "id" : 2,
      "name" : " Mas fadli",
      "review" : " Harga murah tapi berkualialitasnya mantap",
      "photo" : "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      "id" : 3,
      "name" : " Mas Risky",
      "review" : " Harga murah tapi berkualialitas keren",
      "photo" : "https://images.pexels.com/photos/3058391/pexels-photo-3058391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ];

  const listReview = users.map((itemReview) =>
  <div key={itemReview.id} className='Item'>
    <img src={itemReview.photo} alt="" />
    <div className='User'>
      <h3>{itemReview.name}</h3>
      <p>{itemReview.review}</p>
    </div>
  </div>
  );
  return(
    <div className='Review-box'>
      <h2>Reviews</h2>
      {listReview}
    </div>

  )
}

export default Reviews;