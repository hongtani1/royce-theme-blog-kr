// 카카오 SDK 초기화
Kakao.init('ef43ad5f94d27bb87810899097e82c0d');
Kakao.isInitialized();

// 카톡 공유 실행 함수
var kakaoShare = function(){
  dataLayer.push({
    'event': 'kakao_share'
  });
  var title = document.querySelector('.post-title').textContent;
  var desc = document.querySelector('post-content').textContent;
  var imgUrl = document.querySelector('.post-thumbnail').src;

  Kakao.Link.sendDefault({
objectType: 'feed',
content: {
  title: title,
  description: desc,
  imageUrl:
    imgUrl,
  link: {
    mobileWebUrl: 'https://hongtani.com',
  },
},
buttons:
  {
    title: '게시글 보기',
    link: {
      mobileWebUrl: 'https://hongtani.com',
      webUrl: 'https://hongtani.com',
    },
  },
});
}

document.querySelector('#share_btn').addEventListener('click', kakaoShare);
