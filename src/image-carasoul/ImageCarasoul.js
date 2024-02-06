import { useEffect, useState } from "react";

function ImageCarasoul() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const data = [
      "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Jan/unrecatf/citi/Makeup-PCcv._CB584595621_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/SVD/Feb24/GW/Unrec_PC_3000._CB583595285_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Jan/unrecatf/citi/Skincare-PCgf._CB584595621_.jpg",
    ];
    setImages(data);
  }, []);
  useEffect(() => {
    if (images.length <= 0) {
      return;
    }
    const interval = setInterval(() => {
      onNext();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [images]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const onNext = () => {
    setCurrentImageIndex((currentValue) => (currentValue + 1) % images.length);
  };
  const onPrev = () => {
    let prev = currentImageIndex - 1;
    setCurrentImageIndex(prev == -1 ? images.length - 1 : prev);
  };
  return (
    <div>
      <h1>Image Carasoul</h1>
      <button onClick={onPrev}>Prev</button>
      <img src={images[currentImageIndex]} height={300}></img>
      <button onClick={onNext}>Next</button>
    </div>
  );
}
export default ImageCarasoul;
