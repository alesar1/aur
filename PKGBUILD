# Maintainer: Dct Mei <dctxmei@gmail.com>

pkgname=geph-client-git
_pkgname=geph-client
pkgver=r168.c66c8c5
pkgrel=1
pkgdesc='A command-line Geph client'
arch=('x86_64')
url="https://github.com/geph-official/geph2"
license=('GPL3')
groups=('geph2-git')
depends=('glibc')
makedepends=('go-pie' 'git')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("git+$url.git"
        "geph-client.service")
sha512sums=('SKIP'
            '925109cf7392f2bce01d59bc0bd6e2d7102670b5438fee5962c11b29646722c3bb905db439ba244310e8333465791e5eac979c3c2ead1536fe40d3dbb920333d')

pkgver() {
    cd geph2
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "geph2/cmd/$_pkgname"
    go build
}

package() {
    cd "geph2/cmd/$_pkgname"
    install -Dm 755 $_pkgname "$pkgdir/usr/bin/$_pkgname"

    install -d "$pkgdir/etc/geph2"
    "$pkgdir/usr/bin/$_pkgname" -dumpflags > "$pkgdir/etc/geph2/$_pkgname.ini"

    install -Dm 644 "$srcdir/$_pkgname.service" "$pkgdir/usr/lib/systemd/system/$_pkgname.service"
    sed 's/geph-client.ini/%i.ini/' "$srcdir/$_pkgname.service" -i
    install -Dm 644 "$srcdir/$_pkgname.service" "$pkgdir/usr/lib/systemd/system/$_pkgname@.service"
}
