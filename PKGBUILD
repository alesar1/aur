# Maintainer: Dct Mei <dctxmei@gmail.com>

pkgname=gephgui-git
_pkgname=gephgui
pkgver=r61.1b47287
pkgrel=1
pkgdesc="Geph connects you with the censorship-free Internet, even when nothing else works"
arch=('x86_64')
url="https://github.com/geph-official/gephgui"
license=('custom')
depends=('gdk-pixbuf2' 'geph-client-git')
makedepends=('npm' 'git')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("git+https://github.com/geph-official/gephgui.git"
        "$_pkgname.desktop")
sha512sums=('SKIP'
            '94e30f293a7c7ac232bdcfb9549bab8d4aeacd91a48e249b37a996b3876776760650ff3fe7684029d544dd6806f32e72476bfca2cb9ec91d2bea7cd24bc162d0')

build() {
    cd "$_pkgname"
    npm install --devDependencies
    npm run electron:lin64
}

package() {
    cd "$_pkgname"
    install -Dm 644 "icons/512x512.png" "$pkgdir/usr/share/icons/hicolor/512x512/apps/$_pkgname.png"
    install -Dm 644 "$srcdir/$_pkgname.desktop" "$pkgdir/usr/share/applications/$_pkgname.desktop"
    install -d "$pkgdir/opt"
    cp -r "dist/linux-unpacked" "$pkgdir/opt/$_pkgname"
    ln -s "/usr/bin/geph-client" "$pkgdir/opt/$_pkgname/resources/app/binaries/linux-x64/geph-client"
    install -d "$pkgdir/usr/bin"
    ln -s "/opt/$_pkgname/$_pkgname" "$pkgdir/usr/bin/$_pkgname"
}
