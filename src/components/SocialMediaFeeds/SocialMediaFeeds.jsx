import React from "react";

const SocialMediaFeeds = () => {
  // Replace these URLs with the actual social media feeds or widgets
  const twitterFeedURL =
    "https://twitter.com/TravelLeisure?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor";
  const facebookFeedURL = "https://www.facebook.com/groups/Miyar.Travel/";
  const instagramFeedURL =
    "https://www.instagram.com/beautifuldestinations/?utm_source=ig_embed&ig_rid=edd88034-2a43-4639-aeb7-c4f3d0de7e40";

  return (
    <section className="social-media-feeds">
      <h2 className="animated-text text-center text-3xl mt-20">
        Social Media Feeds
      </h2>
      <div className="feed-container">
        <div className="feed">
          <h3 className="animated-text text-center text-3xl mt-20">Twitter</h3>
          {/* Replace with the Twitter feed widget or embed code */}
          <iframe
            title="Twitter Feed"
            src={twitterFeedURL}
            frameBorder="0"
            width="100%"
            height="400"
          />
          <button className="follow-button">Follow on Twitter</button>
        </div>
        <div className="feed">
          <h3 className="animated-text text-center text-3xl mt-20">Facebook</h3>
          {/* Replace with the Facebook feed widget or embed code */}
          <iframe
            title="Facebook Feed"
            src={facebookFeedURL}
            frameBorder="0"
            width="100%"
            height="400"
          />
          <button className="follow-button">Like on Facebook</button>
        </div>
        <div className="feed">
          <h3 className="animated-text text-center text-3xl mt-20">
            Instagram
          </h3>
          {/* Replace with the Instagram feed widget or embed code */}
          <iframe
            title="Instagram Feed"
            src={instagramFeedURL}
            frameBorder="0"
            width="100%"
            height="400"
          />
          <button className="follow-button">Follow on Instagram</button>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaFeeds;
