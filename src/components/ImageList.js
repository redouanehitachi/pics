
import ImageShow from './ImageShow';
export default function ImageList({ images }) {
  const renderedimages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />
  });
  return (
    <div>
      {renderedimages}
    </div>
  )
}
