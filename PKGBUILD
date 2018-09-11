# Maintainer: Rod Kay <charlie5 on #ada at freenode.net>

pkgname=gnatcoll-gnatinspect
pkgver=2018
pkgrel=2

pkgdesc='GNAT Components Collection - the gnatinspect tool.'
url='https://github.com/AdaCore/gnatcoll-db/'
arch=('i686' 'x86_64')
license=('GPL')

depends=('gnatcoll-readline>=2018' 'gnatcoll-xref>=2018')
makedepends=('gprbuild>=2018')

source=('http://mirrors.cdn.adacore.com/art/5b0ce9cbc7a4475263382be6')
sha1sums=('85c90002bb506e3e72e38d2e6604734402d23a32')

build()
{
    cd "$srcdir/gnatcoll-db-gpl-2018-src/gnatinspect"

    make setup BUILD=PROD prefix=/usr
    make -j1 GPRBUILD_OPTIONS=-R
}

package()
{
    cd "$srcdir/gnatcoll-db-gpl-2018-src/gnatinspect"

    # Make one install at a time to avoid GPRinstall reading/writing to
    # the same installed project files at the same time.
    make prefix="$pkgdir/usr" install -j1
}
