import React from "react";
import CompactThread from "../src/post/CompactThread";
import ThreadIndent from "../src/post/ThreadIndent";
import Post from "../src/post/Post";

import Theme from "../src/theme/default";

import oncelerAvatar from "./images/oncie.jpg";
import greedlerAvatar from "./images/greedler.jpg";
import tuxedoAvatar from "./images/tuxedo-mask.jpg";
import mamoruAvatar from "./images/mamoru.png";
import hannibalAvatar from "./images/hannibal.png";

export default {
  title: "Thread Preview",
  component: CompactThread,
};

export const CompactThreadStory = () => {
  return (
    <CompactThread
      posts={[
        {
          createdTime: "5 minutes ago",
          text:
            '[{"insert":"Nishin Masumi Reading Group (Week 2)"},{"attributes":{"header":1},"insert":"\\n"},{"insert":"\\nAs you know, we\'re going through \\"Host is Down\\" this week! \\n\\n"},{"attributes":{"alt":"Host is Down by Mado Fuchiya (Nishin)"},"insert":{"image":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564868627l/50190748._SX1200_SY630_.jpg"}},{"insert":"\\n\\nThis is the official discussion thread. Feel free to comment, but remember to tag spoilers (or suffer the mods\' wrath).\\n"}]',
          secretIdentity: {
            name: "Good Guy",
            avatar: `/${oncelerAvatar}`,
          },
        },
        {
          createdTime: "10 hours ago",
          text:
            '[{"insert":"Help a Thirsty, Thirsty Anon"},{"attributes":{"header":1},"insert":"\\n"},{"insert":"\\nI recently discovered "},{"attributes":{"link":"https://myanimelist.net/manga/115345/MADK"},"insert":"MadK"},{"insert":", and I\'ve fallen in love with the combination of beautiful art and great story. I\'ve been trying to put together a list of recs of the angstiest, goriest series out there. It\'s been surprisingly hard to find the Good Shit.\\n\\nWhat\'s your favorite series and why?\\n"}]',
          secretIdentity: {
            name: "Tuxedo Mask",
            avatar: `/${tuxedoAvatar}`,
          },
          userIdentity: {
            name: "SexyDaddy69",
            avatar: `/${mamoruAvatar}`,
          },
          newComments: 5,
        },
        {
          createdTime: "yesterday",
          text:
            '[{"insert":"Monthly Art Roundup"},{"attributes":{"header":1},"insert":"\\n"},{"insert":"\\nPost your favorites! As usual, remember to embed the actual posts (unless it\'s your own art, then do as you wish). Reposting is a no-no. \\n\\nI\'ll start with one of my favorite artists:\\n"},{"insert":{"tweet":"https://twitter.com/notkrad/status/1222638147886034945"}}]',
          secretIdentity: {
            name: "Bad Guy",
            avatar: `/${greedlerAvatar}`,
          },
          newComments: 5,
          newContributions: 1,
        },
        {
          createdTime: "3 days ago",
          text:
            '[{"insert":{"block-image":"https://media.tenor.com/images/97b761adf7bdc9d72fc1fadbbaa3a4a6/tenor.gif"}},{"insert":"(I got inspired to write a quick cannibalism drabble. Wanted to share it and get your opinion while I decide whether to turn it into a longer fic!)\\n"}]',
          secretIdentity: {
            name: "Nice Therapist",
            avatar: `/${hannibalAvatar}`,
          },
          userIdentity: {
            name: "xXxChesapeakeRipperxXx",
            avatar: `/${hannibalAvatar}`,
          },
          newContributions: 3,
          newPost: true,
        },
      ]}
      onNewComment={() => console.log("click")}
      onNewContribution={() => console.log("click")}
    />
  );
};

CompactThreadStory.story = {
  name: "compact",
};

export const SampleThread = () => {
  return (
    <div
      style={{
        maxWidth: "550px",
        marginLeft: "100px",
        backgroundColor: Theme.LAYOUT_BOARD_BACKGROUND_COLOR,
      }}
    >
      <ThreadIndent level={0}>
        <Post
          createdTime="2019/05/14 at 7:34pm"
          text={
            '[{"insert":"Open RP"},{"attributes":{"header":1},"insert":"\\n"},{"insert":{"block-image":"https://cdn.discordapp.com/attachments/443967088118333442/691486081895628830/unknown.png"}}, {"attributes":{"italic":true},"insert":"You have my sword..."}]'
          }
          secretIdentity={{ name: "Tuxedo Mask", avatar: `/${tuxedoAvatar}` }}
          userIdentity={{ name: "SexyDaddy69", avatar: `/${mamoruAvatar}` }}
          onNewContribution={() => console.log("click!")}
          onNewComment={() => console.log("click!")}
          newComments={3}
          newContributions={5}
        />
        <ThreadIndent level={1}>
          <Post
            createdTime="2019/05/14 at 7:34pm"
            text={
              '[{"insert":{"block-image":"https://si.wsj.net/public/resources/images/BN-GA217_legola_G_20141215080444.jpg"}}, {"attributes":{"italic":true}, "insert":"...and my bow..."}]'
            }
            secretIdentity={{
              name: "Nice Therapist",
              avatar: `/${hannibalAvatar}`,
            }}
            userIdentity={{
              name: "xXxChesapeakeRipperxXx",
              avatar: `/${hannibalAvatar}`,
            }}
            onNewContribution={() => console.log("click!")}
            onNewComment={() => console.log("click!")}
          />
          <ThreadIndent level={2}>
            <Post
              createdTime="2019/05/14 at 7:34pm"
              text={
                '[{"insert":{"block-image":"https://cdn.discordapp.com/attachments/443967088118333442/691401632940032040/AbJqbbOwrc74AAAAAElFTkSuQmCC.png"}}]'
              }
              secretIdentity={{
                name: "Bad Guy",
                avatar: `/${greedlerAvatar}`,
              }}
              onNewContribution={() => console.log("click!")}
              onNewComment={() => console.log("click!")}
            />
          </ThreadIndent>
        </ThreadIndent>
      </ThreadIndent>
    </div>
  );
};

SampleThread.story = {
  name: "sample",
};
