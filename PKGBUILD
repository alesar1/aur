# Maintainer: Dct Mei <dctxmei@gmail.com>

pkgname=gephgui-git
_pkgname=gephgui
pkgver=r61.1b47287
pkgrel=1.1
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
            '0f57047902f09168200e3e1366f5350e0be5d1d07843d8b6b887758a8c0b058a90cc022bfd0bd1855fff2ab02264b034b7ac57f9a6163bbb458bd363eb44e8e0')

pkgver() {
    cd "$_pkgname"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "$_pkgname"
    npm install --devDependencies
    npm run electron:lin64
}

package() {
    cd "$_pkgname"
    install -Dm 644 icons/512x512.png "$pkgdir/usr/share/icons/hicolor/512x512/apps/$_pkgname.png"
    install -Dm 644 "$srcdir/$_pkgname.desktop" "$pkgdir/usr/share/applications/$_pkgname.desktop"
    install -d "$pkgdir/usr/lib"
    cp -r dist/linux-unpacked "$pkgdir/usr/lib/$_pkgname"
    ln -s /usr/bin/geph-client "$pkgdir/usr/lib/$_pkgname/resources/app/binaries/linux-x64/geph-client"
    install -d "$pkgdir/usr/bin"
    ln -s "/usr/lib/$_pkgname/$_pkgname" "$pkgdir/usr/bin/$_pkgname"
}
