#Maintainer:xgdgsc<xgdgsc@gmail.com>

pkgname=electronic-wechat-bin
pkgver=2.2.0
pkgrel=1
pkgdesc="A better WeChat on macOS and Linux. Built with Electron. Maintained by kooritea"
url=https://github.com/kooritea/electronic-wechat
arch=(x86_64)
replaces=('electronic-wechat' 'electronic-wechat-git')
conflicts=('electronic-wechat' 'electronic-wechat-git')
depends=('gconf')
license=(MIT)


md5sums=('b3b3cede83e45bde5e09107461b92859'
         '5067d2ecdfa58d16affc950102cd36bd'
         'ffc9bdbcce89519b59f78d4bb50ea315')

if [[ $CARCH = i686 ]];then
  md5sums[0]='8556d6228b4bad238c63003e44c626cf'
  _arch=ia32
else
  _arch=x64
fi
source=("https://github.com/kooritea/electronic-wechat/releases/download/v$pkgver/electronic-wechat-linux-$_arch-$pkgver.zip"
"https://github.com/kooritea/electronic-wechat/raw/master/assets/icon.png"
"electronic-wechat.desktop")


package() {
    mkdir -p "${pkgdir}/opt/$pkgname"
    cp icon.png "${pkgdir}/opt/$pkgname/"

    install -dm755 "$pkgdir"/usr/share/applications
    cp electronic-wechat.desktop "$pkgdir"/usr/share/applications

    cd electronic-wechat-linux-$_arch
    install -dm755 "$pkgdir/opt/$pkgname/"
    mv * "$pkgdir/opt/$pkgname/"

    install -dm755 "$pkgdir"/usr/bin
    ln -s /opt/"$pkgname"/electronic-wechat "$pkgdir/usr/bin/electronic-wechat"

}
