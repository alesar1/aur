# Maintainer:
# Contributor: Sam Whited <sam@samwhited.com>
# Contributor: Brian Clemens <brian@tiuxo.com>
# Contributor: Přemysl Janouch <p.janouch@gmail.com>

pkgname=hugo-git
_pkgname=hugo
pkgver=v0.54.0.r1.g5383fe458c0c
pkgrel=2
pkgdesc="Fast and Flexible Static Site Generator in Go"
arch=('x86_64')
url="https://gohugo.io/"
conflicts=('hugo')
provides=('hugo')
options=('!strip')
license=('Apache')
depends=('gcc-libs')
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
  # Respect LDFLAGS
  EXTLDFLAGS=${LDFLAGS}
  LDFLAGS="-X github.com/gohugoio/hugo/hugolib.CommitHash=`git rev-parse --short HEAD`"
  GOCACHE="${srcdir}/cache" go build --tags extended \
    -ldflags "-linkmode external -extldflags '${EXTLDFLAGS}' -s -w ${LDFLAGS}"

  ./hugo gen man
}

package() {
  install -Dm755 "${srcdir}/${_pkgname}/${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"
  install -Dm644 "${srcdir}/${_pkgname}"/LICENSE     "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
  install -Dm644 "${srcdir}/${_pkgname}"/man/*.1  -t "${pkgdir}/usr/share/man/man1/"
}

# vim: ts=2 sw=2 et:
