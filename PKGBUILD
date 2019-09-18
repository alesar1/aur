# Maintainer: Maël Kerbiriou <m431.kerbiriou@MountainView>
pkgname=naf-git
_pkgname=naf
pkgver=1.0.0.r86.ga1fbd4d
pkgrel=1
pkgdesc="Nucleotide Archival Format - Compressed file format for DNA/RNA/protein sequences"
arch=('i686' 'x86_64')
url="http://kirill-kryukov.com/study/naf/"
license=('custom')
depends=('glibc')
makedepends=('git' 'gcc' 'make')
replaces=('naf')
conflicts=('naf')
source=("git+https://github.com/KirillKryukov/naf.git#branch=develop"
        "git+https://github.com/facebook/zstd.git")
sha1sums=('SKIP' 'SKIP')

pkgver() {
  cd ${_pkgname}
  git describe --long --tags 2>/dev/null | sed 's/[^[:digit:]]*\(.\+\)-\([[:digit:]]\+\)-g\([[:xdigit:]]\{7\}\)/\1.r\2.g\3/;t;q1'
  [ ${PIPESTATUS[0]} -ne 0 ] && printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd ${srcdir}/${_pkgname}
  git submodule init
  git config submodule.zstd.url ${srcdir}/zstd
  git submodule update
}

build() {
    cd ${srcdir}/${_pkgname}
    make
}

package() {
    cd ${srcdir}/${_pkgname}
    make DESTDIR="${pkgdir}" prefix=/usr/ install
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/naf/LICENSE"
}
