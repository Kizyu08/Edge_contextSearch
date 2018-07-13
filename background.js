
//Edge の名前空間(browser) がなけれぱ chrome の名前空間を使用する

var browser = browser||chrome;



//コンテキストメニューに拡張のメニューを追加

browser.contextMenus.create({

  id: 'searchByGoogle',

  title: '"%s"をGoogleで検索', //%s は選択している文字列で置き換わる

  contexts: ['selection'], //選択しているときのみメニューに表示される

    onclick: (info, tab)=>{ //クリックされた際のアクション

		browser.tabs.create( {url: 'https://www.google.com/search?q=' + info.selectionText} );
  }

});