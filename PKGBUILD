# Maintainer: Dct Mei <dctxmei@gmail.com>
# Maintainer: Steven Tang <xosdy.t@gmail.com>
# Maintainer: ohmyarch <ohmyarchlinux@protonmail.com>
# Maintainer: alienzj <alienchuj@gmail.com>

pkgname=gephgui4-git
_pkgname=gephgui4
_basename=gephgui
pkgver=r109.138ce4f
pkgrel=1
pkgdesc="Geph connects you with the censorship-free Internet, even when nothing else works"
arch=('x86_64')
url="https://github.com/geph-official/gephgui.git#branch=geph4-alpha"
license=('custom')
depends=('libxss' 'gdk-pixbuf2' 'geph4-binder-git' 'geph4-bridge-git' 'geph4-client-git' 'geph4-exit-git' 'geph4-vpn-helper-git')
makedepends=('npm' 'git')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("git+https://github.com/geph-official/gephgui.git#branch=geph4-alpha"
        "$_pkgname.desktop")
sha512sums=('SKIP'
            'a5ffba60e91d26910c70d3d591009a10a2428bec8ba55921de3043550cc69faf466574e195fae55f6d5e2db035aca7c72a10138c3cf171975b9ebc2cdb74340f')

pkgver() {
    cd "${srcdir}/${_basename}"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "${srcdir}/${_basename}"
    npm install --devDependencies
    npm run electron:lin64
}

package() {
    cd "${srcdir}/${_basename}"
    install -Dm 644 icons/512x512.png "$pkgdir/usr/share/icons/hicolor/512x512/apps/$_pkgname.png"
    install -Dm 644 "$srcdir/$_pkgname.desktop" "$pkgdir/usr/share/applications/$_pkgname.desktop"
    install -d "$pkgdir/usr/lib"
    cp -r dist/linux-unpacked "$pkgdir/usr/lib/$_pkgname"
    ln -s /usr/bin/geph4-client "$pkgdir/usr/lib/$_pkgname/resources/app/binaries/linux-x64/geph4-client"
    install -d "$pkgdir/usr/bin"
    ln -s "/usr/lib/$_pkgname/$_pkgname" "$pkgdir/usr/bin/$_pkgname"
}
