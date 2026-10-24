# Banner image source

## Independent homepage photos — 2026-10-19

Six new images replace repeated assets: journal `river-modern`, ST-mask `st-stage` / `st-vinyl` / `st-studio`, and footer `footer-sound` / `footer-culture`. The third journal card and both new footer backgrounds contain no people. Optimized WebP files and original PNGs are retained in `images/home/` and `images/home/source/`. All 20 main-content photo paths and file-content hashes are unique. Exact built-in image_gen prompts and placement mapping: [images/home/PROMPTS-2026-10-19.md](images/home/PROMPTS-2026-10-19.md).

## Homepage redesign — 2026-10-16

Current homepage assets: `images/home/concert.webp`, `records.webp`, `river.webp`, `cafe.webp` and `city.webp`. Generated with built-in image_gen for this project; corresponding PNG originals are retained in `images/home/source/`. These are illustrative music/city scenes, not documentary artist-visit records. Full prompts: [images/home/PROMPTS.md](images/home/PROMPTS.md). The existing BLACKPINK, BTS, aespa and SEVENTEEN photos retain the checked CC BY sources and credits recorded below. The original ST mask is code-native SVG; no YG logo or proprietary font was copied.

## Places listing — 2026-10-15

Second-page preview entries reuse `images/about/listening-studio-panorama.webp`, `images/about/cafe-street.webp`, `images/routes/gwanghwamun-landscape.webp`, `images/about/editorial-terrace.webp`, `images/about/seoul-daylight.webp` and `images/about/amorepacific-inspired.webp`. The cafe-street and amorepacific-inspired WebP files are compression-only copies of the existing PNGs at unchanged intrinsic dimensions; originals remain intact. These are atmospheric preview entries, not verified artist visits or shop records.

The new `places.html` reuses existing local assets: `images/routes/seongsu-landscape.webp`, `images/banner-cafe.jpg`, `images/routes/hangang-landscape.webp`, `images/about/alley-sunset.webp`, `images/journal/seoul-record-shop.webp` and `images/routes/yeonnam-landscape.webp`. Card titles, districts and category assignments are design-preview content, not verified shop listings or evidence of artist visits. Existing source/creation records below still apply. Images are displayed at a consistent 4:3 ratio through CSS without overwriting their originals.

## About page assets — 2026-10-15

- `images/about/about-cover.webp`: original fictional Korean lifestyle portrait generated with the built-in imagegen tool for the approved About layout. Optimized WebP, 1448 × 1086. Source PNG retained as `images/about/about-cover.png`; no real artist identity is asserted.
- Full generation prompt is recorded under `About cover — 2026-10-15` in `IMAGE_PROMPTS.md`.
- `images/routes/hangang-landscape.webp`: retained atmospheric Seoul image reused as a panoramic story image.
- `images/about/map.svg`: earlier schematic map concept; no longer used on About.
- `images/routes/seongsu-landscape.webp`: retained atmosphere image previously used inside the concept; no longer used on About.
- `images/logo.png`: existing user-provided STarTown APP logo; reused without redesign.

- File: images/banner-seoul.jpg
- Photographer: Anastasia Zanko
- Source: https://unsplash.com/photos/nighttime-street-scene-in-seoul-with-neon-signs-kyNkN95uYtQ
- Reused from the existing LeKeng internal demo, whose IMAGE_SOURCES.md records use under the Unsplash License.
- Atmospheric Seoul photo; does not identify a specific venue or document an artist visit. Confirm licence before public launch.

Additional marquee images reused from the existing demo and its Unsplash License records:
- images/banner-cafe.jpg — hyunwoo jang: https://unsplash.com/photos/cafe-interior-with-chairs-plants-and-warm-lighting-gWMO31b9ykA
- images/banner-market.jpg — Marlene Philippson: https://unsplash.com/photos/busy-street-market-with-illuminated-signs-at-night-y4kuKmsezIU
These are atmospheric placeholders, not artist-visit evidence. The three images repeat across the marquee until a larger approved image collection is provided.

