# Maintainer: xiretza <xiretza+aur@gmail.com>
# Maintainer: Rod Kay <rodakay5 at gmail dot com>

pkgname=gnatcoll-xref
epoch=1
pkgver=22.0.0
pkgrel=1
_repo_name=gnatcoll-db

pkgdesc='GNAT Components Collection - Tool to support parsing *.ali and *.gli files.'
url='https://github.com/AdaCore/gnatcoll-db/'
arch=('i686' 'x86_64')
license=('GPL3' 'custom')

depends=('gnatcoll-iconv' 'gnatcoll-sqlite')
makedepends=('gprbuild')

source=("https://github.com/AdaCore/gnatcoll-db/archive/refs/tags/v22.0.0.tar.gz")
sha256sums=('8d29e2047adac2de8bc20ae50d12fe6759428197079082d246d7f1cd480d380f')

build()
{
    cd "$srcdir/$_repo_name-$pkgver/xref"

    make setup BUILD=PROD prefix=/usr
    make -j1 GPRBUILD_OPTIONS="-R -cargs $CFLAGS -largs $LDFLAGS -gargs"
}

package()
{
    cd "$srcdir/$_repo_name-$pkgver/xref"

    # Make one install at a time to avoid GPRinstall reading/writing to
    # the same installed project files at the same time.
    make prefix="$pkgdir/usr" install -j1

    # Install the license.
    install -D -m644     \
       "../COPYING3"        \
       "$pkgdir/usr/share/licenses/$pkgname/COPYING3"

    # Install the custom license.
    install -D -m644     \
       "../COPYING.RUNTIME" \
       "$pkgdir/usr/share/licenses/$pkgname/COPYING.RUNTIME"
}
