# Maintainer: Razon Yang <razonyang@gmail.com>
pkgname=wechat-devtool
pkgver=1.02.1910121
pkgrel=1
pkgdesc=微信开发者工具
url=https://github.com/razonyang/archlinux-wechat-devtool
license=('MIT')
arch=('any')
depends=(
    'wine'
)
source=(
    "https://github.com/cytle/wechat_web_devtools/archive/v$pkgver.tar.gz"
)
md5sums=(
    'ec022787e71f239af7550459704cec1a'
)
package() {
    # copy files to /opt
    mkdir -p "$pkgdir/opt"
    cp -r "$srcdir/wechat_web_devtools-$pkgver" "$pkgdir/opt/$pkgname"
    "$pkgdir/opt/$pkgname/bin/wxdt" install
    
    # desktop entry
    mkdir -p "$pkgdir/usr/share/applications"
    sed "s/path\/to/opt\/$pkgname/g" "$pkgdir/opt/$pkgname/desktop.example" > "$pkgdir/usr/share/applications/$pkgname.desktop"
}
