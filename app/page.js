import { getFrameMetadata } from '@coinbase/onchainkit';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Play Audio" 
    },
  ],
  image: 'https://www.lifewire.com/thmb/K0oF6bk8jsXRJFUFma5pNo7xjyc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Goalfor2020FunnyMeme-04eadff55a17489a85453238481fe36e.jpg',

  //which api to call when we click next button
  post_url: 'https://meme-fram.vercel.app/api',
});

export const metadata = {
  title: 'A basic audio frame',
  description: 'A basic audio frame',
  openGraph: { 
    title: 'Audio frame',
    description: 'Audio Frame',
    images: ['https://media.sproutsocial.com/uploads/meme-example.jpg'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>test</h1>
    </>
  );
}