## Clean editorial banner (current)
- Asset: images/banner-clean-editorial.png
- Created using the built-in imagegen tool; AI-generated atmosphere images, not verified real places.
- Prompt: Six equal 3:2 photographic panels in a 3-column, 2-row contact sheet, no gaps or text. Minimal Korean lifestyle scenes: sunlit ivory cafe facade, ceramic espresso on travertine and linen, sculptural gallery architecture and blue sky, airy interior with chrome chair and sheer curtain, butter-yellow flower in a ceramic vase, and Korean hanok roof with pale sky. Warm ivory, sand, natural light, uncluttered editorial compositions. No people, neon, signs or logos.
- Rendered as a CSS image atlas with each panel displayed at 3:2; source is preserved without destructive cropping.

## Slick banner setup
The user supplied Slick 1.6.0. Added local jQuery 3.7.1 (https://code.jquery.com/jquery-3.7.1.min.js), required by Slick; library licence header is preserved. Load jQuery, Slick, then js/index.js using defer. No external runtime CDN is required for the slider.
Each slide uses picture > source (max-width: 760px) + img. banner-01 through banner-06 have -desktop.jpg (original panel) and -mobile.jpg (3:4 centre crop) variants extracted from the existing generated atlas, without generating new artwork. Replace these files with higher-resolution final photography when available.
Animation: fade, 1000ms, autoplay every 6000ms. A fixed NEXT button displays the current slide number. Reduced-motion preference is respected.

## About LeKeng concept imagery (ind_A)

- The current editorial About section uses `images/about/editorial-terrace.png`, created with the built-in imagegen tool for the supplied layout reference. It is a Korean-inspired architectural concept image, not a documentary photograph of a specific venue or evidence of an artist visit.
- `images/about/seoul-daylight.png` was created for an earlier About concept and is currently unused.
- `images/about/ddp-inspired.png`, `images/about/amorepacific-inspired.png`, and `images/about/alley-sunset.png` were generated for earlier About concepts and are currently unused.
- `images/about/travel-background.png` was generated from an earlier homepage concept. It is no longer used by the current About layout.
- `images/about/rooftops-day.png`, `images/about/cafe-street.png`, and `images/about/travel-route.svg` remain earlier unused concept assets.

## Featured artist portraits (ind_C)

The following Wikimedia Commons photographs are stored locally in `images/artists/`. They are shown through circular CSS masks; no source bitmap was cropped. Each artist card remains a design prototype with a `#` link. Attribution and source links are also available in the section's expandable photo credits.

The decorative transparent lettering `images/artists/more-than-a-fan-trip.png` was created with the built-in imagegen tool for this section. Final prompt: transparent warm-gold freehand brush-pen lettering reading exactly “More Than a Fan Trip”, compact horizontal composition, contemporary Korean editorial and fan-magazine mood, graceful but legible strokes, no background, border, icon, underline, extra text, shadow, or watermark.

| Local file | Artist / source | Licence |
| --- | --- | --- |
| `images/artists/bts.jpg` | BTS — [Samsung Saudi Arabia](https://commons.wikimedia.org/wiki/File:BTS_for_Samsung_Galaxy,_2022.jpg) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |
| `images/artists/blackpink.jpg` | BLACKPINK — [TV10](https://commons.wikimedia.org/wiki/File:Blackpink_Pink_Carpet_Event_3.jpg) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |
| `images/artists/aespa.jpg` | aespa — [10Asia](https://commons.wikimedia.org/wiki/File:Aespa_2024_MMA_2.jpg) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |
| `images/artists/seventeen.jpg` | SEVENTEEN — [Seventeen](https://commons.wikimedia.org/wiki/File:Seventeen_Carat_Land_24.jpg) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |
| `images/artists/twice.png` | TWICE — [On the street](https://commons.wikimedia.org/wiki/File:TWICEVat_Tour_%22Ready_to_Be%22_05_2023.png) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |
| `images/artists/bigbang.jpg` | BIGBANG — [Korean Culture and Information Service](https://commons.wikimedia.org/wiki/File:BIGBANG_2011_(current_members_since_2023).jpg) | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) |
| `images/artists/ningning.jpg` | NINGNING — [David Lee](https://commons.wikimedia.org/wiki/File:NINGNING_(54295363093).jpg) | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) |
| `images/artists/red-velvet.jpg` | Red Velvet — [MonkeyJunior](https://commons.wikimedia.org/wiki/File:Red_Velvet_at_Asia_Artist_Awards_on_November_26,_2019.jpg) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |


## 代表作品封面（Apple Music / iTunes，2026-10-13）

- TWICE — FANCY / FANCY YOU - EP: [images/artists/works/twice-1.jpg](https://music.apple.com/us/album/fancy/1555390183?i=1555390187&uo=4)；封面來源：https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/03/76/e6/0376e6f9-f6d8-68f7-ae85-1a4ef17002aa/00602508875229_Cover.jpg/600x600bb.jpg
- TWICE — Feel Special / Feel Special: [images/artists/works/twice-2.jpg](https://music.apple.com/us/album/feel-special/1556087002?i=1556087008&uo=4)；封面來源：https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/75/bb/cc/75bbcc8c-bc12-983b-196f-bb6e355cc978/00602508875281_Cover.jpg/600x600bb.jpg
- TWICE — The Feels / The Feels - Single: [images/artists/works/twice-3.jpg](https://music.apple.com/us/album/the-feels/1584128932?i=1584128934&uo=4)；封面來源：https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e0/d5/e6/e0d5e67a-9723-4d72-7510-dbf82553ca68/738676858334_Cover.jpg/600x600bb.jpg
- BTS — Dynamite / BE: [images/artists/works/bts-1.jpg](https://music.apple.com/us/album/dynamite/1596532185?i=1596532400&uo=4)；封面來源：https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/22/f3/8f/22f38fb9-1690-326a-d891-7aa946c2b06f/195497623273_Cover.jpg/600x600bb.jpg
- BTS — Butter / Proof: [images/artists/works/bts-2.jpg](https://music.apple.com/us/album/butter/1627573936?i=1627575769&uo=4)；封面來源：https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/f7/68/9c/f7689ce3-6d41-60cd-62d2-57a91ddf5b9d/196922067341_Cover.jpg/600x600bb.jpg
- BTS — Spring Day / YOU NEVER WALK ALONE: [images/artists/works/bts-3.jpg](https://music.apple.com/us/album/spring-day/1596528839?i=1596529381&uo=4)；封面來源：https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ce/fb/eb/cefbebd4-d53b-8d6c-33cf-2ee55408bd79/8804775077494_Cover.jpg/600x600bb.jpg
- BLACKPINK — DDU-DU DDU-DU / SQUARE UP - EP: [images/artists/works/blackpink-1.jpg](https://music.apple.com/us/album/ddu-du-ddu-du/1551479990?i=1551479993&uo=4)；封面來源：https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5e/5d/c3/5e5dc3a6-797b-dee5-9f51-2dcbf447c48e/19UMGIM05046.rgb.jpg/600x600bb.jpg
- BLACKPINK — How You Like That / THE ALBUM: [images/artists/works/blackpink-2.jpg](https://music.apple.com/us/album/how-you-like-that/1533894050?i=1533894669&uo=4)；封面來源：https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/64/46/c364465f-6271-8aae-93a8-b9979d2befe5/20UMGIM82075.rgb.jpg/600x600bb.jpg
- BLACKPINK — Pink Venom / Pink Venom - Single: [images/artists/works/blackpink-3.jpg](https://music.apple.com/us/album/pink-venom/1639174465?i=1639174482&uo=4)；封面來源：https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/72/48/88/72488832-558c-fcba-4aa0-03d88dc79eb3/22UMGIM87808.rgb.jpg/600x600bb.jpg
- AESPA — Next Level / Next Level - Single: [images/artists/works/aespa-1.jpg](https://music.apple.com/us/album/next-level/1567326687?i=1567326688&uo=4)；封面來源：https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/60/8d/ac/608dacc2-d6d6-462d-26f0-d693e4364751/artwork.jpg/600x600bb.jpg
- AESPA — Savage / Savage - The 1st Mini Album - EP: [images/artists/works/aespa-2.jpg](https://music.apple.com/us/album/savage/1587844523?i=1587844525&uo=4)；封面來源：https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/f7/85/51f7852b-7602-136b-ac15-8b3878260c64/4000aespa_M01_Savage_DC.jpg/600x600bb.jpg
- AESPA — Supernova / Armageddon - The 1st Album: [images/artists/works/aespa-3.jpg](https://music.apple.com/us/album/supernova/1773694541?i=1773694544&uo=4)；封面來源：https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/50/7e/e0/507ee09f-ccfd-1e3c-af90-ca5e92b1221b/00888735949869_Cover.jpg/600x600bb.jpg
- SEVENTEEN — Darl+ing / Darl+Ing - Single: [images/artists/works/seventeen-1.jpg](https://music.apple.com/us/album/darl-ing/1618314646?i=1618314654&uo=4)；封面來源：https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9f/26/fa/9f26fae1-c93e-0d47-a0a6-b8543e2a28aa/192641997679_Cover.jpg/600x600bb.jpg
- SEVENTEEN — Super / FML: [images/artists/works/seventeen-2.jpg](https://music.apple.com/us/album/super/1681324004?i=1681324047&uo=4)；封面來源：https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d1/66/eb/d166eb7e-7210-b3ff-be39-638cd37bfc89/196922401282_Cover.jpg/600x600bb.jpg
- SEVENTEEN — God of Music / SEVENTEENTH HEAVEN: [images/artists/works/seventeen-3.jpg](https://music.apple.com/us/album/god-of-music/1711288571?i=1711288969&uo=4)；封面來源：https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e3/76/df/e376df28-c05b-00fd-72de-9d42377a306b/196922628580_Cover.jpg/600x600bb.jpg


## 2026-10-13 各區圖片調整

新增七張品牌／旅遊概念圖，由內建 image_gen 生成；實際使用 WebP 版本，PNG 原圖保留。這些是形象素材，並非實際店家照片或藝人到訪證據。生成提示記錄於 IMAGE_PROMPTS.md。

藝人主圖／成員小圖採用官方網站公開宣傳素材。本地設計預覽使用；官方公開展示不等同商業使用授權。主圖保留所有成員，不以 AI 修改臉部。

- `images/artists/editorial/twice-concept-1.webp`：[twice 官方來源](https://twice.jype.com/gallery?PgIndex=2)；原始圖片：https://d1meds70430yck.cloudfront.net/artist/twice/a4534cfbde734c45866319a221425b60-10_%E1%84%83%E1%85%A1%E1%86%AB%E1%84%8E%E1%85%A6_%E1%84%8F%E1%85%A5%E1%86%AB%E1%84%89%E1%85%A6%E1%86%B8%202_120251010024134444.jpg
- `images/artists/editorial/blackpink-official.webp`：[blackpink 官方來源](https://ygfamily.com/en/artists/blackpink/profile)；原始圖片：https://ygfamily.com/contents/images/2026/02/profile%282560x1480%29.jpg
- `images/artists/editorial/seventeen-official.webp`：[seventeen 官方來源](https://www.seventeen-17.jp/pages/profile)；原始圖片：https://s3-ap-northeast-1.amazonaws.com/pf-web/fanclubs/15/assets/17/images/profile/main.jpg?20250526180009
- `images/artists/editorial/bts-official.webp`：[bts-official.jpg 官方來源](https://bts.ibighit.com/eng/profile/)；原始圖片：https://bts.ibighit.com/images/profile/proof/member/bts-pc.jpg
- `images/artists/editorial/bts-avatar.webp`：[bts-avatar.jpg 官方來源](https://bts.ibighit.com/eng/profile/)；原始圖片：https://bts.ibighit.com/images/profile/proof/member/member-rm.jpg
- `images/artists/editorial/twice-avatar.webp`：[twice-avatar.jpg 官方來源](https://www.twicejapan.com/feature/profile?lang=en)；原始圖片：https://www.twicejapan.com/static/twice/cmn/artist/202507/ph_01nayeon_7815696ecbf1c96e6894b779456d330e.jpg
- `images/artists/editorial/blackpink-avatar.webp`：[blackpink-avatar.jpg 官方來源](https://ygfamily.com/en/artists/blackpink/profile)；原始圖片：https://ygfamily.com/contents/images/2026/02/JENNIE.jpg
- `images/artists/editorial/seventeen-avatar.webp`：[seventeen-avatar.jpg 官方來源](https://www.seventeen-17.jp/pages/profile)；原始圖片：https://s3-ap-northeast-1.amazonaws.com/pf-web/fanclubs/15/assets/17/images/profile/scoups_s.jpg
- `images/artists/editorial/aespa-official.webp`：[aespa-official.jpg 官方來源](https://www.aespa.com/)；原始圖片：https://www.aespa.com/assets/wda/slides/0_aespa/0507/(1)WDA-aespa.jpg
- `images/artists/editorial/aespa-avatar.webp`：[aespa-avatar.jpg 官方來源](https://www.aespa.com/)；原始圖片：https://www.aespa.com/assets/wda/slides/4_karina/0507/(1)WDA-Karina.jpg
# 2026-10-14 — Current homepage assets

- New hero: `images/banner/journal-night.png`, generated with the built-in image_gen tool from the supplied website composition reference. Final prompt is recorded in `IMAGE_PROMPTS.md`.
- About: existing `images/about/kpop-soft-listening.png` and `images/routes/hangang-landscape.webp`. The homepage now loads a WebP copy of the listening image.
- Routes: existing four `images/routes/*-landscape.webp` concept photographs.
- Artists: existing official BLACKPINK, BTS, aespa and SEVENTEEN publicity images in `images/artists/editorial/`. Earlier source links are retained below. Complete group images are displayed without cropping members.
- Journal: existing generated `images/journal/seoul-record-shop.webp`.

## Homepage refinement — 2026-10-14

- `images/banner/journal-night.webp` and `images/about/kpop-soft-listening.webp` are format/compression copies of the existing PNGs, with unchanged dimensions and composition. Originals retained.
- Artist cards retain existing BLACKPINK and aespa editorial photos and use existing `images/artists/bts.jpg` and `images/artists/seventeen.jpg` for closer group portraits. CSS grayscale provides visual consistency without modifying the original photographs; contain fitting preserves complete group images.
- Footer: existing Han River landscape and brand Logo.

The previous homepage code, previews and dependencies are archived outside the project in `startown-before-redesign-2026-10-14.zip`. Its images remain in the project as a reusable asset library. Earlier implementation descriptions below are historical asset notes; the current homepage has no Slick, jQuery or GSAP dependency.

---



## Official App Store badge — 2026-10-15

- Local file: `images/app-store.svg`.
- Source: https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg
- Official guidelines: https://developer.apple.com/app-store/marketing/guidelines/
- Black English download badge, original SVG retained unchanged. Displayed at 56px high with 14px clear space; no recoloring, cropping, animation or custom badge typography. App Store destination remains `#` pending the real app URL.


## Actual APP screenshot — 2026-10-15

- `images/about/app-map.jpg`: user-provided `C:/Users/03307148140941/Desktop/S__24551431.jpg`, copied unchanged under a short English filename.
- Shows the app search for Jung Kook (BTS) and a mapped place. Displayed at its original 869 × 1884 aspect ratio, without cropping, preserving all screenshot content and map attribution.

## Place detail — 2026-10-15

- The initial `place.html` gallery reused three different concept spaces. It has been replaced with one six-photo cafe concept album: `images/routes/seongsu-landscape.webp` plus `images/places/cafe-room.webp`, `cafe-coffee.webp`, `cafe-window.webp`, `cafe-records.webp` and `cafe-side.webp`. The five new images were generated with built-in image_gen using the existing cafe exterior as their continuity reference. They are AI illustrations of a fictional place and do not establish a real venue or an artist visit. Original generated PNGs are retained beside the WebP encodings; source paths and final prompts are recorded in `IMAGE_PROMPTS.md`.
- `images/routes/seongsu-editorial.webp` is a WebP encoding of the complete existing 1086 × 1448 PNG, without changing its dimensions or composition. Original retained; encoded at quality 85 (approximately 273 KB instead of 2.74 MB).
- Related cards reuse the listing's existing cafe, Han River and Yeonnam images; no new remote images or publicity photos were downloaded for this page.

## Artist listing — checked 2026-10-15

The new `artists.html` uses the following real photographs, with the file-page license and requested author attribution checked individually. These are separate from the official publicity assets noted above; a publicly available official photo is not automatically licensed for reuse. No AI faces or fictional artist identities are used in this page. The earlier AI design mockup is a layout reference only.

| Local file | Author / original file page | License |
| --- | --- | --- |
| `images/artists/blackpink.jpg` | TV10 (티비텐) — [Blackpink Pink Carpet Event 3.jpg](https://commons.wikimedia.org/wiki/File:Blackpink_Pink_Carpet_Event_3.jpg) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |
| `images/artists/jung-kook.png` | TV10 — [Jung Kook of BTS, February 12, 2026 (2).png](https://commons.wikimedia.org/wiki/File:Jung_Kook_of_BTS,_February_12,_2026_(2).png) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| `images/artists/aespa.jpg` | 10Asia — [Aespa 2024 MMA 2.jpg](https://commons.wikimedia.org/wiki/File:Aespa_2024_MMA_2.jpg) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |
| `images/artists/iu.jpg` | Yoon Min-hoo — [IU on 25 October 2016 07.jpg](https://commons.wikimedia.org/wiki/File:IU_on_25_October_2016_07.jpg) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| `images/artists/bts-color.jpg` | Dispatch — [BTS on the Billboard Music Awards red carpet, 1 May 2019.jpg](https://commons.wikimedia.org/wiki/File:BTS_on_the_Billboard_Music_Awards_red_carpet,_1_May_2019.jpg) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |
| `images/artists/ningning.jpg` | David Lee — [NINGNING (54295363093).jpg](https://commons.wikimedia.org/wiki/File:NINGNING_(54295363093).jpg) | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) |
| `images/artists/twice.png` | On the street — [TWICEVat Tour Ready to Be 05 2023.png](https://commons.wikimedia.org/wiki/File:TWICEVat_Tour_%22Ready_to_Be%22_05_2023.png) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |
| `images/artists/red-velvet.jpg` | MonkeyJunior — [Red Velvet at Asia Artist Awards on November 26, 2019.jpg](https://commons.wikimedia.org/wiki/File:Red_Velvet_at_Asia_Artist_Awards_on_November_26,_2019.jpg) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |

IU and Jung Kook were newly downloaded from the original-file links on their Commons pages; other files reuse the existing local copies. All source bitmaps are retained without overwriting or AI alteration. Page presentation retains source colors and uses 4:3 frames with cover fitting for every photo. Scaling and display cropping are disclosed beside each photo. Cards disclose those display changes alongside separate license and original file-page links. Source pages may themselves contain historical crops/screenshots; `data/artist-photos.json` records those notes, capture dates, original publisher URLs and the check date.

CC BY attribution requirements are applied to the photographs only. They do not imply agency authorization, artist endorsement or a model release. The listing is editorial artist information, with no merchandise, sponsorship claim or advertising use of a person's likeness. Any later promotional use needs a separate rights assessment. References: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) and [Commons reuse guidance](https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia).

The intrinsically black-and-white BTS image was replaced by the downloaded color image `images/artists/bts-color.jpg`; the old `bts.jpg` is retained and other pages are unchanged. The replacement source records an original CC BY 3.0 license reviewed on 2020-01-01, plus a later license-change notice. That historical license/review information is retained in the photo metadata.

## Homepage color photos — 2026-10-16

The homepage artist carousel no longer applies CSS grayscale. Its intrinsically monochrome BTS and aespa images were replaced by `images/artists/bts-color.jpg` (Dispatch, CC BY 3.0) and `images/artists/aespa.jpg` (10Asia, CC BY 3.0), using the individually checked sources recorded in the artist-listing table above. The carousel includes a small expandable attribution block for those two replacements, with author names, license links, original file-page links and scaling/cropping disclosure. The homepage's existing 3:2 cover frame, card structure and other photo choices are preserved; this update does not assert reuse permission for unrelated official publicity assets.

### Complete homepage artist credits — 2026-10-16

The initial two-photo credits block was incomplete and is superseded by 照片來源與授權 covering all four displayed artist images. BLACKPINK now uses the already checked `images/artists/blackpink.jpg` (TV10, CC BY 3.0) rather than the official publicity WebP without confirmed reuse permission. BTS and aespa retain the checked CC BY files above. `images/artists/seventeen.jpg` was checked against [Seventeen Carat Land 24.jpg](https://commons.wikimedia.org/wiki/File:Seventeen_Carat_Land_24.jpg): author Seventeen, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), original publisher [YouTube](https://www.youtube.com/watch?v=XP9oYUc5sIM), source-page date 2025-01-24 and recorded license review 2026-02-22. The local 960×579 file matches the source composition. All four entries have corresponding author names, license links, file-page source links and proportional scaling/display-cropping disclosure. No unrelated original asset is deleted.

## Artist detail member portraits — checked 2026-10-16

`artist.html` uses the existing credited BLACKPINK group photo and four separately checked real member portraits. Original downloads are retained in `images/artists/members/`; same-name WebP copies are proportionally resized to a maximum 960px width for display. No AI faces, facial edits or recoloring are used. The 4:3 cover crop, resizing and conversion are disclosed in the member section's expandable credits. Machine-readable source records are in `data/member-photos.json`.

| Local WebP | Author / original file page | License |
| --- | --- | --- |
| `jisoo.webp` | K-POPIT 케이팝잇 — [20240226 Kim Jisoo 김지수 02.jpg](https://commons.wikimedia.org/wiki/File:20240226_Kim_Jisoo_%EA%B9%80%EC%A7%80%EC%88%98_02.jpg) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |
| `jennie.webp` | 티비텐 — [Blackpink's Jennie in Chanel Coco Crush, July 3, 2024 (2).png](https://commons.wikimedia.org/wiki/File:Blackpink%27s_Jennie_in_Chanel_Coco_Crush,_July_3,_2024_(2).png) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |
| `rose.webp` | TV10 — [Blackpink Rosé Rimowa 1.jpg](https://commons.wikimedia.org/wiki/File:Blackpink_Ros%C3%A9_Rimowa_1.jpg) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |
| `lisa.webp` | K-POPIT 케이팝잇 (requested attribution on file page; source uploader lists 티비텐) — [20240314 Lisa Manoban 12.jpg](https://commons.wikimedia.org/wiki/File:20240314_Lisa_Manoban_12.jpg) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |

The group/member names were checked against [YG's BLACKPINK profile](https://ygfamily.com/en/artists/blackpink/profile); its publicity images were not copied. Page copy is original short editorial text. Related venue/article photos reuse the site's existing illustrative assets and the credited group photo. The venue-to-artist and article relationships are explicitly fictional layout examples, not actual visit evidence. No source credit implies artist endorsement.


## Homepage photo resolution and presentation — checked 2026-10-19

Homepage-specific WebP files now live in `images/home/artists/`. BLACKPINK (2398×1516), aespa (2349×1272), and SEVENTEEN (1107×668) were downloaded from the original-file links on the same individually checked Commons pages credited above. Original downloads are retained in `images/home/source/artists/`. BTS reuses the existing 1920×1080 credited Dispatch source. These are the same photographs, not newly generated portraits or newly selected publicity images.

Display copies are proportionally resized to at most 1600px width and encoded as WebP at quality 90: BLACKPINK 1600×1012, BTS 1600×900, aespa 1600×866, SEVENTEEN 1107×668. Existing listing/detail image files are unchanged. The homepage applies `saturate(.85) contrast(.98) brightness(1.02)` through CSS to gently harmonize the color photographs; no facial retouching or background replacement is applied. All four homepage credits disclose resizing, WebP conversion, layout cropping and slight color/brightness adjustments, retaining authors, original file pages and CC BY 3.0 license links.
# Homepage hero — 2026-10-22

`images/home/banner.jpg` is an original AI-generated K-pop fashion atmosphere image created with the built-in imagegen tool. The fictional adult model is not identified as any real artist. The supplied `228.jpg` guided mood and composition only; its logos, UI and text were not copied. The generated original is preserved at `images/home/source/banner.png` (1942×809). The display JPEG has the same dimensions and composition, encoded at quality 92 without retouching. Final prompt and generation source are recorded in `images/home/PROMPTS.md`. Existing real-artist photographs and their attribution/license records remain unchanged.

