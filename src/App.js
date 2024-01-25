import logo from './logo.svg';
import './App.css';
import Reviews from './Reviews';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk/>
      <ProdukInfo isDiscount="yes" category="LEBARAN" name="PINKY SWAGG"/>
      <Reviews/>
    </div>
  );
}

function FotoProduk(){
  return(
    <div className="Foto">
      <img src="sepatu-sneakers.jpg" alt="" />
    </div>
  )
}

function CheckDiscount (props){
  const{isDiscount, discount} =props;
  if (isDiscount == "yes"){
    return(
      <p>Diskon {discount}% off</p>
      );
  }
  else if (isDiscount == "comming"){
    return(
      <p>Akan ada diskon ...</p>
      );
  }
  else {
    return(
      <p>Belum Ada diskon</p>
      );
  }
}

function ProdukInfo (props) {
  const { category, name, isDiscount } = props;
  const benefits = ["Tidak kusut terena air", "Bahan lebih halus","Tidak gerah","bahan lembut","kualitas oke","Original"]
  const listBenefits = benefits.map((itemBanefit) =>
    <li key={itemBanefit} >{itemBanefit}</li>
  );
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 73.309.399</p>
        <CheckDiscount isDiscount={isDiscount} discount={50} />
        <p className="Info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <ul>
          {listBenefits}
        </ul>
        <button>
          <a onClick={(e) => TambahCard (name, e)} href="#">Add to card</a>
        </button>
      </div>
    </div>
      
  );
}

function TambahCard (e){
  return console.log("Membeli " + e)
}

CheckDiscount.protoTypes = {
  discount: PropTypes.number.isRequired
};

export default App;





