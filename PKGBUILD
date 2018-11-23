# Maintainer: Sam Whited <sam@samwhited.com>
# Contributor: Brian Clemens <brian@tiuxo.com>
# Contributor: Přemysl Janouch <p.janouch@gmail.com>

pkgname=hugo-git
_pkgname=hugo
pkgver=v0.51.r20.ge82b2dc8c162
pkgrel=1
pkgdesc="Fast and Flexible Static Site Generator in Go"
arch=('x86_64')
url="https://gohugo.io/"
conflicts=('hugo')
provides=('hugo')
options=('!strip')
license=('Apache')
depends=('glibc')
makedepends=('go' 'git')
optdepends=('pygmentize: syntax-highlight code snippets')
source=('git+https://github.com/gohugoio/hugo.git')
sha256sums=('SKIP')

pkgver() {
  cd "${srcdir}/${_pkgname}"
  git describe --tags --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${srcdir}"/${_pkgname}
  go build --tags extended
}

package() {
  install -Dm755 "${srcdir}/${_pkgname}/${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"
  install -Dm644 "${srcdir}/${_pkgname}"/LICENSE "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
}
