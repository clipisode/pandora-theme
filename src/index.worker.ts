import { GetCustomDataDescriptorsFn, SiteData } from "@clipisode/theme";

export const getCustomDataDescriptors: GetCustomDataDescriptorsFn = () => {
  return [];
};

export const siteData: SiteData = {
  customCssKey: "styles.css",
  meta: {
    // values: TOPIC_TITLE
    title: "TOPIC_TITLE • Payghaam",
  },
  brandColor: "#5f21b7",
  introScreenDesktop: {
    // values: THEME_FILE_ROOT, TOPIC_TITLE, QR_CODE, INVITATION_DISPLAY_NAME, INVITATION_URL
    markup: `
      <div class="flex flex-col items-center justify-between text-center flex-grow ">
        <div class="flex flex-col items-center justify-between text-center">
          <div class="m-2">
            <a href="https://payghaam.com">
              <img src="THEME_FILE_ROOT/logo.png" style="width: 200px; height: 133px;" />
            </a>
          </div>
          <h1 class="mt-3 mb-6 text-xl md:text-2xl max-h-28 md:max-h-32 overflow-hidden font-bold">TOPIC_TITLE</h1>
        </div>
        <div class="m-8">QR_CODE</div>
        <div>
          <p class="m-4 mb-6 text-base">Point your camera at the QR code to open this invitation link on your
          phone and send <span class="whitespace-nowrap"><b>INVITATION_DISPLAY_NAME</b></span> <span class="whitespace-nowrap">a video reply.</span></p>
        </div>
    </div>`,
  },
  nameScreen: {
    // values: UPLOAD_PERCENTAGE, INVITATION_DISPLAY_NAME, SOCIAL_NETWORK
    nameScreenHeader: `
      <div class="my-2 flex flex-col items-center">
        <img src="THEME_FILE_ROOT/icon.png" class="h-24" />
      </div>
    `,
  },
  closedScreen: {
    // values: THEME_FILE_ROOT, INVITATION_DISPLAY_NAME
    markup: `
      <div class="flex flex-grow flex-col items-center">
        <div>
          <p class="mt-12 mb-12 mx-3 text-center">This invitation is no longer <span class="whitespace-nowrap">accepting replies.</span></p>
          <div class="items-center flex flex-col">
            <a href="https://payghaam.com">
              <img src="THEME_FILE_ROOT/logo.png" style="width: 200px;" />
            </a>
          </div>
        </div>
      </div>
    `,
  },
  successScreen: {
    // values: THEME_FILE_ROOT, INVITATION_DISPLAY_NAME
    markup: `
      <div class="flex flex-grow flex-col items-center">
        <div>
          <p id="awesome" class="mt-12 mb-6 mx-3 text-center">Awesome… all done!<br>Wasn&rsquo;t that easy?</p>
          <div class="items-center flex flex-col">
            <a href="https://payghaam.com">
              <img src="THEME_FILE_ROOT/logo.png" style="width: 200px; height: 133px;" />
            </a>
          </div>
          <p id="checkusout" class="mt-12 mb-12 mx-3 text-center"><b>While you&rsquo;re at it<br>check us out at</b><br>payghaam.com<br>@payghaam</p>
        </div>
      </div>
      <p id="hashtag"><b>#</b>Poocho<b>Sawaal</b></p>
      `,
  },
  warningWide: {
    description: `<p class="mb-4">Tall videos work best because Payghaam combines your video with a star&rsquo;s tall answer video.</p><p class="mb-4"p>We can crop this video and make it tall or you can choose a new video.</p>`,
  },
};
