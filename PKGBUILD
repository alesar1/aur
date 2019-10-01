# Maintainer: navigaid <navigaid@gmail.com>

pkgname=naiveproxy-git
_pkgname=naiveproxy
pkgdesc='Make a fortune quietly'
pkgver=77.0.3865.90.r33.7929e0850
pkgrel=1
arch=('any')
url='https://github.com/klzgrad/naiveproxy'
license=('BSD')
depends=('nspr' 'nss')
source=('git+https://github.com/klzgrad/naiveproxy.git'
	'build.sh')
makedepends=("clang" "lld" "ninja" "gn" "python2" "gcc" "llvm")
optdepends=("ccache: Speed up compilation")
backup=(etc/naiveproxy/config.json)
md5sums=('SKIP'
         '97aa54a097b10d2de82e026ba927e9e8')
provides=('naiveproxy')
conflicts=('naiveproxy' 'naiveproxy-bin')

pkgver(){
  cd ${srcdir}/${_pkgname}
  printf "%s.r%s.%s" "$(cat CHROMIUM_VERSION)" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build(){
  cd ${srcdir}/${_pkgname}/src
  ../../build.sh
}

package(){
  cd ${srcdir}/${_pkgname}
  install -Dm755 src/out/Release/naive ${pkgdir}/usr/bin/naiveproxy
  install -Dm644 src/config.json ${pkgdir}/etc/naiveproxy/config.json
  install -Dm644 README.md ${pkgdir}/usr/share/doc/naiveproxy/README.md
  install -Dm644 USAGE.txt ${pkgdir}/usr/share/doc/naiveproxy/USAGE.txt
  install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/naiveproxy/LICENSE
}
