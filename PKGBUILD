# Maintainer:  Alad Wenter <alad (at) archlinux.info>
# Contributor: Jochen Schalanda <jochen+aur (at) schalanda.name>
# Contributor: C. Dominik Bódi <dominik.bodi@gmx.de>
# Contributor: Pierre Carrier <pierre@spotify.com>
# Contributor: Thomas Dziedzic <gostrc (at) gmail>
# Contributor: Chris Giles <Chris.G.27 (at) Gmail.com>
# Contributor: seblu <seblu+arch (at) seblu.net>
# Contributor: squiddo <squiddo (at) intheocean.net>
# Contributor: dront78 <dront78 (at) gmail.com>
# Contributor: hugelgupf <ckoch (at) cs.nmt.edu>

pkgname=dpkg
pkgver=1.18.25
_commit=2cd2714b7adb1fde16362f1117dbcd7d894183e0
pkgrel=1
pkgdesc="The Debian Package Manager.  Don't use it instead of Arch's 'pacman'."
arch=('i686' 'x86_64')
url="https://tracker.debian.org/pkg/dpkg"
license=('GPL')
options=('emptydirs')
depends=('xz' 'zlib' 'bzip2' 'perl')
makedepends=('perl-io-string' 'perl-timedate' 'git')
checkdepends=('perl-io-string' 'perl-test-pod')
source=("$pkgname::git+https://anonscm.debian.org/git/dpkg/dpkg.git#commit=$_commit")
sha256sums=('SKIP')

pkgver() {
    cd "$pkgname"
    git describe --always | sed 's/^v//; s/-/./g'
}

prepare() {
    cd "$pkgname"
    autoreconf -f -i
}

check() {
    cd "$pkgname"
    #make check
}

build() {
    cd "$pkgname"
    ./configure --prefix=/usr \
        --sysconfdir=/etc \
        --localstatedir=/var \
        --sbindir=/usr/bin \
        --disable-start-stop-daemon
    make
}

package() {
    cd "$pkgname"
    make DESTDIR="$pkgdir" install

    install -d "$pkgdir/var/$pkgname"/updates/
    touch "$pkgdir/var/lib/$pkgname"/{status,available}
}
