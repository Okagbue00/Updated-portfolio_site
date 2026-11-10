import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper.jsx';
import { blogPosts } from '#constants';
import {
  PanelLeft,
  ChevronLeft,
  ChevronRight,
  ShieldHalf,
  Search,
  Share,
  Plus,
  Copy,
  MoveRight,
} from 'lucide-react';

const Safari = () => {
  return (
    <>
    <div id="window-header">
      <WindowControls target="safari" />

      <PanelLeft className="ml-10 icon max-sm:hidden" />
      <div className="flex items-center gap-1 ml-5 max-sm:hidden">
        <ChevronLeft className="icon" />
        <ChevronRight className="icon" />
      </div>

      <div className="flex-1 flex-center gap-3 max-sm:ml-3 min-w-0">
        <ShieldHalf className="icon max-sm:hidden" />

        <div className="search">
          <Search className="icon" />
          <input
            type="text"
            placeholder="Search or enter website name"
            className="flex-1"
          />
        </div>
      </div>

      <div className="flex items-center gap-5 max-sm:hidden">
        <Share className="icon" />
        <Plus className="icon" />
        <Copy className="icon" />
      </div>
    </div>

    <div className="blog">
        <h2>Awesome Cybersecurity Blogs Worth Reading</h2>
        <div className="space-y-8">
            {blogPosts.map(({id, image, title, label, link}) => (
                <div key={id} className="blog-post">
                    <div className="col-span-2">
                        <img src={image} alt={title} />
                    </div>

                    <div className="content">
                        <p>{label}</p>
                        <h3>{title}</h3>
                        <a href={link} target="_blank" rel="noopener noreferrer">Read More <MoveRight className="icon-hover" /> </a>
                    </div>
                    </div>
            ))}
            </div>

    </div>


    </>
    
  );
};

const SafariWindow = WindowWrapper(Safari, 'safari');

export default SafariWindow;