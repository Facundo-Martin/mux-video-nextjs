import { CustomMuxPlayerComponent } from "./components/custom-mux-player";
import { CustomMuxVideoComponent } from "./components/custom-mux-video";
import { MUX_VIDEOS } from "./utils/data";

export const runtime = "edge";

export default function SearchPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Search Results</h1>

      <div className="my-12">
        <p className="text-lg font-semibold">With Mux Video:</p>
        <div className="flex items-center flex-wrap gap-8 mt-3">
          {MUX_VIDEOS.map((x) => (
            <CustomMuxVideoComponent
              key={x.playbackId}
              playbackId={x.playbackId}
            />
          ))}
        </div>
      </div>

      <div className="my-12">
        <p className="text-lg font-semibold">With Mux Player Component:</p>
        <div className="flex items-center flex-wrap gap-8 mt-3">
          {MUX_VIDEOS.map((x) => (
            <CustomMuxPlayerComponent
              key={x.playbackId}
              playbackId={x.playbackId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
