import React from "react";

const ShareContent = ({ contentUrl, contentTitle }) => {
  const handleShare = (platform) => {
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          contentUrl
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/share?url=${encodeURIComponent(
          contentUrl
        )}&text=${encodeURIComponent(contentTitle)}`;
        break;
      // Add more cases for other social media platforms if needed

      default:
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank");
    }
  };

  return (
    <div>
      <i onClick={() => handleShare("facebook")} class="fab fa-facebook-f"></i>
      <i onClick={() => handleShare("Twitter")} class="fab fa-facebook-f"></i>

      {/* <button onClick={() => handleShare("twitter")}>Share on Twitter</button> */}

      {/* Add more buttons for other social media platforms */}
    </div>
  );
};

export default ShareContent;
