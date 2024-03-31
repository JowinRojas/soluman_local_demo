import { ReactCompareSlider, ReactCompareSliderHandle, ReactCompareSliderImage } from "react-compare-slider";

export default function CompareImg() {
  return (
    <ReactCompareSlider
      className=""
      boundsPadding={50}
      handle={<ReactCompareSliderHandle style={{ color: 'blue' }} />}
      itemOne={<ReactCompareSliderImage src="/images/pictures/apartamento3.jpg" alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src="/images/pictures/apartamento4.jpg" alt="Image two" />}
      onlyHandleDraggable
      position={35}
    />
  )
}