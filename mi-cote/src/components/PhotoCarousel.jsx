import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PhotoCarousel.css';

const PhotoCarousel = () => {
  const photos = [
    'https://lh3.googleusercontent.com/u/1/drive-viewer/AK7aPaBh62vX4O5dFnqNG1IWFOan0VLgIKg6lyQSdG7_citA68ji6hFHLoO-Zsdcfy4t4KWxe_ZuRyKIKZycv-YyBB0_Z0OQ4Q=w1920-h995',
    'https://lh3.googleusercontent.com/fife/AK0iWDx5rohg_u6Ef43LMyMjVzX9KXKzQthk8SdOzc-P1cEn4dkqfwns6xdbZvubmz-6AOVsYK5HJHGvB6T-6U5-2QyYsKeWZueES4tm9rq4G5wt0h-W0bHuaYBd6VdkCs3AIvI2NwPG6Lyw4SS-mOFsOQ3JR7hpjmpDehCaiEtdPzek0AXqdn6rP6O2rucBCyOEYkk1b_l4Q6GLPUeV90YFZSvDQSuHa8R4DYZVq7mf_UAJjZMMWWcsP9Tar03GHpGquxuGf19t6dwFr46bFZjHM3SnYqR1QBYxur1WHbkgnfHLHEmpsJwmXhqIPCeJWixrWPftvlxw9hNSftNQXxUAnitTBhskwz34e1TXTQiqJCpNus5sZPyqP-fRf5tg3BRP_G9xGHdNpmKvRRkFWS9wRI2BFC6OMhe4xGqBhH3pmkcXOV6OuzO3o5fMV9xUG53eOESsYS_9_1iGnENm9I6eTPv6SD3gsUTCJiZYgL-oEOceymGdv8aMhtfNpyXpEixQZ-qGNR30NgOGR6fp4hqb-7dIEBpWq7lveYlGjf2Xw3P4qC8QpEbJKe-5PKaSZhyayz2l4Oidsfqkx8BAI7ljkjx_vztL5Xdgfwgs4z2dZLVwv0hKxB4AGt4la4OHne4Dj0P-7TKvZ_NztyExTfTi_FovGgHCYjrmyJVirthCg88QwQIpa_VKhm9rGaFAkCAStIrUtfL3VZdSFHwOCkoHW87rBKKMHozX8BD3GpcfVlTZHMK0dcH5DsQ80eugMDJoFVaW_6ZAOZ_c5hNPotHBBY06pBKrmFLdyLgDg1Fs7mUXYW_ZAX5HgFHtKriJTDLvV1yGyadi94McY9enpAQmsaliswo2Vhfjejz699-p-YQwi-gy2E6KV5JAFQNyVsRnlwmfBkIAFypptatMnQzsgbILTZrlDs5uK2H3oq-uDOLnffISHvr28G44d4zcfyJ8_Ke81XHIpRM5m5fsWZCJ-SoxdywXHLSQ1AVgzA98gyviFAGXTKtrpl13EM2xTBz7R_rP4oE4gmSeLmT0EHj_akBst68T4ZqWltNYAcnhb8NQlVqbvCsYKKpyN7Z7bgWV-gYA5HrxpZ4FusX6nDsVU_d92XwQd0Qn3ljXAj000pUx9Hm7vWI2AM-YgtCw13fBFzs9wTt3xyDLSTXQ6Ek_nSllih_mPZf4Jmn3pZadv7la_ogITU00QaRWkpS3KmelJ4UqGrF3x7exOdmDOQtvSnByLf5ToNBsm8zBWRmPN4JOkygqxw-_sVeu9IuCOxw3ZKo0Nv_Ya3oBBDPUn0tFMdF3WVfyZa0cr96pcNpwRFissTHr9SJiLvq8rTdvSm-3AlWlWfDy7BTbHtgYj471_m2G2oOTyilwwpfkYqdPUtCPLmoyWU5wpYy76H2oS4IkfMicKRiHHh2VjLumqnMfwTkUYtagCj-M4jy3QS6Vb-rs5faO4uyuBh3cW9DeFUL1IzNWF-pHJHtOjs3MPhWyYW1l5crPIMDabn-ERpIux5RJKaOkCnWqUgoumX2NKjFos8ZDkjtDko5Xi_lQkkdXDLAQxpyGve0LshzrFPke_gQ2sTFJCT8JA5iWSh0sOA=w1013-h895'
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {photos.map((photo, index) => (
        <div key={index}>
          <img className='photo' src={photo} alt={`Photo ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default PhotoCarousel;
