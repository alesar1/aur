# Maintainer: Rod Kay   <charlie5 on #ada at freenode.net>

pkgname=asis
pkgver=2019
pkgrel=1
pkgdesc="Allows Ada programs access to the syntactic and semantic structure of source code. Also provides extra tools such as gnatpp."

arch=(i686 x86_64)
url=http://libre.adacore.com/tools
license=(GPL)
groups=(gcc-ada)

depends=('gcc-ada' 'gnat_util' 'gnatcoll-core')
makedepends=('gprbuild')

source=('http://mirrors.cdn.adacore.com/art/5cdf849031e87aa2cdf16b10')
sha1sums=('52c69e7295dc301ce670334f8150193ecbec580d')


build() 
{
    cd $srcdir/asis-2019-20190517-18AB5-src

    make all
    make tools
}


package() 
{
    cd $srcdir/asis-2019-20190517-18AB5-src

    PREFIX=/usr  make install       prefix=${pkgdir}/usr
    PREFIX=/usr  make install-tools prefix=${pkgdir}/usr

    # Rid tools superseded by libadalang-tools.
    #
    rm ${pkgdir}/usr/bin/gnatmetric
    rm ${pkgdir}/usr/bin/gnatpp
    rm ${pkgdir}/usr/bin/gnatstub
}
