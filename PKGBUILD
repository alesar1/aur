# Maintainer: Giovanni 'ItachiSan' Santini <giovannisantini93@yahoo.it>
# Contributor: Jochen Schalanda <jochen+aur@schalanda.name>
# Contributor: Charles Pigott <charlespigott@googlemail.com>
# Contributor: André Klitzing <aklitzing@online.de>
# Contributor: JD Horelick <jdhore1@gmail.com>

pkgname=devscripts
pkgver=2.19.6
pkgrel=1
pkgdesc="Scripts to make the life of a Debian Package maintainer easier"
arch=('i686' 'x86_64')
url="https://tracker.debian.org/pkg/devscripts"
license=('GPL2')
depends=('dpkg' 'wget' 'sed' 'perl' 'debianutils' 'debhelper' 'perl-timedate'
         'sensible-utils')
makedepends=(
    'docbook-xsl'
    'bash-completion'
    'help2man'
    'git'
    'perl-file-desktopentry'
    'perl-file-homedir'
    'perl-file-basedir'
    'perl-git-wrapper'
    'perl-libwww'
    'perl-list-compare'
    'perl-parse-debcontrol'
    'perl-timedate'
    'po4a'
    'python-setuptools'
)
options=('!makeflags')
source=(
    "${pkgname}::git+https://salsa.debian.org/debian/devscripts.git#tag=v${pkgver}"
    fixes.patch
)
sha256sums=('SKIP'
            'e5fef21e1d8aee3128c6499078bc2f38e8f80189b30882df817637388f1e7717')

prepare(){
    cd "$pkgname"
    patch -p1 -i "$srcdir/fixes.patch"
}

build() {
    cd "$pkgname"
    make
}

package() {
    cd "$pkgname"
    make DESTDIR="$pkgdir" install

    # Create dch symlink to debchange
    ln -s /usr/bin/debchange "$pkgdir/usr/bin/dch"

    # bts completion is present already in the official package
    rm "$pkgdir/usr/share/bash-completion/completions/bts"
}
