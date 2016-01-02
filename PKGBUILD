# Maintainer: Vinson Chuong <vinsonchuong@gmail.com>
pkgname=bash-common-parse-options
pkgver=0.0.3
pkgrel=1
pkgdesc=An\ easier\ way\ to\ parse\ CLI\ options\ for\ Bash\ scripts
arch=(any)
url=https://github.com/vinsonchuong/bash-common-parse-options
license=(MIT)
makedepends=(clidoc)
checkdepends=(bats-git)
source=(https://github.com/vinsonchuong/bash-common-parse-options/archive/v0.0.3-1.tar.gz)
md5sums=('0fb2d6ee36044113ecddd36fb47af1b5')
build () 
{ 
    cd "${srcdir}/${pkgname}-${pkgver}-${pkgrel}";
    if [[ -d 'doc' ]]; then
        clidoc doc/*.md;
    fi
}
check () 
{ 
    cd "${srcdir}/${pkgname}-${pkgver}-${pkgrel}";
    if [[ -d 'spec' ]]; then
        bats spec;
    fi
}
package () 
{ 
    cd "${srcdir}/${pkgname}-${pkgver}-${pkgrel}";
    [ -d 'bin' ] && install -Dm755 -t "${pkgdir}/usr/bin" bin/*;
    [ -d 'help' ] && install -Dm644 -t "${pkgdir}/usr/share/${pkgname}/help" help/*;
    [ -f 'README.md' ] && install -Dm644 -t "${pkgdir}/usr/share/doc/${pkgname}" 'README.md';
    [ -d 'doc' ] && install -Dm644 -t "${pkgdir}/usr/share/doc/${pkgname}/doc" doc/*.md;
    [ -f 'LICENSE' ] && install -Dm644 -t "${pkgdir}/usr/share/licenses/${pkgname}" 'LICENSE';
    [ -d 'man' ] && install -Dm644 -t "${pkgdir}/usr/share/man/man1" man/*
}
