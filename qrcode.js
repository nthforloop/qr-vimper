// PLUGIN_INFO {{{
var PLUGIN_INFO = xml`
<VimperatorPlugin>
  <name>qrcode generatero</name>
  <description>Get a qr code for the url/clipboard</description>
  <version>2.1.2</version>
  <author mail="jamgade10@gmail.com" homepage="http://noting.com/nokturnalmortum/">anekos</author>
  <license>Please read the source code comments of this plugin</license>
  <detail lang='ja'><![CDATA[
    == Commands ==
      :qr
        open url for the generated qr code
  ]]></detail>
</VimperatorPlugin>`;
// }}}


(function () {
  function shorten (url, domain, command) {
    if (!url)
      url = buffer.URL;
      var requestUri = 'https://api.qrserver.com/v1/create-qr-code/?' +
          'size=200x200'+ '&' +
          'data=' + encodeURIComponent(url);
        liberator.open(requestUri, liberator.NEW_TAB );
  }

    commands.addUserCommand(
      ['qr'],
      'Make qrcode',
      function (args) {
        var url = args.literalArg ? util.stringToURLArray(args.literalArg)[0] : buffer.URL;
        shorten(url, '', '');
      }
    );
})();
