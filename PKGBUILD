# Maintainer: Enmanuel Moreira <enmanuelmoreira@gmail.com>

pkgname=terramate
pkgver=0.1.12
pkgrel=1
pkgdesc="Terramate is a tool for managing multiple Terraform stacks that comes with support for change detection and code generation."
arch=('x86_64')
url="https://github.com/mineiros-io/terramate"
conflicts=('terramate-bin')
provides=('terramate')
license=('Apache-2')
makedepends=('go>=1.18' 'git' 'gzip' 'tar' 'gcc')
source=("https://github.com/mineiros-io/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('53148bf4c130b8e3269823afd419a89e07a9345f0aaa187b172c2b84dda4dabb')

build() {
	cd "${pkgname}-${pkgver}"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -buildvcs=false -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
  BUILD_DATE=$(date '+%Y-%m-%d %H:%M:%S')
  go build -o build/${pkgname} -ldflags="-X 'main.VERSION=${pkgver}' -X 'main.buildDate=${BUILD_DATE}'" ./cmd/terramate/
}

package() {
  cd "${srcdir}"/"${pkgname}-${pkgver}"
  install -Dm755 build/${pkgname} ${pkgdir}/usr/bin/${pkgname}
  install -Dm644 README.md ${pkgdir}/usr/share/doc/${pkgname}/README.md
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"
  cp -rv docs/* ${pkgdir}/usr/share/doc/${pkgname}/
}
