# Maintainer: Alad Wenter <alad@mailbox.org>
# Contributor: Sean Haugh <seanphaugh@gmail.com>
# Contributor: Chris Salzberg <chris@dejimata.com>
_pkgname=neomutt
pkgname=neomutt-git
pkgver=20171215.r144.gb7da81ad
pkgrel=2
pkgdesc='A version of mutt with added features - development branch'
url='http://www.neomutt.org/'
license=('GPL')
source=('git+https://github.com/neomutt/neomutt.git#branch=master')
sha256sums=('SKIP')
arch=('i686' 'x86_64')
depends=('notmuch-runtime' 'lua')
optdepends=('python: keybase.py')
makedepends=('git' 'gnupg' 'libxslt' 'docbook-xsl' 'lynx')
conflicts=('neomutt')
provides=('neomutt')

pkgver() {
    cd "$_pkgname"
    git describe --long --tags | sed 's/^neomutt-//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "$_pkgname"

    ./configure \
        --prefix=/usr \
        --sysconfdir=/etc \
        --libexecdir=/usr/lib \
        --gpgme \
        --enable-lua \
        --notmuch \
        --gss \
        --ssl \
        --sasl \
        --with-ui=ncurses \
        --with-idn=/usr \
        --gdbm
    make
}

package() {
    cd "$_pkgname"
    make DESTDIR="$pkgdir" install
}

# vim: ft=sh ts=4 sw=4 et
